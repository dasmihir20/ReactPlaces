import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,Dimensions,Image
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import HomeScreen from './Screens/HomeScreen'

const AppRouter = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  
})

export default AppRouter