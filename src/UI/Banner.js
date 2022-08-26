import React from "react";
import useRenderDataHook from "../hooks/use-renderData";

const Banner = (props) => {
  console.log(props.movieData);

  const renderBannerFn = (renderData) => {
    return renderData.map((data) => {
      return (
        <div
          className="banner-container background-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
          key={data.id}
        >
          <div className="banner-info text-white ms-4">
            <p className="banner-name">{data.name}</p>
            <div className="d-md-flex banner-button">
              <button className="me-3 mb-1">Play</button>
              <button className="mb-1">My List</button>
            </div>
            <p className="banner-info-box">{data.overview}</p>
          </div>
        </div>
      );
    });
  };
  const originalFilm = useRenderDataHook(
    renderBannerFn,
    props.movieData,
    props.loading,
    props.error
  );

  return <React.Fragment>{originalFilm}</React.Fragment>;
};

export default Banner;
