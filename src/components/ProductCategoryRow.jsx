import React from 'react';
import ProductRow from './ProductRow';

export default class ProductCategoryRow extends React.Component {
  render() {
    return (
      <div className={'product-table__category'}>
       
        { this.props.goodsOfCategory.length ? 
          <span className={'category__head'}>{this.props.category}</span> : 
          ''
        }
        
        {this.props.goodsOfCategory.map((item, index) => 
          <ProductRow 
            key={index}
            item={item}
            category={this.props.category} />
        )}
      </div>      
    );
  }
}