// Simple example of a React "smart" component

import { connect } from 'react-redux';
import GuideDataTable from '../components/DataTable';
import * as actions from '../actions/guideActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({
  fields: state.fields,
  ajaxUrl: state.ajaxUrl
});

export default connect(mapStateToProps, actions)(GuideDataTable);
