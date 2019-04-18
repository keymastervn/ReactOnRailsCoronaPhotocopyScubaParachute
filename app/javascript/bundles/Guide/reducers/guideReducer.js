import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/guideConstants';
import { dataTableReducer } from 'redux-remote-datatable'

const initialState = {};
const defaultStateReducer = (state = initialState) => {
  return state
};

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const guideReducer = combineReducers({
  name,
  fields: defaultStateReducer,
  ajax: defaultStateReducer,
  dataTableReducer
});

export default guideReducer;
