import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      background: 'var(--white)',
      borderBottom: '3px solid var(--bem-red)',
      padding: '20px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px var(--bem-red-shadow)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/logo_dm.png" alt="Dakar Marketing" style={{ height: '60px', width: 'auto' }} />
        </Link>
        <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: 'var(--bem-blue-night)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Accueil</Link></li>
          <li><a href="/#evenement" style={{ textDecoration: 'none', color: 'var(--bem-blue-night)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Événement</a></li>
          <li><a href="/#partenaires" style={{ textDecoration: 'none', color: 'var(--bem-blue-night)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Partenaires</a></li>
          <li><Link to="/tickets" style={{ textDecoration: 'none', color: 'var(--bem-red)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Billetterie</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
