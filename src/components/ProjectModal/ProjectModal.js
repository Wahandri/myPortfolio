import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    const { titulo, detalles } = project;

    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="project-modal-close" onClick={onClose}>
                    ✕
                </button>

                <h2 className="project-modal-title">{titulo}</h2>

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

                            {detalles.tecnologias && detalles.tecnologias.length > 0 && (
                                <div className="project-detail-section">
                                    <h3>Tecnologías Usadas</h3>
                                    <div className="tech-icons-container">
                                        {detalles.tecnologias.map((tech, index) => (
                                            <div key={index} className="tech-item" title={tech.name}>
                                                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                                                <span className="tech-name">{tech.name}</span>
                                            </div>
                                        ))}
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
