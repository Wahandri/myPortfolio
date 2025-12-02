import React from "react";
import "./Start.css";
import Greeting from "../Greeting/Greeting";
import ProyectosCarousel from "../ProyectosCarousel/ProyectosCarousel";
import GitHubInvite from "../GitHubInvite/GitHubInvite";
import VSC from "../VSC/VSC";
// import Experience from "../Experience/Experience";


export default function Start({ proyectos = [] }) {
  return (
    <div>
      <Greeting />
      <VSC />

      {/* Sección de Experiencia Unificada */}
      <div className="experience-section">
        <div className="experience-content borderCard">
          {/* <h2 className="flexCenter fontTitle experience-title">Experiencia</h2> */}
          <ProyectosCarousel proyectos={proyectos} />
          <GitHubInvite />
        </div>
      </div>

      {/* <Experience /> */}
    </div>
  );
}
