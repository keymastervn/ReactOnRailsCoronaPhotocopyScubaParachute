import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import guideReducer from '../reducers/guideReducer';

const configureStore = (railsProps) => (
  createStore(
    guideReducer,
    railsProps,
    applyMiddleware(ReduxThunk)
  )
);

export default configureStore;
