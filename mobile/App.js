import React from 'react';
import HomeScreen from './components/HomeScreen.js';
import { StackNavigator } from 'react-navigation';
import firebaseConfig from './firebaseConfig.js' 
import * as firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});