import { useData } from "../context/DataContext.ts";
import { urlFor } from "../api/image.ts";

import Title from "../assets/video/Titolo.png";

const Homepage = () => {
  const { paintings } = useData();

  return (
    <div>
      <div id="homeContainer">
        <section className="hero">
          <div>
            <h1>
              <img src={Title} alt="Animazione MomiArt" className="my-4" />
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
      </div>
    </div>
  );
};

export default Homepage;
