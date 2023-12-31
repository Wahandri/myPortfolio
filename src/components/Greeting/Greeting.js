import React, { useState, useEffect } from "react";
import hombre from "../../images/hombre.png";
import fondoTek from "../../images/fondoTek.png";
import "./Greeting.css";

export default function Greeting() {
  const [greeting, setGreeting] = useState(
    'Hola, mi nombre es <span class="color2">Manuel</span>'
  );
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting((prevGreeting) =>
        prevGreeting === 'Hola, mi nombre es <span class="color2">Manuel</span>'
          ? 'Pero me dicen <span class="color2">Wahandri</span>'
          : 'Hola, mi nombre es <span class="color2">Manuel</span>'
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="boxGreeting flexCenter">
      <div className="boxMyDescription hello">
        <div className="helloImg">
          <div className="textStart">
            <h1
              className="fixed"
              dangerouslySetInnerHTML={{ __html: greeting }}
            />
            <h1>
              Y soy <span className="color2">Desarrollador Web Fullstack</span>
            </h1>
          </div>
          <div className="divMen">
            <img className="imgMen shadowMen" src={hombre} alt="" />
            <img className=" imgMen backgroundTek" src={fondoTek} alt="" />
          </div>
        </div>
        <div className="myDescription">
          <h3>
            ¡Hola! Soy Manuel García, tengo 30 años y soy{" "}
            <span className="color2">Desarrollador Web Full-Stack</span> con una
            sólida formación en{" "}
            <a
              href="https://codespaceacademy.com/"
              target="_blank"
              rel="noreferrer"
            >
              Codespace Academy
            </a>
            . Mi curiosidad insaciable por la creación y la resolución de
            problemas me impulsa a seguir aprendiendo y aplicando mis
            conocimientos en proyectos personales.
          </h3>
          {showMore && ( // Si showMore es true, se muestra el segundo <h3>
            <h3>
              Mi naturaleza optimista y mi enfoque orientado hacia la
              consecución de metas, junto con mi habilidad para colaborar
              efectivamente en equipo, son aspectos clave de mi personalidad.
              <br /> A pesar de tener una experiencia laboral aún incipiente,
              considero que mi intensa formación durante un año en la academia y
              la dedicación constante a proyectos personales han sido
              fundamentales en mi evolución profesional.
              <br />
              <br /> Este periodo incluye el desarrollo de un sitio web sin
              costo para un pequeño negocio real, una experiencia que ha
              enriquecido significativamente mi aprendizaje. Me siento
              plenamente capacitado para elevar mis habilidades a un nivel
              superior, enfrentando con éxito los retos que presenta el mundo
              laboral del desarrollo web.
              <br />
              <br /> Estoy entusiasmado con la idea de continuar mi crecimiento
              profesional y aportar de manera notable a los proyectos futuros.
            </h3>
          )}
          <button className="btnRead" onClick={() => setShowMore(!showMore)}>
            {" "}
            {/* Botón para mostrar/ocultar el segundo <h3> */}
            {showMore ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
}
