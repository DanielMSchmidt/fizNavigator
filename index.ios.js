/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var DayChooser = require('./src/components/DayChooser');

var firstRoute = {
  name: 'Bitte Tag wählen',
  component: DayChooser
};


var fizNavigator = React.createClass({
  render: function() {
    return (
      <Router firstRoute={firstRoute} />
    );
  }
});

AppRegistry.registerComponent('fizNavigator', () => fizNavigator);
