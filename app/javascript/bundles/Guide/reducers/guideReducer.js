import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/guideConstants';

const guides = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const guideReducer = combineReducers({
  guides
});

export default guideReducer;
