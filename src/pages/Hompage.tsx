import { useData } from "../context/DataContext.ts";
import { urlFor } from "../api/image.ts";

const Homepage = () => {
  const { paintings } = useData();

  return (
    <div>
      <div id="homeContainer">
        <section className="hero">
          <div>
            <h1>
              MOMI <span>ART</span>
            </h1>
          </div>
          <div>
            {paintings && (
              <div id="d-flex carouselContainer ">
                <div id="carousel" className="d-flex gap-3">
                  {paintings.map((p) => {
                    return (
                      <img
                        key={p._id}
                        src={urlFor(p.immagine).url()}
                        alt={p.titolo}
                        className="rounded-5"
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
        <main>
          <section className="py-3">
            <div className="descrictionHomeContainer my-4 py-5">
              <h2 className="mb-4">
                IL <span>CAOS</span> HA UN <br /> SUO <span>ORDINE</span>
              </h2>
              <p className="mb-3">
                Le mie opere nascono da due spinte opposte: costruire e
                lasciarsi andare. Da una parte città di vetro, ciminiere a
                strisce, scacchiere e strade che salgono verso il cielo.
                Dall'altra il gesto puro: scritture illeggibili, forme morbide,
                nastri di colore, stelle che esplodono. In mezzo c'è il sogno,
                ed è lì che vivo.
              </p>
              <p>
                Non parto quasi mai da un progetto preciso. Parto da un colore,
                da una linea, da un'immagine che mi resta in testa, e lascio che
                la tela mi risponda, strato dopo strato, finché il quadro non
                decide da solo di essere finito.
              </p>
            </div>
          </section>

          <section>
            <div id="citySection">
              <div className="city_1">
                <h4>LA CITTÀ È UN SOGNO</h4>
              </div>

              <div className="city_2 pt-3 my-5">
                <h4>PALAZZI E STRADE COME PERSONAGGI</h4>
              </div>

              <div className="abstract_1 pt-3 mb-5">
                <h4>IL COLORE VIENE PRIMA</h4>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
