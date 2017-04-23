import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import './style/app.css';


export default class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		}
		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleInStockInput = this.handleInStockInput.bind(this);
	}
	handleFilterTextInput(filterText) {
		this.setState({
			filterText: filterText
		});
	}
	handleInStockInput(inStockOnly) {
		this.setState({
			inStockOnly: inStockOnly
		});
	}
  render() {
    return (
      <div className="app">
        <SearchBar
        	onInStockInput={this.handleInStockInput}
        	onFilterTextInput={this.handleFilterTextInput}
        	inStockOnly={this.state.inStockOnly} 
        	filterText={this.state.filterText} />
        <ProductTable 
        	inStockOnly={this.state.inStockOnly}
        	filterText={this.state.filterText}
        	goods={this.props.goods} />
      </div>
    );
  }
};
