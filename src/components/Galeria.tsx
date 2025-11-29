import { useState } from 'react';
import { GALERIA_PROYECTOS } from '../data/proyectos';
import { Proyecto } from '../types';

const Galeria = () => {
  const [selectedProyecto, setSelectedProyecto] = useState<Proyecto | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openProyecto = (proyecto: Proyecto) => {
    setSelectedProyecto(proyecto);
  };

  const closeProyecto = () => {
    setSelectedProyecto(null);
    setSelectedImage(null);
  };

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <>
      <section id="galeria" className="galeria section">
        <div className="container">
          <h2 className="section-title">Galería de Trabajos</h2>
          <p className="galeria-description">
            Algunos proyectos representativos de nuestro trabajo en construcción, remodelación y obras civiles.
          </p>

          <div className="galeria-grid">
            {GALERIA_PROYECTOS.map((proyecto) => {
              const previewImg = proyecto.imagenes[0];
              return (
                <div
                  key={proyecto.id}
                  className="galeria-item"
                  onClick={() => openProyecto(proyecto)}
                >
                  <img src={previewImg.src} alt={previewImg.alt} data-proyecto={proyecto.id} />
                  <div className="galeria-item-title">{proyecto.titulo}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Panel lateral de proyecto */}
      {selectedProyecto && (
        <>
          <div className="proyecto-sidebar open" id="proyecto-sidebar">
            <div className="sidebar-content">
              <button
                className="sidebar-close"
                id="sidebar-close"
                aria-label="Cerrar panel"
                onClick={closeProyecto}
              >
                ✕
              </button>
              <div className="sidebar-body" id="sidebar-body">
                <h3>{selectedProyecto.titulo}</h3>
                <p>{selectedProyecto.descripcion}</p>

                <div className="sidebar-galeria">
                  {selectedProyecto.imagenes.map((img, index) => (
                    <img
                      key={index}
                      className="sidebar-thumb"
                      src={img.src}
                      alt={img.alt}
                      onClick={() => openLightbox(img.src)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-overlay" onClick={closeProyecto}></div>
        </>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={selectedImage} alt="Lightbox" />
          </div>
        </div>
      )}
    </>
  );
};

export default Galeria;

