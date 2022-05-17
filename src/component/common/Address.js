import React, { Component } from 'react';
import logo from '../../image/location.png';

export default class Address extends Component {
  render() {
    const { addressDesciption, title, description } = this.props;
    return (
      <div className="header__address-content" onClick={addressDesciption}>
        <div className="header__address-icon">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="header__address-text">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
