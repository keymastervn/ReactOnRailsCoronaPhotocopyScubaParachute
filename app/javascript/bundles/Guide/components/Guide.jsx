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
        sort: true
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
      }
    }
  }

  render() {
    const { guides } = this.props;
    const { updateName } = this.props;

    const CaptionElement = () => <h3 style={{
        borderRadius: '0.25em',
        textAlign: 'center',
        color: 'purple',
        border: '1px solid purple',
        padding: '0.5em' }}>
        Tourguide Management
      </h3>;

    return (
      <div className="container pt-4">
        <ToolkitProvider
          keyField="id"
          data={ guides }
          columns={ this.state.columns }
          search
          bootstrap4
        >
          {
            props => (
              <div>
                <PaginationProvider
                  pagination={ paginationFactory(this.state.options) }
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
                            caption={<CaptionElement />}
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
