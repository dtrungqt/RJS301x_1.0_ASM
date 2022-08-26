import React from "react";
import useRenderDataHook from "../../hooks/use-renderData";

const OriginalList = (props) => {
  const renderOriginalListFn = (listData) => {
    return listData.map((data) => {
      return (
        <img
          className="original-poster transition m-2"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={data.name}
          key={data.id}
        />
      );
    });
  };

  const originalsMovie = useRenderDataHook(
    renderOriginalListFn,
    props.originalsMovieList,
    props.loading,
    props.error
  );

  return (
    <div className="originalList-container pt-5 pb-2">{originalsMovie}</div>
  );
};

export default OriginalList;
