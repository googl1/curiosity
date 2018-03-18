import React from 'react';
//import ProgressBar from 'react-native-progress/Bar';
import { Text, View, Image, StyleSheet,AppRegistry, TextInput, Button } from 'react-native';
import CaptureAnalysis from './CaptureAnalysis';

class AddingNewData1 extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { text1: 'Describe what you have discovered', text2: 'Describe what you have discovered', text3: 'Plant, Animal, Energy Source?' }
      }
    render() {
        
        return (
            <View style = {{
                flex: 1,
            }}>
            <View style = {{flex: 1, backgroundColor: 'chartreuse'}}>
                <Text style = {{fontSize:25,color:'white',fontWeight:'bold'}}> Description
                </Text>
            </View>
            <View style = {{flex: 9, backgroundColor: 'mediumaquamarine'}}>
               
            
   
             
             <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>What Would You Name This?</Text>
             <TextInput
               style={{height: 60, borderColor: 'gray', borderWidth: 0.5}}
                onChangeText={(text1) => this.setState({text1})}
                value={this.state.text1}
                 />

             <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>What Colour Is It?</Text>
             <TextInput
               style={{height: 60, borderColor: 'gray', borderWidth: 0.5}}
                onChangeText={(text2) => this.setState({text2})}
                value={this.state.text2}
                 />

             <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>How Would You Classify It?</Text>
             <TextInput
               style={{height: 60, borderColor: 'gray', borderWidth: 0.5}}
                onChangeText={(text3) => this.setState({text3})}
                value={this.state.text3}
                 /> 

                <Button
                style={{
                    borderWidth:1,
                    borderColor:'gray',
                    alignItems:'flex-end',
                    justifyContent:'flex-end',
                    width:50,
                    height:50,
                    backgroundColor:'aqua',
                    borderRadius:50
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