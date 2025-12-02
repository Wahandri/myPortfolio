import React, { useState, useEffect } from "react";
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
  const [modalIndex, setModalIndex] = useState(null);
  const [imageIndexes, setImageIndexes] = useState({});

  const openVideo = (url) => {
    setVideoUrl(url);
    setVideoOpen(true);
  };

  const closeVideo = () => setVideoOpen(false);

  const openModal = (index) => {
    if (!Array.isArray(proyectos) || proyectos.length === 0) return;
    setModalIndex(index);
  };

  const closeModal = () => setModalIndex(null);

  const showPrevModal = (event) => {
    if (event) event.stopPropagation();
    if (!Array.isArray(proyectos) || proyectos.length <= 1) return;
    setModalIndex((prevIndex) => {
      if (prevIndex === null) return prevIndex;
      return (prevIndex - 1 + proyectos.length) % proyectos.length;
    });
  };

  const showNextModal = (event) => {
    if (event) event.stopPropagation();
    if (!Array.isArray(proyectos) || proyectos.length <= 1) return;
    setModalIndex((prevIndex) => {
      if (prevIndex === null) return prevIndex;
      return (prevIndex + 1) % proyectos.length;
    });
  };

  const modalProyecto =
    modalIndex !== null && Array.isArray(proyectos) && proyectos[modalIndex]
      ? proyectos[modalIndex]
      : null;
  const hasMultipleProjects = Array.isArray(proyectos) && proyectos.length > 1;

  // Slideshow automático para proyectos con múltiples imágenes
  useEffect(() => {
    const intervals = {};

    proyectos.forEach((proyecto, index) => {
      if (Array.isArray(proyecto.imagenes) && proyecto.imagenes.length > 1) {
        intervals[index] = setInterval(() => {
          setImageIndexes((prev) => ({
            ...prev,
            [index]: ((prev[index] || 0) + 1) % proyecto.imagenes.length,
          }));
        }, 3000); // Cambiar imagen cada 3 segundos
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [proyectos]);

  // Slideshow para el modal
  useEffect(() => {
    if (modalProyecto && Array.isArray(modalProyecto.imagenes) && modalProyecto.imagenes.length > 1) {
      const modalInterval = setInterval(() => {
        setImageIndexes((prev) => ({
          ...prev,
          modal: ((prev.modal || 0) + 1) % modalProyecto.imagenes.length,
        }));
      }, 3000);

      return () => clearInterval(modalInterval);
    }
  }, [modalProyecto]);

  return (
    <div className="proyectos-carousel-container">
      <div className="section-header">
        <h3 className="fontTitle">Proyectos Destacados</h3>
        <p className="proyectos-subtitle">Explora algunos de mis trabajos más recientes y significativos</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        speed={700}
        spaceBetween={16}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          900: { slidesPerView: 2, spaceBetween: 20 },
          1600: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="proyectos-swiper"
      >
        {proyectos.map((proyecto, index) => {
          const textoLargo =
            proyecto.descripcion && proyecto.descripcion.length > MAX_LENGTH;
          const textoVisible = textoLargo
            ? proyecto.descripcion.slice(0, MAX_LENGTH) + "..."
            : proyecto.descripcion;

          return (
            <SwiperSlide key={proyecto.id || proyecto.titulo}>
              <div
                className="card"
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                aria-label={`Abrir detalles del proyecto ${proyecto.titulo}`}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openModal(index);
                  }
                }}
              >
                {proyecto.imagen && (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="card-image"
                  />
                )}
                {proyecto.imagenes && Array.isArray(proyecto.imagenes) && proyecto.imagenes.length > 0 && (
                  <img
                    src={proyecto.imagenes[imageIndexes[index] || 0]}
                    alt={proyecto.titulo}
                    className="card-image"
                  />
                )}

                <p className="badge">{proyecto.titulo}</p>

                {proyecto.descripcion && (
                  <div className="card-description">
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
                            onClick={(event) => {
                              event.stopPropagation();
                              openVideo(enlace.url);
                            }}
                          >
                            {enlace.etiqueta}
                          </button>
                        ) : (
                          <a
                            key={index}
                            href={enlace.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`action-button ${enlace.tipo === "primario" ? "primary" : ""
                              }`}
                            onClick={(event) => event.stopPropagation()}
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
      {modalProyecto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            {hasMultipleProjects && (
              <>
                <button
                  type="button"
                  className="modal-nav modal-nav-prev"
                  onClick={showPrevModal}
                  aria-label="Proyecto anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="modal-nav modal-nav-next"
                  onClick={showNextModal}
                  aria-label="Proyecto siguiente"
                >
                  ›
                </button>
              </>
            )}
            {modalProyecto.imagen && (
              <img
                src={modalProyecto.imagen}
                alt={modalProyecto.titulo}
                className="modal-image"
              />
            )}
            {modalProyecto.imagenes && Array.isArray(modalProyecto.imagenes) && modalProyecto.imagenes.length > 0 && (
              <img
                src={modalProyecto.imagenes[imageIndexes.modal || 0]}
                alt={modalProyecto.titulo}
                className="modal-image"
              />
            )}
            <p className="badge modal-badge">{modalProyecto.titulo}</p>
            <h3 className="modal-title">{modalProyecto.titulo}</h3>
            <div className="modal-description">
              <p>{modalProyecto.descripcion}</p>
            </div>
            {Array.isArray(modalProyecto.enlaces) &&
              modalProyecto.enlaces.length > 0 && (
                <div className="modal-actions">
                  {modalProyecto.enlaces.map((enlace, index) => {
                    const esVideo =
                      enlace.etiqueta.toLowerCase().includes("demo") &&
                      enlace.url.includes("youtu");

                    return esVideo ? (
                      <button
                        key={`${enlace.url}-${index}`}
                        className="action-button primary"
                        onClick={(event) => {
                          event.stopPropagation();
                          openVideo(enlace.url);
                        }}
                      >
                        {enlace.etiqueta}
                      </button>
                    ) : (
                      <a
                        key={`${enlace.url}-${index}`}
                        href={enlace.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`action-button ${enlace.tipo === "primario" ? "primary" : ""
                          }`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {enlace.etiqueta}
                      </a>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProyectosCarousel;
