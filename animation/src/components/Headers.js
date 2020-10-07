import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({
  navigation,
  headTitle,
  headLeft,
  headRight,
  leftPress,
  rightPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          leftPress;
        }}>
        <Feather name={headLeft} size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>{headTitle}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          leftPress;
        }}>
        <Feather name={headRight} size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
    borderBottomWidth: 0.75,
    borderBottomColor: 'black',
  },
  title: {
    fontSize: 25,
    color: 'black',
    paddingVertical: 10,
  },
  button: {
    padding: 10,
  },
});

export default Header;
