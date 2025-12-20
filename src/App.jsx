import { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [valueInput, setValueInput] = useState("");
  const [film, SetFilm] = useState([]);

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
      .then((response) => {
        SetFilm(response.data.results);
      });
  }

  return (
    <>
      <header className="d-flex justify-content-between align-items-center">
        <h1 className="ps-5">BoolFlix</h1>
        <div className="pe-5 d-flex">
          <input
            className="me-3 fs-5"
            type="text"
            placeholder="Ricerca un film..."
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button onClick={searchFilm} className="btn btn-primary">
            Cerca
          </button>
        </div>
      </header>
      <main></main>
    </>
  );
}

export default App;
