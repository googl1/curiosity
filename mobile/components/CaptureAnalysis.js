import React from 'react';
import {View, Text, Image} from 'react-native';

class CaptureAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: []};
    }
    render() {

        this.runImageAnalysis();

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

function Item(props) {
    return <li>{props.message}</li>;
}

export default CaptureAnalysis