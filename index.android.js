/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './js/App';
import Mutiple from './js/Mutiple';
import ReactTab from './js/ReactTab';
AppRegistry.registerComponent('nativeReactStudy', () => App);
AppRegistry.registerComponent('multipleComponent', () => Mutiple);
AppRegistry.registerComponent('reactTabComponent', () => ReactTab);
