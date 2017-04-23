import React from 'react';

export default class ProductRow extends React.Component {
  render() {
    return (
      <div className={ this.props.item.stocked ? 'product-table__item' : 'product-table__item_red' }>
        {this.props.item.name + '    ' + this.props.item.price}
      </div>
    );
  }
}