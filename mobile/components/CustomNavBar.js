import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from './HomeScreen';
import Profile from './Profile';
import CameraCapture from './CameraCapture';
import Search from './Search';
import MapPreview from './MapPreview'

const CustomBar = TabNavigator(
    {
        // Home: { screen: HomeScreen },
        Profile: { screen: Profile },
        Search: { screen: Search },
        Capture: { screen: CameraCapture },
        Map: { screen: MapPreview }
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