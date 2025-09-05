import React, { useState, useCallback } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevState => !prevState);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  }, [toggleMenu]);

  return (
    <header className="header">
      <div className="logo">
        <h1>Animal Finder IA</h1>
      </div>

      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Menu principal">
        <ul>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <button 
        className={`menu-toggle ${menuOpen ? 'menu-toggle-active' : ''}`}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="navigation"
      >
        <span className="menu-toggle-line"></span>
        <span className="menu-toggle-line"></span>
        <span className="menu-toggle-line"></span>
      </button>
    </header>
  );
};

export default Header;
