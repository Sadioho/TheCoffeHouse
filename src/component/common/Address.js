import React, { Component } from "react";
import logo from "../../image/location.png";

export default class Address extends Component {
  render() {
    return (
      <div
        className="header__address-content"
        onClick={this.props.addressDesciption}
      >
        <div className="header__address-icon">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="header__address-text">
          <p>{this.props.title}</p>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
