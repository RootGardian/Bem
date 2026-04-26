import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      background: 'var(--white)',
      borderBottom: '3px solid var(--bem-red)',
      padding: '10px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px var(--bem-red-shadow)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/Logo_DM.png" alt="Dakar Marketing" style={{ height: '45px', width: 'auto' }} />
        </Link>
        
        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span style={{ 
            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            background: isMenuOpen ? 'var(--bem-red)' : 'var(--bem-blue-night)' 
          }}></span>
          <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span style={{ 
            transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
            background: isMenuOpen ? 'var(--bem-red)' : 'var(--bem-blue-night)' 
          }}></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--bem-blue-night)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Accueil</Link></li>
          <li><a href="/#evenement" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--bem-blue-night)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Événement</a></li>
          <li><a href="/#partenaires" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--bem-blue-night)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Partenaires</a></li>
          <li><Link to="/tickets" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--bem-red)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Billetterie</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
