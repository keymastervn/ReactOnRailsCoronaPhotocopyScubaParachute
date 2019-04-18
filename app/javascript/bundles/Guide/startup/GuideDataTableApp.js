import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/guideStore';
import DataTableContainer from '../containers/DataTableContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.

const GuideDataTableApp = (props) => {
  let store = configureStore(props);
  return (
    <Provider store={store}>
      <DataTableContainer store={store} />
    </Provider>
  )
};
export default GuideDataTableApp;
