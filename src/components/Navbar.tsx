import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";

const Navbar = () => {
  const { contacts } = useData();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav
      className={`topbar ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}
    >
      <div className="topbar-inner">
        <Link to="/" className="topbar-brand" onClick={close}>
          <img src="/images/city_icon.png" alt="" />
          <span>Momi Art</span>
        </Link>

        <ul className="topbar-links">
          <li>
            <NavLink to="/Opere" className="topbar-link">
              Opere
            </NavLink>
          </li>
          <li>
            <Link to="/#aboutMomiArtContainer" className="topbar-link">
              About
            </Link>
          </li>
        </ul>

        <NavLink to="/Contatti" className="topbar-cta">
          Contattami
        </NavLink>

        <button
          type="button"
          className="topbar-toggle"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="topbar-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="topbar-menu" className="topbar-menu">
        <ul>
          <li>
            <NavLink to="/Opere" onClick={close}>
              Opere
            </NavLink>
          </li>
          <li>
            <Link to="/#aboutMomiArtContainer" onClick={close}>
              About
            </Link>
          </li>
          <li>
            <NavLink to="/Contatti" onClick={close}>
              Contatti
            </NavLink>
          </li>
        </ul>

        {contacts?.social?.length ? (
          <div className="topbar-social">
            {contacts.social.map((s) => (
              <a key={s._key} href={s.url} target="_blank" rel="noreferrer">
                {s.piattaforma}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
