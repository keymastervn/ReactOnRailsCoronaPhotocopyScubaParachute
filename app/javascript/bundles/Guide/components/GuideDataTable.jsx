import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/guideActionCreators';
import { DataTableRedux } from 'redux-remote-datatable';

export default class GuideDataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fields = this.props.fields;
    const ajax = this.props.ajax;

    return (
      <div>
        <h3> List of Guide </h3>
      </div>
    );
  }
}

