import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useTheme} from 'react-native-paper';
const NotifyScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Notification Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
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

export default NotifyScreen;
