import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProyectosCarousel.css";
import VideoPopup from "../VideoPopup/VideoPopup";
import ProjectModal from "../ProjectModal/ProjectModal";

const MAX_LENGTH = 380;

const ProyectosCarousel = ({ proyectos = [] }) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalIndex, setModalIndex] = useState(null);
  const [imageIndexes, setImageIndexes] = useState({});
  const [infoProject, setInfoProject] = useState(null);

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

  useEffect(() => {
    const intervals = {};

    proyectos.forEach((proyecto, index) => {
      if (Array.isArray(proyecto.imagenes) && proyecto.imagenes.length > 1) {
        intervals[index] = setInterval(() => {
          setImageIndexes((prev) => ({
            ...prev,
            [index]: ((prev[index] || 0) + 1) % proyecto.imagenes.length,
          }));
        }, 3000);
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [proyectos]);

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
        <p className="proyectos-subtitle">
          Mis proyectos más recientes y significativos — desde asistentes IA hasta videojuegos 3D
        </p>
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

          const imgSrc = proyecto.imagenes
            ? proyecto.imagenes[imageIndexes[index] || 0]
            : proyecto.imagen;

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
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt={proyecto.titulo}
                    className="card-image"
                  />
                )}

                <div className="card-header-badges">
                  <p className="badge">{proyecto.titulo}</p>
                  {proyecto.privado && (
                    <span className="badge-private">🔒 Privado</span>
                  )}
                </div>

                {proyecto.descripcion && (
                  <div className="card-description">
                    <p>{textoVisible}</p>
                  </div>
                )}

                <div className="card-actions">
                  {Array.isArray(proyecto.enlaces) &&
                    proyecto.enlaces.length > 0 && (
                      <>
                        {proyecto.enlaces.map((enlace, i) => {
                          const esVideo =
                            enlace.etiqueta.toLowerCase().includes("demo") &&
                            enlace.url.includes("youtu");

                          return esVideo ? (
                            <button
                              key={i}
                              className="unified-btn"
                              onClick={(event) => {
                                event.stopPropagation();
                                openVideo(enlace.url);
                              }}
                            >
                              {enlace.etiqueta}
                            </button>
                          ) : (
                            <a
                              key={i}
                              href={enlace.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="unified-btn"
                              onClick={(event) => event.stopPropagation()}
                            >
                              {enlace.etiqueta}
                            </a>
                          );
                        })}
                      </>
                    )}
                  {proyecto.privado && proyecto.disponibleBajoDemanda && (
                    <span className="unified-btn demand-btn">
                      📩 Bajo demanda
                    </span>
                  )}
                  <button
                    className="unified-btn"
                    onClick={(event) => {
                      event.stopPropagation();
                      setInfoProject(proyecto);
                    }}
                    title="Más información"
                  >
                    ℹ️ Info
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <VideoPopup isOpen={videoOpen} onClose={closeVideo} videoUrl={videoUrl} />

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
            {modalProyecto.imagenes ? (
              <img
                src={modalProyecto.imagenes[imageIndexes.modal || 0]}
                alt={modalProyecto.titulo}
                className="modal-image"
              />
            ) : modalProyecto.imagen && (
              <img
                src={modalProyecto.imagen}
                alt={modalProyecto.titulo}
                className="modal-image"
              />
            )}
            <p className="badge modal-badge">{modalProyecto.titulo}</p>
            {modalProyecto.privado && (
              <div className="private-badge-modal">
                🔒 Proyecto privado
              </div>
            )}
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
                        className={`action-button ${enlace.tipo === "primario" ? "primary" : ""}`}
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

      <ProjectModal
        isOpen={!!infoProject}
        onClose={() => setInfoProject(null)}
        project={infoProject}
      />
    </div>
  );
};

export default ProyectosCarousel;
