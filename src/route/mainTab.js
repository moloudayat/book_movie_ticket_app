import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import CurrentMovie from '../screens/Movie/Current'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../unifiedResources/colors';

const route={
    CurrentMovie: { 
        screen: CurrentMovie,
        navigationOptions: {
            tabBarLabel: 'In Theaters',
            tabBarIcon: ({tintColor}) => (<Icon name="movie-roll" size={24} color={tintColor}/>)
        }
     },
}

const tabNavigatorConfig={
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
        style:{backgroundColor:colors.background, borderTopWidth: 1, borderRightWidth:0, borderTopColor: colors.border, height: 52}
    },
}

const MainTab=createMaterialTopTabNavigator(route, tabNavigatorConfig);
export default MainTab;