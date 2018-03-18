import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Firebase from './../Firebase.js';

class CaptureAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            tagOne: null,
            tagTwo: null,
            tagThree: null,
            found: false
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
                    style={{ 
                        flex: 2,
                        backgroundColor: 'mediumaquamarine'
                    }} />
                <View style={{ flex: 2, backgroundColor: 'mediumaquamarine' }}>
                    <Text style={{ height: 50, fontSize: 25, color: 'white', fontWeight: 'bold' }}> 
                        {this.state.found? 'Object not found': 'Running analysis...'}
                    </Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Suggested Tags:</Text>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <View style={{ margin: 20}}>
                            {this.state.found? 
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
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
                                </View> : <View/>
                            }
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
                                onPress={this.handlePress}
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
                let ok = JSON.parse(JSON.stringify(myJson.description.tags))
                // console.log(ok)
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

    updateUI = async (ok) => {
        let fb = new Firebase();
        var oui = await fb.searchEntriesByTags(["orchid"]);
        console.log("RESULTS");
        // console.log(oui[0]);
        if (oui.length > 0){
            this.props.navigation.navigate({
                routeName: 'ResultFound',
                params: { data: oui[0] }
            });
        }else {   
            this.setState({tagOne: ok[0]});
            this.setState({tagTwo: ok[1]});
            this.setState({tagThree: ok[2]});
            this.setState({found: true});
        }
    };
}

export default CaptureAnalysis