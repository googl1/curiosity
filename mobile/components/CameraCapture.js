import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
                                    height: 80,
                                    width: 80,
                                    backgroundColor: "white",
                                    borderColor: '#D3D3D3',
                                    borderWidth: 7,
                                    borderRadius: 50,
                                    marginLeft: 145,
                                    marginBottom: 45
                                }}/>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={
                                    this.takePicture.bind(this)
                                }>
                                <View style={{
                                    height: 55,
                                    width: 55,
                                    backgroundColor: "white",
                                    borderColor: '#D3D3D3',
                                    borderWidth: 7,
                                    borderRadius: 50,
                                    marginLeft: 50,
                                    marginBottom: 40
                                }}>
                                    <MaterialCommunityIcons 
                                        name='image-filter-hdr'
                                        size={40}
                                        style={{
                                            color: '#A3A3A3'
                                        }}/>
                                </View>
                            </TouchableOpacity>

                            {/* <MaterialCommunityIcons 
                                name='image-filter-hdr'
                                size={27}
                                style={{
                                    height: 40,
                                    width: 40,
                                    backgroundColor: "white",
                                    color: 'grey',
                                    borderColor: '#D3D3D3',
                                    borderWidth: 7,
                                    borderRadius: 50,
                                    marginLeft: 15,
                                    marginBottom: 25,
                                }}
                                onPress={this.takePicture.bind(this)}/> */}
                        </View>
                    </Camera>
                </View>
            );
        }
    }

    takePicture = async function() {
        if (this.camera) {
          this.camera.takePictureAsync({
              quality: 0.6
            })
            .then(data => {
                this.props.navigation.navigate({
                    routeName: 'CaptureAnalysis',
                    params: { img: data.uri }
            })
          });
        }
    }
}

export default CameraCapture