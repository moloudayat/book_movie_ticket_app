import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../../unifiedResources/colors';

// TODO: add dimen file
export default style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.background,
    },
    image: {
        width: 150,
        height: 180,
        borderRadius: 5,
        marginBottom: 8,
    },
    text: {
        color: colors.text,
        textAlign: 'center',
        fontSize: 13,
        marginVertical: 8,
        fontWeight: '500'
    },
    list: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    itemCountainer: {
        marginVertical: 16,
    },

});