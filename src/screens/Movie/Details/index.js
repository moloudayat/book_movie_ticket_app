import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import Deck from '../../../components/Deck';
import styles from '../../../styles/containers/Movie/Details';

const DATA = [
    { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
]

class MovieDetails extends Component {
    renderCard(item) {
        return (
            <Card
                title={item.text}
                image={{ uri: item.uri }}>
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />
            </Card>
        )
    }

    renderNoMoreCards() {
        return (
            <View style={styles.emptyCard}>
                <Text>All Done!</Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        )
    }
}

export default MovieDetails;
