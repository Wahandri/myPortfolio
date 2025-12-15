import React, { useState } from "react";
import "./FloatingActions.css";
import ContactModal from "../ContactModal/ContactModal";

const FloatingActions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="floating-actions-container">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="unified-btn-filled"
                    title="Contactar"
                >
                    <span className="icon">✉️</span>
                    <span className="text">Contactar</span>
                </button>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default FloatingActions;
