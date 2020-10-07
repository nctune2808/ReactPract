/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  SettingScreen,
  NotifyScreen,
  ProfileScreen,
  EditProfileScreen,
} from '../screens';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme, Text, TouchableRipple} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AuthContext from '../components/context';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const NotifyStack = createStackNavigator();
const SettingStack = createStackNavigator();

const MainTab = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff" >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: theme.dark ? colors.bg1st : '#009387',
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarColor: theme.dark ? colors.bg1st : '#694fad',
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotifyStackScreen}
        options={{
          tabBarColor: theme.dark ? colors.bg1st : '#1f65ff',
          tabBarIcon: ({color}) => (
            <Feather name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStackScreen}
        options={{
          tabBarColor: theme.dark ? colors.bg1st : '#d02860',
          tabBarIcon: ({color}) => (
            <Feather name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const HomeStackScreen = ({navigation}) => {
  const { colors } = useTheme();
  const theme = useTheme();
  return (
    <HomeStack.Navigator

      screenOptions={{
        headerStyle: {
          backgroundColor: theme.dark ? colors.bg1st : '#009387',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}

        options={{
          title: 'Overview',
          headerLeft: () => (
            <Feather.Button
              name="menu"
              size={30}
              backgroundColor= {theme.dark ? colors.bg1st : "#009387"}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => (
            <Feather.Button
              name="search"
              size={30}
              backgroundColor={theme.dark ? colors.bg1st :"#009387"}
              onPress={() => {}}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = ({navigation}) => {
  const { colors } = useTheme();
  const theme = useTheme();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.dark ? colors.bg1st :'#694fad',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <ProfileStack.Screen
        name="User"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerRight: () => (
            <Feather.Button
              name="edit-3"
              size={30}
              backgroundColor={theme.dark ? colors.bg1st :"#694fad"}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
            />
          ),
          headerLeft: () => (
            <Feather.Button
              name="chevron-left"
              size={30}
              backgroundColor={theme.dark ? colors.bg1st :"#694fad"}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: 'Edit',
          headerRight: () => (
            <Feather.Button
                name="check"
                size={30}
                backgroundColor={theme.dark ? colors.bg1st : "#694fad"}
                onPress={() => { navigation.navigate('User')}}
            />
          ),
          
          headerLeft: () => (
            <Feather.Button
              name="x"
              size={30}
              backgroundColor={theme.dark ? colors.bg1st : "#694fad"}
              onPress={() => {
                navigation.navigate('User');
              }}
            />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};



const NotifyStackScreen = ({navigation}) => {
  const { colors } = useTheme();
  const theme = useTheme();
  return (
    <NotifyStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.dark ? colors.bg1st : '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <NotifyStack.Screen
        name="Notification"
        component={NotifyScreen}
        options={{
          title: 'Update',
          headerRight: () => (
            <Feather.Button
              name="menu"
              size={30}
              backgroundColor={theme.dark ? colors.bg1st :"#1f65ff"}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerLeft: () => (
            <Feather.Button
              name="chevron-left"
              size={30}
              backgroundColor={theme.dark ? colors.bg1st :"#1f65ff"}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
    </NotifyStack.Navigator>
  );
};
const SettingStackScreen = ({navigation}) => {
  const { colors } = useTheme();
  const theme = useTheme();
  const { signOut } = React.useContext(AuthContext);
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.dark ? colors.bg1st : '#d02860',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <SettingStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Setting',
          headerRight: () => (
            <Feather.Button
              name="log-out"
              size={30}
              backgroundColor={theme.dark ? colors.bg1st :"#d02860"}
              onPress={() => { signOut();}}
            />
          ),
          headerLeft: () => (
            <Feather.Button
              name="chevron-left"
              size={30}
              backgroundColor={theme.dark ? colors.bg1st :"#d02860"}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
    </SettingStack.Navigator>
  );
};
export default MainTab;
