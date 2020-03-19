import * as actionTypes from './actionTypes';

export const addNote = (content) => {
  return {
    type: actionTypes.ADD_NOTE,
    content,   // content: content trong es6
  };
};

