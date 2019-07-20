import { StyleSheet } from 'react-native';
import colors from '../../../../unifiedResources/colors';
import matrix from '../../../../unifiedResources/matrix';

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.movieBackground,
        alignItems: 'center',
    },
    cardContainer: {
        paddingHorizontal: 5,
        alignItems: 'center',
        height: 200,
        elevation: 5,
        borderRadius: 5,
        margin: matrix.margin_padding_size_small,
        width: '100%',
    },
    image: {
        height: 100,
        width: 300,
        resizeMode: 'cover',
        overflow: 'hidden'
    },
    emptyCard: {
        paddingHorizontal: 5,
        alignItems: 'center',
        height: 200,
        width: 300,
        elevation: 5,
        borderRadius: 5,
        margin: matrix.margin_padding_size_small,
        justifyContent: 'center',
    }
});

export default style;
