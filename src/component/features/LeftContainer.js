import React, { Component } from 'react';
import CategoryList from './CategoryList';

class LeftContainer extends Component {
  render() {
    const { dataLeft, changeActive, active } = this.props;
    return (
      <div className="left-container">
        <CategoryList
          dataCategoryList={dataLeft}
          changeActive={changeActive}
          active={active}
        />
      </div>
    );
  }
}
export default LeftContainer;
