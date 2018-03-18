import React from 'react';
import {View, Text, Image} from 'react-native';

import CustomTopBar from './CustomTopBar'

class ResultFound extends React.Component {
    render() {
        console.log("IMAGE IS")
        console.log(this.props.navigation.state.params.data.image)
        return (
            <View style={{ 
                    flex: 10, 
                    position: 'absolute'
                }}>
                <CustomTopBar resultName={this.props.navigation.state.params.data.name}
                    style={{
                        height: 150
                    }}/>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <Image 
                            source={{
                                uri: 'data:image/jpg;base64,' + this.props.navigation.state.params.data.image
                            }}
                            style={{ 
                                width: 500,
                                height: 400, 
                                marginTop: 100,

                            }}/>
                    </View>
            </View>
        );
    }
}

export default ResultFound