import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { addNote } from '../../actions/noteAction';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Metrics } from '../../themes';
import { CardView } from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Array(10).fill('').map((e, i) => ({
        id: i,
        content: 'hello' + i,
        like: 5,
      })),
    };
  }

  componentDidMount() {
    console.log('naviagtion', this.props.navigation);
    this.props.navigation.setOptions({
      headerRight: () => <Text style={{ color: 'black' }}>abc</Text>,
    });
  }

  renderHeader() {
    return (
      <CardView>
        <View style={{ flexDirection: 'row', alignContent: 'center', padding: Metrics.doubleBaseMargin }}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/47.jpg' }}
            style={{ height: 40, width: 40, borderRadius: 20 }}
          />
          <Text style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            marginLeft: Metrics.baseMargin,
          }}>What's on your mind?</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Entypo name="camera" size={30} color="#900" style={{ marginRight: Metrics.baseMargin }} />
          <Text>Photo</Text>
        </View>
      </CardView>
    );
  }

  renderItem() {
    return (
      <CardView style={{ marginVertical: Metrics.smallMargin }}>
        <View style={{ flexDirection: 'row', alignContent: 'center', padding: Metrics.doubleBaseMargin }}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/47.jpg' }}
            style={{ height: 40, width: 40, borderRadius: 20 }}
          />
          <View style={{ marginLeft: Metrics.baseMargin }}>
            <Text style={{
              fontWeight: 'bold',
            }}>User Name</Text>
            <Text>time ago</Text>
          </View>
        </View>
        <Text style={{ marginVertical: Metrics.baseMargin }}>content</Text>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYw6wv-z5stibs0gf-lAd4R_Lf1dBn6SqkReflfshtPW_HC23K&usqp=CAU' }}
          style={{ height: 200, width: '100%' }}
        />
        <View style={{
          marginTop: Metrics.baseMargin,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: Metrics.baseMargin,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="like1" size={30} color="blue" style={{ marginRight: Metrics.baseMargin }} />
            <Text>5 likes</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="share" size={30} color="#900" style={{ marginRight: Metrics.baseMargin }} />
            <Text>share</Text>
          </View>

        </View>
      </CardView>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'grey' }}>
        <FlatList
          data={this.state.data}
          ListHeaderComponent={() => this.renderHeader()}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

// lấy state từ store redux
function mapStateToProps(state) {
  return {
    // note lấy trong index.js trong folder reducer
    data: state.note.contents,
  };
}

// gửi action
function mapDispatchToProps(dispatch) {
  return {
    // addNote là action được import ở trên
    dispatchAddNote: (content) => dispatch(addNote(content)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
