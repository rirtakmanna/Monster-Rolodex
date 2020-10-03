import React from "react";
import "./Search-Box.style.scss";

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
