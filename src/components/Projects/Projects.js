import React from "react";
import "./Projects.css";
import FindTheNumber from "../../images/NumberGammer.png";
import jokesWeb from "../../images/JokesWeb.png";
import SkillsImage from "../SkillsImage/SkillsImage";
import shaktiWeb from "../../images/shaktiWeb.png";
import imgRAM from "../../images/imgRAM.png";
import BtnLink from "../BtnLink/BtnLink";
import imgGithubBlack from "../../images/githubBlack.png";

export default function Projects() {
  return (
    <div className=" boxProjects">
      <h1 className="sombra">Mi Experiencia</h1>
      <div className="listProject">
        <div className="shadowProject flexCenter ">
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
              <div className="btnsLink">
                <BtnLink to="https://github.com/Wahandri/JokesWeb.git">
                  <img className="widthIcon" src={imgGithubBlack} alt=""></img>
                </BtnLink>
              </div>
            </div>
          </div>
          <div className="boxH3">
            <h3>
              Proyecto Full Stack: Plataforma de Compartir y Calificar Chistes
              en Audio
            </h3>
            <p>
              Me complace presentar mi proyecto de final de curso realizado en
              "CodeSpace Academy". Esta iniciativa se centra en el desarrollo de
              una red social dedicada a compartir, calificar y disfrutar de
              chistes en formato de audio.
            </p>
            <p>
              Durante el proceso de creación, me sumergí de lleno en las
              prácticas y conceptos relacionados tanto con el desarrollo como
              con el despliegue y la publicación del proyecto.
            </p>
            <p>
              Esta inmersión no solo me proporcionó una comprensión más profunda
              de los aspectos técnicos, sino que también me permitió asimilar
              prácticas y conceptos que solo se comprenden plenamente a través
              de la experiencia práctica.
            </p>
          </div>
        </div>
        <div className="shadowProject flexCenter reverse">
          <div className="cardProject flexCenter">
            <img className="imgProject" src={imgRAM} alt="" />
            <div className="descriptionProject flexCenter column">
              <div className="skills-box flexCenter rows3">
                <SkillsImage size={"small"} skill={"html"} />
                <SkillsImage skill={"css"} />
                <SkillsImage skill={"js"} />
                <SkillsImage skill={"react"} />
              </div>
              <div className="btnsLink">
                <BtnLink to="https://rick-and-morty-characters.pages.dev/">
                  Play
                </BtnLink>
                <BtnLink to="https://github.com/Wahandri/Characters-Rick-and-Morty.git">
                  <img className="widthIcon" src={imgGithubBlack} alt=""></img>
                </BtnLink>
              </div>
            </div>
          </div>
          <div className="boxH3">
            <h3>Application to consume Rick and Morty API</h3>
          </div>
        </div>

        <div className="shadowProject  flexCenter">
          <div className="cardProject flexCenter">
            <img className="imgProject" src={FindTheNumber} alt="" />
            <div className="descriptionProject flexCenter column">
              <div className="skills-box flexCenter rows3">
                <SkillsImage skill={"html"} />
                <SkillsImage skill={"css"} />
                <SkillsImage skill={"js"} />
                <SkillsImage skill={"react"} />
              </div>
              <div className="btnsLink">
                <BtnLink to="/findTheNumber">Play</BtnLink>
                <BtnLink to="https://github.com/Wahandri/GessTheNumber">
                  <img className="widthIcon" src={imgGithubBlack} alt=""></img>
                </BtnLink>
              </div>
            </div>
          </div>
          <div className="boxH3">
            <h3>
              Game of guessing a random number in 10 tries. Each level more
              difficult. Can you reach level 10?
            </h3>
          </div>
        </div>
        <div className="shadowProject flexCenter reverse">
          <div className="cardProject flexCenter">
            <img className="imgProject" src={shaktiWeb} alt="" />
            <div className="descriptionProject flexCenter column">
              <div className="skills-box flexCenter rows3">
                <SkillsImage skill={"html"} />
                <SkillsImage skill={"css"} />
                <SkillsImage skill={"js"} />
                <SkillsImage skill={"react"} />
              </div>
              <div className="btnsLink">
                <BtnLink to="https://simona-zappoli.pages.dev/">Go</BtnLink>
                <BtnLink to="https://github.com/Wahandri/ShaktiYoga.git">
                  <img className="widthIcon" src={imgGithubBlack} alt=""></img>
                </BtnLink>
              </div>
            </div>
          </div>
          <div className="boxH3">
            <h3>
              website of a small real business of personal coaching, meditation,
              yoga, etc.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
