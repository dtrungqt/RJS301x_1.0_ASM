import React from "react";
import OriginalList from "./type_movie/OriginalList";

const MovieList = (props) => {
  return (
    <React.Fragment>
      <OriginalList
        originalsMovieList={props.originalsMovieList}
        loading={props.loading}
        error={props.error}
      />
    </React.Fragment>
  );
};

export default MovieList;
