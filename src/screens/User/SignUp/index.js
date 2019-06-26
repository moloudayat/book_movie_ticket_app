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
                                inputStyle={styles.inputRow}
                                placeholder="Enter Username"
                            />
                            <Input
                                label="Mobile Number"
                                inputStyle={styles.inputRow}
                                placeholder="Enter Mobile Number"
                                picker
                                items={countryCode}
                                selectedValue={1}
                            />
                            <Input
                                label="Email"
                                inputStyle={styles.inputRow}
                                placeholder="Enter Email Address"
                            />
                            <Input
                                label="Password"
                                inputStyle={styles.inputRow}
                                placeholder="Enter Password"
                            />
                            <Button 
                            label="Sign Up"
                            containerStyle={styles.button}
                            />
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default SignUp;
