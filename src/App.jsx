import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* import componenete header */
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  /* valore search*/
  const [valueInput, setValueInput] = useState("");
  /* dati interi arrivati da api */
  const [films, SetFilms] = useState([]);
  const [serieTv, setSerieTv] = useState([]);
  /*  boolean per gestire loading e nessun film trovato e frase di benvenuto*/
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, Setloading] = useState(false);
  /* valore generi (id)*/
  const [valueGenres, SetValueGenres] = useState("");
  /* array che contiene generi film arrivati da api*/
  const [genresMovie, setGenresMovie] = useState([]);
  /* array che contiene generi serie tv arrivati da api*/
  const [genrestv, setGenresTv] = useState([]);
  /* array che contiene sia generi che serie tv */
  const [genres, SetGenres] = useState([]);
  /* dati interi o filtrati in base  a valueGenres*/
  const [newSerieTv, setNewSerieTV] = useState([]);
  const [newFilms, setNewFilms] = useState([]);

  useEffect(() => {
    if (valueGenres === "") {
      setNewFilms(films);
      setNewSerieTV(serieTv);
    } else {
      const convNumGenres = parseInt(valueGenres);
      const filterFilm = films.filter((film) =>
        film.genre_ids.includes(convNumGenres)
      );
      const filterSerieTv = serieTv.filter((serie) =>
        serie.genre_ids.includes(convNumGenres)
      );
      setNewFilms(filterFilm);
      setNewSerieTV(filterSerieTv);
    }
  }, [valueGenres, films, serieTv]);

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
    Setloading(true);
    setHasSearched(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${valueInput}&language=it-IT`
      )
      .then((responseMovie) => {
        console.log(responseMovie.data.results);
        SetFilms(responseMovie.data.results);
        setValueInput("");
      });
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${valueInput}&language=it-IT`
      )
      .then((responseTV) => {
        console.log(responseTV.data.results);
        setSerieTv(responseTV.data.results);
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
        serieTv={newSerieTv}
        films={newFilms}
        hasSearched={hasSearched}
        loading={loading}
      />
    </>
  );
}

export default App;
