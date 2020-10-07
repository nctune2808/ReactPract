import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Button} from 'react-native';
import {Text, Drawer, Avatar, Title, Caption} from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up, now</Text>
      <Button title="Submit" onPress={() => alert('Clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;
