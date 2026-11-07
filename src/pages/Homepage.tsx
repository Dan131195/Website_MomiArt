import { useData } from "../context/DataContext.ts";
import { urlFor } from "../api/image.ts";
import { Link } from "react-router-dom";

import MomiArt from "../assets/video/MomiArt.png";
import abstract_1 from "../assets/images/abstract_1.jpeg";
import city_1 from "../assets/images/city_1.jpeg";
import city_2 from "../assets/images/city_2.jpeg";
const Homepage = () => {
  const { paintings, bio } = useData();

  return (
    <div>
      <div id="homeContainer">
        <section className="hero">
          <div className=" text-center">
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

        <section id="aboutMomiArtContainer">
          <div id="aboutMomiArtContent" className="py-3">
            <hr />

            <h2 className="font display-4 mb-4 fw-bolder py-2">
              <span className="fw-bolder display-4 ">About - </span> Momi Art
            </h2>
            <p className="me-md-5 pb-3 fw-bold">{bio.descrizione_breve}</p>

            <div className=" mb-4 moreInfoButton">
              <Link to="/Contatti" className="font ">
                Scopri di più..
              </Link>
            </div>

            <hr className="mt-5" />
          </div>
        </section>

        <section id="paintingHomepageContainer" className="my-5">
          <div>
            <h2 className="font mb-4">Paintings</h2>
          </div>

          <div>
            <img src={city_1} alt="Immagine dipinto eclipse city" />
            <p className="m-0 mt-1">Eclipse - CityLife 1</p>
            <p>2024</p> <hr />
          </div>

          <div className="my-5 text-end">
            <img src={city_2} alt="Immagine dipinto eclipse city" />
            <p className="m-0 mt-1">Eclipse - CityLife 2</p>
            <p>2024</p>
            <hr />
          </div>

          <div>
            <img src={abstract_1} alt="Immagine dipinto astratto" />
            <p className="m-0 mt-1">Abstract - PinkyBlue</p>
            <p>2025</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
