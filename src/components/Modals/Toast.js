import React from 'react';
import { Text, View, Modal } from 'react-native';
import styles from '../../styles/components/Modals/Toast';

const Toast = ({ label, setter }) => {
    const onRequestClose = () => { }
    if (setter.state.openToast) {
        setTimeout(() => setter.setState({ openToast: false }), 3000)
    }
    return (
        <Modal animationType="fade" transparent visible={setter.state.openToast} onRequestClose={onRequestClose}>
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.label}>{label}</Text>
                </View>
            </View>
        </Modal>
    );
}

export default Toast;
