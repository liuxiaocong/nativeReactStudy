/**
 * Created by xiaoconglau on 10/08/2017.
 */
import React from 'react';
import {Alert, Platform, Text, TouchableHighlight, View} from 'react-native';
import Toast from './Toast';

class Mutiple extends React.Component {

  // Mounting
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <View style={{
        margin:30
      }}>
        <TouchableHighlight onPress={this.show}>
          <Text>
            This view is coding in react-natvie
          </Text>
        </TouchableHighlight>

        <Text>App</Text>
      </View>
    )
  }

  show() {
    if(Platform.OS !== 'ios')
    {
      Toast.show('show toast', Toast.SHORT);
    }else {
      Alert.alert("show toast");
    }
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

export default Mutiple;

