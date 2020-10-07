import * as React from 'react';
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Svg} from 'react-native-svg';
const {width} = Dimensions.get("window");

const data = [
  {x: new Date(2020, 1, 15), y: 0},
  {x: new Date(2020, 2, 20), y: 0},
  {x: new Date(2020, 3, 15), y: 100},
  {x: new Date(2020, 4, 20), y: 200},
  {x: new Date(2020, 5, 15), y: 200},
  {x: new Date(2020, 6, 20), y: 300},
];

const DashboardScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Dashboard Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      <Svg {...{width}}/>
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

export default DashboardScreen;
