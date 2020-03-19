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
    // tenAction()
    dispatchTenAction (data) => dispatch(tenAction(data)),
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

b5: quay về màn hình view

muốn gửi 1 cái gì đó lên redux

tại button onPress gọi this.props.dispatchSetAbc(data)  truyền vào data nếu có, ko có thì để trống

muốn lấy về thì dùng this.props.tenData ở hàm mapStateToProps

