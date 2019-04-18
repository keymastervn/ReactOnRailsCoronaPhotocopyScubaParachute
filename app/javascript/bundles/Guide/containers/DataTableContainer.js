// Simple example of a React "smart" component
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/guideActionCreators';
import { DataTableRedux } from 'redux-remote-datatable';

function connectWithStore(store, WrappedComponent, ...args) {
  var ConnectedWrappedComponent = connect(...args)(WrappedComponent)
  return function (props) {
    return <ConnectedWrappedComponent {...props} store={store} />
  }
}

const mapStateToProps = (state) => ({
  fields: state.fields,
  ajax: state.ajax
});

class GuideDataTable extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const fields = this.props.fields;
    const ajax = this.props.ajax;
    const DataTableRedux = connectWithStore(this.props.store, DataTableRedux, mapStateToProps)

    const z = <DataTableRedux
        fields={{"Name": "official_name", "Birthday": "birthday", "Thomas ID": "thomas_id" }}
        ajax={`https://legislators.kenforthewin.com/api/legislators`}
        idField="id" />
        debugger
    return (
      <div>
        <h3> List of Guide </h3>
      </div>
    );
  }
}

// const mapStatetoProps = (state)=>{
//     return {
//         num : state.counter.num
//     }
// }

export default connect(mapStateToProps, actions)(GuideDataTable);



