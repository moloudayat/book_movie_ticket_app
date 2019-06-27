import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../unifiedResources/colors';

// TODO: add dimen file
export default style = StyleSheet.create({
    container: {
        backgroundColor: colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        elevation: 5,
    },
    label: {
        color: colors.white,
        fontSize: 13,
        paddingVertical: 16,
    },
    round: {
        borderRadius: 20,
    }
});