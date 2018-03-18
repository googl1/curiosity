import React from 'react';
import CustomNavBar from './components/CustomNavBar'
import View from 'react-native';
import CameraCapture from './components/CameraCapture.js'
import Entry from './Entry.js';
import Firebase from './Firebase.js';

export default class App extends React.Component {
componentDidMount() {

  // Initialize Firebase
 // let fb = new Firebase();

  /*
  // dummy entries
  let e = new Entry("Dog", "George", "_image", ["animal", "friendly"], ["dog", "terrier"]);
  let e1 = new Entry("Cat", "Bobby", "_image", ["animal", "evil"]);
  fb.publishEntry(e);
  //db.publish(db);
  //console.debug(fb.searchEntriesByTags(['orchid','cactus']));
  // fb.searchEntriesByString("Timbit");
*/
}

  render() {
    return <CustomNavBar />;
  }
}
