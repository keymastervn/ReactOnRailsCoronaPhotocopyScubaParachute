// Simple example of a React "smart" component

import { connect } from 'react-redux';
import Guide from '../components/Guide';
import * as actions from '../actions/guideActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ guides: state.guides.result });

export default connect(mapStateToProps, actions)(Guide);
