import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Film from "./Film";

const Main = () => {
  const [films, setFilms] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [popUpOpen, setPopUpOpne] = React.useState(false);

  React.useEffect(() => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1",
      {
        method: "GET",
        headers: {
          "X-API-KEY": "b3d7aeeb-aa87-40fd-adda-d3deeffa7dfb",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setFilms(json.items))
      .catch((err) => console.log(err));

    return () => {
      if (popUpOpen === true) {
        console.log("pop is close");
      }
    };
  }, [popUpOpen]);
  return (
    <div className="App">
      <div className="wrapper">
        <Header popUpOpen={popUpOpen} setPopUpOpne={setPopUpOpne} />
        <Navbar search={search} setSearch={setSearch} />
        <main className="main">
          <h3>Новые фильмы,сериалы и аниме</h3>
          <div className="container_films">
            {films
              .filter((obj) => {
                if (
                  obj.nameRu.toLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((e) => (
                <Film
                  key={e.kinopoiskId}
                  img={e.posterUrl}
                  title={e.nameRu}
                  year={e.year}
                  country={e.countries[0].country}
                  genre={e.genres[0].genre}
                />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default Main;
