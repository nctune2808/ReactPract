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

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  let {container, button, text, textInput} = styles;
  return (
    <View style={{flex: 1}}>
      <View style={container}>
        <Text>Login!!!</Text>
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
        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity
            style={button}
            onPress={() => signIn({ username, password })}>
            {/* onPress={() => this.props.navigation.replace('HomeApp')}> */}
            <Text style={text}>Sign In</Text>
            <Feather name="log-in" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => navigation.navigate('Register')}>
            {/* onPress={() => this.props.navigation.replace('HomeApp')}> */}
            <Text style={text}>Register</Text>
            <Feather name="edit" size={25} color="white" />
          </TouchableOpacity>
        </View>
        
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
    width: 320,
    height: 50,
    padding: 5,
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#7a42f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default LoginScreen;
