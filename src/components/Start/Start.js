import React from 'react';
import "./Start.css"
import Greeting from "../Greeting/Greeting"
// import Skills from '../Skills/Skills';
import ProyectosCarousel from "../ProyectosCarousel/ProyectosCarousel";


export default function Start({ proyectos = [] }) {
  return (
    <div>
        <Greeting />
        {/* <Skills /> */}
        <ProyectosCarousel proyectos={proyectos} />
    </div>
  )
}
