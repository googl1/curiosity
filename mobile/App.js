import React from 'react';
import View from 'react-native';
import CameraCapture from './components/CameraCapture.js'

export default class App extends React.Component {
  render() {
    return (
      <CameraCapture/>
    );
  }
}