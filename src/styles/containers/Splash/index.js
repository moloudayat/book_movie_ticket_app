import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../unifiedResources/colors';

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
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});