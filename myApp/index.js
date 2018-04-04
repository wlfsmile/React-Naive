import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import App from './App';

// import HelloWord from './src/helloWord';
// import Flex from './src/flex';
// import Fetch from './src/fetch';

import HomePage from './src/pages/HomePage';

export default class myApp extends Component{
    render(){
      return (
        <HomePage/>
      );
    }
  }
  

AppRegistry.registerComponent('myApp', () => myApp);
