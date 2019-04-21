import PropTypes from 'prop-types';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

const sizePerPageRenderer = ({
  options,
  currSizePerPage,
  onSizePerPageChange
}) => (
  <div className="btn-group" role="group">
    {
      options.map((option) => {
        const isSelect = currSizePerPage === `${option.page}`;
        return (
          <button
            key={ option.text }
            type="button"
            onClick={ () => onSizePerPageChange(option.page) }
            className={ `btn ${isSelect ? 'btn-primary' : 'btn-warning'}` }
          >
            { option.text }
          </button>
        );
      })
    }
  </div>
);

class Guide extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      columns: [{
        dataField: 'id',
        text: 'Guide ID',
        sort: true,
        headerStyle: (colum, colIndex) => {
          return { width: '10%', textAlign: 'center' };
        },
        align: 'center'
      }, {
        dataField: 'email',
        text: 'Email',
        sort: true
      }, {
        dataField: 'display_languages',
        text: 'Languages',
        sort: true
      }, {
        dataField: 'display_activities',
        text: 'Activity',
        sort: true
      }],
      options: {
        custom: true,
        totalSize: this.props.guides.length,
        hideSizePerPage: false,
        sizePerPageList: [{
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: 'All', value: this.props.guides.length
        }]
      },
      data: this.props.guides.slice(0, 5),
      page: 1,
      totalSize: this.props.guides.length,
      sizePerPage: 5
    }

    this.handleTableChange = this.handleTableChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData() {
    if (this.node.props.search.searchText !== undefined && this.node.props.search.searchText !== "") {
      // TODO Search remote
    }
  }

  handleTableChange(type, { page, sizePerPage, filters, sortField, sortOrder, cellEdit }) {
    var self = this;
    const currentIndex = (page - 1) * sizePerPage;

    this.fetchData()

    setTimeout(() => {
      // Handle cell editing
      if (type === 'cellEdit') {
        const { rowId, dataField, newValue } = cellEdit;
        this.props.guides = this.props.guides.map((row) => {
          if (row.id === rowId) {
            const newRow = { ...row };
            newRow[dataField] = newValue;
            return newRow;
          }
          return row;
        });
      }
      let result = this.props.guides;

      // Handle column filters
      result = result.filter((row) => {
        let valid = true;

        for (const dataField in filters) {
          const { filterVal, filterType, comparator } = filters[dataField];

          if (filterType === 'TEXT') {
            if (comparator === Comparator.LIKE) {
              valid = row[dataField].toString().indexOf(filterVal) > -1;
            } else {
              valid = row[dataField] === filterVal;
            }
          }
          if (!valid) break;
        }
        return valid;
      });
      // Handle column sort
      if (sortOrder === 'asc') {
        result = result.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return 1;
          } else if (b[sortField] > a[sortField]) {
            return -1;
          }
          return 0;
        });
      } else {
        result = result.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return -1;
          } else if (b[sortField] > a[sortField]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState(() => ({
        page,
        data: result.slice(currentIndex, currentIndex + sizePerPage),
        totalSize: result.length,
        sizePerPage
      }));
    }, 300);
  }

  render() {
    return (
      <div className="container pt-4">
        <RemoteAll
          columns={ this.state.columns }
          options={ this.state.options }
          data={ this.state.data }
          page={ this.state.page }
          sizePerPage={ this.state.sizePerPage }
          totalSize={ this.state.totalSize }
          onTableChange={ this.handleTableChange }
          container={this}
        />
      </div>
    )
  }
}

Guide.propTypes = {
  guides: PropTypes.array.isRequired,
  updateName: PropTypes.func.isRequired,
};

const CaptionElement = () => <h3 style={{
  borderRadius: '0.25em',
  textAlign: 'center',
  color: 'purple',
  border: '1px solid purple',
  padding: '0.5em' }}>
  Tourguide Management
</h3>;

const RemoteAll = ({ data, page, sizePerPage, onTableChange, totalSize, columns, options, container }) => (
  <ToolkitProvider
    keyField="id"
    data={ data }
    columns={ columns }
    search
    bootstrap4
  >
    {
      props => (
        <div>
          <PaginationProvider
            pagination={ paginationFactory(
              Object.assign({}, options)
            ) }
          >
            {
              ({
                paginationProps,
                paginationTableProps
              }) => (
                <div>
                  <span style={{display: 'inline', float: 'left'}}>
                    <SizePerPageDropdownStandalone
                      { ...paginationProps }
                    />
                  </span>
                  <span style={{display: 'inline', float: 'right'}}>
                    <SearchBar
                      { ...props.searchProps }
                      // delay={ 1000 }
                    />
                  </span>

                  <div>
                    <BootstrapTable { ...props.baseProps }
                      { ...paginationTableProps }
                      ref={ n => container.node = n }
                      caption={<CaptionElement />}
                      striped
                      hover
                      condensed
                      remote
                      onTableChange={ onTableChange }
                    />
                  </div>

                  <span style={{display: 'inline', float: 'left'}}>
                    <PaginationTotalStandalone
                      { ...paginationProps }
                    />
                  </span>
                  <span style={{display: 'inline', float: 'right'}}>
                    <PaginationListStandalone
                      { ...paginationProps }
                    />
                  </span>
                </div>
              )
            }
          </PaginationProvider>
        </div>
      )
    }
  </ToolkitProvider>
)

export default Guide;
