import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";

const Footer = () => {
  const { contacts } = useData();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-logo">Momi Art</p>
            <p className="footer-tagline">
              Pittura contemporanea · Astratto &amp; Urbano
            </p>
            <Link to="/Contatti" className="btn-hero btn-hero--light">
              Contattami
            </Link>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <p className="footer-col-title">Naviga</p>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Opere">Opere</Link>
                </li>
                <li>
                  <Link to="/#aboutMomiArtContainer">About</Link>
                </li>
                <li>
                  <Link to="/Contatti">Contatti</Link>
                </li>
              </ul>
            </div>

            {contacts?.social?.length ? (
              <div className="footer-col">
                <p className="footer-col-title">Seguimi</p>
                <ul>
                  {contacts.social.map((s) => (
                    <li key={s._key}>
                      <a href={s.url} target="_blank" rel="noreferrer">
                        {s.piattaforma}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {contacts?.email || contacts?.cellulare ? (
              <div className="footer-col">
                <p className="footer-col-title">Contatti</p>
                <ul>
                  {contacts.email && (
                    <li>
                      <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                    </li>
                  )}
                  {contacts.cellulare && (
                    <li>
                      <a href={`tel:${contacts.cellulare.replace(/\s/g, "")}`}>
                        {contacts.cellulare}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} | OMAR.B</p>
          <button
            type="button"
            className="footer-top-btn"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Torna su ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
