import React, {Component} from 'react';
import {
  AsyncStorage,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class App extends Component {
  setItemStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Error saving data
      console.log('saving data error');
    }
  };

  removeItemStorage = async (key) => {
    try {
      const value = await AsyncStorage.removeItem(key);
    } catch (error) {
      // Error removing data
      console.log('removing data error');
    }
  };

  getItemStorage = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
      console.log('reading data error');
    }
  };

  saveStorage = () => {
    this.setItemStorage('asd', 'bitch');
  };

  readStorage = () => {
    this.getItemStorage('asd').then((result) => {
      alert('value: ' + result);
    });
  };

  removeStorage = () => {
    this.removeItemStorage('asd');
  };

  render() {
    let {container, button, text} = styles;
    return (
      <View style={container}>
        <TouchableOpacity style={button} onPress={this.saveStorage}>
          <Text style={text}>Save Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={button} onPress={this.readStorage}>
          <Text style={text}>Read Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={button} onPress={this.removeStorage}>
          <Text style={text}>Remove Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7f7fff',
    justifyContent: 'center',
    height: 50,
    width: 100,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
export default App;
