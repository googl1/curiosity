import React from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { Text, View, Image, StyleSheet,AppRegistry, TextInput } from 'react-native';


class AddingNewData1 extends React.Component {
    render() {
        

        return (
            <View style = {{
                flex: 1,
            }}>
            <View style = {{flex: 1, backgroundColor: 'chartreuse'}}>
                <Text style = {{fontSize:25,color:'white',fontWeight:'bold'}}> Description
                </Text>
            </View>
            <View style = {{flex: 9, backgroundColor: 'aquamarine'}}>
                <Image source = {{uri: this.props.navigation.state.params.img}}
                id = "round pic">
                <Script> document.getElementById('round pic').style.borderRadius = 50</Script>
                </Image>
                <Image 
                indicator={ProgressBar}
                color = 'yellow'
            
                styleAttr = "Horizontal"/>

    
             
             <Text style = {{fontSize:20,color:'white',fontWeight:'bold'}}>What Would You Name This?</Text>
             <TextInput
               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
      />
             </View>
            </View>
             );
    }
}