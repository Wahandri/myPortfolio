import React, { useMemo, useRef } from "react";
import "./ProyectosCarousel.css";

const FALLBACK_PROYECTOS = [];

const ProyectosCarousel = ({ proyectos = FALLBACK_PROYECTOS, titulo = "Proyectos" }) => {
  const viewportRef = useRef(null);

  const elementos = useMemo(() => proyectos ?? FALLBACK_PROYECTOS, [proyectos]);

  const handleScroll = (direccion) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const card = viewport.querySelector(".proyectos-carousel__card");
    const cardWidth = card ? card.offsetWidth : viewport.offsetWidth;
    const gap = parseFloat(getComputedStyle(viewport).getPropertyValue("--card-gap")) || 24;

    viewport.scrollBy({
      left: direccion * (cardWidth + gap),
      behavior: "smooth"
    });
  };

  if (!elementos.length) {
    return (
      <section className="proyectos-carousel">
        <div className="proyectos-carousel__header">
          <h2>{titulo}</h2>
        </div>
        <p className="proyectos-carousel__empty">No hay proyectos para mostrar todavía.</p>
      </section>
    );
  }

  return (
    <section className="proyectos-carousel">
      <div className="proyectos-carousel__header">
        <h2>{titulo}</h2>
        <div className="proyectos-carousel__controls" aria-hidden={elementos.length <= 1}>
          <button
            type="button"
            className="proyectos-carousel__nav"
            onClick={() => handleScroll(-1)}
            aria-label="Desplazar a la izquierda"
          >
            &lt;
          </button>
          <button
            type="button"
            className="proyectos-carousel__nav"
            onClick={() => handleScroll(1)}
            aria-label="Desplazar a la derecha"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="proyectos-carousel__viewport" ref={viewportRef}>
        <div className="proyectos-carousel__track">
          {elementos.map((proyecto) => (
            <article className="proyectos-carousel__card" key={proyecto.id ?? proyecto.titulo}>
              <div className="proyectos-carousel__image-wrapper">
                {proyecto.imagen ? (
                  <img src={proyecto.imagen} alt={proyecto.titulo} loading="lazy" />
                ) : (
                  <div className="proyectos-carousel__image-placeholder">{proyecto.titulo?.[0] ?? ""}</div>
                )}
              </div>
              <div className="proyectos-carousel__body">
                <h3>{proyecto.titulo}</h3>
                {proyecto.descripcion && <p>{proyecto.descripcion}</p>}
              </div>
              {Array.isArray(proyecto.enlaces) && proyecto.enlaces.length > 0 && (
                <div className="proyectos-carousel__actions">
                  {proyecto.enlaces.map((enlace) => (
                    <a
                      key={`${proyecto.id ?? proyecto.titulo}-${enlace.etiqueta}`}
                      className={`proyectos-carousel__action ${
                        enlace.tipo === "primario" ? "proyectos-carousel__action--primary" : ""
                      }`}
                      href={enlace.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {enlace.etiqueta}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosCarousel;
