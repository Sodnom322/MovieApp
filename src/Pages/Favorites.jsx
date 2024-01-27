import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Film from "../Components/Film";

const films2 = [
  {
    Title: "The Lion King",
    Year: "2019",
    Runtime: "118 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
  },
  {
    Title: "Mowgli: Legend of the Jungle",
    Year: "2018",
    Runtime: "104 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
  },
  {
    Title: "Doctor Strange",
    Year: "2016",
    Runtime: "115 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
  },
  {
    Title: "John Wick",
    Year: "2014",
    Runtime: "101 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
  },
  {
    Title: "The Notebook",
    Year: "2004",
    Runtime: "123 min",
  },
];

const Registartion = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          {films2.map((el, i) => (
            <Film
              key={i}
              title={el.Title}
              img={el.Poster}
              year={el.Year}
              country={el.Runtime}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Registartion;
