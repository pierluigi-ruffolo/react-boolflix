export default function Header({ valueInput, setValueInput, searchFilm }) {
  return (
    <header className="d-flex justify-content-between align-items-center text-center">
      <h1 className="ps-5 d-none d-md-block">BoolFlix</h1>
      <div className="pe-5">
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
  );
}
