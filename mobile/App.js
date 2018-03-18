import React from 'react';
import CustomNavBar from './components/CustomNavBar'
import View from 'react-native';
import CameraCapture from './components/CameraCapture.js'
import * as firebase from 'firebase';
import Entry from './Entry.js';
import FirebaseConfig from './FirebaseConfig.js';


export default class App extends React.Component {
componentDidMount() {

  // Initialize Firebase
  let conf  = new FirebaseConfig();
  firebase.initializeApp(conf.getConfig());

  // dummy entry
  let e = new Entry("Dog", "George", "_image", "animal");
  var db = firebase.database();
  let e1 = new Entry("Cat", "Bobby", "_image", "animal");
  e.publish(db);
  e1.publish(db);
}

  render() {
    return <CustomNavBar />;
  }
}
