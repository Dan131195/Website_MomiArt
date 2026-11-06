import { useData } from "../context/DataContext.ts";
import { urlFor } from "../api/image.ts";

import MomiArt from "../assets/video/MomiArt.png";

const Homepage = () => {
  const { paintings } = useData();

  return (
    <div>
      <div id="homeContainer">
        <section className="hero">
          <div>
            <h1>
              <img src={MomiArt} alt="Animazione MomiArt" className="my-4" />
            </h1>
          </div>
          <div>
            {paintings && (
              <div id="carouselContainer">
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
        <section>
          <div>
            <h2>About MomiArt</h2>
            <p></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
