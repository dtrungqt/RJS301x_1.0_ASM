import React, { useState } from "react";
import useRenderDataHook from "../../hooks/use-renderData";
import MovieDetail from "./MovieDetail";
// import useHttpHook from "../../hooks/use-http";

const MovieItem = (props) => {
  const [infoMovieData, setInfoMovieData] = useState([]);
  const [display, setDisplay] = useState(false); //true: hiển thị MovieDetail - false: ẩn MovieDetail
  const [idTrailer, setIDTrailer] = useState(0);
  // const [trailerData, setTrailerData] = useState([]);

  // console.log(idTrailer);
  // console.log(idMovie);

  const displayMovieDetailHandler = (event) => {
    const idMovie = Number(event.target.id);
    // console.log(idMovie);
    let [data] = infoMovieData;
    if (!data) data = props.movieData.filter((movie) => movie.id === idMovie); //đặt giá trị data ở lần đầu tiên click vào film (các lần sau giá trị data sẽ được cập nhật theo trạng thái infoMovieData). NHờ vào phép so sánh ở dưới, Việc này làm cho lần click đầu tiên 1 film bất kỳ sẽ hiển thị thông tin film đó
    if (data.id === idMovie) setDisplay((prevState) => !prevState);
    else setDisplay(true);

    // console.log(display);
    setInfoMovieData(props.movieData.filter((movie) => movie.id === idMovie));
    setIDTrailer(idMovie);
  };

  const renderMovieListFn = (listData) => {
    return listData.map((data) => {
      return (
        <img
          className={`${
            props.isPoster ? "poster" : "backdrop"
          } transition m-2 text-white`}
          id={data.id}
          src={`https://image.tmdb.org/t/p/original${
            props.isPoster ? data.poster_path : data.backdrop_path
          }`}
          alt={data.title}
          key={data.id}
          onClick={displayMovieDetailHandler}
        />
      );
    });
  };

  const movieItem = useRenderDataHook(
    renderMovieListFn,
    props.movieData,
    props.loading,
    props.error
  );

  //LẤY DATA CỦA TRAILER MOVIE
  // const { isLoading, error, sendRequest: fetchTrailerData } = useHttpHook();

  // const apiLink = `https://api.themoviedb.org/3/movie/${idTrailer}/videos?api_key=a211d22bb5d4917ee91235c99b23e6aa`;

  // //fetch trailer movie data
  // useEffect(() => {
  //   const getTrailerDataFn = (data) => {
  //     setTrailerData(data.results);
  //   };

  //   fetchTrailerData(apiLink, getTrailerDataFn);
  // }, [fetchTrailerData, apiLink]);
  // // console.log(trailerData);

  return (
    <React.Fragment>
      <div className="movie-container">
        {props.isTitle && (
          <p className="movieItem-title ms-4">{props.isTitle}</p>
        )}
        <div className="movieItem-container pb-2">{movieItem}</div>
      </div>

      {display && (
        <MovieDetail
          movieData={infoMovieData}
          isOriginals={props.isPoster}
          // trailerData={trailerData}
          idTrailer={idTrailer}
        />
      )}
    </React.Fragment>
  );
};

export default MovieItem;
