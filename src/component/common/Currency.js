import React, { Component } from "react";

class Currency extends Component {
  render() {
    return (
      <p className={`currency ${this.props.className}`}>
        {this.props.price} <span className="text-underline  ">đ</span>
      </p>
    );
  }
}

export default Currency;
