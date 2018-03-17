import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native'

class CuriosityBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={{ 
                    flex: 1, 
                    backgroundColor: '#D4D4D4',
                    flexDirection: 'row',
                    alignContent: 'space-around'
                }}>
                <Text style={{color: "black"}}> A </Text>
                <Text style={{color: "black"}}> B </Text>
                <Text style={{color: "black"}}> C </Text>
                <Text style={{color: "black"}}> D </Text>
            </View>
        )
    }
}

export default CuriosityBar