import imgmondo from "../assets/img-fleg/mondo.png";
import objLenguage from "../languages";

export default function Card({ item }) {
  console.log(item.title);
  const title = item.title || item.name;
  const originalTitle = item.original_title || item.original_name;
  const language = item.original_language;

  return (
    <div className="col-12 col-sm-4 col-lg-3 p-2">
      <h1>Titolo: {title}</h1>

      <h2>Titolo: Originale: {originalTitle}</h2>
      <p>Lingua: {language} </p>
      {objLenguage[language] === undefined ? (
        <img src={imgmondo} alt={title} />
      ) : (
        <img src={objLenguage[language]} alt={title} />
      )}
    </div>
  );
}
