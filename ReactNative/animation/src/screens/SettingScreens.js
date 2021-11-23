import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../components/Headers';
const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header headTitle="Setting" headLeft="chevron-left" headRight="log-out" />
      <View style={styles.body}>
        <Text>Setting</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SettingScreen;
