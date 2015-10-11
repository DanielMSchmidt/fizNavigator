import React from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  Component,
  TouchableHighlight,
  ListView,
} = React;

export default class WorkoutList extends Component {
  constructor() {
    super();

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      exercises: ds.cloneWithRows([{id: 0, name: 'Name', reps: 'Wiederholungen', weight: 'Gewicht'}]),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.exercises}
          renderRow={this._renderRow}
        />
      </View>
    );
  }

  _renderRow(rowData) {
    return (
      <View>
        <Text>{rowData.name}</Text>
        <Text>{rowData.reps}</Text>
        <Text>{rowData.weight}</Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
});
