import PropTypes from 'prop-types';
import React from 'react';
import { DataTableRedux as DataTable } from 'redux-remote-datatable';

const GuideDataTable = ({ fields, ajaxUrl }) => (
  <DataTable
    fields={fields}
    ajax={ajaxUrl}
    idField="id" />
);

export default GuideDataTable;