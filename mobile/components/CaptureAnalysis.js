import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';



class CaptureAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            tagOne: null,
            tagTwo: null,
            tagThree: null
         };
         this.runImageAnalysis = this.runImageAnalysis.bind(this);
         this.goBack = this.goBack.bind(this);
         this.updateUI = this.updateUI.bind(this);
    }

    componentDidMount() {
        this.runImageAnalysis();
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Image source={{ uri: this.props.navigation.state.params.img }}
                    style={{ flex: 3 }} />
                <View style={{ flex: 2, backgroundColor: 'mediumaquamarine' }}>
                    <Text style={{ height: 50, fontSize: 25, color: 'white', fontWeight: 'bold' }}> Object Does Not Exist </Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Suggested Tags:</Text>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button
                                title={this.state.tagOne == null? '': this.state.tagOne}
                                color="green"
                                onPress={this.handlePress}
                            />
                            <Button
                                title={this.state.tagTwo == null? '': this.state.tagTwo}
                                color="green"
                                onPress={this.handlePress}
                            />
                            <Button
                                title={this.state.tagThree == null? '': this.state.tagThree}
                                color="green"
                                onPress={this.handlePress}
                            />
                        </View>
                    </View>

                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Not A Match?</Text>

                    <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button
                                title="RE-TAKE"
                                color="orange"
                                onPress={this.goBack}
                            />
                            <Button
                                title="ADD NEW"
                                color="aqua"
                                onPress={this.goForward}
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
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
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
                let ok = JSON.parse(JSON.stringify(myJson.description.tags))
                console.log(ok)
                // const todos = myJson.categories;
                this.updateUI(ok);
            })
            .catch(error => {
                console.log("ERROR MESSAGE IS: \n");
                console.log(error);
            });
    };

    handlePress(event) {
        console.log('Pressed!');
    };

    goBack(event){
        this.props.navigation.navigate('Capture');
    };

    goForward(event){
        this.props.navigation.navigate('AddData');
    };

    updateUI = (ok) => {
        console.log("NOW THE REAL DEAL")
        this.setState({tagOne: ok[0]});
        this.setState({tagTwo: ok[1]});
        this.setState({tagThree: ok[2]});
    };
}

export default CaptureAnalysis