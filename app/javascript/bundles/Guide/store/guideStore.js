import { createStore } from 'redux';
import guideReducer from '../reducers/guideReducer';

const configureStore = (railsProps) => (
  createStore(guideReducer, railsProps)
);

export default configureStore;
