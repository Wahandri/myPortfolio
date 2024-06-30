import React, { useState} from "react";
import hombre from "../../images/hombre.png";
import "./Greeting.css";
import Skills from "../Skills/Skills";
import VSC from "../VSC/VSC";


export default function Greeting() {
  // const [showMore, setShowMore] = useState(false);

  return (
    <div className="boxGreeting borderCard flexCenter">
      <div className="boxMyDescription hello">
        <div className="helloImg">
          <div className="textStart">
            <h1>Me llamo <span class="color2">Manuel</span></h1>
            <h1>
              Y soy <span className="color2">Desarrollador Web</span>
            </h1>
          </div>
          <div className="divMen">
            <img className="imgMen" src={hombre} alt="" />
            
          </div>
          
        </div>

        <VSC/>


        {/* <div className="myDescription borderCard">
          <h3>
            Soy Manuel García, tengo 30 años y soy un <span className="color2">Desarrollador Web Full-Stack</span> con sólida formación de <span className="color2">Codespace Academy</span>. Mi insaciable curiosidad me impulsa a seguir aprendiendo y aplicando mis conocimientos en proyectos personales.
          </h3>
          {showMore && ( 
            <h3>
              Me defino por mi personalidad positiva, enfoque orientado a objetivos y habilidad para trabajar en equipo.
              <br/>
              Ahun que mi experiencia laboral hasta ahora venga del gremio de la hosteleria, creo que mi año de inmersión en la academia y la aplicación diaria en proyectos personales, incluyendo el desarrollo de un sitio web para un pequeño negocio, han sido esenciales para mi aprendizaje.
              <br/><br/> 
              Me siento bien preparado para llevar mis habilidades al siguiente nivel y enfrentar con éxito desafíos en el entorno laboral del desarrollo web. Estoy emocionado por seguir creciendo y contribuir significativamente en proyectos futuros.
            </h3>
          )}
        </div>

        <button className="linkNavbar" onClick={() => setShowMore(!showMore)}>
          {" "}
          {showMore ? "Plegar" : "Leer más"}
        </button> */}
      </div>
      <Skills/>
    </div>
  );
}
