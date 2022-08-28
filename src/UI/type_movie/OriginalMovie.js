// import React from "react";
// import useRenderDataHook from "../../hooks/use-renderData";
// import MovieDetail from "./MovieDetail";

// const MovieItem = (props) => {
//   const renderMovieListFn = (listData) => {
//     return listData.map((data) => {
//       return (
//         <img
//           className="poster transition m-2 text-white"
//           id={data.id}
//           src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
//           alt={data.title}
//           key={data.id}
//         />
//       );
//     });
//   };

//   const originalsMovie = useRenderDataHook(
//     renderMovieListFn,
//     props.movieData,
//     props.loading,
//     props.error
//   );

//   return (
//     <div className="movie-container">
//       <div className="movieItem-container pb-2">{originalsMovie}</div>
//     </div>
//   );
// };

// export default MovieItem;
