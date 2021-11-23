import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {CustomHeader} from '../comps';

class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Setting" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text>Setting!!!</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{fontSize: 30, color: 'blue'}}>Go back Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SettingScreen;
