import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from './HomeScreen';
import CameraCapture from './CameraCapture';

const CustomBar = TabNavigator(
    {
    Home: { screen: HomeScreen },
    Capture: { screen: CameraCapture },
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
    }
);

export default class CustomNavBar extends React.Component{
    render(){
        return (
            <CustomBar/>
        );
    }
}