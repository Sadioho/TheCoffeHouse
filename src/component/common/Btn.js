import React, { Component } from 'react';
// import Currency from "./Currency";

class Btn extends Component {
  render() {
    const { className, onClick, text } = this.props;
    return (
      <a href="/#" className={`btn ${className}`} onClick={onClick}>
        {text}
      </a>
    );
  }
}

export default Btn;
