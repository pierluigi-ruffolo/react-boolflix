import imgmondo from "../assets/img-fleg/mondo.png";
import objLenguage from "../languages";

export default function Card({ item }) {
  const title = item.title || item.name;
  const originalTitle = item.original_title || item.original_name;
  const language = item.original_language;
  const overview = item.overview;
  return (
    <div className="card-rp">
      <h4>
        <span>Titolo</span>: {title}
      </h4>
      <h5 className="mt-3">
        <span>Titolo Originale</span>: {originalTitle}
      </h5>

      {objLenguage[language] === undefined ? (
        <div className="mt-3">
          <span>Lingua: </span>
          <img src={imgmondo} alt={title} className="img-language" />
        </div>
      ) : (
        <div className="mt-3">
          <span>Lingua: </span>
          <img
            src={objLenguage[language]}
            alt={title}
            className="img-language"
          />
        </div>
      )}

      {overview === "" ? (
        ""
      ) : (
        <p className="mt-3">
          <span>overview: </span>
          {overview}
        </p>
      )}
    </div>
  );
}
