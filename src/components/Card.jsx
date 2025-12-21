import imgmondo from "../assets/img-fleg/mondo.png";
import objLenguage from "../languages";

export default function Card({ item }) {
  const title = item.title || item.name;
  const originalTitle = item.original_title || item.original_name;
  const language = item.original_language;
  const overview = item.overview;
  return (
    <div className="card-rp">
      <h3>
        <span>Titolo</span>: {title}
      </h3>
      <h4>
        <span>Titolo Originale</span>: {originalTitle}
      </h4>
      {objLenguage[language] === undefined ? (
        <img src={imgmondo} alt={title} className="img-language" />
      ) : (
        <img src={objLenguage[language]} alt={title} className="img-language" />
      )}
      <p>{overview}</p>
    </div>
  );
}
