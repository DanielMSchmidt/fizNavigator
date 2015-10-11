import React from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  Component,
  TouchableHighlight,
  ListView,
  AsyncStorage,
} = React;

const INITIAL_EXERCISES = {
  'arms': [{
    id: 1,
    name: 'Dual Pulley Row',
    reps: '12 - 10 - 8',
    weight: 20,
  }],

  'legs': [{
    id: 1,
    name: 'Gehübung',
    reps: '2 mal hin und her',
    weight: 7,
  }]
};

export default class WorkoutList extends Component {
  constructor() {
    super();

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    var exercises = [{id: 0, name: 'Name', reps: 'Wiederholungen', weight: 'Gewicht'}];

    this.state = {
      exercises,
      exerciseRow: ds.cloneWithRows(exercises),
    };
    this._loadExercises().done();
  }

  async _loadExercises() {
    var choice = 'legs' // FIXME: why does this.props.data.choice not work
    var storageKey = `fizNavigator${choice}`;
    try {
      var value = await AsyncStorage.getItem(storageKey);
      console.log(value);
      if (value !== null){
        this._addExercises(value);
      } else {
        this._addExercises(INITIAL_EXERCISES[choice]);
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  _addExercises(newExercises) {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    var allExercises = this.state.exercises.concat(newExercises);
    this.setState({
      exercises: allExercises,
      exerciseRow: ds.cloneWithRows(allExercises),
    });

    // TODO: save everything except row 0 to FS
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.exerciseRow}
          renderRow={this._renderRow}
        />
      </View>
    );
  }

  _renderRow(rowData) {
    return (
      <View style={styles.container}>
        <Text style={styles.tableElement}>{rowData.name}</Text>
        <Text style={styles.tableElement}>{rowData.reps}</Text>
        <Text style={styles.tableElement}>{rowData.weight}</Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  tableElement: {
    flex: 1,
    flexDirection: 'column',
  }
});
