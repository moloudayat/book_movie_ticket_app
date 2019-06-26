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
    },
    card: {
        borderRadius: 5,
        backgroundColor: colors.card,
        elevation: 10,
        width: '100%',
        height: '100%',
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
    }
});