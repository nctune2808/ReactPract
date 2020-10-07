import 'react-native-gesture-handler';
import * as React from 'react';
import {AsyncStorage} from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerMenu} from './src/comps';
import {LoginScreen, SplashScreen, RegisterScreen} from './src/screens';
import AuthContext from './src/auth/utils';

const StackApp = createStackNavigator();

// class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <StackApp.Navigator headerMode="none">
//           {/* <StackApp.Screen name="abc" component={SplashScreen} /> */}
//           <StackApp.Screen name="Login" component={LoginScreen} />
//           <StackApp.Screen name="HomeApp" component={DrawerMenu} />
//         </StackApp.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

function App({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        console.log('sign in data: ', data);
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <StackApp.Navigator headerMode="none">
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <StackApp.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <StackApp.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <StackApp.Screen name="HomeApp" component={DrawerMenu} />
          )}
          <StackApp.Screen name="Register" component={RegisterScreen} />
        </StackApp.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
