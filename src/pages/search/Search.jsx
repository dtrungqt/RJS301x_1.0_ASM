import React, { useState, useEffect } from "react";
import NavBar from "../../UI/NavBar";
import SearchForm from "../../UI/SearchForm";
import useHttpHook from "../../hooks/use-http";
import MovieItem from "../../UI/type_movie/MovieItem";

const Search = () => {
  const [queryName, setQueryName] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [displayStateValue, setDisplayStateValue] = useState(true); // trạng thái này dùng để ẩn MovieDetail component mỗi khi ấn nút Reset: Khi ấn nút Reset, giá trị displayStateValue thay đổi (bằng cách đảo giá trị displayStateValue) => dùng useEffect để ẩn MovieDetail component

  const getNameEnteredFromSearchForm = (nameEntered) => {
    setQueryName(nameEntered);
    console.log(queryName);
  };

  //hàm đảo giá trị displayStateValue
  const getDisplayStateValueHandler = () => {
    setDisplayStateValue((prevState) => !prevState); //đảo giá trị displayStateValue
  };

  const { sendRequest: fetchMovieData } = useHttpHook();

  const apiLink = `https://api.themoviedb.org/3/search/movie?api_key=a211d22bb5d4917ee91235c99b23e6aa&language=en-US&query=${queryName}&page=1`;

  useEffect(() => {
    const getMovieNameFn = (data) => {
      setMovieData(data.results);

      // setQueryName("");
    };

    fetchMovieData(apiLink, getMovieNameFn);
  }, [fetchMovieData, apiLink]);

  useEffect(() => {
    if (!queryName) setMovieData([]);
  }, [queryName]);
  console.log(movieData);

  return (
    <div className="searchPage-container">
      <NavBar />
      <SearchForm
        storeNameEntered={getNameEnteredFromSearchForm}
        storeDisplayStateValue={getDisplayStateValueHandler}
      />
      <MovieItem
        movieData={movieData}
        isTitle={"Search Results"}
        isPoster={true} //false: hiển thị ảnh film dưới dạng backdrop
        isScroll={false}
        resetDisplayValue={displayStateValue}
      />
    </div>
  );
};

export default Search;
