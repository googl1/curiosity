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
                    source={{uri: './../assets/logo.png'}}
                    style={{
                        height: 400,
                        width: 400
                    }}  />
            </View>
        );
    }
}

export default HomeScreen