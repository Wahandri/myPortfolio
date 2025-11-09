import React from "react";
import "./Start.css";
import Greeting from "../Greeting/Greeting";
import ProyectosCarousel from "../ProyectosCarousel/ProyectosCarousel";
import Experience from "../Experience/Experience";


export default function Start({ proyectos = [] }) {
  return (
    <div>
      <Greeting />
      <ProyectosCarousel proyectos={proyectos} />
      <Experience />
    </div>
  );
}
