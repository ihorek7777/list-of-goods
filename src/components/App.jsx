import React from 'react';
import FilterableProductTable from './FilterableProductTable.jsx';



var goods = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Food", price: "$10.99", stocked: true, name: "Pasta"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


export default class App extends React.Component {
	render() {
		return (
			<FilterableProductTable goods={goods} />
		)
	}
}