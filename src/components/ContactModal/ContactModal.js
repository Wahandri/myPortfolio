import React from "react";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="contact-modal-close" onClick={onClose}>
                    ✕
                </button>

                <h2 className="contact-modal-title">Contacto</h2>

                <div className="contact-modal-body">
                    <p className="contact-intro">
                        ¡Gracias por tu interés! Puedes contactarme a través de los siguientes medios o descargar mi CV.
                    </p>

                    <div className="contact-options">
                        <a
                            href="mailto:wahandricode@gmail.com"
                            className="unified-btn"
                            style={{ width: '100%', justifyContent: 'flex-start' }}
                        >
                            <span className="contact-icon">✉️</span>
                            <div className="contact-text">
                                <span className="contact-label">Email</span>
                                <span className="contact-value">wahandricode@gmail.com</span>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/manuel-garc%C3%ADa-cobos-6b5413272/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="unified-btn"
                            style={{ width: '100%', justifyContent: 'flex-start' }}
                        >
                            <span className="contact-icon">🔗</span>
                            <div className="contact-text">
                                <span className="contact-label">LinkedIn</span>
                                <span className="contact-value">Manuel García Cobos</span>
                            </div>
                        </a>
                    </div>

                    <div className="cv-download-section">
                        <a
                            href="/cvManuelGarcia.pdf"
                            download="CV_Manuel_Garcia_Cobos.pdf"
                            className="unified-btn"
                            style={{ width: '100%' }}
                        >
                            <span className="icon">📄</span>
                            Descargar Curriculum Vitae
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
