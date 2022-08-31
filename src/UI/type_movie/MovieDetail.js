import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import useHttpHook from "../../hooks/use-http";

const MovieDetail = (props) => {
  console.log(props.movieData);
  console.log(props.trailerData);
  const [trailerData, setTrailerData] = useState([]);
  const { error, sendRequest: fetchTrailerData } = useHttpHook();

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
        {props.isOriginals
          ? props.movieData[0].name
          : props.movieData[0].title || props.movieData[0].name}
        {/* Ở giá trị khi props.isOriginals là false, ta đặt 1 phép Or 2 giá trị vì một số ít movie ở mục Trending (movie vừa là trending, vừa là originals) có data trả về khác với các data còn lại*/}
      </h2>
      <hr className="white-line" />
      <h6 className="movieInfo-releaseDate mb-0">
        Release Date:{" "}
        {props.isOriginals
          ? props.movieData[0].first_air_date
          : props.movieData[0].release_date ||
            props.movieData[0].first_air_date}
        {/* Ở giá trị khi props.isOriginals là false, ta đặt 1 phép Or 2 giá trị vì một số ít movie ở mục Trending (vừa là trending, vừa là originals) có data trả về khác với các data còn lại*/}
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
  let videoData = trailerData;
  if (videoData.length > 0) {
    videoData = videoData[0];
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
      src={`https://image.tmdb.org/t/p/original${
        props.movieData[0].backdrop_path || props.movieData[0].poster_path
      }`}
      // dùng phép or ở kết quả tham chiếu trong src vì 1 số ít data movie có backdrop_path = null => dùng poster_path thay thế
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
      {/* nếu load video gặp error thì hiển thị ảnh backdrop  */}
    </div>
  );

  //Scroll tới MovieDetail bằng useRef và useEffect: CHỈ ÁP DỤNG Ở Search Component. Vì nếu dùng ở Browser, Navbar sẽ che mất title của film
  const myRef = useRef(null);
  useEffect(() => {
    const executeScroll = () => myRef.current.scrollIntoView();

    //chỉ thực thi hàm với props.isScroll= false, vì chỉ ở Search Component thì isSCroll = false
    if (!props.isScroll) executeScroll();
  }, [props.movieData, props.isScroll]);

  return (
    <React.Fragment>
      {props.isScroll && (
        <div className="movieDetail-container row">
          {movieInfo}
          {movieTrailer}
        </div>
      )}
      {!props.isScroll && (
        <div className="movieDetail-container row pb-5" ref={myRef}>
          {movieInfo}
          {movieTrailer}
        </div>
      )}
      ;
    </React.Fragment>
  );
};

export default MovieDetail;
