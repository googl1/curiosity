import React from 'react';
import View from 'react-native';
import CameraCapture from './components/CameraCapture.js'

import * as firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <CameraCapture/>
    );
  }
}
