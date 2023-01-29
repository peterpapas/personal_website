import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "./components/Button";

// TODO Add break the ice section at the start
// TODO Add mouse curser effect
// TODO Add background effect
// TODO Add button effect

function App() {
  return (
    <div id="app" className="App">
      <div id="outer">
        <div
          id="inner"
          className="h-full w-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100
          drop-shadow-md p-12"
        >
          <div id="bio">
            <h1 alt="Panos" className="text-white">
              Peter Papas
            </h1>
            <p className="text-sm text-white">
              Hey there! I'm Pano 👋, a Junior Front-End Web developer based in
              Melbourne with experience at &nbsp;
              <a className="text-white" href="https://www.nintendo.com.au/">
                Nintendo
              </a>{" "}
              and &nbsp;
              <a className="text-white" href="https://edcursion.com.au/">
                Edcursion
              </a>
              . I enjoy web dev and UX/UI design, currently pursuing an IT
              degree at RMIT University. In my free time, I enjoy building
              personal projects and expanding my skills. I'm always up for a
              challenge and eager to explore new things.
            </p>
            <div id="links">
              <Button
                href="https://github.com/papas-pano"
                icon={<FontAwesomeIcon icon={brands("github")} size="xl" />}
                name="GitHub"
              />
              <Button
                href="https://www.linkedin.com/in/panagiotis-papanastasatos/"
                icon={<FontAwesomeIcon icon={brands("linkedin")} size="xl" />}
                name="LinkedIn"
              />
              <Button
                href="mailto:panagiotis.1230@hotmail.com"
                icon={<FontAwesomeIcon icon={solid("envelope")} size="xl" />}
                name="Email"
                id="email"
              />
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
    </div>
  );
}

export default App;
