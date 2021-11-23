/* eslint-disable prettier/prettier */
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

class ChildComps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {data1} = this.props;
    return (
      <View>
        <Text style={{fontSize: 20}}>{data1}</Text>
      </View>
    );
  }
}

export default ChildComps;
