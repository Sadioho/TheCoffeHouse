import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    const { className, type, placeholder, handleChange, value, id, onClick } =
      this.props;
    return (
      <input
        className={`search__input ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        id={id}
        autoComplete="off"
        onClick={onClick}
      />
    );
  }
}
export default SearchInput;
