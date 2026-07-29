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
                threshold: 0.2,
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
                        Soy Manuel, un desarrollador que empezó como muchos: con HTML, CSS y JavaScript,
                        construyendo poco a poco hasta dominar React, Node.js y el ecosistema full-stack.
                        Me formé en CodeSpace Academy y desde entonces no he parado de crear.
                    </p>
                    <p>
                        Pero algo cambió. La IA irrumpió y, lejos de hacer que la programación desaparezca,
                        la ha transformado. Hoy uso agentes inteligentes como parte de mi caja de herramientas —
                        no para sustituir el código, sino para multiplicar lo que puedo construir.
                        Sigo escribiendo cada línea, tomando decisiones arquitectónicas y resolviendo problemas
                        complejos, pero ahora a una velocidad que antes requería equipos enteros.
                    </p>
                    <p>
                        <span className="highlight-text">Stack actual:</span> React, Next.js, Python, FastAPI, Flutter,
                        Docker, WebSockets, Three.js, IA/LLMs (DeepSeek, Ollama), y un flujo de trabajo
                        donde los agentes IA son mis compañeros de desarrollo.
                    </p>
                    <p>
                        He construido desde asistentes IA con app Android hasta videojuegos 3D multijugador,
                        pasando por bots de trading algorítmico, APIs de生成ación de imágenes y pipelines
                        financieros. Cada proyecto me ha enseñado algo nuevo y me ha hecho mejor programador.
                    </p>
                    <p className="about-cta">
                        ¿Tienes un proyecto interesante? Hablemos.
                    </p>
                </div>
            </div>
        </div>
    );
}
