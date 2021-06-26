import React, { Component } from "react";
import SearchInput from "./SearchInput";
import Image from "../common/Image";
import BtnAdd from "../common/BtnAdd";
import Btn from "../common/Btn";

export default class Order extends Component {
  componentDidMount() {
    if (this.props.sizeActive === null) {
      let a = document.querySelector("input[checked]").getAttribute("id");
      if (a !== null) {
        this.props.getSize(a, this.props.price_new);
      }
    }
  }

  onChangeInput = (e) => {
    this.props.setTxtNote(e.target.value);
  };

  render() {
    let {
      dataItem,
      addToCartV2,
      getSize,
      getCheck,
      plusAmount,
      minusAmount,
      sizeActive,
      price_new,
      toppingActive,
      amount,
      txtNote,
      onClick,
      src,
      product_name,
    } = this.props;

    return (
      <div>
        <div className="overlay" onClick={onClick}></div>
        <div className="container_order">
          <div className="header_order">
            <Image className="product__item-img" src={src} />
            <div className="header_order_text">
              <h4>{product_name}</h4>
              <h5>
                {dataItem.variants.map(
                  (item) => item.code === sizeActive && item.val
                )}
              </h5>
              <h5>
                {dataItem.topping_list.map((item, index) =>
                  toppingActive.includes(item.code)
                    ? item.product_name +
                      (index < toppingActive.length - 1 ? "+" : "")
                    : null
                )}
              </h5>
            </div>
            <div className="icon-close" onClick={onClick}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="body_order">
            <div className="body_order_text">
              <h5>Loại</h5>
              <h5>Size</h5>
            </div>
            <div className="check_size">
              {dataItem.variants.map((item, index) => (
                <div key={item.code} className="radio_check">
                  <input
                    defaultChecked={
                      sizeActive === item.code ? true : index === 0
                    }
                    type="radio"
                    id={item.code}
                    name="vehicle1"
                    defaultValue={item.val}
                    onClick={() => getSize(item.code, item.price)}
                  />
                  <label htmlFor={item.code}>
                    {`${item.val} (${item.price - dataItem.variants[0].price})`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {dataItem.topping_list.length !== 0 && (
            <div className="body_order">
              <div className="body_order_text">
                <h5>Topping</h5>
              </div>
              <div className="check_size">
                {dataItem.topping_list.map((item) => (
                  <div key={item.code} className="radio_check">
                    <input
                      defaultChecked={toppingActive.includes(item.code)}
                      type="checkbox"
                      id={item.code}
                      name={item.product_name}
                      defaultValue={item.product_name}
                      onClick={() => getCheck(item)}
                    />
                    <label htmlFor={item.code}>
                      {`${item.product_name} ( + ${item.price} ) `}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="footer_order">
            <div className="search-input">
              <i className="fas fa-pen"></i>
              <SearchInput
                type="text"
                className="size-100"
                placeholder="Ghi chú thêm"
                value={txtNote || ""}
                id="form-order"
                handleChange={this.onChangeInput}
              />
            </div>
            <div className="footer_order_button">
              <div className="footer_order_button-amount">
                <BtnAdd className="fa fa-minus" onClick={minusAmount} />
                <h5>{amount}</h5>
                <BtnAdd className="fa fa-plus" onClick={plusAmount} />
              </div>
              <div className="footer_order_button-pay">
                <Btn
                  className="btn-orange"
                  href="/#"
                  text={`Đặt hàng  ${(price_new * amount).toLocaleString()} đ`}
                  onClick={addToCartV2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
