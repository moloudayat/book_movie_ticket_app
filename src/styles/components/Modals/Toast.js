import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../unifiedResources/colors';
import matrix from '../../../unifiedResources/matrix';

export default style = StyleSheet.create({
    root: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        backgroundColor: colors.toastBackground,
        alignSelf: 'center',
        padding: matrix.margin_padding_size_small,
        borderRadius: 5,
        marginBottom: matrix.margin_padding_size_small,
    },
    label: {
        color: '#000',
        fontWeight: '500',
        fontSize: matrix.text_size_small,
        fontWeight: '400',
        textAlign: 'center',
    },
});