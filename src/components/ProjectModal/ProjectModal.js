import React from "react";
import "./ProjectModal.css";

const techColors = {
  "React": "#61DAFB",
  "Next.js": "#000000",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "Python": "#3776AB",
  "FastAPI": "#009688",
  "Flutter": "#02569B",
  "Dart": "#00B4AB",
  "Node.js": "#339933",
  "CSS": "#1572B6",
  "HTML": "#E34F26",
  "Three.js": "#000000",
  "DeepSeek": "#4F46E5",
  "Ollama": "#000000",
  "Docker": "#2496ED",
  "MariaDB": "#003545",
  "MongoDB": "#47A248",
  "OpenAI API": "#412991",
  "WebSockets": "#4A90D9",
};

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    const { titulo, detalles, privado, disponibleBajoDemanda } = project;

    const tecnologias = detalles?.tecnologias || [];

    const isSimpleTech = typeof tecnologias[0] === "string";

    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="project-modal-close" onClick={onClose}>
                    ✕
                </button>

                <h2 className="project-modal-title">{titulo}</h2>

                {privado && (
                  <div className="private-badge">
                    <span className="private-icon">🔒</span>
                    {disponibleBajoDemanda ? "Proyecto privado — disponible bajo demanda" : "Proyecto privado"}
                  </div>
                )}

                <div className="project-modal-body">
                    {detalles ? (
                        <>
                            <div className="project-detail-section">
                                <p className="project-description-text">{detalles.descripcion}</p>
                            </div>

                            <div className="project-detail-section">
                                <h3>Qué hice</h3>
                                <ul className="project-contributions-list">
                                    {detalles.queHice && detalles.queHice.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {tecnologias.length > 0 && (
                                <div className="project-detail-section">
                                    <h3>Tecnologías Usadas</h3>
                                    <div className="tech-badges-container">
                                        {tecnologias.map((tech, index) => {
                                            const techName = isSimpleTech ? tech : tech.name;
                                            const bgColor = techColors[techName] || "#555";
                                            return (
                                                <span
                                                    key={index}
                                                    className="tech-badge"
                                                    style={{
                                                        backgroundColor: bgColor,
                                                        color: ["#F7DF1E", "#9FD86B"].includes(bgColor) ? "#000" : "#fff"
                                                    }}
                                                >
                                                    {techName}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <p>No hay detalles adicionales disponibles para este proyecto.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
