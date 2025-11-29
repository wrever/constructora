import { useState, useEffect } from 'react';
import { handleNavClick } from '../utils/smoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Cerrar menú al redimensionar
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    handleNavClick(e, sectionId);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/src/img/logo/logo blanco.png" alt="Logo Reinaldo Jaramillo" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <h1>Reinaldo Jaramillo</h1>
            <span>Constructora y obras civiles</span>
          </div>
        </div>

        <button
          id="menu-toggle"
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`} id="navbar-menu">
          <li>
            <a href="#inicio" onClick={(e) => handleLinkClick(e, 'inicio')}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" onClick={(e) => handleLinkClick(e, 'nosotros')}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={(e) => handleLinkClick(e, 'servicios')}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#galeria" onClick={(e) => handleLinkClick(e, 'galeria')}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={(e) => handleLinkClick(e, 'contacto')}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

