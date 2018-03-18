import React from 'react';
import {View, Text} from 'react-native';
import StackNavigator from 'react-navigation';
import CameraCapture from './CameraCapture';

class HomeScreen extends React.Component {
    render() {
        setTimeout(() => {
            this.props.navigation.navigate('Capture')
        }, 2000);

        return (
            <View style={{ 
                    flex: 1, 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default HomeScreen