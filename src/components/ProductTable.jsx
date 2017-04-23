import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';

export default class ProductTable extends React.Component {
  render() {
    let categories = [], goods = this.props.goods;
    let inStockOnly = this.props.inStockOnly;
    let filterText = this.props.filterText;

    //let products = [];
    goods.sort((a, b) => {
      return a.category > b.category ? 1 : -1;
    });

    goods.forEach(item => {
      if (categories[categories.length - 1] !== item.category) {
        categories.push(item.category);
        goods[item.category] = [];
      }

      // check for filters
      if (!inStockOnly || (inStockOnly && item.stocked)) {
        if (filterText === '' || item.name.toLowerCase().includes(filterText.toLowerCase())) { 
          goods[item.category].push(item);  
        }
      }
    });

    // additional check for search on category(in the time when on searchbox 
    // will be full name of category)
    categories.forEach(category => {
      if (filterText.toLowerCase() === category.toLowerCase()) {

        goods[category].length = 0;

        goods.forEach(item => {
          if (category === item.category) {
            goods[category].push(item);
          }
        });
      }
    });


    console.log(goods);
    return (
      <div className="product-table">
        <div className="product-table__head" >Name Price</div>
        {categories.map((category, index) => 
            <ProductCategoryRow 
              goodsOfCategory={goods[category]}
              category={category}
              key={index} />   
        )}
      </div>
    );
  }
}