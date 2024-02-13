// A sample app to render a view with a button and a text input
// The button will change the text input value to "Hello World" when clicked
import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import RegisterScreen from './Screen/RegisterScreen';

export default class App extends Component {
  
  render() {
    return (
      <View style={{ flex: 5 }}>
        <RegisterScreen />
      </View>
    );
  }
}