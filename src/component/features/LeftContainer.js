import React, { Component } from "react";
import CategoryList from "./CategoryList";

class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container"> 
        <CategoryList
          dataCategoryList={this.props.dataLeft}
          changeActive={this.props.changeActive}
          active={this.props.active}
        /> 
      </div>
    );
  }
}
export default LeftContainer;
