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

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {HomeScreen, SettingScreen, ProfileScreen} from '../screens';
import {IconWithBadge} from '../comps';

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={9} />;
}

const Tab = createBottomTabNavigator();

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          //fontSize: 20,
          display: 'none',
        },
        //activeTintColor: '#91bbff',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Feather name="home" size={30} color={color} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Feather name="user" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={View}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            //<Feather name="bell" size={30} color={color} />
            <HomeIconWithBadge name="bell" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <Feather name="settings" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
