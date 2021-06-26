import React, { Component } from "react";
// import Currency from "./Currency";

class Btn extends Component {
  render() {
    return (
      <a href="/#" className={`btn ${this.props.className}`}  onClick={this.props.onClick}>
             {this.props.text}
      </a>
    );
  }
}

export default Btn;