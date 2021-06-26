import React, { Component } from "react";
import Btn from "../common/Btn";
import Currency from "../common/Currency";
import Header from "../layout/Header";
import SearchInput from "../features/SearchInput";
import RectShape from "./RectShape";
import Row from "./Row";

export default class PlacehoderLoading extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="col-left">
                <Row className="width-small"></Row>
                <Row className="width-small"></Row>
                <Row className="width-small"></Row>
                <Row className="width-small"></Row>
                <Row className="width-small"></Row>
                <Row className="width-small"></Row>
                <Row className="width-small"></Row>
                <Row className="width-small"></Row>
                <Row className="width-small"></Row>
              </div>
              <div className="col-product ">
                <SearchInput
                  type="text"
                  className="size-100"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <div className="product-pla">
                  <RectShape></RectShape>
                  <div>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                  </div>
                </div>
                <div className="product-pla">
                  <RectShape></RectShape>
                  <div>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                  </div>
                </div>
                <div className="product-pla">
                  <RectShape></RectShape>
                  <div>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                  </div>
                </div>
                <div className="product-pla">
                  <RectShape></RectShape>
                  <div>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                  </div>
                </div>
                <div className="product-pla">
                  <RectShape></RectShape>
                  <div>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                  </div>
                </div>

                <div className="product-pla">
                  <RectShape></RectShape>
                  <div>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                    <Row className="width-medium"></Row>
                  </div>
                </div>
              </div>
              <div className="col-right">
                <div className="coupon">
                  <div className="coupon__header">
                    <Btn
                      className="btn-orange btn-size-lager"
                      text="Xem giỏ hàng"
                    />
                  </div>

                  <div className="coupon__detail">
                    <div className="coupon__detail-currency">
                      <p className="coupon__detail-sum">Cộng (0 món)</p>

                 
                    </div>

                    <div className="coupon__detail-currency">
                      <p>Vận chuyển</p>
                      <Currency className="size-currency-1" />
                      
                    </div>
                    <form className="coupon__detail-sale">
                      <SearchInput
                        className="size-small"
                        type="text"
                        placeholder="Nhập mã ưu đãi tại đây"
                      />
                      <Btn className="btn-orange btn-fix" text="  Áp dụng" />
                    </form>
                  </div>

                  <div className="coupon__detail-currency">
                    <p>Tổng cộng</p>
                    <Currency className="size-currency-2" price="0" />
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
