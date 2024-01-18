import React, { useState, useEffect } from "react";
import hombre from "../../images/hombre.png";
import fondoTek from "../../images/fondoTek.png";
import "./Greeting.css";

export default function Greeting() {
  const [greeting, setGreeting] = useState(
    'Hey, my name is <span class="color2">Manuel</span>'
  );
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting((prevGreeting) =>
        prevGreeting === 'Hey, my name is <span class="color2">Manuel</span>'
          ? 'You can call me <span class="color2">Wahandri</span>'
          : 'Hey, my name is <span class="color2">Manuel</span>'
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="boxGreeting borderCard flexCenter">
      <div className="boxMyDescription hello">
        <div className="helloImg">
          <div className="textStart">
            <h1 dangerouslySetInnerHTML={{ __html: greeting }} />
            <h1>
              I am <span className="color2">Web Developer</span>
            </h1>
          </div>
          <div className="divMen">
            <img className="imgMen" src={hombre} alt="" />
            <img className=" imgMen backgroundTek" src={fondoTek} alt="" />
          </div>
        </div>
        <div className="myDescription borderCard">
          <h3>
            Hello! I'm Manuel García, 30 years old, and I am a{" "}
            <span className="color2">Full-Stack Web Developer</span> with a
            strong background from{" "}
            <a
              href="https://codespaceacademy.com/"
              target="_blank"
              rel="noreferrer"
            >
              Codespace Academy
            </a>
            . My insatiable curiosity for creation and problem-solving drives me
            to keep learning and applying my knowledge in personal projects.
          </h3>
          {showMore && ( // Si showMore es true, se muestra el segundo <h3>
            <h3>
              My positive personality, goal-oriented focus, and ability to work
              in a team define me. .While my work experience is limited, I
              believe that my year of immersion in the academy and daily
              application in personal projects, including creating a free
              website for a real small business, have been essential to my
              development. I feel well-prepared to take my skills to the next
              level and successfully tackle challenges in the real-world web
              development environment. I am excited to continue growing and
              contribute significantly to future projects.
            </h3>
          )}
        </div>
        <button className="btnRead" onClick={() => setShowMore(!showMore)}>
          {" "}
          {/* Botón para mostrar/ocultar el segundo <h3> */}
          {showMore ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
}
