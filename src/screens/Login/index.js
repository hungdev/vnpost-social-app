import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { setAuth } from '../../actions/authAction';


class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <TouchableOpacity
          onPress={() => this.props.dispatchSetAuth('cee')}>
          <Text>Move to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
