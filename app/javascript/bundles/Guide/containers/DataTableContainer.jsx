// Simple example of a React "smart" component
import { connect } from 'react-redux';
import * as actions from '../actions/guideActionCreators';
import GuideDataTable from '../components/GuideDataTable';

const mapStateToProps = (state) => ({
  fields: state.fields,
  ajax: state.ajax
});

export default connect(mapStateToProps, actions)(GuideDataTable);



