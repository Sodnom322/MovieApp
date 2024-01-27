import React from "react";

function Film({ img, title, year, country, genre }) {
  return (
    <div className="films_pos">
      <div className="film" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="description">
        <h4>{title}</h4>
        <p>
          {year},<br />
          {country},<br />
          {genre}
        </p>
      </div>
    </div>
  );
}

export default Film;
