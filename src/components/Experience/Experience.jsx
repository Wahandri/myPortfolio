import React from "react";
import experienciaData from "../../data/experienciaData";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section borderCard">
      <header className="experience-header">
        <h2 className="experience-title">Experiencia destacada</h2>
        <p className="experience-subtitle">
          Una línea de tiempo con los proyectos y aprendizajes que han marcado mi
          crecimiento profesional.
        </p>
      </header>

      <div className="experience-timeline">
        {experienciaData.map((item) => (
          <article key={item.id} className="experience-item borderCard2">
            <div className="experience-marker" aria-hidden="true" />

            <div className="experience-content">
              <div className="experience-meta">
                <span className="experience-role">{item.rol}</span>
                <span className="experience-period">{item.periodo}</span>
              </div>
              <h3 className="experience-company">{item.empresa}</h3>

              <ul className="experience-list">
                {item.descripcion.map((linea, index) => (
                  <li key={index}>{linea}</li>
                ))}
              </ul>

              <div className="experience-stack" aria-label="Tecnologías utilizadas">
                {item.stack.map((tech) => (
                  <span key={tech} className="experience-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
