import React from "react";
import NavBar from "../../UI/NavBar";
import SearchForm from "../../UI/SearchForm";
import ResultList from "../../UI/ResultList";

const Search = () => {
  return (
    <React.Fragment>
      <NavBar />
      <SearchForm />
      <ResultList />
    </React.Fragment>
  );
};

export default Search;
