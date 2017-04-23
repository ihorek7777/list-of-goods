import React from 'react';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }
  render() {
    return (
      <div className="search-bar">
        <input 
          onChange={this.handleFilterTextInputChange}
          value={this.props.filterText}
          type="text"
          className="search-bar__input"
          placeholder="Search..."/>
        <br/>
        <input
          onChange={this.handleInStockInputChange}
          
          className="search-bar__check" 
          type="checkbox"/>
        {' Only show products in stock'}
      </div>
    );
  }
};