import React, { useState} from "react";
import hombre from "../../images/hombre.png";
// import fondoTek from "../../images/fondoTek.png";
import "./Greeting.css";

export default function Greeting() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="boxGreeting borderCard flexCenter">
      <div className="boxMyDescription hello">
        <div className="helloImg">
          <div className="textStart">
            <h1>Hola, me llamo <span class="color2">Manuel</span></h1>
            <h1>
              Y soy <span className="color2">Desarrollador Web</span>
            </h1>
          </div>
          <div className="divMen">
            <img className="imgMen" src={hombre} alt="" />
            {/* <img className=" imgMen backgroundTek" src={fondoTek} alt="" /> */}
          </div>
        </div>
        <div className="myDescription borderCard">
          <h3>
            Soy Manuel García, tengo 30 años y soy un <span className="color2">Desarrollador Web Full-Stack</span> con sólida formación de <span className="color2">Codespace Academy</span>. Mi insaciable curiosidad por la creación me impulsa a seguir aprendiendo y aplicando mis conocimientos en proyectos personales.
          </h3>
          {showMore && ( 
            <h3>
              Me defino por mi personalidad positiva, enfoque orientado a objetivos y habilidad para trabajar en equipo. Aunque mi experiencia laboral es limitada, creo que mi año de inmersión en la academia y la aplicación diaria en proyectos personales, incluyendo la creación de un sitio web gratuito para un pequeño negocio, han sido esenciales para mi desarrollo. Me siento bien preparado para llevar mis habilidades al siguiente nivel y enfrentar con éxito desafíos en el entorno laboral del desarrollo web. Estoy emocionado por seguir creciendo y contribuir significativamente en proyectos futuros.
            </h3>
          )}
        </div>

        <button className="linkNavbar" onClick={() => setShowMore(!showMore)}>
          {" "}
          {showMore ? "Plegar" : "Leer más"}
        </button>
      </div>
    </div>
  );
}
