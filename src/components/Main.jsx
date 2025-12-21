import Card from "./Card";
export default function Main({ serieTv, films }) {
  return (
    <main className="pt-5">
      <div className="container fs-5">
        <div className="row">
          {films.map((film) => (
            <Card item={film} key={film.id} />
          ))}
          <h2 className={serieTv.length === 0 ? "d-none" : ""}>Serie TV</h2>
          {serieTv.map((serieTv) => (
            <Card item={serieTv} key={serieTv.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
