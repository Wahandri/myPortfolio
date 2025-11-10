import React from "react";
import "./Start.css";
import Greeting from "../Greeting/Greeting";
import ProyectosCarousel from "../ProyectosCarousel/ProyectosCarousel";
import VSC from "../VSC/VSC";
// import Experience from "../Experience/Experience";


export default function Start({ proyectos = [] }) {
  return (
    <div>
      <Greeting />
      <VSC />
      <div>
        <h2 className="borderCard flexCenter fontTitle">Experiencia</h2>
      </div>
      <ProyectosCarousel proyectos={proyectos} />
      {/* <Experience /> */}
    </div>
  );
}
