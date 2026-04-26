import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    textDecoration: 'none',
    color: scrolled || isMenuOpen ? 'var(--bem-blue-night)' : 'white',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '1px',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    transition: '0.3s'
  };

  const headerStyle = {
    background: scrolled || isMenuOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
    backdropFilter: scrolled || isMenuOpen ? 'blur(10px)' : 'none',
    borderBottom: scrolled || isMenuOpen ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.1)',
    padding: scrolled ? '10px 0' : '18px 0',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img 
            src="/Logo_DM.png" 
            alt="Dakar Marketing" 
            style={{ 
              height: scrolled ? '40px' : '50px', 
              width: 'auto', 
              transition: '0.3s',
              filter: !scrolled && !isMenuOpen ? 'brightness(0) invert(1)' : 'none' 
            }} 
          />
        </Link>
        
        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span style={{ 
            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            background: isMenuOpen || scrolled ? 'var(--bem-blue-night)' : 'white' 
          }}></span>
          <span style={{ 
            opacity: isMenuOpen ? 0 : 1,
            background: scrolled ? 'var(--bem-blue-night)' : 'white'
          }}></span>
          <span style={{ 
            transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
            background: isMenuOpen || scrolled ? 'var(--bem-blue-night)' : 'white' 
          }}></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)} style={navLinkStyle}>Accueil</Link></li>
          <li><a href="/#evenement" onClick={() => setIsMenuOpen(false)} style={navLinkStyle}>Événement</a></li>
          <li><a href="/#partenaires" onClick={() => setIsMenuOpen(false)} style={navLinkStyle}>Partenaires</a></li>
          <li>
            <Link to="/tickets" onClick={() => setIsMenuOpen(false)} style={{ 
              ...navLinkStyle, 
              color: scrolled || isMenuOpen ? 'var(--bem-red)' : 'var(--bem-red)',
              background: 'white',
              padding: '12px 25px',
              borderRadius: '50px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              marginLeft: '20px'
            }}>
              Réserver mon Pass
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
