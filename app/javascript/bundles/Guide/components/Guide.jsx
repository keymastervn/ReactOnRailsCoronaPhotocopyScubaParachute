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

    const invisibleTestComp = (
      <div>
        <h3>
          Hello, {guides}!
        </h3>
        <hr />
        <form >
          <label htmlFor="guides">
            Say hello to:
          </label>
          <input
            id="guides"
            type="text"
            value={guides}
            onChange={(e) => updateName(e.target.value)}
          />
        </form>
      </div>
    )
    return (
      <div className="container">
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
                <SearchBar
                  { ...props.searchProps }
                  delay={ 1000 }
                />
                <hr />
                <BootstrapTable { ...props.baseProps } pagination={ paginationFactory() } />
              </div>
            )
          }
        </ToolkitProvider>

      </div>
    )
  }
}

HelloWorld.propTypes = {
  guides: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
