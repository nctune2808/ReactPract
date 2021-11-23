import * as React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {useTheme, TouchableRipple} from 'react-native-paper';
import AuthContext from '../components/context';

const SettingScreen = ({navigation}) => {
  const {colors} = useTheme();
  const paperTheme = useTheme();
  const {toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>1</Text>
      </View>
      <View style={styles.center}>
        <Text style={[styles.text, {color: colors.text}]}>Preferences</Text>
        <TouchableRipple onPress={() => toggleTheme()}>
          <View style={[styles.box, {backgroundColor: colors.bg2nd}]}>
            <Text style={[styles.text, {color: colors.text}]}>Dark Mode</Text>
            <View pointerEvents="none">
              <Switch value={paperTheme.dark} />
            </View>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.bottom}>
        <Text>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  layer: {
    padding: 20,
  },
  box: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
  top: {
    flex: 2,
    alignItems: 'center',
    marginVertical: 5,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    //backgroundColor:'red',
  },
  center: {
    flex: 1,
    //alignItems: 'center',
    marginVertical: 5,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    //backgroundColor: 'green',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 5,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
});

export default SettingScreen;
