import React from 'react';
import { Provider } from 'react-redux';

// import guideStore from '../store/guideStore';
import ReactOnRails from 'react-on-rails';
import DataTableContainer from '../containers/DataTableContainer';
import { DataTableRedux } from 'redux-remote-datatable';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.

const GuideDataTableApp = (props) => {
  // let store = guideStore(props);
  const guideStore = ReactOnRails.getStore("guideStore");

  return (
    <Provider store={guideStore}>
      <DataTableContainer />
    </Provider>
  )
};
export default GuideDataTableApp;
