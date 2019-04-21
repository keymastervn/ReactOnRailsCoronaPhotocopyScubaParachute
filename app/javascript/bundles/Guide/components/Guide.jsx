import PropTypes from 'prop-types';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter(),
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: textFilter(),
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

        <div>
          <BootstrapTable keyField='id'
            data={ this.state.products }
            columns={ columns }
            pagination={ paginationFactory() }
            filter={ filterFactory() }
            bootstrap4 />
        </div>
      </div>
    )
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
