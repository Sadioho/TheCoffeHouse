import React, { Component } from "react";

class CategoryList extends Component {

  handleActive = (data) => {
      let elm = document.getElementById(`${data}`);
      if(elm !== null){
        elm.scrollIntoView();
      }    
      this.props.changeActive(data); 
  };

  render() {

    return (
      <ul className="category-list">
        {this.props.dataCategoryList.map((listItem) =>
          listItem.listProduct.length > 0 ? (
            <li
              className={listItem.id === this.props.active ? "active-1" : null}
              key={listItem.id}
              id={"abc" + listItem.id}
              onClick={() => {
                this.handleActive(listItem.id);
              }}
            >
              <p className="category-item ">{listItem.name}</p>
            </li>
          ) : null
        )}
      </ul>
    );
  }
}
export default CategoryList;
