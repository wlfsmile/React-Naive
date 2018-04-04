/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomePage from './js/pages/HomePage';


export default class myApp extends Component{
  render(){
    return (
      <HomePage/>
    );
  }
}
