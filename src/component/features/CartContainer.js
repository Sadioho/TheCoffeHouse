import React, { Component } from "react";
import Btn from "../common/Btn";
import Currency from "../common/Currency";
import SearchInput from "./SearchInput";

class CartContainer extends Component {
  getDataCart = (item, index) => {
    // console.log(item.txtNote);
    this.props.editDataProduct(item, index);
  };

  render() {
    let { listOrder } = this.props;
    let shipPrice = 0;
    if (this.props.totalPrice > 50000) {
      shipPrice = 0;
    } else {
      shipPrice = 10000;
    }

    return (
      <div className="coupon">
        <div className="coupon__header">
          <Btn
            href="/#"
            className="btn-orange btn-size-lager"
            text="Xem giỏ hàng"
          />
        </div>

        {listOrder !== null &&
          listOrder.map((item, index) => (
            <div
              className="product__detail"
              key={index}
              onClick={() => this.getDataCart(item, index)}
            >
              <span className="product__detail-amount">{item.amount}</span>
              <div className="product__detail-text">
                <p className="product__detail-product_name">
                  {item.product_name}
                </p>
                <p className="product__detail-size">
                  {item.variants.map(
                    (i) =>
                      i.code === item.sizeActive && (
                        <span key={i.code}>
                          {i.val}
                          {item.toppingActive.length > 0 && "+"}
                        </span>
                      )
                  )}

                  {item.topping_list.map((i, index) =>
                    item.toppingActive.includes(i.code)
                      ? i.product_name +
                        (index < item.toppingActive.length - 1 ? "+" : "")
                      : null
                  )}
                </p>
                <p className="product__detail-note">{item.txtNote}</p>
              </div>
              <Currency price={item.price_new.toLocaleString()} />
            </div>
          ))}

        <div className="coupon__detail">
          <div className="coupon__detail-currency">
            <p className="coupon__detail-sum">
              Cộng ({this.props.totalAmount} món)
            </p>
            <Currency price={this.props.totalPrice.toLocaleString()} />
          </div>
          <div className="coupon__detail-currency">
            <p>Vận chuyển</p>
            <Currency price={shipPrice.toLocaleString()} />
          </div>
          <form className="coupon__detail-sale">
            <SearchInput
              className="size-small"
              type="text"
              placeholder="Nhập mã ưu đãi tại đây"
            />
            <Btn href="/#" className="btn-orange btn-fix" text="  Áp dụng" />
          </form>
        </div>

        <div className="coupon__detail-currency">
          <p>Tổng cộng</p>
          <Currency
            className="size-currency-2"
            price={(this.props.totalPrice + shipPrice).toLocaleString()}
          />
        </div>
      </div>
    );
  }
}
export default CartContainer;
