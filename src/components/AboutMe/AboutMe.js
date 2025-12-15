import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="about-me-section">
            <div className="about-me-content borderCard">
                <h2 className="fontTitle about-me-title">Sobre mí</h2>
                <div className="about-me-text">
                    <p>
                        Hola, soy Manuel. Me especializo en el desarrollo web frontend con React.
                        Disfruto creando interfaces limpias y funcionales.
                    </p>
                    <p>
                        <span className="highlight-text">Tecnologías principales:</span> React, JavaScript, HTML, CSS, Next.js.
                    </p>
                    <p>
                        Busco mi primera oportunidad como desarrollador web junior para aportar mis habilidades
                        y seguir creciendo profesionalmente.
                    </p>
                </div>
            </div>
        </div>
    );
}
