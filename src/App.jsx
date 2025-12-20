import { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* import componenete header */
import Header from "./components/header";
/* import oggetto lingua */
import objLenguage from "./languages";
/* import imgMondo */
import imgMondo from "./assets/img-fleg/mondo.png";

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
      });
  }

  return (
    <>
      <Header
        valueInput={valueInput}
        setValueInput={setValueInput}
        searchFilm={searchFilm}
      />

      <main className="pt-5">
        <div className="container fs-5">
          <div className="row">
            {films.map((film) => (
              <div key={film.id} className="col-12 col-sm-4 col-lg-3 p-2">
                <h1>Titolo: {film.title}</h1>

                <h2>Titolo: Originale: {film.original_title}</h2>
                <p>Lingua: {film.original_language} </p>
                {objLenguage[film.original_language] === undefined ? (
                  <img src={imgMondo} alt={film.title} />
                ) : (
                  <img
                    src={objLenguage[film.original_language]}
                    alt={film.title}
                  />
                )}
              </div>
            ))}
            <h2 className={serieTv.length === 0 ? "d-none" : ""}>Serie TV</h2>
            {serieTv.map((serieTv) => (
              <div key={serieTv.id} className="col-12 col-sm-4 col-lg-3 p-2">
                <h1>Titolo: {serieTv.name}</h1>

                <h2>Titolo: Originale: {serieTv.original_name}</h2>
                <p>Lingua: {serieTv.original_language} </p>
                {objLenguage[serieTv.original_language] === undefined ? (
                  <img src={imgMondo} alt={serieTv.name} />
                ) : (
                  <img
                    src={objLenguage[serieTv.original_language]}
                    alt={serieTv.name}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
