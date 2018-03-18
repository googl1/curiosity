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
                <Text style= {{ height:50, fontSize:25,color:'white',fontWeight:'bold'}}> Object Does Not Exist </Text>
                <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>Suggested Tags:</Text>
                <View style={{  justifyContent:'center', flex:1}}>
                <View style={{margin:20, flexDirection:'row', justifyContent:'space-between'}}>
            <Button
                title= "fungus"
                color = "green"
                
            
            />
            <Button
                title= "potato"
                color = "green"
            />
            <Button
                title= "vegetable"
                color = "green"
            />
            </View>
                </View>

            <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>Not A Match?</Text>
        
            <View style={{  justifyContent:'flex-end', flex:1}}>
                <View style={{margin:20, flexDirection:'row', justifyContent:'space-between'}}>
            <Button
                title= "RE-TAKE"
                color = "orange"
            />
            <Button
                title= "ADD NEW"
                color = "aqua"
            />
            </View>
            </View>

                </View>
               
            </View>
        );
    }
}

export default CaptureAnalysis