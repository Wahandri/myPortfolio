import React from "react";
import hombre from "../../images/hombrex.png";
import "./Greeting.css";
import Skills from "../Skills/Skills";

export default function Greeting() {
  return (
    <div className="boxGreeting borderCard flexCenter">
      <div className="helloImg">
        <div className="textStart padding-20 ">
          <h1>
            Manuel García Cobos
          </h1>
          <h2 className="color2">
          {`< AI-Augmented Full-Stack Developer />`}
          </h2>
          <p className="greeting-subtitle">
            Programador clásico × IA moderna — construyo sistemas complejos con agentes inteligentes
          </p>
        </div>
        <div className="divMen">
          <img className="imgMen" src={hombre} alt="" />
        </div>
      </div>
      <Skills />
    </div>
  );
}
