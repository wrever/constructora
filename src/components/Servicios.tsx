import { handleNavClick } from '../utils/smoothScroll';

const Servicios = () => {
  return (
    <section id="servicios" className="servicios section">
      <div className="container">
        <h2>Nuestros Servicios</h2>

        <div className="servicios-grid">
          <article className="servicio">
            <div className="servicio-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
              </svg>
            </div>
            <h3>Construcción General</h3>
            <p>Especializados en proyectos de construcción integral. Desde viviendas hasta infraestructuras comerciales, ejecutamos con profesionalismo y cumplimiento de normas.</p>
            <a href="#contacto" className="servicio-link" onClick={(e) => handleNavClick(e, 'contacto')}>
              Conocer más →
            </a>
          </article>

          <article className="servicio">
            <div className="servicio-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M9 11h6M9 15h6M3 9h18M3 15h18"></path>
              </svg>
            </div>
            <h3>Remodelaciones</h3>
            <p>Transformamos espacios existentes con remodelaciones integrales. Desde renovaciones de cocinas y baños hasta reformas completas, respetamos tu presupuesto y plazos.</p>
            <a href="#contacto" className="servicio-link" onClick={(e) => handleNavClick(e, 'contacto')}>
              Conocer más →
            </a>
          </article>

          <article className="servicio">
            <div className="servicio-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Obras Civiles</h3>
            <p>Especializados en proyectos de infraestructura, excavaciones, pavimentaciones y obras viales. Utilizamos tecnología moderna y cumplimos normativas de seguridad.</p>
            <a href="#contacto" className="servicio-link" onClick={(e) => handleNavClick(e, 'contacto')}>
              Conocer más →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Servicios;

