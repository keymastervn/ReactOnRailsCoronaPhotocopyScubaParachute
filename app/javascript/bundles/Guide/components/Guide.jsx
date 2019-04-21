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

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];

class Guide extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      guides: [
        {
          id: 1,
          name: "Dat",
          price: 999
        },
        {
          id: 2,
          name: "Mami",
          price: 9999
        },
        {
          id: 3,
          name: "Nguyen",
          price: 999
        },
        {
          id: 4,
          name: "Keita",
          price: 999
        },
        {
          id: 5,
          name: "Vu",
          price: 999
        },
        {
          id: 6,
          name: "Jimmy",
          price: 323
        },
        {
          id: 7,
          name: "Hien",
          price: 100
        },
        {
          id: 8,
          name: "Ha",
          price: 500
        },
        {
          id: 9,
          name: "Tram",
          price: 99
        },
        {
          id: 10,
          name: "Tuan Dao",
          price: 212
        },
        {
          id: 11,
          name: "Dat",
          price: 786
        },
        {
          id: 12,
          name: "Tuan Nguyen",
          price: 32323
        },
        {
          id: 13,
          name: "Truong Luong",
          price: 1234
        }
      ]
    }
  }

  render() {
    const { guides } = this.props;
    const { updateName } = this.props;
    const options = {
      custom: true,
      totalSize: this.state.guides.length,
      hideSizePerPage: false,
      sizePerPageList: [{
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: this.state.guides.length
      }]
    };

    return (
      <div className="container pt-4">
        <ToolkitProvider
          keyField="id"
          data={ this.state.guides }
          columns={ columns }
          search
          bootstrap4
        >
          {
            props => (
              <div>
                <PaginationProvider
                  pagination={ paginationFactory(options) }
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
                            delay={ 1000 }
                          />
                        </span>

                        <div>
                          <BootstrapTable { ...props.baseProps }
                          { ...paginationTableProps }
                            striped
                            hover
                            condensed
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

      </div>
    )
  }
}

Guide.propTypes = {
  guides: PropTypes.array.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default Guide;
