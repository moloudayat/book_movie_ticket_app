import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../unifiedResources/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

const style = StyleSheet.create({
    container: {
        width: '90%',
        height: '100%',
        backgroundColor: colors.movieBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        zIndex: 4,
    },
});

export default style;
