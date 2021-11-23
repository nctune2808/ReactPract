import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {Header, FlipFlap} from '../components';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/background/stadium.jpg')}
        style={styles.image}>
        <SafeAreaView style={styles.header}>
          <Header
            style={styles.header}
            headTitle="Home"
            headLeft="menu"
            headRight="search"
          />
        </SafeAreaView>

        <View style={styles.body}>
          <FlipFlap />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header:{
    flex:1,
    //backgroundColor:'yellow',
    //justifyContent:"center",
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'red',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    //justifyContent: 'center',
  },
});
export default HomeScreen;
