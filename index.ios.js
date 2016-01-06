/**
 * Demo of <FlipView> component usage.
 * https://github.com/adamkrell/FlipView
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Card = require('./Card.js');

var FlipCardRN = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Card />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('FlipCardRN', () => FlipCardRN);
