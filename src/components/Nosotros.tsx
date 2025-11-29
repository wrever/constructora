import { handleNavClick } from '../utils/smoothScroll';

const Nosotros = () => {
  return (
    <section id="nosotros" className="nosotros section">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una empresa dedicada a la construcción y remodelación con años de experiencia,
          ofreciendo soluciones profesionales para obras civiles y proyectos personalizados.
          Nuestro equipo altamente capacitado se compromete con la calidad, seguridad y cumplimiento
          de plazos en cada proyecto que ejecutamos.
        </p>

        {/* ESTADÍSTICAS */}
        <div className="nosotros-stats">
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Años de Experiencia</div>
            <div className="stat-description">Trayectoria sólida en construcción e infraestructura</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Proyectos Completados</div>
            <div className="stat-description">Obras exitosas entregadas con calidad</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-label">Clientes Satisfechos</div>
            <div className="stat-description">Confianza y satisfacción de nuestros clientes</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Cumplimiento de Plazos</div>
            <div className="stat-description">Responsabilidad y profesionalismo garantizado</div>
          </div>
        </div>

        {/* VALORES */}
        <div className="nosotros-values">
          <div className="value-card">
            <div className="value-icon">🏗️</div>
            <h3>Calidad</h3>
            <p>Ejecutamos cada proyecto con los más altos estándares de calidad y usando materiales premium.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🛡️</div>
            <h3>Seguridad</h3>
            <p>Cumplimiento estricto de normas de seguridad e implementación de protocolos rigurosos.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">⏰</div>
            <h3>Puntualidad</h3>
            <p>Respeto por los plazos acordados y entrega oportuna de todos nuestros proyectos.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="nosotros-cta">
          <a href="#galeria" className="btn" onClick={(e) => handleNavClick(e, 'galeria')}>
            Conoce Nuestros Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

