import * as actionTypes from '../actions/actionTypes';

const initialAuthState = {
  user: 'hello@cee',
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return { ...state, user: action.detail };
    case actionTypes.REMOVE_AUTH:
      return { ...state, user: '' };

    default:
      return state;
  }
};

