import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <div className="App">
      <div id="outer">
        <div
          id="inner"
          className="bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg p-12"
        >
          <div id="bio">
            <h1 alt="Panos">Peter Papas</h1>
            <p className="text-sm">
              Hey there! I'm Pano 👋, a Junior Front-End Web developer based in
              Melbourne with experience at &nbsp;
              <a href="https://www.nintendo.com.au/">Nintendo</a> and &nbsp;
              <a href="https://edcursion.com.au/">Edcursion</a>. I enjoy web dev
              and UX/UI design, currently pursuing an IT degree at RMIT
              University. In my free time, I enjoy building personal projects
              and expanding my skills. I'm always up for a challenge and eager
              to explore new things.
            </p>
            <div id="links">
              <a href="https://github.com/peterpapas">
                <FontAwesomeIcon icon={brands("github")} size="xl" />
                Github
              </a>
              <a href="https://www.linkedin.com/in/panagiotis-papanastasatos/">
                <FontAwesomeIcon icon={brands("linkedin")} size="xl" />
                LinkedIn
              </a>
              <a id="email" href="mailto:panagiotis.1230@hotmail.com">
                <FontAwesomeIcon icon={solid("envelope")} size="xl" />
                Email
              </a>
            </div>
          </div>
          <div id="avatar">
            <img
              className="rounded-md"
              src="https://res.cloudinary.com/dxetyokin/image/upload/v1671288686/Assigment%201/Intro_Picture_Me_pciuao.jpg"
              alt="Pano-on-a-boat"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
