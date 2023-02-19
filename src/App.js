import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "./components/Button";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      id="app"
      className={`h-screen flex items-center justify-center p-6 ${
        darkMode
          ? "bg-gray-800"
          : "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
      }`}
    >
      <div
        id="outer"
        className={`rounded-xl ${
          darkMode ? "bg-gray-800 bg-opacity-80" : "bg-white bg-opacity-60"
        } backdrop-filter backdrop-blur-lg p-12 shadow-md flex flex-col md:flex-row gap-8`}
      >
        <button
          className={`absolute top-6 right-6 bg-white hover:bg-gray-200 rounded-md px-3 py-2 flex justify-center items-center ${
            darkMode ? "text-gray-800" : "text-gray-600"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FaSun className="text-yellow-500 animate-bounce" />
          ) : (
            <FaMoon className="text-gray-500 animate-pulse" />
          )}
          <span className="ml-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
        <div id="bio" className="w-full md:w-3/5 text-center md:text-left">
          <h1
            alt="Panos"
            className={`text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-black"
            } font-bold mb-4`}
          >
            Peter Papas
          </h1>
          <p
            className={`text-lg lg:text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } leading-7`}
          >
            Hey there! I'm Pano 👋, a Junior Front-End Web developer based in
            Melbourne with experience at&nbsp;
            <a
              className={`${darkMode ? "text-gray-400" : "text-black"}`}
              href="https://www.nintendo.com.au/"
            >
              Nintendo
            </a>
            &nbsp;and&nbsp;
            <a
              className={`${darkMode ? "text-gray-400" : "text-black"}`}
              href="https://edcursion.com.au/"
            >
              Edcursion
            </a>
            . I enjoy web dev and UX/UI design, currently pursuing an IT degree
            at RMIT University. In my free time, I enjoy building personal
            projects and expanding my skills. I'm always up for a challenge and
            eager to explore new things.
          </p>
          <div id="links" className="flex justify-center md:justify-start mt-6">
            <Button
              href="https://github.com/peterpapas"
              icon={<FontAwesomeIcon icon={brands("github")} size="lg" />}
              name="GitHub"
              className="mr-4"
            />
            <Button
              href="https://www.linkedin.com/in/panagiotis-papanastasatos/"
              icon={<FontAwesomeIcon icon={brands("linkedin")} size="lg" />}
              name="LinkedIn"
              className="mr-4"
            />
            <Button
              href="mailto:panagiotis.1230@hotmail.com"
              icon={<FontAwesomeIcon icon={solid("envelope")} size="lg" />}
              name="Email"
              id="email"
            />
          </div>
        </div>
        <div
          id="avatar"
          className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-center"
        >
          <img
            className="rounded-full shadow-lg backdrop-blur-lg backdrop-filter image-style"
            src="https://res.cloudinary.com/dxetyokin/image/upload/v1671288686/Assigment%201/Intro_Picture_Me_pciuao.jpg"
            alt="Pano-on-a-boat"
            width="320"
            height="320"
            style={{
              borderRadius: "50%",
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
