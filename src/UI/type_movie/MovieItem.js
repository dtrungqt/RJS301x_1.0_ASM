import React from "react";
import useRenderDataHook from "../../hooks/use-renderData";
// import useRenderListMovieFn from "../../hooks/use-renderListMovie";

const MovieItem = (props) => {
  // const renderMovieListFn = useRenderListMovieFn(props.isPoster); //true vì danh sách original film thì hiển thị ảnh dạng poster

  const renderMovieListFn = (listData) => {
    return listData.map((data) => {
      return (
        <img
          className={`${props.isPoster ? "poster" : "backdrop"} transition m-2`}
          src={`https://image.tmdb.org/t/p/original${
            props.isPoster ? data.poster_path : data.backdrop_path
          }`}
          alt={data.name}
          key={data.id}
        />
      );
    });
  };

  const originalsMovie = useRenderDataHook(
    renderMovieListFn,
    props.originalsMovieList,
    props.loading,
    props.error
  );

  return (
    <div className="movie-container pt-5">
      {props.isTitle && <p className="movieItem-title ms-4">{props.isTitle}</p>}
      <div className="movieItem-container pb-2">{originalsMovie}</div>
    </div>
  );
};

export default MovieItem;
