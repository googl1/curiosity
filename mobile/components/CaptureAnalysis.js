import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

class CaptureAnalysis extends React.Component {
    render() {
        return (
            <View style={{ 
                    flex: 1,
                }}>
                <Image source={{uri: this.props.navigation.state.params.img}}
                        style={{flex: 3}}/>
                <View style={{flex: 2, backgroundColor: 'mediumaquamarine'}}>
                <Text style= {{ height:75, fontSize:25,color:'white',fontWeight:'bold'}}> Object Does Not Exist </Text>
                <Text style = {{height:90,fontSize:20,color:'white',fontWeight:'bold'}}>Suggested Tags:</Text>
            <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>Not A Match?</Text>
        
                </View>
               
            </View>
        );
    }
}

export default CaptureAnalysis