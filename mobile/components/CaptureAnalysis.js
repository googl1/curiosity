import React from 'react';
import {View, Text, Image} from 'react-native';

class CaptureAnalysis extends React.Component {
    render() {
        return (
            <View style={{ 
                    flex: 2,
                }}>
                <Image source={{uri: this.props.navigation.state.params.img}}
                        style={{flex: 1}}/>
                <View style={{flex: 1, backgroundColor: 'green'}}>
                </View>
            </View>
        );
    }
}

export default CaptureAnalysis