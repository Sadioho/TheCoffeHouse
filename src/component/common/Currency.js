import React, { Component } from 'react';

class Currency extends Component {
  render() {
    const { price, className } = this.props;
    return (
      <p className={`currency ${className}`}>
        {price} <span className="text-underline  ">đ</span>
      </p>
    );
  }
}

export default Currency;
