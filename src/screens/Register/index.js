import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { setAuth } from '../../actions/authAction';
import { Images, Metrics, Fonts, Colors } from '../../themes';
import { register } from '../../services/Api';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: 'vnpost1@mail.com',
        password: '123456',
        userName: 'vnpost1',
      },
    };
  }

  onChangeText(text, type) {
    this.setState({ data: { ...this.state.data, [type]: text } });
  }

  async onRegister() {
    // alert(JSON.stringify(this.state.data));
    try {
      const result = await register(this.state.data);
      this.props.navigation.pop();
      // console.log('result', result.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data, user } = this.state;
    // const data = this.state.data
    // const user = this.state.user
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          // source={require('../../assets/logo_color.png')}
          source={Images.logo}
          style={{ height: 100, width: 100, marginTop: '20%' }}
        />
        <TextInput
          value={data.email}
          onChangeText={text => this.onChangeText(text, 'email')}
          style={{
            height: 50, width: '80%',
            borderWidth: 1, borderRadius: 5,
            marginTop: Metrics.doubleSection,
            paddingLeft: 10,
          }}
          placeholder="email"
        />
        <TextInput
          value={data.userName}
          onChangeText={text => this.onChangeText(text, 'userName')}
          style={{
            height: 50, width: '80%',
            borderWidth: 1, borderRadius: 5,
            marginTop: Metrics.section,
            paddingLeft: 10,
          }}
          placeholder="user name"
        />
        <TextInput
          value={data.password}
          onChangeText={text => this.onChangeText(text, 'password')}
          style={{
            height: 50, width: '80%',
            borderWidth: 1, borderRadius: 5,
            marginTop: Metrics.section,
            paddingLeft: 10,
          }}
          placeholder="password"
        />
        <TouchableOpacity
          style={{
            height: 60,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: Metrics.doubleSection,
          }}
          onPress={() => this.onRegister()}
        >
          <Image source={Images.btnLogin}
            style={{ height: 60, width: '100%' }}
          />
          <View style={{ position: 'absolute' }}>
            <Text style={{
              fontSize: Fonts.h5,
              color: Colors.white,
              fontWeight: 'bold',
            }}>Register</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: Metrics.baseMargin }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
          >
            <Text>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({

});

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetAuth: (detail) => dispatch(setAuth(detail)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
