import React from 'react';
//import ProgressBar from 'react-native-progress/Bar';
import { Text, View, Image, StyleSheet,AppRegistry, TextInput, Button } from 'react-native';

class AddingNewData1 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { text: 'Describe what you have discovered' };
      }
    render() {
        
        return (
            <View style = {{
                flex: 10,
            }}>
            <View style = {{flex: 1, backgroundColor: 'chartreuse'}}>
                <Text style = {{fontSize:25,color:'white',fontWeight:'bold'}}> Description
                </Text>
            </View>
            <View style = {{flex: 9, backgroundColor: 'aquamarine'}}>
               

   
             
             <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>What Would You Name This?</Text>
             <TextInput
               style={{height: 60, borderColor: 'gray', borderWidth: 0.5}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                 />

             <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>What Colour Is It?</Text>
             <TextInput
               style={{height: 60, borderColor: 'gray', borderWidth: 0.5}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                 />

             <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>How Would You Classify It?</Text>
             <TextInput
               style={{height: 60, borderColor: 'gray', borderWidth: 0.5}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                 /> 

                <Button
                style={{
                    borderWidth:1,
                    borderColor:'gray',
                    alignItems:'center',
                    justifyContent:'flex-end',
                    width:50,
                    height:50,
                    backgroundColor:'aqua',
                    borderRadius:50,
                    }}
                title = ">"
                onPress 
                />
             </View>
            </View>
             );
    }
}
export default AddingNewData1