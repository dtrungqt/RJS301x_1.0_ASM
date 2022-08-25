import React, { useState, useEffect } from "react";
import NavBar from "../../UI/NavBar";
import Banner from "../../UI/Banner";
import MovieList from "../../UI/MovieList";
import useHttpHook from "../../hooks/use-http";

function Browse() {
  const [originalsMovieData, setOriginalsMovieData] = useState([]);
  const {
    isLoading,
    error,
    sendRequest: fetchNetflixOriginals,
  } = useHttpHook();

  useEffect(() => {
    const apiLink =
      "https://api.themoviedb.org/3/discover/tv?api_key=a211d22bb5d4917ee91235c99b23e6aa&with_network=123";

    const processDataFn = (data) => {
      setOriginalsMovieData([
        data.results[Math.floor(Math.random() * data.results.length - 1)],
      ]);
    };

    fetchNetflixOriginals(apiLink, processDataFn);
  }, [fetchNetflixOriginals]);
  return (
    <React.Fragment>
      <NavBar />
      <Banner
        movieData={originalsMovieData}
        loading={isLoading}
        error={error}
      />
      <MovieList />
    </React.Fragment>
  );
}

export default Browse;
