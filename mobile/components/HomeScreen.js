import React from 'react';
import { View, Text, Image } from 'react-native';
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
                    justifyContent: 'center',
                    backgroundColor: 'mediumaquamarine',
                }}>
                {/* <Text>Home Screen</Text> */}
                <Image 
                    source={require('./../assets/splash.png')}
                    style={{
                        height: 800,
                        width: 400,
                        backgroundColor: 'mediumaquamarine'
                    }}  />
            </View>
        );
    }
}

export default HomeScreen