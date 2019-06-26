import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Picker from '../Picker/Picker'
import styles from '../../styles/components/Input/Input';

const Input = ({ label, placeholder, value, containerStyle, inputStyle, picker, items, selectedValue, onValueChange }) => (
    <View style={[styles.container, containerStyle || {}]}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
            {picker &&
                <Picker
                    items={items}
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                />
            }
            <TextInput
                value={value}
                placeholder={placeholder}
                style={[styles.input, inputStyle || {}]}
            />
        </View>
    </View>
);

export default Input;

