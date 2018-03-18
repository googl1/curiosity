import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';

class CameraCapture extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        photoId: 1,
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 10 }}>
                    <Camera style={{ flex: 9 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                        <View
                            style={{
                                flex: 10,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                alignItems: 'flex-end'
                            }}>
                            <TouchableOpacity
                                onPress={
                                    this.takePicture.bind(this)
                                }>
                                <View style={{
                                    height: 70,
                                    width: 70,
                                    backgroundColor: "grey",
                                    borderRadius: 50,
                                    marginLeft: 150,
                                    marginBottom: 20
                                }}/>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }

    takePicture = async function() {
        if (this.camera) {
          this.camera.takePictureAsync().then(data => {
            //console.log(data.base64);
            this.props.navigation.navigate({
                routeName: 'CaptureAnalysis',
                params: { img: data.uri }
            })
          });
        }
    }
}

export default CameraCapture