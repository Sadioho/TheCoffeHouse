import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div className={` ${this.props.className}`}>
            <img src={this.props.src} alt={this.props.alt}/>
      </div>
    );
  }
}

export default Image;
