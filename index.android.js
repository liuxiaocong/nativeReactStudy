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
import Container from './js/common/components/container'

const ReactNative2048 = () => {
  return (<Container startTiles={2} size={4} />)
}

AppRegistry.registerComponent('ReactNative2048', () => ReactNative2048)
AppRegistry.registerComponent('nativeReactStudy', () => App);
AppRegistry.registerComponent('multipleComponent', () => Mutiple);
AppRegistry.registerComponent('reactTabComponent', () => ReactTab);
