import aboutImg from "../assets/body-profile.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsSubstack } from "react-icons/bs";

export default function About() {
  return (
    <section aria-label="A short summary about me" className="about" id="about">
      <div className="picture">
        <img
          src={aboutImg}
          alt="A picture of me at dodedra sitting on the viewpoint bench"
        />
        <div className="socials">
          <a href="https://www.github.com/tenze21" target="_blank">
            <FiGithub color="white" size="1.2rem"/>
          </a>
          <a href="https://www.linkedin.com/in/tenzin-choda" target="_blank">
            <FaLinkedinIn color="white" size="1.2rem"/>
          </a>
          <a href="https://substack.com/@tenze21" target="_blank">
            <BsSubstack color="white" size="1.2rem"/>
          </a>
        </div>
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am computer science student at Gyelpozhing College of Information Technlogy, 
          Royal University of Bhutan where specialize in Blockchain and Cybersecurity. 
          As a Blockchain student I am familiar with building decentralized applications 
          and developing, testing and deploying Solidity smart contracts to Ethereum.
          My cybersecurity background has given me insight into various network and application
          attack vectors and ways to secure them.   
        </p>
        <p>
          Apart from just building software applications I enjoy understanding how computers
          work under the hood. I believe this understanding allows me to understand my code 
          well and make informed optimization and security decisions. In my free time I like 
          to read, write and go for hikes.  
        </p>
      </div>
    </section>
  );
}
