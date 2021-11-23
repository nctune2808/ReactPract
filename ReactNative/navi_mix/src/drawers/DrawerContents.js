import * as React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Text,
  Drawer,
  Avatar,
  Title,
  Caption,
  useTheme,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import AuthContext from '../components/context';
import Feather from 'react-native-vector-icons/Feather';


const DrawerContent = ({navigation, props}) => {
  const {colors} = useTheme();
  const {signOut} = React.useContext(AuthContext);
  const [data] = React.useState({
    isAdmin: false,
  });

  return (
    <View style={[styles.drawerContent, {backgroundColor: colors.bg1st}]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userSection}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Avatar.Image source={require('../images/1.jpg')} size={80} />
            <Title style={styles.title}>{}</Title>
            <Caption style={styles.caption}>{}</Caption>
          </TouchableOpacity>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="home" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="film" color={color} size={size} />
            )}
            label="Movies"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="box" color={color} size={size} />
            )}
            label="Category"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="globe" color={color} size={size} />
            )}
            label="Country"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="layers" color={color} size={size} />
            )}
            label="Year"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="help-circle" color={color} size={size} />
            )}
            label="Service"
            onPress={() => {}}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      {data.isAdmin ? (
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="activity" color={color} size={size} />
            )}
            label="Dashboard"
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />
        </Drawer.Section>
      ) : null}
      <Drawer.Section>
        <DrawerItem
          icon={({color, size}) => (
            <Feather name="log-out" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    borderRightWidth: 0.25,
    borderRightColor: 'gray',
  },
  userSection: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 5,
    borderTopColor: 'black',
    borderTopWidth: 0.5,
  },
});

export default DrawerContent;
