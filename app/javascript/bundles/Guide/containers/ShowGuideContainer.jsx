// Simple example of a React "smart" component

import { connect } from 'react-redux';
import ShowGuide from '../components/ShowGuide';
import * as actions from '../actions/guideActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ guide: state.guide });

export default connect(mapStateToProps, actions)(ShowGuide);
