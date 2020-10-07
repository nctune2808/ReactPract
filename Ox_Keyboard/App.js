import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class OxKeyboard extends Component {
  render() {
    return (
      <View style={newStyle.displayScreen}>
        <View style={newStyle.displayTop} />
        <View style={newStyle.displayBottom}>
          <View style={newStyle.row}>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>1</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>2</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>3</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>4</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>5</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>6</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>7</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>8</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>9</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>0</Text>
            </View>
          </View>
          <View style={newStyle.row}>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>Q</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>W</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>E</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>R</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>T</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>Y</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>U</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>I</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>O</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>P</Text>
            </View>
          </View>
          <View style={newStyle.row}>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>A</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>S</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>D</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>F</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>G</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>H</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>J</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>K</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>L</Text>
            </View>
          </View>
          <View style={newStyle.row}>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>-</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>Z</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>X</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>C</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>V</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>B</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>N</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>M</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>-</Text>
            </View>
          </View>
          <View style={newStyle.row}>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>SYM</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>()</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>SPACE</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>@</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>.</Text>
            </View>
            <View style={newStyle.button}>
              <Text style={newStyle.nummeric}>ENT</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var newStyle = StyleSheet.create({
  displayScreen: {
    flex: 1,
  },
  displayTop: {
    flex: 1,
  },
  displayBottom: {
    flex: 3,
    backgroundColor: '#f1f1f1',
    padding: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    margin: 5,

    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nummeric: {
    fontSize: 25,
  },
});
export default OxKeyboard;
