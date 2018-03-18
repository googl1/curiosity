import React from 'react';
import {View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class CustomTopBar extends React.Component {
    render() {
        return (
            <View style={{ 
                    height: 90,
                    width: 1000,
                    backgroundColor: 'mediumaquamarine',
                    position: 'absolute'
                }}>

                {/* Some Icon there */}
                <MaterialIcons 
                    name='arrow-back'
                    size={40}
                    style={{
                        marginTop: 35,
                        marginLeft: 20,
                        color: '#009977'
                    }}/>

                <Text
                    style={{
                        color: 'white',
                        marginLeft: 40,
                        marginTop: 45,
                        position: 'absolute',
                        height: 200,
                        width: 300,
                        fontSize: 20,
                        textAlign: 'center'
                    }}>
                        {this.props.resultName}
                </Text>
                {/* Some text there */}
            </View>
        );
    }
}

export default CustomTopBar