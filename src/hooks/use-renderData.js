import React from "react";

const useRenderDataHook = (renderDataFn, data, loading, error) => {
  let moviesData = <p>Found no movies.</p>;

  if (data.length > 0) {
    moviesData = renderDataFn(data);
  }
  if (error) {
    moviesData = <p className="text-danger">{error}</p>;
  }
  if (loading) {
    moviesData = <p className="text-danger">Loading...</p>;
  }

  return moviesData;
};

export default useRenderDataHook;
