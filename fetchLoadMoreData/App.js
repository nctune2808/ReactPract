import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isRefresh: false,
      dataSource: [],
      page: 1,
    };
  }

  getData = async () => {
    fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' +
        this.state.page,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false, //load at beginning
          isLoadMore: false, //load at bottom
          dataSource: this.state.dataSource.concat(responseJson),
        });
      });
  };

  componentDidMount() {
    this.setState({isLoadMore: true}, this.getData);
  }

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => alert(item.body)}>
        <View style={styles.item}>
          <Image source={{uri: item.url}} style={styles.itemImage} />
          <Text style={styles.text}>{item.id + ') ' + item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  handleLoadMore = () => {
    this.setState({page: this.state.page + 1, isLoadMore: true}, this.getData);
  };

  renderFooter = () => {
    return this.state.isLoadMore ? (
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  render() {
    let {dataSource, isLoading, isRefresh} = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={this.renderFooter}
            refreshing={isRefresh}
            onRefresh={this.getData}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 16,
    padding: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default App;
