import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modal_inner_container: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
    picker_container: {
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        paddingVertical: 16,
        width: '60%',
        borderColor: '#e9e9e9',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    label: {
        fontSize: 13,
        alignSelf: 'center',
        padding: 8,
        color: '#333333',
    },
    selected: {
        fontSize: 15,
        fontWeight: '700',
        alignSelf: 'center',
        padding: 8,
        color: '#fff',
        backgroundColor: '#b05eff',
        width: '100%',
        textAlign: 'center',
    },
    icon: {
        fontSize: 24,
        color: '#4188FF',
    },
});

