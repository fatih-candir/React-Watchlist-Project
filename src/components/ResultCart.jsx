import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ResultCart({ movie }) {
  //   console.log(movie);
  const { watchlist, addMovieToWatchlist, addMovieToWatched, watched } =
    useContext(GlobalContext);

  const storedMovieWatched = watched.find((o) => o.id === movie.id);

  const storedMovie = watchlist.find((o) => o.id === movie.id)
    ? true
    : storedMovieWatched
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            {/* substring metodu sadece yıl kısmını almak için kullanıldı */}
          </h4>
          <h4 className="release-date">
            IMDB:
            <b> {movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={storedMovie}
            onClick={() => addMovieToWatchlist(movie)}
          >
            ADD TO WATCHLİST
          </button>

          <button
            className="btn"
            disabled={storedMovieWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            ADD TO WATCHED
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCart;
