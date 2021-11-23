import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class OyKeyboard extends Component {
  render() {
    return (
      <View style={newStyle.displayScreen}>
        <View style={newStyle.displayTop} />
        <View style={newStyle.displayBottom}>
          <View style={newStyle.row}>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>1</Text>
              <Text style={newStyle.text} />
            </View>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>2</Text>
              <Text style={newStyle.text}>ABC</Text>
            </View>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>3</Text>
              <Text style={newStyle.text}>DEF</Text>
            </View>
          </View>
          <View style={newStyle.row}>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>4</Text>
              <Text style={newStyle.text}>GHI</Text>
            </View>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>5</Text>
              <Text style={newStyle.text}>JKL</Text>
            </View>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>6</Text>
              <Text style={newStyle.text}>MNO</Text>
            </View>
          </View>
          <View style={newStyle.row}>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>7</Text>
              <Text style={newStyle.text}>PQRS</Text>
            </View>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>8</Text>
              <Text style={newStyle.text}>TUV</Text>
            </View>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>9</Text>
              <Text style={newStyle.text}>WXYZ</Text>
            </View>
          </View>
          <View style={newStyle.row}>
            <View style={newStyle.col}>
              <Text style={newStyle.number} />
              <Text style={newStyle.text}>NONE</Text>
            </View>
            <View style={newStyle.col}>
              <Text style={newStyle.number}>0</Text>
              <Text style={newStyle.text} />
            </View>
            <View style={newStyle.col}>
              <Text style={newStyle.number} />
              <Text style={newStyle.text}>NONE</Text>
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
    flex: 2,
  },
  displayBottom: {
    flex: 3,
    backgroundColor: '#f5f4f2',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  col: {
    flex: 1,
    borderRightColor: 'gray',
    borderRightWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 45,
  },
  text: {
    fontSize: 15,
  },
});

export default OyKeyboard;
