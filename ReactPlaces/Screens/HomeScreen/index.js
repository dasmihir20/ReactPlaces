import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,Modal,TouchableHighlight
} from 'react-native';

import style from './style'


export default class HomeScreen extends Component<{}> {

    render() 
    {
        
   
       return (
        <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>
          <TouchableHighlight onPress={() => {
              alert("Hi Pressed")
          }}>
            <Text>Home Screen Show Alert</Text>
          </TouchableHighlight>

        </View>
       </View>
       );
    }

}