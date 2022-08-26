import React from "react";

const useRenderDataHook = (renderDataFn, data, loading, error) => {
  let moviesData = <p>Found no movies.</p>;

  if (data.length > 0) {
    moviesData = renderDataFn(data);
  }
  if (error) {
    moviesData = <p>{error}</p>;
  }
  if (loading) {
    moviesData = <p>Loading...</p>;
  }

  return moviesData;
};

export default useRenderDataHook;
