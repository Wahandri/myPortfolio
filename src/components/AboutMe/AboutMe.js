import React, { useEffect, useRef, useState } from "react";
import "./AboutMe.css";

export default function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
                rootMargin: "0px"
            }
        );

        const currentRef = textRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="about-me-section">
            <div className="about-me-content">
                <h2 className="fontTitle about-me-title">Sobre mí</h2>
                <div
                    ref={textRef}
                    className={`about-me-text ${isVisible ? "visible" : ""}`}
                >
                    <p>
                        Hola, soy Manuel. Soy un desarrollador web apasionado por crear experiencias digitales que marcan la diferencia.
                        Me especializo en el ecosistema de React y disfruto transformando ideas complejas en interfaces limpias, intuitivas y funcionales.
                    </p>
                    <p>
                        Mi enfoque combina la creatividad del diseño con la lógica de la programación. Me encanta resolver problemas y aprender
                        continuamente nuevas tecnologías para mejorar mis habilidades y ofrecer mejores soluciones.
                    </p>
                    <p>
                        <span className="highlight-text">Tecnologías principales:</span> React, JavaScript, HTML, CSS, Next.js, Node.js y MongoDB.
                    </p>
                    <p>
                        Actualmente, estoy buscando mi primera oportunidad profesional como desarrollador web. Estoy listo para aportar mi entusiasmo,
                        dedicación y capacidad de aprendizaje a un equipo dinámico donde pueda seguir creciendo.
                    </p>
                </div>
            </div>
        </div>
    );
}
