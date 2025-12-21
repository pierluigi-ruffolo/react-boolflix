import Card from "./Card";
import imgBoolFlix from "../assets/boolflix.png";
export default function Main({ serieTv, films }) {
  return (
    <main className="pt-5">
      <div className="container fs-5 p-3">
        <div className="row">
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
