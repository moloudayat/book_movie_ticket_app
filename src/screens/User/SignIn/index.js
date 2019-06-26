import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import styles from '../../../styles/containers/User/SignIn';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    signUpOnPress = () => this.props.navigation.navigate('SignUp');

    currenMovieOnPress = () => this.props.navigation.navigate('CurrentMovie');

    // TODO: add toolbar
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.card}>
                        <Input
                            label="Username"
                            placeholder="Enter Username"
                        />
                        <Input
                            label="Password"
                            placeholder="Enter Password"
                        />
                        <Button
                            label="Sign In"
                            containerStyle={styles.button}
                            onPress={this.currenMovieOnPress}
                        />
                    </View>
                    <Text style={styles.footer}>Don't have an account? <Text style={styles.signup} onPress={this.signUpOnPress}>Signup</Text></Text>
                </View>
            </View>
        );
    }
}

export default SignIn;
