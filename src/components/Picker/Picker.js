import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../PopUp';
import styles from '../../styles/components/Picker/Picker';


class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }

    keyExtractor = (item, index) => index.toString();

    toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

    changeValue = value => () => {
        const { onValueChange } = this.props;
        onValueChange(value);
        this.setState({ isModalOpen: false });
    }

    getItemLayout = (data, index) => ({ length: 40, offset: 40 * index, index })

    renderItem = ({ item }) => (<Text key={item.value} style={this.props.selectedValue === item.value ? styles.selected : styles.label} onPress={this.changeValue(item.value)}>{item.label}</Text>);

    render() {
        const { items, selectedValue } = this.props;
        const { isModalOpen } = this.state;
        console.log('ddd selectedValue', selectedValue)
        const selected = items.find(item => item.value === selectedValue);
        console.log('ddd selected', selected)
        console.log('ddd items', items)
        return (
            <React.Fragment>
                <Modal show={isModalOpen} position="center" close={this.toggleModal} width="50%" height="40%" boxStyle={styles.modal_inner_container}>
                    <FlatList
                        data={items}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        initialScrollIndex={selected.value - 1}
                        getItemLayout={this.getItemLayout}
                    />
                </Modal>
                <TouchableOpacity onPress={this.toggleModal}>
                    <View style={styles.picker_container}>
                        <Text style={styles.label}>{selected.label}</Text>
                        <Icon name="md-arrow-dropdown" size={styles.icon.fontSize} color={styles.icon.color} style={{ alignSelf: 'center' }} />
                    </View>
                </TouchableOpacity>
            </React.Fragment>
        );
    }
}

export default Picker;
