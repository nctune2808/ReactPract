import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTab} from '../comps';
import {AboutUsScreen, LoginScreen} from '../screens';
import Feather from 'react-native-vector-icons/Feather';
import AuthContext from '../auth/utils';

const Drawer = createDrawerNavigator();

const SignOutButton = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity onPress={signOut} />
    </View>
  );
};

const DrawerMenu = ({navigation}) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={BottomTab}
        options={{
          drawerLable: 'Home',
          drawerIcon: ({color}) => (
            <Feather name="home" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Category"
        component={View}
        options={{
          drawerLable: 'Category',
          drawerIcon: ({color}) => (
            <Feather name="box" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          drawerLable: 'About Us',
          drawerIcon: ({color}) => (
            <Feather name="book" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign Out"
        component={SignOutButton}
        options={{
          drawerLable: 'Sign out',
          drawerIcon: ({color}) => (
            <Feather name="log-out" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
});
export default DrawerMenu;
