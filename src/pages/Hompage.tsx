import { useEffect } from "react";
import { useData } from "../context/DataContext.ts";
import { urlFor } from "../api/image.ts";

const Homepage = () => {
  const { paintings, styles } = useData();

  useEffect(() => {
    console.log(paintings);
    console.log(styles);
  }, [paintings, styles]);

  return (
    <div id="homeContainer">
      <section>
        <section className="hero">
          <div className="hero__sticky">
            <h1 className="titolo">
              MOMI <span>ART</span>
            </h1>
          </div>
          {paintings && (
            <div id="d-flex carouselContainer ">
              <div id="carousel_1" className="d-flex gap-3 mb-3">
                {[...paintings]
                  .sort((a, b) => a._createdAt.localeCompare(b._createdAt))
                  .map((p) => {
                    return (
                      <img
                        key={p._id}
                        src={urlFor(p.immagine).url()}
                        alt={p.titolo}
                        width={300}
                        className="rounded-5"
                      />
                    );
                  })}
              </div>
              <div id="carousel_2" className="d-flex gap-3">
                {[...paintings]
                  .sort((a, b) => b._createdAt.localeCompare(a._createdAt))
                  .map((p) => {
                    return (
                      <img
                        key={p._id}
                        src={urlFor(p.immagine).url()}
                        alt={p.titolo}
                        width={300}
                        className="rounded-5"
                      />
                    );
                  })}
              </div>
            </div>
          )}
        </section>

        <main>…resto del contenuto…</main>
        {/* <h1>
          MOMI <span className=" ms-md-0">ART</span>
        </h1> */}
      </section>
      <section>
        <div>
          <h2>Aboute Me</h2>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
