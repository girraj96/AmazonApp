import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Routes from './src/navigation/Routes';

class App extends Component{
  render(){
    return(
      <Routes/>
    )
  }
}
export default App;