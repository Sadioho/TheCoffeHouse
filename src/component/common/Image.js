import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { alt, src, className } = this.props;

    return (
      <div className={` ${className}`}>
        <img width="80px" src={src} alt={alt} />
      </div>
    );
  }
}

export default Image;
