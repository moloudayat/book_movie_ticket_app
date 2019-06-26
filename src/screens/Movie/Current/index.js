import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import imgs from '../../../unifiedResources/imgs';
import Button from '../../../components/Button/Button';
import styles from '../../../styles/containers/Movie/Current';

class CurrentMovies extends Component {
    // TODO: add movies to api
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                { id: 1, name: 'deadpool' },
                { id: 2, name: 'deadpool' },
                { id: 3, name: 'deadpool' },
                { id: 4, name: 'deadpool' },
                { id: 5, name: 'deadpool' },
                { id: 6, name: 'deadpool' },
            ]
        }
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <View style={styles.itemCountainer}>
            <Image source={imgs.placeholder} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Button label="Buy Tickets" labelStyle={{paddingVertical: 8,}}/>
        </View>
    );

    // TODO: add toolbar
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.movies}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    numColumns={2}
                    columnWrapperStyle={styles.list}
                />
            </View>
        );
    }
}

export default CurrentMovies;
