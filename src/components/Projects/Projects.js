// Projects.js
import React, { useState } from "react";
import "./Projects.css";
import FindTheNumber from "../../images/NumberGammer.png";
import jokesWeb from "../../images/JokesWeb.png";
import SkillsImage from "../SkillsImage/SkillsImage";
import shaktiWeb from "../../images/simonaZappoliWeb.png";
import imgRAM from "../../images/imgRAM.png";
import BtnLink from "../BtnLink/BtnLink";
import imgGithubBlack from "../../images/githubBlack.png";
import VideoPopup from "../VideoPopup/VideoPopup"; // Asegúrate de ajustar la ruta según sea necesario

export default function Projects() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    setVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setVideoOpen(false);
  };

  return (
    <div className="boxProjects">
      <h1 className="experience borderCard">Proyectos</h1>
      <div className="listProject">
        <div className="shadowProject borderCard flexCenter ">
          <div className="cardProject flexCenter">
            <img className="imgProject" src={jokesWeb} alt="" />
            <div className="descriptionProject flexCenter column">
              <div className="skills-box flexCenter rows3">
                <SkillsImage size={"small"} skill={"html"} />
                <SkillsImage skill={"css"} />
                <SkillsImage skill={"js"} />
                <SkillsImage skill={"react"} />
                <SkillsImage skill={"node"} />
                <SkillsImage skill={"mongo"} />
              </div>
            </div>
          </div>
          <div className="boxH3">
            <div className="boxTitleProject">
              <h1 className="color2">Wahaha</h1>
              <div className="btnsLink">
                <BtnLink to="https://github.com/Wahandri/JokesWeb.git">
                  <img className="widthIcon" src={imgGithubBlack} alt="" />
                </BtnLink>
                <button className="BtnLink" onClick={handleOpenVideo}>
                  Ver Demo
                </button>
              </div>
            </div>
            <h3>
              <p>
                Wahaha es una plataforma interactiva y divertida donde los
                usuarios pueden ver, escuchar, puntuar y añadir a favoritos
                chistes subidos por otros miembros de la comunidad.
              </p>
              <p>
                Diseñada como una pequeña red social para compartir y evaluar
                chistes, Wahaha permite a los usuarios disfrutar de una
                experiencia única al combinar elementos de humor y
                socialización.
              </p>
              <p>
                Este es un proyecto full stack que desarrollé desde cero como
                parte de mi proyecto final de curso, el cual completé con éxito.
                Con el tiempo, he realizado mejoras específicas en la
                experiencia de usuario y diseño.
              </p>
            </h3>
          </div>
        </div>

        <div className="shadowProject borderCard flexCenter reverse">
          <div className="cardProject flexCenter">
            <img className="imgProject" src={shaktiWeb} alt="" />
            <div className="descriptionProject flexCenter column">
              <div className="skills-box flexCenter rows3">
                <SkillsImage skill={"html"} />
                <SkillsImage skill={"css"} />
                <SkillsImage skill={"js"} />
                <SkillsImage skill={"react"} />
              </div>
            </div>
          </div>
          <div className="boxH3">
            <div className="boxTitleProject">
              <h1 className="color2">SimonaZappoli</h1>
              <div className="btnsLink">
                <BtnLink to="https://simona-zappoli.pages.dev/">Ver</BtnLink>
                <BtnLink to="https://github.com/Wahandri/ShaktiYoga.git">
                  <img className="widthIcon" src={imgGithubBlack} alt="" />
                </BtnLink>
              </div>
            </div>
            <h3>
              <p>
                Simonazappoli es una web estática que diseñé y creé para el
                negocio freelance de una amiga dedicada al coaching emocional,
                nutrición, masajes, meditación y yoga.
              </p>
              <p>
                Este proyecto fue una oportunidad para acercarme a un entorno
                laboral real, donde tuve que escuchar peticiones, solucionar
                problemas y trabajar en el diseño, a pesar de no ser diseñador.
                A través de reuniones online y telefónicas con Simona, logramos
                definir un diseño que cumpliera con sus expectativas y ofreciera
                una experiencia de usuario cómoda.
              </p>
            </h3>
          </div>
        </div>
        <div className="shadowProject borderCard flexCenter">
          <div className="cardProject flexCenter">
            <img className="imgProject" src={FindTheNumber} alt="" />
            <div className="descriptionProject flexCenter column">
              <div className="skills-box flexCenter rows3">
                <SkillsImage skill={"html"} />
                <SkillsImage skill={"css"} />
                <SkillsImage skill={"js"} />
              </div>
            </div>
          </div>
          <div className="boxH3">
            <div className="boxTitleProject">
              <h1 className="color2">Adivina el Numero</h1>
              <div className="btnsLink">
                <BtnLink to="/findTheNumber">Play</BtnLink>
                <BtnLink to="https://github.com/Wahandri/GessTheNumber">
                  <img className="widthIcon" src={imgGithubBlack} alt="" />
                </BtnLink>
              </div>
            </div>
            <h3>
              <p>
                Este juego simple hecho con HTML, CSS y JavaScript desafía al
                jugador a adivinar un número secreto que varía en dificultad a
                medida que avanzas de nivel.
              </p>
              <p>
                Creado principalmente como ejercicio para practicar lógica y
                fortalecer mis habilidades en JavaScript.
              </p>
            </h3>
          </div>
        </div>
        <div className="shadowProject borderCard flexCenter reverse">
          <div className="cardProject flexCenter">
            <img className="imgProject" src={imgRAM} alt="" />
            <div className="descriptionProject flexCenter column">
              <div className="skills-box flexCenter rows3">
                <SkillsImage size={"small"} skill={"html"} />
                <SkillsImage skill={"css"} />
                <SkillsImage skill={"js"} />
                <SkillsImage skill={"react"} />
              </div>
            </div>
          </div>
          <div className="boxH3">
            <div className="boxTitleProject">
              <h1 className="color2">Rick and Morty API</h1>
              <div className="btnsLink">
                <BtnLink to="https://rick-and-morty-characters.pages.dev/">
                  Play
                </BtnLink>
                <BtnLink to="https://github.com/Wahandri/Characters-Rick-and-Morty.git">
                  <img className="widthIcon" src={imgGithubBlack} alt="" />
                </BtnLink>
              </div>
            </div>
            <h3>
              <p>
                Esta es una web sencilla que consume una API pública de Rick y
                Morty. Permite explorar todos los personajes de la serie con un
                scroll infinito y cuenta con un input de búsqueda que filtra los
                personajes a medida que se escribe.
              </p>
              <p>
                Inspirado por mi pasión por la serie, me dediqué especialmente
                al diseño CSS para crear una experiencia visual atractiva.
              </p>
            </h3>
          </div>
        </div>
      </div>
      <VideoPopup isOpen={isVideoOpen} onClose={handleCloseVideo} />
    </div>
  );
}
