import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* import componenete header */
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [valueInput, setValueInput] = useState("");
  const [films, SetFilms] = useState([]);
  const [serieTv, setSerieTv] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, Setloading] = useState(false);
  const [valueGenres, SetValueGenres] = useState("");
  const [genresMovie, setGenresMovie] = useState([]);
  const [genrestv, setGenresTv] = useState([]);
  const [genres, SetGenres] = useState([]);

  useEffect(() => {
    SetGenres([...genresMovie, ...genrestv]);
  }, [genresMovie, genrestv]);

  useEffect(() => {
    Setloading(false);
  }, [films, serieTv]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=it-IT`
      )
      .then((res) => {
        setGenresMovie(res.data.genres);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=it-IT`
      )
      .then((res) => {
        setGenresTv(res.data.genres);
      });
  }, []);

  function searchFilm() {
    if (!isNaN(valueInput)) {
      alert("inserisci un film");
      setValueInput("");
      return;
    }
    const convValueGenres = parseInt(valueGenres);
    Setloading(true);
    setHasSearched(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${valueInput}&language=it-IT`
      )
      .then((responseMovie) => {
        const resultsMovie = responseMovie.data.results;
        console.log(resultsMovie);
        if (valueGenres === "") {
          SetFilms(resultsMovie);
        } else {
          const movieFilter = resultsMovie.filter((movie) =>
            movie.genre_ids.includes(convValueGenres)
          );
          SetFilms(movieFilter);
        }
        setValueInput("");
      });
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${valueInput}&language=it-IT`
      )
      .then((responseTV) => {
        const resultsTv = responseTV.data.results;
        console.log(resultsTv);
        if (valueGenres === "") {
          setSerieTv(resultsTv);
        } else {
          const tvFilter = resultsTv.filter((tv) =>
            tv.genre_ids.includes(convValueGenres)
          );
          setSerieTv(tvFilter);
        }

        setValueInput("");
      });
  }

  return (
    <>
      <Header
        valueInput={valueInput}
        setValueInput={setValueInput}
        searchFilm={searchFilm}
        genres={genres}
        SetValueGenres={SetValueGenres}
      />
      <Main
        serieTv={serieTv}
        films={films}
        hasSearched={hasSearched}
        loading={loading}
      />
    </>
  );
}

export default App;
