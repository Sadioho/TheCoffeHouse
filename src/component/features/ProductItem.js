import React, { Component } from 'react';
import Currency from '../common/Currency';
import Image from '../common/Image';
import BtnAdd from '../common/BtnAdd';

class ProductItem extends Component {
  render() {
    const { onClick, image, product_name, description, price } = this.props;
    return (
      <div className="product" onClick={onClick}>
        <div className="product__item">
          <Image className="product__item-img" src={image} alt="img tea" />
          <div className="product__item-content">
            <p className="product__item-content-title">{product_name}</p>
            <p className=" product__item-content-text">{description}</p>
            <span className="product__item-price">
              <Currency
                className="size-currency-1"
                price={price.toLocaleString()}
              />
              <BtnAdd className="fas fa-plus" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;
