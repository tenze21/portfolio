import { FiDownload } from "react-icons/fi";

export default function Header(){
    return(
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="logo">{"</TC>"}</li>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#skills">Skills</a></li>
                <li className="nav-item"><a href="#techstack">Techstack</a></li>
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="#achievements">Achievements</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
                <li><button><FiDownload color="#22c55e"/> <span>CV</span></button></li>
            </ul>
        </nav>
    )
}