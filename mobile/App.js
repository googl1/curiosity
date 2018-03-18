import React from 'react';
import HomeScreen from './components/HomeScreen.js';
import { StackNavigator } from 'react-navigation';

// export default class App extends React.Component {
//   render() {
//     return (
//       <HomeScreen/>
//     );
//   }
// }

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});