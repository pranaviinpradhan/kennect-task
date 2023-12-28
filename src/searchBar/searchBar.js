// SearchBar.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../Action/actions";
import "./searchBar.css";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search);

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <button type="submit" class="searchButton" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
