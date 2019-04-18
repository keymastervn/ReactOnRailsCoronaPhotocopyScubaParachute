import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

import guideReducer from '../reducers/guideReducer';

const configureStore = (railsProps) => (
  createStore(
    guideReducer,
    railsProps,
    applyMiddleware(loggerMiddleware)
  )
);

export default configureStore;
