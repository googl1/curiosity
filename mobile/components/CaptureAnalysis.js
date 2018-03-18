import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

class CaptureAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: []};
    }
    render() {

        this.runImageAnalysis();

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

    runImageAnalysis = async () => {
        let imgUri = this.props.navigation.state.params.img;
        var data = new FormData();

        data.append("picture", {
            uri: imgUri,
            name: 'imageData.jpg',
            type: "image/jpg"
          }
        );

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Ocp-Apim-Subscription-Key': '778af7242d204657aeb3aa91a495542d'
            },
            body: data,
        }

        let uri = 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze'
        uri = uri + '?visualFeatures=Categories,Color,Description';

        fetch(uri, config)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson)
            console.log("CATEGORIES:\n")
            console.log(myJson.categories)
            console.log("COLOR:\n")
            console.log(myJson.color)
            console.log("DESCRIPTION:\n")
            console.log(myJson.description)
            console.log("TAGS:\n")
            console.log(myJson.description.tags)
            console.log("TAGS AS ARRAY:\n")
            var ok = JSON.parse(JSON.stringify(myJson.description.tags))
            console.log(ok)
            // const todos = myJson.categories;
            // console.log("NOW THE REAL DEAL")
            // for (var i = 0; i < 3; i++){
            //     images.push(ok[i]);
            // }
        })
        .catch(error => {
            console.log("ERROR MESSAGE IS: \n");
            console.log(error);
        })
    };
}

export default CaptureAnalysis