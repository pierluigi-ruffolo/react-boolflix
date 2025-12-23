import Card from "./Card";
import imgBoolFlix from "../assets/boolflix.png";

export default function Main({ serieTv, films, hasSearched, loading }) {
  return (
    <main className="pt-5">
      <div className="container fs-5 p-3">
        <div className="row">
          {hasSearched === false && loading === false ? (
            <div className="text-center">
              <h2>
                Usa la barra di ricerca per trovare i tuoi titoli preferiti...
              </h2>
            </div>
          ) : (
            ""
          )}
          <h1 className={loading === false ? "d-none" : ""}>Loading....</h1>
          {serieTv.length !== 0 || films.length !== 0 ? (
            <div className="py-3 border-bottom border-secondary mb-4">
              <h1>
                Risultati della ricerca:
                <span> {films.length + serieTv.length} </span>
                titoli trovati
              </h1>
            </div>
          ) : (
            ""
          )}
          {loading === false &&
          hasSearched &&
          films.length === 0 &&
          serieTv.length === 0 ? (
            <div className="alert alert-warning text-center">
              <h3>Spiacenti, non abbiamo trovato nulla per la tua ricerca.</h3>
              <p>
                Prova a controllare l'ortografia o usa termini più generici.
              </p>
            </div>
          ) : (
            ""
          )}
          <h2 className={`mt-3 fs-1 ${films.length === 0 ? "d-none" : ""}`}>
            Film
          </h2>
          {films.map((film) => (
            <div key={film.id} className="mt-3 col-rp col-12  col-lg-3">
              {film.backdrop_path === null ? (
                <img className=" img-movie" src={imgBoolFlix} alt="" />
              ) : (
                <img
                  className=" img-movie"
                  src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
                  alt=""
                />
              )}
              <Card item={film} />
            </div>
          ))}
          <h2 className={`mt-3 fs-1 ${serieTv.length === 0 ? "d-none" : ""}`}>
            Serie TV
          </h2>
          {serieTv.map((serieTv) => (
            <div
              key={serieTv.id}
              className="mt-3 col-rp col-12  col-md-4 col-lg-3"
            >
              {serieTv.backdrop_path === null ? (
                <img className=" img-movie" src={imgBoolFlix} alt="" />
              ) : (
                <img
                  className=" img-movie"
                  src={`https://image.tmdb.org/t/p/w500/${serieTv.backdrop_path}`}
                  alt=""
                />
              )}
              <Card item={serieTv} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
