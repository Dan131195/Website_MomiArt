import { useData } from "../context/DataContext.ts";
import { urlFor } from "../api/image.ts";

import MomiArt from "../assets/video/MomiArt.png";

const Homepage = () => {
  const { paintings, bio } = useData();

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
              <div id="carouselContainer" className="my-2">
                <div className="carousel d-flex gap-2 gap-md-3 mb-2">
                  {paintings.map((p) => {
                    return (
                      <img
                        key={p._id}
                        src={urlFor(p.immagine).url()}
                        alt={p.titolo}
                        className="rounded-4"
                      />
                    );
                  })}
                </div>
                <div className="carousel carousel-reverse d-flex gap-2 gap-md-3 mb-4">
                  {[...paintings].reverse().map((p) => (
                    <img
                      key={p._id}
                      src={urlFor(p.immagine).url()}
                      alt={p.titolo}
                      className="rounded-4"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        <section id="aboutMomiArt">
          <div id="aboutMomiArtContent" className="py-5">
            <h2 className="font display-4 mb-4 fw-bolder">
              <span className="font display-4 ">About</span> Momi Art
            </h2>
            <p className="font ">{bio.descrizione_breve}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
