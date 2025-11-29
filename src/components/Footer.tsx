import { handleNavClick } from '../utils/smoothScroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Sección: Logo y Descripción */}
          <div className="footer-section footer-logo">
            <div className="footer-logo-container">
              <img src="/src/img/logo/logo blanco.png" alt="Logo Reinaldo Jaramillo" className="footer-logo-img" />
              <div className="footer-logo-text">
                <h3>Reinaldo Jaramillo</h3>
                <p className="footer-tagline">Constructora y Obras Civiles</p>
              </div>
            </div>
            <p className="footer-description">
              Soluciones profesionales en construcción, remodelación y obras civiles con más de 15 años de experiencia.
            </p>
          </div>

          {/* Sección: Enlaces Rápidos */}
          <div className="footer-section footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" onClick={(e) => handleNavClick(e, 'nosotros')}>
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" onClick={(e) => handleNavClick(e, 'galeria')}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Sección: Servicios */}
          <div className="footer-section footer-services">
            <h4>Nuestros Servicios</h4>
            <ul>
              <li>
                <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>
                  Construcción General
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>
                  Remodelaciones
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>
                  Obras Civiles
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          {/* Sección: Contacto */}
          <div className="footer-section footer-contact">
            <h4>Contacto</h4>
            <ul className="footer-contact-info">
              <li>
                <strong>Teléfono:</strong>
                <a href="tel:+56912345678">(+56) 9 1234 5678</a>
              </li>
              <li>
                <strong>WhatsApp:</strong>
                <a href="https://wa.me/56945021086" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:info@reinaldojaramillo.com">info@reinaldojaramillo.com</a>
              </li>
              <li>
                <strong>Ubicación:</strong>
                <span>Puente Alto, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2025 Constructora y Obras Reinaldo Jaramillo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

