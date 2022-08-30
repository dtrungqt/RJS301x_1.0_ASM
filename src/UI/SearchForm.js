import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  return (
    <div className="searchForm-container d-flex justify-content-center">
      <form className="searchForm-form align-self-center">
        <div className="search-box row">
          <label htmlFor="name-movie">
            <input
              type="text"
              id="name-movie"
              className="searchForm-input col-10"
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon col-2" />
          </label>
        </div>
        <hr className="searchForm-line" />
        <div className="button-container d-sm-flex justify-content-end">
          <button className="reset-btn button">RESET</button>
          <button type="submit" className="search-btn button">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
