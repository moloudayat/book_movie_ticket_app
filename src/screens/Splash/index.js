import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button/Button';
import styles from '../../styles/containers/Splash';

class SplashComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // TODO: add changeNavigator to redux
    onPress = () => this.props.navigation.navigate('SignUp');

    // TODO: add trans
    // TODO: add lottie animation
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Button label="Get Started!" onPress={this.onPress} />
                </View>
            </View>
        );
    }
}

export default SplashComponent;
