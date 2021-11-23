import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import ChildComps from './src/data/ChildComps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Type, please',
    };
  }

  onChangeTextInput = (text) => {
    this.setState({value: text});
  };

  render() {
    let {container, textInput} = styles;
    let {value} = this.state;
    return (
      <View style={container}>
        <ChildComps data1={value} />

        <TextInput
          style={textInput}
          onChangeText={this.onChangeTextInput}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    marginTop:20,
    borderWidth: 1,
    width: 200,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
