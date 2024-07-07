// VideoPopup.js
import React from 'react';
import './VideoPopup.css';
import cabra from "./cabra.mp4";
import close from "../../images/delete.png";

const VideoPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="close"><img width="30px" onClick={onClose} src={close} alt=''/></div>
        <video controls autoPlay>
          <source src={cabra} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;
