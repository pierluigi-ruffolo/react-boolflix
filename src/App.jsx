import { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [valueInput, setValueInput] = useState("");

  function searchFilm() {}

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
