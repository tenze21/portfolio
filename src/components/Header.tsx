import { FiDownload } from "react-icons/fi";
import { useScrolled } from "../hooks/useScrolled";

export default function Header() {
  const scrolled = useScrolled();

  return (
    <nav className={`nav-bar ${scrolled? "scrolled" : ""}`}>
      <ul className="nav-list">
        <li className="logo">{"</TC>"}</li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#techstack" className="nav-link">Techstack</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#achievements" className="nav-link">Achievements</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact</a>
        </li>
        <li>
          <a className="cv-button" href="/cv.pdf" download="tenzin_choda_cv.pdf">
            <FiDownload color="#22c55e" /> <span>CV</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
