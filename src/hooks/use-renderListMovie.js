import React from "react";

const useRenderListMovieFn = (isPoster) => {
  const renderListFn = (listData) => {
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
  return renderListFn;
};

export default useRenderListMovieFn;
