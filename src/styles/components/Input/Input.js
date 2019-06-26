import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../unifiedResources/colors';

// TODO: add dimen file
export default style = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
    },
    label: {
        color: colors.text,
        marginBottom: 8,
        fontSize: 13,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    inputWidth: {
        width: null,
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    }
});