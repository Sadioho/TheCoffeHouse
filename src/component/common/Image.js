import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div className={` ${this.props.className}`} >
            <img width="80px"  src={this.props.src} alt={this.props.alt}/>
      </div>
    );
  }
}

export default Image;
