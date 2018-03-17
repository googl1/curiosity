import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to NewEarth</Text>
        <Text>l automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
