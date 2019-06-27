import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import countryCode from '../../../values/countryCode';
import styles from '../../../styles/containers/User/SignUp';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    signInOnPress=()=>this.props.navigation.navigate('SignIn');

    // TODO: add toolbar
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.card}>
                        <ScrollView>
                            <View style={styles.username}>
                                <Input
                                    label="First Name"
                                    placeholder="Enter First Name"
                                    inputStyle={styles.inputRow}
                                />
                                <Input
                                    label="Last Name"
                                    inputStyle={styles.inputRow}
                                    placeholder="Enter Last Name"
                                    selectedValue={1}
                                />
                            </View>
                            <Input
                                label="Username"
                                placeholder="Enter Username"
                            />
                            <Input
                                label="Mobile Number"
                                placeholder="Enter Mobile Number"
                                picker
                                items={countryCode}
                                selectedValue={1}
                            />
                            <Input
                                label="Email"
                                placeholder="Enter Email Address"
                            />
                            <Input
                                label="Password"
                                placeholder="Enter Password"
                            />
                            <Button
                                label="Sign Up"
                                containerStyle={styles.button}
                            />
                        </ScrollView>
                    </View>
                    <Text style={styles.footer}>Already have an account? <Text style={styles.signin} onPress={this.signInOnPress}>Signin</Text></Text>
                </View>
            </View>
        );
    }
}

export default SignUp;
