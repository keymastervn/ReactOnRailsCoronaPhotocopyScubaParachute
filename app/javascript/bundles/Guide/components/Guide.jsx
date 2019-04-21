import PropTypes from 'prop-types';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

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

class HelloWorld extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      products: [
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
      ]
    }
  }

  render() {
    const { name } = this.props;
    const { updateName } = this.props;
    return (
      <div className="container">
        <h3>
          Hello, {name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => updateName(e.target.value)}
          />
        </form>

        <ToolkitProvider
          keyField="id"
          data={ this.state.products }
          columns={ columns }
          pagination={ paginationFactory() }
          search
          bootstrap4
        >
          {
            props => (
              <div>
                <SearchBar { ...props.searchProps } />
                <hr />
                <BootstrapTable { ...props.baseProps } />
              </div>
            )
          }
        </ToolkitProvider>

      </div>
    )
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
