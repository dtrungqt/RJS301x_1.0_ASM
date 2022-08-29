import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
//
import useHttpHook from "../../hooks/use-http";

const MovieDetail = (props) => {
  // const [videoData,setVideoData]=useState([])
  console.log(props.movieData);
  console.log(props.trailerData);
  //
  const [trailerData, setTrailerData] = useState([]);
  const { isLoading, error, sendRequest: fetchTrailerData } = useHttpHook();

  const apiLink = `https://api.themoviedb.org/3/movie/${props.idTrailer}/videos?api_key=a211d22bb5d4917ee91235c99b23e6aa`;

  //fetch trailer movie data
  useEffect(() => {
    const getTrailerDataFn = (data) => {
      setTrailerData(data.results);
    };

    fetchTrailerData(apiLink, getTrailerDataFn);
  }, [fetchTrailerData, props.idTrailer, apiLink]);
  // console.log(trailerData);

  //
  const movieInfo = (
    <div className="movieInfo-container col-12 col-md-6">
      <h2 className="movieInfo-name">
        {props.isOriginals ? props.movieData[0].name : props.movieData[0].title}
      </h2>
      <hr className="white-line" />
      <h6 className="movieInfo-releaseDate mb-0">
        Release Data:{" "}
        {props.isOriginals
          ? props.movieData[0].first_air_date
          : props.movieData[0].release_date}
      </h6>
      <h6 className="movieInfo-vote">
        Vote: {props.movieData[0].vote_average}/10
      </h6>
      <p className="movieInfo-overview">{props.movieData[0].overview}</p>
    </div>
  );

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  let displayTrailer = false;
  // if (props.trailerData)
  // const videoData = props.trailerData[0] || [];
  // let videoData = props.trailerData;
  let videoData = trailerData;
  if (videoData.length > 0) {
    videoData = videoData[0];
    // console.log("1");
    if (
      videoData.site.toLowerCase() === "youtube" &&
      (videoData.type.toLowerCase() === "trailer" ||
        videoData.type.toLowerCase() === "teaser")
    )
      displayTrailer = true;
  }

  console.log(videoData);
  console.log(displayTrailer);

  const movieBackdrop = (
    <img
      src={`https://image.tmdb.org/t/p/original${props.movieData[0].backdrop_path}`}
      alt={
        props.isOriginals ? props.movieData[0].name : props.movieData[0].title
      }
      className="movieTrailer-backdrop"
    />
  );

  const movieTrailer = (
    <div className="movieTrailer-container col-12 col-md-6">
      {displayTrailer && !error && (
        <YouTube className="" videoId={videoData.key} opts={opts} />
      )}
      {(!displayTrailer || error) && movieBackdrop}
      {/* {error && <p className="text-white">{error}</p>} */}
    </div>
  );

  return (
    <div className="movieDetail-container row">
      {movieInfo}
      {movieTrailer}
    </div>
  );
};

export default MovieDetail;
