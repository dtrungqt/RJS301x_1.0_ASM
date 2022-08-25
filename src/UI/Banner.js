import React from "react";

const Banner = (props) => {
  console.log(props.movieData);

  let originalFilm = <p>Found no movies.</p>;

  if (props.movieData.length > 0) {
    originalFilm = props.movieData.map((data) => {
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
  }
  if (props.error) {
    originalFilm = <p>{props.error}</p>;
  }
  if (props.Loading) {
    originalFilm = <p>Loading...</p>;
  }

  return <React.Fragment>{originalFilm}</React.Fragment>;
};

export default Banner;
