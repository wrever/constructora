import { handleNavClick } from '../utils/smoothScroll';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h2>Construimos con calidad, experiencia y confianza</h2>
        <p>Soluciones en obras civiles, remodelaciones y construcción general.</p>
        <a className="btn" href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>
          Solicitar Cotización
        </a>
      </div>
    </section>
  );
};

export default Hero;

