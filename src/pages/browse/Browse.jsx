import React, { useState, useEffect } from "react";
import NavBar from "../../UI/NavBar";
import Banner from "../../UI/Banner";
import MovieList from "../../UI/MovieList";
import useHttpHook from "../../hooks/use-http";

const API_KEY = "a211d22bb5d4917ee91235c99b23e6aa";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`,
};

function Browse() {
  const [originalsMovieBannerData, setOriginalsMovieBannerData] = useState([]);
  const [originalsMovieListData, setOriginalsMovieListData] = useState([]);
  const [trendingMovieData, setTrendingMovieData] = useState([]);
  const [topRatedMovieData, setTopRatedMovieData] = useState([]);
  const [actionMovieData, setActionMovieData] = useState([]);
  const [comedyMovieData, setComedyMovieData] = useState([]);
  const [horrorMovieData, setHorrorMovieData] = useState([]);
  const [romanceMovieData, setRomanceMovieData] = useState([]);
  const [documentariesMovieData, setDocumentariesMovieData] = useState([]);

  const {
    isLoading: originalsMovieLoading,
    error: originalsMovieError,
    sendRequest: fetchNetflixOriginals,
  } = useHttpHook();

  const {
    isLoading: trendingMovieLoading,
    error: trendingMovieError,
    sendRequest: fetchTrending,
  } = useHttpHook();

  const {
    isLoading: topRatedMovieLoading,
    error: topRatedMovieError,
    sendRequest: fetchTopRated,
  } = useHttpHook();

  const {
    isLoading: actionMovieLoading,
    error: actionMovieError,
    sendRequest: fetchAction,
  } = useHttpHook();

  const {
    isLoading: comedyMovieLoading,
    error: comedyMovieError,
    sendRequest: fetchComedy,
  } = useHttpHook();

  const {
    isLoading: horrorMovieLoading,
    error: horrorMovieError,
    sendRequest: fetchHorror,
  } = useHttpHook();

  const {
    isLoading: romanceMovieLoading,
    error: romanceMovieError,
    sendRequest: fetchRomance,
  } = useHttpHook();

  const {
    isLoading: documentariesMovieLoading,
    error: documentariesMovieError,
    sendRequest: fetchDocumentaries,
  } = useHttpHook();

  //fetch data original movies
  useEffect(() => {
    const processOriginalsMovieDataFn = (data) => {
      setOriginalsMovieBannerData([
        data.results[Math.floor(Math.random() * data.results.length - 1)],
      ]); // chỉ lấy data 1 film
      setOriginalsMovieListData(data.results); // lấy data của tất cả film
    };

    fetchNetflixOriginals(
      requests.fetchNetflixOriginals,
      processOriginalsMovieDataFn
    );

    // const processTrendingMovieDataFn = (data) => {
    //   setTrendingMovieData(data.results);
    // };

    // fetchTrending(requests.fetchTrending, processTrendingMovieDataFn);

    // const processTopRatedDataFn = (data) => {
    //   setTopRatedMovieData(data.results);
    // };

    // fetchTopRated(requests.fetchTopRated, processTopRatedDataFn);
  }, [fetchNetflixOriginals]);
  // console.log(originalsMovieListData);

  //fetch data original movies
  useEffect(() => {
    const processTrendingMovieDataFn = (data) => {
      setTrendingMovieData(data.results);
    };

    fetchTrending(requests.fetchTrending, processTrendingMovieDataFn);
  }, [fetchTrending]);
  // console.log(trendingMovieData);

  //fetch data top rate movies
  useEffect(() => {
    const processTopRatedDataFn = (data) => {
      setTopRatedMovieData(data.results);
    };

    fetchTopRated(requests.fetchTopRated, processTopRatedDataFn);
  }, [fetchTopRated]);

  //fetch data action movies
  useEffect(() => {
    const processActionDataFn = (data) => {
      setActionMovieData(data.results);
    };

    fetchAction(requests.fetchActionMovies, processActionDataFn);
  }, [fetchAction]);

  //fetch data comedy movies
  useEffect(() => {
    const processComedyDataFn = (data) => {
      setComedyMovieData(data.results);
    };

    fetchComedy(requests.fetchComedyMovies, processComedyDataFn);
  }, [fetchComedy]);

  //fetch data Horror movies
  useEffect(() => {
    const processHorrorDataFn = (data) => {
      setHorrorMovieData(data.results);
    };

    fetchHorror(requests.fetchHorrorMovies, processHorrorDataFn);
  }, [fetchHorror]);

  //fetch data Romance movies
  useEffect(() => {
    const processRomanceDataFn = (data) => {
      setRomanceMovieData(data.results);
    };

    fetchRomance(requests.fetchRomanceMovies, processRomanceDataFn);
  }, [fetchRomance]);

  //fetch data Documentaries movies
  useEffect(() => {
    const processDocumentariesDataFn = (data) => {
      setDocumentariesMovieData(data.results);
    };

    fetchDocumentaries(requests.fetchDocumentaries, processDocumentariesDataFn);
  }, [fetchDocumentaries]);

  return (
    <React.Fragment>
      <NavBar />
      <Banner
        movieData={originalsMovieBannerData}
        loading={originalsMovieLoading}
        error={originalsMovieError}
      />
      <MovieList
        originalsMovieData={originalsMovieListData}
        loadingOriginal={originalsMovieLoading}
        errorOriginal={originalsMovieError}
        //
        trendingMovieData={trendingMovieData}
        loadingTrending={trendingMovieLoading}
        errorTrending={trendingMovieError}
        //
        topRatedMovieData={topRatedMovieData}
        loadingTopRated={topRatedMovieLoading}
        errorTopRated={topRatedMovieError}
        //
        actionMovieData={actionMovieData}
        loadingAction={actionMovieLoading}
        errorAction={actionMovieError}
        //
        comedyMovieData={comedyMovieData}
        loadingComedy={comedyMovieLoading}
        errorComedy={comedyMovieError}
        //
        horrorMovieData={horrorMovieData}
        loadingHorror={horrorMovieLoading}
        errorHorror={horrorMovieError}
        //
        romanceMovieData={romanceMovieData}
        loadingRomance={romanceMovieLoading}
        errorRomance={romanceMovieError}
        //
        documentariesMovieData={documentariesMovieData}
        loadingDocumentaries={documentariesMovieLoading}
        errorDocumentaries={documentariesMovieError}
      />
    </React.Fragment>
  );
}

export default Browse;
