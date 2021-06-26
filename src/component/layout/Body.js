import React, { Component } from "react";
import LeftContainer from "../features/LeftContainer";
import ProductContainer from "../features/ProductContainer";
import CartContainer from "../features/CartContainer";
import PlacehoderLoading from "../placehoders/PlacehoderLoading";
import NoneData from "../placehoders/NoneData";
import Order from "../features/Order";

class Body extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      loading: true,
      listCategory: [],
      active: null,

      dataItem: null,
      layoutOrder: false,
      listOrder: [],
      sizeActive: null,
      price_new: null,
      toppingActive: [],
      amount: null,
      txtNote: null,
      indexEdit: -1,
      totalAmount: 0,
      totalPrice: 0,
    };
  }

  // active category
  changeActive = (id) => {
    this.setState({
      active: id,
    });
  };

  //merger data
  merge = (data1, data2) => {
    data1.map((category) => {
      let arr = [];
      data2.map((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
        return arr;
      });
      category.listProduct = arr;
      return category;
    });
    return data1;
  };

  // fetch api
  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((res) => res.json())
      .then((data1) => {
        if (data1.status_code !== 500) {
          fetch("https://api.thecoffeehouse.com/api/v2/menu")
            .then((res) => res.json())
            .then((data2) => {
              if (data2.status_code !== 500) {
                let newData = this.merge(data1, data2.data);
                this.setState({
                  listCategory: newData,
                  loading: false,
                  active: newData[0].id,
                });
              }
            });
        }
      });

    if (
      JSON.parse(localStorage.getItem("listOrder")) &&
      JSON.parse(localStorage.getItem("listOrder")).length > 0
    ) {
      this.setState({
        listOrder: JSON.parse(localStorage.getItem("listOrder")),
      });
      this.getTotalAmount(JSON.parse(localStorage.getItem("listOrder")));
    }
  }
  // get dataitem
  getDataItem = (data) => {
    this.setState({
      dataItem: data,
      layoutOrder: true,
      price_new: data.price,
      amount: 1,
      sizeActive: null,
      toppingActive: [],
      txtNote:null
    });
  };

  // orderqua
  getSize = (size, price) => {
    this.setState({
      sizeActive: size,
      price_new: price,
    });
  };

  getCheck = (data) => {
    let coppyTopping = [...this.state.toppingActive];
    this.state.toppingActive.includes(data.code)
      ? (coppyTopping = this.state.toppingActive.filter(
          (item) => item !== data.code
        )) &&
        this.setState({
          toppingActive: coppyTopping,
          price_new: this.state.price_new - data.price,
        })
      : coppyTopping.push(data.code) &&
        this.setState({
          toppingActive: coppyTopping,
          price_new: this.state.price_new + data.price,
        });
  };

  plusAmount = () => {
    this.setState({
      amount: this.state.amount + 1,
    });
  };

  minusAmount = () => {
    if (this.state.amount > 0) {
      this.setState({
        amount: this.state.amount - 1,
      });
    }
  };

  setTxtNote = (data) => {
    this.setState({
      txtNote: data,
    });
  };

  addToCart = (data) => {
    let flag = 1;
    let arrEdit = [...this.state.listOrder];
    if (this.state.indexEdit !== -1) {
      arrEdit = arrEdit.filter((item, index) => index !== this.state.indexEdit);
    }
    arrEdit.map((item) =>
      item._id === data._id &&
      item.sizeActive === data.sizeActive &&
      JSON.stringify(item.toppingActive) ===
        JSON.stringify(data.toppingActive) &&
      item.txtNote === data.txtNote
        ? ((item.amount += data.amount),
          (item.price_new += data.price_new),
          (flag *= -1))
        : (flag *= 1)
    );

    if (flag === 1) {
      this.setState({
        listOrder: [...arrEdit, data].filter((item) => item.amount > 0),
      });
      this.getTotalAmount([...arrEdit, data].filter((item) => item.amount > 0));
      localStorage.setItem(
        "listOrder",
        JSON.stringify([...arrEdit, data].filter((item) => item.amount > 0))
      );
    } else {
      this.setState({
        listOrder: [...arrEdit],
      });
      this.getTotalAmount([...arrEdit]);
      localStorage.setItem("listOrder", JSON.stringify([...arrEdit]));
    }

    this.setState({
      indexEdit: -1,
      layoutOrder: false,
    });
  };
  //totalAmount
  getTotalAmount = (data) => {
    let totalAmounts = 0;
    let totalPrice = 0;
    data.map(
      (item) => (totalAmounts += item.amount) && (totalPrice += item.price_new)
    );
    this.props.setTotalAmount(totalAmounts);
    this.setState({
      totalAmount: totalAmounts,
      totalPrice: totalPrice,
    });
  };

  editDataProduct = (item, index) => {
    this.setState({
      dataItem: item,
      sizeActive: item.sizeActive,
      price_new: item.price_new / item.amount,
      toppingActive: item.toppingActive,
      amount: item.amount,
      txtNote: item.txtNote,
      indexEdit: index,
      layoutOrder: true,

    });
  };

  addToCartV2 = () => {
    let txtNote = document.getElementById("form-order").value;
    this.setState({
      txtNote: txtNote,
    });
    const objCart = {
      ...this.state.dataItem,
      price_new: this.state.price_new * this.state.amount,
      amount: this.state.amount,
      toppingActive: this.state.toppingActive,
      txtNote: this.state.txtNote,
      sizeActive: this.state.sizeActive,
    };
    this.addToCart(objCart);
  };

  render() {
    return (
      <div className="body" id="body">
        {this.state.loading ? (
          <PlacehoderLoading></PlacehoderLoading>
        ) : this.state.listCategory.length <= 0 ? (
          <NoneData></NoneData>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-left">
                <LeftContainer
                  dataLeft={this.state.listCategory}
                  changeActive={this.changeActive}
                  active={this.state.active}
                />
              </div>
              <div className="col-product ">
                <ProductContainer
                  data={this.state.listCategory}
                  changeActive={this.changeActive}
                  active={this.state.active}
                  getDataItem={this.getDataItem}
                />
              </div>
              <div className="col-right">
                <CartContainer
                  listOrder={this.state.listOrder}
                  editDataProduct={this.editDataProduct}
                  totalAmount={this.state.totalAmount}
                  totalPrice={this.state.totalPrice}
                />
              </div>
            </div>
          </div>
        )}
        {this.state.layoutOrder && (
          <Order
            src={this.state.dataItem.image}
            product_name={this.state.dataItem.product_name}
            onClick={() => this.setState({ layoutOrder: false, indexEdit: -1 })}
            dataItem={this.state.dataItem}
            addToCartV2={this.addToCartV2}
            getSize={this.getSize}
            getCheck={this.getCheck}
            plusAmount={this.plusAmount}
            minusAmount={this.minusAmount}
            setTxtNote={this.setTxtNote}
            txtNote={this.state.txtNote}
            sizeActive={this.state.sizeActive}
            price_new={this.state.price_new}
            toppingActive={this.state.toppingActive}
            amount={this.state.amount}
          />
        )}
      </div>
    );
  }
}
export default Body;
