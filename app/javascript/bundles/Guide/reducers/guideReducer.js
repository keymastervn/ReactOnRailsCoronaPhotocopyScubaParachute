import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/guideConstants';
import { dataTableReducer } from 'redux-remote-datatable'

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
  dataTableReducer
});

export default guideReducer;
