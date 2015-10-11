import React from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  Component,
  TouchableHighlight,
} = React;


import WorkoutList from './WorkoutList';

export default class DayChooser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={[styles.button, styles.buttonLegs]} onPress={() => {this._onDayChoice('legs')}}>
          <Text style={styles.buttonText}>Beine</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.buttonArms]} onPress={() => {this._onDayChoice('arms')}}>
          <Text style={styles.buttonText}>Arme</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onDayChoice(choice) {
    var name = (choice === 'legs') ? 'Beine' : 'Arme';
    this.props.toRoute({
      name: name,
      component: WorkoutList,
      data: {
        choice: choice
      }
    })
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  buttonLegs: {
    backgroundColor: '#DDDDDD',
  },
  buttonArms: {
    backgroundColor: '#BDE4A8',
  },
});
