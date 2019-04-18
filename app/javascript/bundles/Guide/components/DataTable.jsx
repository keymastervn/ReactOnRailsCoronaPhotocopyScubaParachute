// import React from 'react';
// import { DataTableRedux } from 'redux-remote-datatable';

// const GuideDataTable = ({ fields, ajax }) => (
//   <div>
//     <h3> List of Guide </h3>
//     <DataTableRedux
//       fields={{fields}}
//       ajax={`https://localhost:3000/${ajax}`}
//       idField="id" />
//   </div>
// );

// export default GuideDataTable;

// export default class GuideDataTable extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const fields = this.props.fields;
//     const ajax = this.props.ajax;

//     const z = <DataTableRedux
//         fields={{fields}}
//         ajax={`https://localhost:3000/${ajax}`}
//         idField="id" />

//     return (
//       <div>
//         <h3> List of Guide </h3>
//         {z}
//       </div>
//     );
//   }
// }

