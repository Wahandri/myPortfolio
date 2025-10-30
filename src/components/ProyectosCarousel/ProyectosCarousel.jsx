import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProyectosCarousel.css";
import VideoPopup from "../VideoPopup/VideoPopup";

const MAX_LENGTH = 380;

const ProyectosCarousel = ({ proyectos = [] }) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const openVideo = (url) => {
    setVideoUrl(url);
    setVideoOpen(true);
  };

  const closeVideo = () => setVideoOpen(false);

  const openModal = (titulo, descripcion) => {
    setModalContent({ titulo, descripcion });
  };

  const closeModal = () => setModalContent(null);

  return (
    <div className="proyectos-carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        speed={700}
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="proyectos-swiper"
      >
        {proyectos.map((proyecto) => {
          const textoLargo =
            proyecto.descripcion && proyecto.descripcion.length > MAX_LENGTH;
          const textoVisible = textoLargo
            ? proyecto.descripcion.slice(0, MAX_LENGTH) + "..."
            : proyecto.descripcion;

          return (
            <SwiperSlide key={proyecto.id || proyecto.titulo}>
              <div className="card">
                {proyecto.imagen && (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="card-image"
                  />
                )}

                <p className="badge">{proyecto.titulo}</p>

                {/* Descripción clicable */}
                {proyecto.descripcion && (
                  <div
                    className="card-description clickable"
                    onClick={() =>
                      openModal(proyecto.titulo, proyecto.descripcion)
                    }
                  >
                    <p>{textoVisible}</p>
                  </div>
                )}

                {/* Botones */}
                {Array.isArray(proyecto.enlaces) &&
                  proyecto.enlaces.length > 0 && (
                    <div className="card-actions">
                      {proyecto.enlaces.map((enlace, index) => {
                        const esVideo =
                          enlace.etiqueta.toLowerCase().includes("demo") &&
                          enlace.url.includes("youtu");

                        return esVideo ? (
                          <button
                            key={index}
                            className="action-button primary"
                            onClick={() => openVideo(enlace.url)}
                          >
                            {enlace.etiqueta}
                          </button>
                        ) : (
                          <a
                            key={index}
                            href={enlace.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`action-button ${
                              enlace.tipo === "primario" ? "primary" : ""
                            }`}
                          >
                            {enlace.etiqueta}
                          </a>
                        );
                      })}
                    </div>
                  )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Popup del video */}
      <VideoPopup isOpen={videoOpen} onClose={closeVideo} videoUrl={videoUrl} />

      {/* Modal del texto completo */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <h3>{modalContent.titulo}</h3>
            <p>{modalContent.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProyectosCarousel;
