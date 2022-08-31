import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = (props) => {
  const [nameEntered, setNameEntered] = useState("");
  const movieNameChangeHandler = (event) => {
    setNameEntered(event.target.value);
  };

  const searchMovieNameHandler = (event) => {
    event.preventDefault();
    props.storeNameEntered(nameEntered);
  };

  const resetNameEnteredHandler = () => {
    console.log("reset");
    setNameEntered("");
    props.storeNameEntered("");
    props.storeDisplayStateValue(); // khi ấn nút Reset thì kích hoạt hàm, hàm này sẽ đảo giá trị displayStateValue state ở Search component
  };

  return (
    <div className="searchForm-container d-flex justify-content-center">
      <form className="searchForm-form align-self-center">
        <div className="search-box row mt-2">
          <label htmlFor="name-movie">
            <input
              type="text"
              id="name-movie"
              className="searchForm-input col-10"
              onChange={movieNameChangeHandler}
              value={nameEntered}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon col-2" />
          </label>
        </div>
        <hr className="searchForm-line mt-1" />
        <div className="button-container d-sm-flex justify-content-end">
          <button
            type="button"
            className="reset-btn button me-1"
            onClick={resetNameEnteredHandler}
          >
            RESET
          </button>
          <button
            type="submit"
            className="search-btn button"
            onClick={searchMovieNameHandler}
          >
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
