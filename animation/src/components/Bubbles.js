import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Qualities from '../models/qualities';
import Players from '../models/players';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const Bubble = ({navigation, name, nation, quality}) => {
  return (
    <View style={styles.bubble}>
      <ImageBackground source={quality} style={styles.card}>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.left}>
              <View style={styles.ovr}>
                <Text style={styles.text}>100</Text>
              </View>
              <View style={styles.club}>
                <Image
                  source={require('../images/club/BARCELONA.png')}
                  style={styles.clubImage}
                />
              </View>
              <View style={styles.nation}>
                <Image source={nation} style={styles.nationImage} />
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.player}>
                <Image
                  source={require('../images/player/messi/16-17.png')}
                  style={styles.playerImage}
                />
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  bubble: {
    //backgroundColor:'pink',
    width: 300,
    height: 400,
  },
  container: {
    //backgroundColor: 'green',
    //opacity: 0.5,
    flex: 1,
  },
  top: {
    flex: 6,
    flexDirection: 'row',
    paddingHorizontal: 40,
    //backgroundColor:'blue',
    // opacity:0.5,
  },
  left: {
    flex: 2,
    //marginLeft: 18,
    //backgroundColor: 'pink',
  },
  right: {
    flex: 5,
  },
  bottom: {
    flex: 3,
    //backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 15,
  },
  card: {
    flex: 1,
    //backgroundColor: 'orange',
  },

  ovr: {
    flex: 1,
    //backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  club: {
    flex: 1,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clubImage: {
    width: 60,
    height: 60,
  },
  nation: {
    flex: 1,
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nationImage: {
    width: 60,
    height: 40,
  },
  player: {
    flex: 1,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  playerImage: {
    flex: 1,
    width: 200,
    height: 260,
    //aspectRatio: 1,
    //backgroundColor: 'green',
  },
});

export default Bubble;
