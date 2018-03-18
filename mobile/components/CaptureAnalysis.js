import React from 'react';
import {View, Text, Image} from 'react-native';

class CaptureAnalysis extends React.Component {
    render() {
        console.log(this.props.navigation.state.params.img)
        return (
            <View style={{ 
                    flex: 1, 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}>
                <Text>CaptureAnalysis Screen! </Text>
                <Image source={{uri: this.props.navigation.state.params.img}}
                        style={{width: 400, height: 400}}/>
            </View>
        );
    }
}

export default CaptureAnalysis