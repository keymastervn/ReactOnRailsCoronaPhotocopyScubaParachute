import { combineReducers } from 'redux';
import * as types from '../constants/guideTypes';

const guides = (state = '', action) => {
  switch (action.type) {
    case types.FETCH_DATA_ON_SEARCH_TO_STORE:
      return Object.assign({}, state, { result: action.payload })
    default:
      return state;
  }
};

const guide = (state = '', action) => {
  switch (action.type) {
    // case types.FETCH_DATA_ON_SEARCH_TO_STORE:
    //   return action.payload;
    default:
      return state;
  }
};

const reviews = (state = '', action) => {
  switch (action.type) {
    case types.SAVE_NEW_REVIEW_TO_STORE:
      state.push(action.payload)

      return [...state]
    default:
      return state;
  }
};

const guideReducer = combineReducers({
  guides,
  guide,
  reviews
});

export default guideReducer;
