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
        flexDirection: 'row',
    },
    innerContainer: {
        flex: 0.9,
        height: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    card: {
        borderRadius: 5,
        backgroundColor: colors.card,
        elevation: 10,
        width: '100%',
        height: '50%',
        padding: 16,
    },
    username:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputRow: {
        width: '90%',
    },
    button: {
        marginTop: 16,
    },
    footer: {
        alignSelf: 'center',
        fontSize: 13,
        color: colors.text,
        fontWeight: '500',
    },
    signup: {
        color: colors.textButton,
    },
});