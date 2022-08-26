import React, { useState, useEffect } from "react";
import NavBar from "../../UI/NavBar";
import Banner from "../../UI/Banner";
import MovieList from "../../UI/MovieList";
import useHttpHook from "../../hooks/use-http";

function Browse() {
  const [originalsMovieBannerData, setOriginalsMovieBannerData] = useState([]);
  const [originalsMovieListData, setOriginalsMovieListData] = useState([]);

  const {
    isLoading: originalsMovieLoading,
    error: originalsMovieError,
    sendRequest: fetchNetflixOriginals,
  } = useHttpHook();

  useEffect(() => {
    const apiLink =
      "https://api.themoviedb.org/3/discover/tv?api_key=a211d22bb5d4917ee91235c99b23e6aa&with_network=123";

    const processOriginalsMovieBannerDataFn = (data) => {
      setOriginalsMovieBannerData([
        data.results[Math.floor(Math.random() * data.results.length - 1)],
      ]); // chỉ lấy data 1 film
    };

    const processOriginalsMovieListDataFn = (item) => {
      setOriginalsMovieListData(item.results); // lấy data của tất cả film
    };

    fetchNetflixOriginals(apiLink, processOriginalsMovieBannerDataFn);
    fetchNetflixOriginals(apiLink, processOriginalsMovieListDataFn);
  }, [fetchNetflixOriginals]);

  console.log(originalsMovieListData);

  return (
    <React.Fragment>
      <NavBar />
      <Banner
        movieData={originalsMovieBannerData}
        loading={originalsMovieLoading}
        error={originalsMovieError}
      />
      <MovieList
        originalsMovieList={originalsMovieListData}
        loading={originalsMovieLoading}
        error={originalsMovieError}
      />
    </React.Fragment>
  );
}

export default Browse;
