import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import CuriosityBar from './NavigationBar.js'


class CameraCapture extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
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
                    <Camera style={{ flex: 9 }} type={this.state.type}>
                        <View
                            style={{
                                flex: 10,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                alignItems: 'flex-end'
                            }}>
                            <View style={{
                                height: 50,
                                width: 50,
                                backgroundColor: "green",
                                borderRadius: 50,
                                justifyContent: 'center'
                            }}/>
                        </View>
                    </Camera>
                    {/* <View style={{backgroundColor: "red", flex: 1}}/> */}
                    <CuriosityBar style={{flex: 1}}/>
                </View>
            );
        }
    }
}

export default CameraCapture