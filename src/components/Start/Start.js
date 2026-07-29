import React from "react";
import "./Start.css";
import Greeting from "../Greeting/Greeting";
import ProyectosCarousel from "../ProyectosCarousel/ProyectosCarousel";
import GitHubInvite from "../GitHubInvite/GitHubInvite";
import AboutMe from "../AboutMe/AboutMe";
import VSC from "../VSC/VSC";
import AgentWorkflow from "../AgentWorkflow/AgentWorkflow";

export default function Start({ proyectos = [], loading = false }) {
  return (
    <div>
      <Greeting />
      <VSC />

      <div className="experience-section">
        <div className="experience-content borderCard">
          <AboutMe />
          <AgentWorkflow />
          <GitHubInvite />
          {loading ? (
            <div className="loading-projects">
              <p>Cargando proyectos...</p>
            </div>
          ) : (
            <ProyectosCarousel proyectos={proyectos} />
          )}
        </div>
      </div>
    </div>
  );
}
