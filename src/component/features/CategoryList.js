import React, { Component } from 'react';
import _size from 'lodash/size';
import _map from 'lodash/map';
class CategoryList extends Component {
  handleActive = (data) => {
    let elm = document.getElementById(`${data}`);
    if (elm !== null) {
      elm.scrollIntoView();
    }
    this.props.changeActive(data);
  };

  render() {
    const { dataCategoryList, active } = this.props;
    return (
      <ul className="category-list">
        {_map(dataCategoryList, (listItem) =>
          _size(listItem.listProduct) > 0 ? (
            <li
              className={listItem.id === active ? 'active-1' : null}
              key={listItem.id}
              id={'abc' + listItem.id}
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
