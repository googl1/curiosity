import React from 'react';
import CustomNavBar from './components/CustomNavBar'
import {View} from 'react-native';
import CameraCapture from './components/CameraCapture.js'
import Entry from './Entry.js';
import Firebase from './Firebase.js';
import ignoreWarnings from 'react-native-ignore-warnings';

export default class App extends React.Component {

  render() {
    ignoreWarnings('Setting a timer');  
    return <CustomNavBar />;
  }
}
