import React, { useEffect, useState } from "react";
import useRenderDataHook from "../../hooks/use-renderData";
import MovieDetail from "./MovieDetail";

const MovieItem = (props) => {
  const [infoMovieData, setInfoMovieData] = useState([]);
  const [display, setDisplay] = useState(false); //true: hiển thị MovieDetail - false: ẩn MovieDetail
  const [idTrailer, setIDTrailer] = useState(0);

  const displayMovieDetailHandler = (event) => {
    const idMovie = Number(event.target.id);
    // console.log(idMovie);
    let [data] = infoMovieData;
    if (!data) data = props.movieData.filter((movie) => movie.id === idMovie); //đặt giá trị data ở lần đầu tiên click vào film (các lần sau giá trị data sẽ được cập nhật theo trạng thái infoMovieData). NHờ vào phép so sánh ở dưới, Việc này làm cho lần click đầu tiên 1 film bất kỳ sẽ hiển thị thông tin film đó
    if (data.id === idMovie) setDisplay((prevState) => !prevState);
    else setDisplay(true);

    //Vì data fetch về từ trang search và từ trang browser khác nhau nên phải biến đổi data từ trang search về dạng giống như data từ trang browser
    if (!props.isScroll)
      setInfoMovieData(
        props.movieData
          .filter((movie) => movie.id === idMovie)
          .map((data) => {
            return {
              id: data.id,
              name: data.original_title,
              first_air_data: data.release_data,
              vote_average: data.vote_average,
              overview: data.overview,
              backdrop_path: data.backdrop_path,
              poster_path: data.poster_path,
            };
          })
      );
    else
      setInfoMovieData(props.movieData.filter((movie) => movie.id === idMovie));

    setIDTrailer(idMovie);
    console.log(infoMovieData);
  };

  const renderMovieListFn = (listData) => {
    return listData.map((data) => {
      return (
        <img
          className={`${
            props.isPoster ? "poster" : "backdrop"
          } transition m-2 text-white`}
          id={data.id}
          src={`https://image.tmdb.org/t/p/original${
            props.isPoster ? data.poster_path : data.backdrop_path
          }`}
          alt={data.title}
          key={data.id}
          onClick={displayMovieDetailHandler}
        />
      );
    });
  };

  const movieItem = useRenderDataHook(
    renderMovieListFn,
    props.movieData,
    props.loading,
    props.error
  );

  ////////LƯU Ý://////////
  //HÀM NÀY CHỈ ÁP DỤNG VỚI Search component: khi ấn nút Reset thì sẽ ẩn MovieDetail Component. Vì khi ấn Reset, giá trị props.resetDisplayValue thay đổi => đặt giá trị display =false
  useEffect(() => {
    setDisplay(false);
  }, [props.resetDisplayValue]);
  ////////////////////////////////

  return (
    <React.Fragment>
      <div className="movie-container">
        {props.isTitle && (
          <p className="movieItem-title ms-4">{props.isTitle}</p>
        )}
        <div
          className={`${
            props.isScroll
              ? "movieItem-scroll-container"
              : "movieItem-box-container"
          } pb-2`}
        >
          {movieItem}
        </div>
      </div>

      {display && (
        <MovieDetail
          movieData={infoMovieData}
          isOriginals={props.isPoster}
          idTrailer={idTrailer}
          isScroll={props.isScroll}
        />
      )}
    </React.Fragment>
  );
};

export default MovieItem;
