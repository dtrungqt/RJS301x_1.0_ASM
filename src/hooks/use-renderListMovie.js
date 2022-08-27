import React from "react";

const useRenderListMovieFn = (isPoster) => {
  //isPoster - true: hiển thị ảnh dưới dạng poster ; false: hiển thị ảnh dưới dạng backdrop
  const renderListFn = (listData) => {
    return listData.map((data) => {
      return (
        <img
          className={`${isPoster ? "poster" : "backdrop"} transition m-2`}
          src={`https://image.tmdb.org/t/p/original${
            isPoster ? data.poster_path : data.backdrop_path
          }`}
          alt={data.name}
          key={data.id}
        />
      );
    });
  };
  return renderListFn;
};

export default useRenderListMovieFn;
