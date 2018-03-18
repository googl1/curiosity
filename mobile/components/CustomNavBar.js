import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

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
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialIcons
                        name='person'
                        size={40}
                        style={ 
                            focused? {
                                color: 'yellow'
                            }: {
                                color: 'white'
                            }
                        }
                    />
                )
            }
        },
        Search: { 
            screen: Search ,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialIcons
                        name='search'
                        size={40}
                        style={ 
                            focused? {
                                color: 'yellow',
                            }: {
                                color: 'white'
                            }
                        }
                    />
                )
            }
        },
        Capture: { 
            screen: CameraCapture,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialIcons
                        name='camera-alt'
                        size={40}
                        style={ 
                            focused? {
                                color: 'yellow'
                            }: {
                                color: 'white'
                            }
                        }
                    />
                )
            }
         },
        Map: { 
            screen: MapPreview,
            navigationOptions: ({ navigation }) => ({
                // tabBarVisible: false,
                tabBarIcon: ({ tintColor, focused }) => (
                    <FontAwesome
                        name='globe'
                        size={40}
                        style={ 
                            focused? {
                                color: 'yellow'
                            }: {
                                color: 'white'
                            }
                        }
                    />
                )
            }),
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            showLabel: false,
            activeBackgroundColor: '#009977',
            style: {
                backgroundColor: 'mediumaquamarine',
                height: 70
            }
        }
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