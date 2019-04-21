import { combineReducers } from 'redux';
import * as types from '../constants/guideTypes';

const guides = (state = '', action) => {
  switch (action.type) {
    case types.FETCH_DATA_ON_SEARCH_TO_STORE:
      return action.payload;
    default:
      return state;
  }
};

const guideReducer = combineReducers({
  guides
});

export default guideReducer;
