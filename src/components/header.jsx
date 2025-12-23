export default function Header({
  valueInput,
  setValueInput,
  searchFilm,
  genres,
  SetValueGenres,
}) {
  return (
    <header className="d-flex justify-content-center justify-content-md-between align-items-center">
      <div className="ms-5">
        <h1 className="d-none d-md-block">BoolFlix</h1>
      </div>
      <div className="d-flex">
        <select
          className="mx-2 p-2"
          onChange={(e) => {
            SetValueGenres(e.target.value);
          }}
        >
          <option value="">Tutti i generi</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <input
          className="me-2 fs-4"
          type="search"
          placeholder="search..."
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <button onClick={searchFilm} className="btn btn-primary me-3">
          search
        </button>
      </div>
    </header>
  );
}
