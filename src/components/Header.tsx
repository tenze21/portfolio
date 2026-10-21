import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useScrolled } from "../hooks/useScrolled";

export default function Header() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation">
      <div className="nav-inner">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="Tenzin Choda, back to top">
          {"</TC>"}
        </a>
        <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} id="primary-navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#techstack" onClick={closeMenu}>Techstack</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a className="cv-button" href="/tenzin_choda_cv.pdf" download="tenzin_choda_cv.pdf">
          <FiDownload aria-hidden="true" /> <span>CV</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <FiMenu className="menu-icon menu-icon--open" aria-hidden="true" />
          <FiX className="menu-icon menu-icon--close" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
