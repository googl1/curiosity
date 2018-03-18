import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

import HomeScreen from './HomeScreen';
import Profile from './Profile';
import CameraCapture from './CameraCapture';
import Search from './Search';
import MapPreview from './MapPreview'

import CaptureAnalysis from './CaptureAnalysis'

const CustomBar = TabNavigator(
    {
        // Home: { screen: HomeScreen },
        Profile: { 
            screen: Profile
        },
        Search: { 
            screen: Search 
        },
        Capture: { 
            screen: CameraCapture
         },
        Map: { 
            screen: MapPreview,
            navigationOptions: ({ navigation }) => ({
                tabBarVisible: false
            }),
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
    }
);

const Routes = StackNavigator(
    {
        Root: {
            screen: CustomBar
        },
        CaptureAnalysis: {
            screen: CaptureAnalysis
        }
    },
    {
        headerMode: 'none'
    }
)
export default class CustomNavBar extends React.Component{
    render(){
        return (
            <Routes/>
        );
    }
}