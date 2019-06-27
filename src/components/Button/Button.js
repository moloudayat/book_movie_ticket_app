import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/components/Button/Button'

const Button = ({ onPress, label, containerStyle, labelStyle, round }) => (
    <TouchableOpacity onPress={onPress} style={[styles.container,round && styles.round, containerStyle || {}]}>
        <Text style={[styles.label, labelStyle || {}]}>{label}</Text>
    </TouchableOpacity >
);

export default React.memo(Button);
