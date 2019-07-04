import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { userActions } from '../../../actions';
import { getStorage } from '../../../utility/storage';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Toast from '../../../components/Modals/Toast';
import styles from '../../../styles/containers/User/SignIn';

class SignIn extends Component {
    state = {
        openToast: false,
    }

    async componentDidMount() {
        const username = await getStorage('@username');
        const password = await getStorage('@password');
        if (username && password) {
            this.props.fetchUser({ username, password, callback: () => this.props.navigation.navigate('CurrentMovie') });
        }
    }

    signUpOnPress = () => this.props.navigation.navigate('SignUp');

    signInOnPress = () => {
        const { username, password, fetchUser, navigation: { navigate } } = this.props;
        if (username && password) {
            fetchUser({
                username,
                password,
                callback: () => navigate('CurrentMovie')
            });
        }
        else {
            this.setState({ openToast: true });
        }
    }

    onChangeText = name => text => this.props.changeUser({ [name]: text });

    // TODO: add toolbar
    render() {
        const { username, password } = this.props;
        return (
            <View style={styles.container}>
                <Toast
                    setter={this}
                    label="Please Enter Both Username and Password"
                />
                <View style={styles.innerContainer}>
                        <View style={styles.card}>
                            <Input
                                label="Username"
                                placeholder="Enter Username"
                                onChangeText={this.onChangeText('username')}
                                value={username}
                            />
                            <Input
                                label="Password"
                                placeholder="Enter Password"
                                onChangeText={this.onChangeText('password')}
                                value={password}
                            />
                            <Button
                                label="Sign In"
                                containerStyle={styles.button}
                                onPress={this.signInOnPress}
                            />
                            </View>
                        <Text style={styles.footer}>Don't have an account? <Text style={styles.signup} onPress={this.signUpOnPress}>Signup</Text></Text>
                    </View>
                </View>
                );
            }
        }
        
const mapStateToProps = (state) => ({
                    firstName: state.userReducer.firstName,
                lastName: state.userReducer.lastName,
                image: state.userReducer.image,
                username: state.userReducer.username,
                password: state.userReducer.password,
                email: state.userReducer.email,
                mobile: state.userReducer.mobile,
            })
            
const mapDispatchToProps = (dispatch) => {
    return {
                    fetchUser: (params) => dispatch(userActions.fetchUser(params)),
                changeUser: (params) => dispatch(userActions.changeUser(params)),
            }
        }
        
        export default connect(
            mapStateToProps,
            mapDispatchToProps
        )(SignIn);
