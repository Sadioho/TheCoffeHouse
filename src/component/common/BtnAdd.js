import React, { Component } from "react";

export default class BtnAdd extends Component {
  render() {
    return <button className="btnAdd" onClick={this.props.onClick}>
      <i className={this.props.className}></i>
    </button>;
  }
}
