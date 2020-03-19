b1: 
import { connect } from 'react-redux';

copy đoạn dưới vứt xuống cuối cùng của file, và thay đổi Home
function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetAuth: (detail) => dispatch(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

b3:
tạo action

tạo 1 file action

mở file index.js trong folder action
rồi import cái file action nãy vừa tạo trên

b4: tạo reducer
tao 1 file reducer
mở file index.js trong folder reducer
rồi import cái file reducer nãy vừa tạo trên

