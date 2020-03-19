import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contents: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      // console.log('accccc', action);
      return { ...state, contents: [...state.contents, action.content] };

    default:
      return state;
  }
};

