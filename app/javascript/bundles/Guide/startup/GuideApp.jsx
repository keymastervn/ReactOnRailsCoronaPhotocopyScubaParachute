import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/guideStore';
import GuideContainer from '../containers/GuideContainer';
import DataTableContainer from '../containers/DataTableContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const GuideApp = (props) => (
  <Provider store={configureStore(props)}>
    <GuideContainer />
    <DataTableContainer />
  </Provider>
);

export default GuideApp;
