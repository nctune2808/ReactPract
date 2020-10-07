import React, {Component} from 'react';
import FlipComponent from 'react-native-flip-component';
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Bubble} from '../components';
import {Players} from '../models';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const Card = ({isFront}) => {
  return (
    <View style={styles.back}>
      {isFront ? (
        <Bubble
          name={Players[0].name}
          nation={Players[0].nation}
          quality={Players[0].quality}
        />
      ) : (
        <Image
          source={require('../images/background/1.jpg')}
          style={styles.backCard}
        />
      )}
    </View>
  );
};

class FlipFlap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <FlipComponent
            isFlipped={this.state.isFlipped}
            frontView={<Card isFront={true} />}
            backView={<Card isFront={false} />}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({isFlipped: !this.state.isFlipped});
            }}>
            <Image
              source={require('../images/background/ball.png')}
              style={styles.ball}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'green',
  },
  top: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  bottom: {
    flex: 1,
    //backgroundColor: 'blue',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  front: {},
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },
  backCard: {
    flex: 1,
    width: 300,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },
  ball: {
    width: 100,
    height: 100,
    //backgroundColor: 'red',
  },
});
export default FlipFlap;
