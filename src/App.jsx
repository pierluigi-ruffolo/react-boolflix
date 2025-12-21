import { useState } from "react";
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
  function searchFilm() {
    if (!isNaN(valueInput)) {
      alert("inserisci un film");
      setValueInput("");
      return;
    }
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
      />
      <Main serieTv={serieTv} films={films} />
    </>
  );
}

export default App;
