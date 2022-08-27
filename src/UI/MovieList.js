import React from "react";
import MovieItem from "./type_movie/MovieItem";

const MovieList = (props) => {
  return (
    <div className="movieList-container">
      <MovieItem
        originalsMovieList={props.originalsMovieList}
        loading={props.loading}
        error={props.error}
        isTitle={false}
        isPoster={true} //true: hiển thị ảnh film dưới dạng poster
      />
    </div>
  );
};

export default MovieList;
