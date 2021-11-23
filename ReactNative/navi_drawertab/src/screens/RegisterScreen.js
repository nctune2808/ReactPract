import 'react-native-gesture-handler';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AuthContext from '../auth/utils';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signUp} = React.useContext(AuthContext);

  let {container, button, text, textInput} = styles;
  return (
    <View style={{flex: 1}}>
      <View style={container}>
        <Text>Register!!!</Text>
        <TextInput
          style={textInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={button}
          //   onPress={() => signUp({username, password})}>
          onPress={() => navigation.replace('Login')}>
          <Text style={text}>Register</Text>
          <Feather name="edit" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
  },
  textInput: {
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 50,
    padding: 5,
    margin: 5,
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

export default RegisterScreen;
