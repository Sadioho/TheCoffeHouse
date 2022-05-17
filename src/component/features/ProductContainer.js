import React, { Component, memo } from 'react';
import error from '../../image/search.png';
import ProductList from './ProductList';
import SearchInput from './SearchInput';

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
    };
  }
  // Khi scroll active
  activeCategory = (data) => {
    let unActive = document.querySelectorAll('.active-1').length;
    if (unActive > 0) {
      document.querySelector('.active-1').classList.remove('active-1');
    }
    document.getElementById('abc' + data).classList.add('active-1');
  };

  // tinh khoang cach scroll
  scrollWindow = () => {
    let a = window.scrollY + 100;
    let sections = document.querySelectorAll('.product-list-item');
    sections.forEach((curent) =>
      document.getElementById(curent.id).offsetTop <= a &&
      a <=
        document.getElementById(curent.id).offsetTop +
          document.getElementById(curent.id).offsetHeight
        ? this.activeCategory(curent.id)
        : null
    );
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollWindow);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollWindow);
  }

  render() {
    let dataList = this.props.data;
    console.log('🚀 ~ ProductContainer ~ render ~ dataList', dataList);
    let dataProduct = [];

    dataList.map((item) =>
      item.listProduct.length > 0 ? dataProduct.push(item.listProduct) : null
    );

    let dataProductFilter = dataProduct.map((item) =>
      item.filter((i) =>
        i.product_name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
      )
    );

    let result = dataProductFilter.some((item) => item.length > 0);
    // console.log(result);

    if (!result) {
      return (
        <div className="product-container">
          <div className="search-input">
            <i className="fas fa-search"></i>

            <SearchInput
              type="text"
              className="size-100"
              placeholder="Tìm kiếm sản phẩm"
              handleChange={(e) =>
                this.setState({ searchField: e.target.value })
              }
            />
          </div>
          <div className="none-data">
            <img src={error} alt="#" />
            <h1>Rất tiết chúng tôi không có sản phẩm</h1>
          </div>
        </div>
      );
    } else
      return (
        <div className="product-container">
          <div className="search-input">
            <i className="fas fa-search"></i>

            <SearchInput
              type="text"
              className="size-100"
              placeholder="Tìm kiếm sản phẩm"
              handleChange={(e) =>
                this.setState({ searchField: e.target.value })
              }
            />
          </div>
          {dataList.map((item) =>
            item.listProduct.length > 0 ? (
              <ProductList
                key={item._id}
                dataItem={item}
                dataSearch={this.state.searchField}
                id_scroll={item.id}
                getDataItem={this.props.getDataItem}
              ></ProductList>
            ) : null
          )}
        </div>
      );
  }
}

export default memo(ProductContainer);
