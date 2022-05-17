import React, { Component } from 'react';

export default class BtnAdd extends Component {
  render() {
    const { onClick, className } = this.props;
    return (
      <button className="btnAdd" onClick={onClick}>
        <i className={className}></i>
      </button>
    );
  }
}
