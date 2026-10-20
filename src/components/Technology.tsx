import js from "../assets/js.png";
import ts from "../assets/ts.png";
import solidity from "../assets/solidity.svg";
import c from "../assets/c.svg";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.svg";
import hono from "../assets/hono.svg";
import git from "../assets/git.png";
import linux from "../assets/linux.png";
import postgres from "../assets/postgres.png";
import foundry from "../assets/foundry.png";

export default function Technology() {
  return (
    <section
      aria-label="Programming languages and frameworks I am familiar with"
      className="technology"
      id="techstack"
    >
      <h2>Technologies</h2>
      <div className="logos">
        <div>
          <img src={js} alt=""/>
          <p>Javascript</p>
        </div>
        <div>
          <img src={ts} alt="" style={{height: "2rem", width: "2.5rem"}}/>
          <p>Typescript</p>
        </div>
        <div>
          <img src={c} alt=""/>
          <p>C</p>
        </div>
        <div>
          <img src={solidity} alt=""/>
          <p>Solidity</p>
        </div>
        <div>
          <img src={react} alt=""/>
          <p>React</p>
        </div>
        <div>
          <img src={nodejs} alt="" />
          <p>Nodejs</p>
        </div>
        <div>
          <img src={hono} alt=""/>
          <p>Hono</p>
        </div>
        <div>
          <img src={git} alt="" />
          <p>Git</p>
        </div>
        <div>
          <img src={linux} alt="" />
          <p>Linux</p>
        </div>
        <div>
          <img src={postgres} alt="" />
          <p>PostgreSQL</p>
        </div>
        <div>
          <img src={foundry} alt="" />
          <p>Foundry</p>
        </div>
      </div>
    </section>
  );
}
