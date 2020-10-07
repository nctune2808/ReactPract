import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useTheme} from 'react-native-paper';


const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
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

export default HomeScreen;
