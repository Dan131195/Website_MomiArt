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
    <div>
      <section>
        <h1>
          MOMI <span className=" ms-md-0">ART</span>
        </h1>
        {paintings && (
          <div className="d-flex  gap-3 carouselContainer">
            {paintings.map((p) => {
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
            {paintings.map((p) => {
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
            {paintings.map((p) => {
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
        )}
      </section>
      <section></section>
    </div>
  );
};

export default Homepage;
