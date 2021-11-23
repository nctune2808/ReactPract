import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {CustomHeader} from '../comps';
import AuthContext from '../auth/utils';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!!!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Text style={{fontSize: 30, color: 'blue'}}>Go to Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={signOut}>
          <Text style={styles.text}>Sign Out</Text>
          <Feather name="log-out" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#7a42f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 20,
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
  },
});
export default HomeScreen;
