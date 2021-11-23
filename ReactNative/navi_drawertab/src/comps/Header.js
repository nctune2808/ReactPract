import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

class CustomHeader extends Component {
  render() {
    const {header, leftBox, centerBox, titleText, rightBox} = styles;
    return (
      <View style={header}>
        <View style={leftBox}>
          {this.props.isHome ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Feather name="menu" size={30} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Feather name="chevron-left" size={30} />
            </TouchableOpacity>
          )}
        </View>

        <View style={centerBox}>
          <Text style={titleText}>{this.props.title}</Text>
        </View>
        <View style={rightBox}>
          <TouchableOpacity>
            <Feather name="search" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
  },
  leftBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerBox: {
    flex: 4,
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  rightBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CustomHeader;
