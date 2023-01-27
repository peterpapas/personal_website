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
        <div id="inner">
          <div id="bio">
            <h1 alt="Panos">Peter Papas</h1>
            <p className="text-sm">
              Hey there! I'm Pano👋, a Junior Front-End Web developer based in
              Melbourne and I'm excited to show you what I can do! I love
              playing with web development and UX/UI design, and I always try to
              bring my A-game to every project I work on. I've worked as a
              Junior Front-End Web developer at &nbsp;
              <a href="https://www.nintendo.com.au/">Nintendo</a>, where I was
              responsible for maintaining and updating website content in
              coordination with global stakeholders, and also involved in the
              development and delivery of new features. Before that, I worked at
              &nbsp;<a href="https://edcursion.com.au/">Edcursion</a> as a
              Junior Fullstack developer where I contributed to the development
              of a custom UI library and assisted with the creation of a backend
              API. I'm currently pursuing my IT degree part-time and
              fully-online at RMIT University to deepen my knowledge and
              hands-on experience in the field. In my free time, I love
              expanding my skill set by building personal projects and
              experimenting with different languages. I'm always up for a
              challenge and I'm excited to see what the future holds. I am a
              playful, curious and willing learner, who is always eager to
              explore new things and to take on new challenges.
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
