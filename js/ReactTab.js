/**
 * Created by xiaoconglau on 10/08/2017.
 */
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Platform,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Toast from './Toast';
import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputVal: {
    width: 300,
  },
});

class ReactTab extends React.Component {

  // Mounting
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <Swiper style={ styles.wrapper } showsButtons={ false }>
        <View style={ styles.slide1 }>
          <TextInput style={ styles.inputVal }
                     value={ 'https://www.loopslive.com/web-loops/gz/loopsActives/event-webpack-activities/TrueLoveKnight/?zone=sa&token=d4de96d96a5006a89913caafc3fd33f5&userId=1441657&sig=d5967c872f75d63875ebcf432d7d7dbd&lang=en' }/>
        </View>
        <View style={ styles.slide2 }>
          <Text style={ styles.text }>Beautiful</Text>
        </View>
        <View style={ styles.slide3 }>
          <Text style={ styles.text }>And simple</Text>
        </View>
      </Swiper>
    );
  }

  componentDidMount() {

  }

  //End Mounting

  //Updating

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  //End Updating

  //Un Mounting
  componentWillUnmount() {

  }

  //End Un Mounting
}

export default ReactTab;

