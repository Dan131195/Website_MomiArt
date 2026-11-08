import { useData } from "../context/DataContext.ts";
import { urlFor } from "../api/image.ts";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import type { PaintingInterface } from "../types/index.ts";
import useReveal from "../hooks/useReveal.ts";

import MomiArt from "../assets/video/MomiArt.png";
import abstract_1 from "../assets/images/abstract_1.jpeg";
import city_1 from "../assets/images/city_1.jpeg";
import city_2 from "../assets/images/city_2.jpeg";

const FEATURED = [
  {
    src: city_1,
    title: "Eclipse - CityLife 1",
    year: 2024,
    alt: "Dipinto Eclipse - CityLife 1",
  },
  {
    src: city_2,
    title: "Eclipse - CityLife 2",
    year: 2024,
    alt: "Dipinto Eclipse - CityLife 2",
  },
  {
    src: abstract_1,
    title: "Abstract - PinkyBlue",
    year: 2025,
    alt: "Dipinto astratto PinkyBlue",
  },
];

const Homepage = () => {
  const { paintings, bio } = useData();
  const { hash, key } = useLocation();
  useReveal();
  const SHAPES = ["", "is-tall", "is-wide"];
  const MIN_PER_TRACK = 12;

  const buildTrack = (list: PaintingInterface[]) => {
    if (list.length === 0) return [];
    const base: PaintingInterface[] = [];
    while (base.length < MIN_PER_TRACK) base.push(...list);
    return [...base, ...base];
  };

  const renderTrack = (list: PaintingInterface[]) =>
    buildTrack(list).map((p, i) => (
      <img
        key={`${p._id}-${i}`}
        src={urlFor(p.immagine).width(600).auto("format").url()}
        alt=""
        decoding="async"
        className={SHAPES[(i % list.length) % SHAPES.length]}
      />
    ));

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash, key]);

  return (
    <div>
      <div id="homeContainer">
        <section className="hero">
          {paintings.length > 0 && (
            <div className="hero-wall" aria-hidden="true">
              <div className="hero-track">{renderTrack(paintings)}</div>
              <div className="hero-track hero-track--right">
                {renderTrack([...paintings].reverse())}
              </div>
            </div>
          )}

          <div className="hero-content">
            <p className="hero-eyebrow">
              Pittura contemporanea · Astratto &amp; Urbano
            </p>
            <h1 className="hero-title">
              <span className="visually-hidden">Momi Art</span>
              <img src={MomiArt} alt="" />
            </h1>
            <div className="hero-btn">
              <Link to="/Opere" className="btn-hero btn-hero--primary">
                Guarda le opere
              </Link>
              <Link to="/Contatti" className="btn-hero btn-hero--ghost">
                Contattami
              </Link>
            </div>
          </div>

          <a
            href="#aboutMomiArtContainer"
            className="hero-scroll"
            aria-label="Scorri alla sezione About"
          >
            <span></span>
          </a>
        </section>

        <section id="aboutMomiArtContainer">
          <div className="about-card reveal">
            <p className="section-eyebrow">About</p>
            <h2 className="section-title">Momi Art</h2>
            <p className="about-bio">{bio.descrizione_breve}</p>
            <Link to="/Contatti" className="btn-hero btn-hero--ghost">
              Scopri di più
            </Link>
          </div>
        </section>

        <section id="paintingHomepageContainer">
          <header className="featured-header reveal">
            <p className="section-eyebrow">Opere in evidenza</p>
            <h2 className="section-title">Paintings</h2>
          </header>

          <div className="featured-list">
            {FEATURED.map((f, i) => (
              <article key={f.title} className="featured-item reveal">
                <div className="featured-media">
                  <img src={f.src} alt={f.alt} loading="lazy" />
                </div>
                <div className="featured-info">
                  <span className="featured-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="featured-title">{f.title}</h3>
                  <p className="featured-year">{f.year}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="featured-cta reveal">
            <Link to="/Opere" className="btn-hero btn-hero--primary">
              Vedi tutte le opere
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
