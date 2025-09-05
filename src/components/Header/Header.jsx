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
        <h1>Pokedex Unifor</h1>
      </div>

      
    </header>
  );
};

export default Header;
