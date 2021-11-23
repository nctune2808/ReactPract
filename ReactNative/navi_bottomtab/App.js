import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={newStyle.container}>
      <Text style={newStyle.text}>HOME</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={newStyle.container}>
      <Text style={newStyle.text}>PROFILE</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 20,
          },
          activeTintColor: 'red',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" size={25} color={color} />  
            ),
          }}
        />
        <Tab.Screen 
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="person" size={25} color={color} />  
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const newStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default App;
