import React, { Component } from 'react';
import { View, PanResponder, Animated, Dimensions } from 'react-native';
import styles from '../../styles/components/Deck';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIP_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWAP_OUT_DURATION = 250;

class Deck extends Component {
    static defaultProps = {
        onSwipeRight: () => { },
        onSwipeLeft: () => { }
    }

    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIP_THRESHOLD) {
                    this.forceSwip('right');
                } else if (gesture.dx < -SWIP_THRESHOLD) {
                    this.forceSwip('left');
                } else {
                    this.resetPosition();
                }
            }
        });
        this.state = { panResponder, position, index: 0 }
    }

    forceSwip(direction) {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: { x, y: 0 },
            duration: SWAP_OUT_DURATION,
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction) {
        const { onSwipeRight, onSwipeLeft, data } = this.props;
        const item = data[this.state.index];
        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        this.state.position.setValue({ x: 0, y: 0 });
        this.setState({ index: this.state.index + 1 });
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0 },
        }).start();
    }

    getCardStyle() {
        const { position } = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg'],
        });
        return {
            ...this.state.position.getLayout(),
            transform: [{ rotate }],
        }
    }

    renderCards() {
        if (this.state.index >= this.props.data.length) {
            return this.props.renderNoMoreCards();
        }
        return this.props.data.map((item, i) => {
            if (i < this.state.index) return null;
            if (i === this.state.index) {
                return (
                    <Animated.View
                        key={item.id}
                        style={[styles.card, this.getCardStyle()]}
                        {...this.state.panResponder.panHandlers}>
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }
            return (
                <Animated.View style={[styles.card, { top: 3 * (i - this.state.index) }]} key={item.id}>
                    {this.props.renderCard(item)}
                </Animated.View>
            );
        }).reverse();
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

export default Deck;
