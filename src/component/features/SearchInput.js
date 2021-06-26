import React, { Component } from "react";

class SearchInput extends Component {
  render() {
    return (
        <input
          className={`search__input ${this.props.className}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange} 
          value={this.props.value}
          id={this.props.id}
          autoComplete="off"
          onClick={this.props.onClick}
        />
    );
  }
}
export default SearchInput;
