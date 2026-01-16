import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenecek Filmler</h1>

          <div className="count-pill">
            {watchlist.length} {watchlist.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h3 className="no-movies">Listenizde Film, Dizi Yok Bulunamadı...</h3>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
