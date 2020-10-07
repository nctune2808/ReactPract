import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavDefaultTheme,
  DarkTheme as NavDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, ActivityIndicator} from 'react-native';
import {MainTab, SignInScreen, DashboardScreen} from './src/screens';
import DrawerContent from './src/drawers/DrawerContents';
import AuthContext from './src/components/context';
import {AsyncStorage} from '@react-native-community/async-storage';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };

  const CustomDarkTheme = {
    ...NavDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#000000',
      bg1st: '#1a1a1a',
      bg2nd: '#262626',
      text: '#fff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    // userAvt: '',
  };

  const LoginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          // userAvt: action.url,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      // case 'ADMIN':
      //   return {
      //     ...prevState,
      //     userName: action.id,
      //     userToken: action.token,
      //     isLoading: false,
      //   };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    LoginReducer,
    initialLoginState,
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async (DataUser) => {
        const userToken = DataUser[0].userToken;
        const username = DataUser[0].username;
        // const userAvt = DataUser[0].avatar;
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          //console.log(e);
        }

        console.log('user token: ', userToken);

        dispatch({type: 'LOGIN', id: username, token: userToken});
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          //console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },

      // avatarUsers: async (DataUser) => {
      //   const userAvt = DataUser[0].avatar;
      //   try {
      //     await AsyncStorage.setItem('userAvatar', userAvt);
      //   } catch (e) {
      //     //console.log(e);
      //   }
      //   console.log('userAvt:', userAvt);
      //   dispatch({type: 'LOGIN', url: userAvt});
      // },

      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        //console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken == null ? (
            <Drawer.Navigator>
              <Drawer.Screen name="SignIn" component={SignInScreen} />
            </Drawer.Navigator>
          ) : (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeApp" component={MainTab} />
              <Drawer.Screen name="Dashboard" component={DashboardScreen} />
            </Drawer.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
