import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/guideConstants';
import { dataTableReducer } from 'redux-remote-datatable'

const mainReducer = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const guideReducer = combineReducers({
  mainReducer,
  dataTableReducer
});

export default guideReducer;
