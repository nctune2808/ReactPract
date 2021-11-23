import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import AuthContext from '../components/context';
import Users from '../modal/user';
const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    isTextInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isAdmin: true,
  });

  const {signIn, avatarUsers} = React.useContext(AuthContext);

  const loginHandle = (username, password) => {
    const DataUser = Users.filter((item) => {
      return username === item.username && password === item.password;
    });
    // console.log('signinUserName:', username);
    // console.log('signinPasswod:', password);
    // console.log('signinAvatar', DataUser[0].avatar);
    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert('Wrong Input!', 'Username or Password cannot be empty', [
        {text: 'Okay'},
      ]);
      return;
    }

    if (DataUser.length === 0) {
      Alert.alert('Invalid User!', 'Username or Password is incorrect', [
        {text: 'Okay'},
      ]);
      return;
    }
    // avatarUsers(DataUser);
    adminLogin(DataUser);
    signIn(DataUser);
  };

  const adminLogin = (DataUser) => {
    if (DataUser[0].username === 'admin' && DataUser[0].password === 'pass') {
      Alert.alert('Welcome', 'You are admin!', [{text: 'Okay'}]);
      setData({
        ...data,
        isAdmin: true,
      });
    } else {
      Alert.alert('Welcome', 'You are member!', [{text: 'Okay'}]);
      setData({
        ...data,
        isAdmin: false,
      });
    }
  };

  const textInputChange = (value) => {
    if (value.trim().length >= 3) {
      setData({
        ...data,
        username: value,
        isTextInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: value,
        isTextInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePassChange = (value) => {
    if (value.trim().length >= 3) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
    }
  };

  const updateSecurityEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (value) => {
    if (value.trim().length >= 3) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require('../images/1.jpg')} style={styles.image} />
      <View style={styles.overlayText}>
        <View style={styles.header}>
          <Text style={styles.text}>Sign In, Please</Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <View style={styles.footer_top}>
            <Text style={styles.textTitle}>Username</Text>
            <View style={styles.input}>
              <Feather name="user" color="#05375A" size={30} />
              <TextInput
                placeholder="Your Username"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={(type) => textInputChange(type)}
                onEndEditing={(check) =>
                  handleValidUser(check.nativeEvent.text)
                }
              />
              {data.isTextInputChange ? (
                <Feather name="check-circle" color="green" size={25} />
              ) : null}
            </View>

            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text>Username must be more than 3 characters long</Text>
              </Animatable.View>
            )}

            <Text style={styles.textTitle}>Password</Text>
            <View style={styles.input}>
              <Feather name="lock" color="#05375A" size={30} />
              <TextInput
                placeholder="Your password"
                autoCapitalize="none"
                style={styles.textInput}
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(type) => handlePassChange(type)}
              />
              <TouchableOpacity onPress={updateSecurityEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="gray" size={25} />
                ) : (
                  <Feather name="eye" color="green" size={25} />
                )}
              </TouchableOpacity>
            </View>

            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text>Password must be more than 3 characters long</Text>
              </Animatable.View>
            )}
          </View>
          <View style={styles.footer_mid}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                loginHandle(data.username, data.password);
              }}>
              <Text style={styles.text}>Sign In</Text>
              <Feather name="log-in" color="#fff" size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.text}>Sign Up</Text>
              <Feather name="edit" color="#fff" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.footer_bot}>
            <TouchableOpacity
              style={styles.skip}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.textTitle}>Skip</Text>
              <Feather name="chevrons-right" color="black" size={30} />
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  footer_top: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  footer_mid: {
    flexDirection: 'row',
  },
  footer_bot: {
    paddingLeft: '75%',
    marginTop: '10%',
    bottom: 0,
  },
  image: {
    flex: 1,
  },
  overlayText: {
    position: 'absolute',
    bottom: 0,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
  },
  textTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    paddingHorizontal: 20,
    marginVertical: -5,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 20,
  },
  skip: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    borderTopLeftRadius: 50,
  },
});

export default SignInScreen;
