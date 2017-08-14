/**
 * Created by xiaoconglau on 14/08/2017.
 */
var { requireNativeComponent,View } = require('react-native');
import PropTypes from 'prop-types';
var iface = {
  name: 'TestView',
  propTypes: {
    bgColor: PropTypes.string,
    ...View.propTypes
  }
};

module.exports = requireNativeComponent('RCTTestView', iface);