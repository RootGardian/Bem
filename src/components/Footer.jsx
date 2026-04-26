import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bem-blue-night)', color: 'var(--white)', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="footer-col">
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, marginBottom: '20px' }}>
              <span style={{ color: 'var(--white)', fontWeight: 800, fontSize: '1.8rem', fontFamily: 'Montserrat' }}>BEM</span>
              <span style={{ color: 'var(--bem-red)', alignSelf: 'flex-end', fontSize: '0.7rem' }}>Dakar</span>
            </div>
            <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Business Management School - Dakar. L'école de référence pour les leaders de demain.</p>
          </div>
          <div className="footer-col">
            <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', color: 'var(--bem-red)', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Programmes</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '10px' }}>Bachelor Management</li>
              <li style={{ color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '10px' }}>Master Grande École</li>
              <li style={{ color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '10px' }}>MBA Exécutif</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', color: 'var(--bem-red)', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Contact</h4>
            <p style={{ color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '10px' }}>Sacré Coeur III, Dakar, Sénégal</p>
            <p style={{ color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '10px' }}>Tél : +221 33 869 82 82</p>
            <p style={{ color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '10px' }}>Email : contact@bem.sn</p>
          </div>
          <div className="footer-col">
            <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', color: 'var(--bem-red)', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Newsletter</h4>
            <p style={{ color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '10px' }}>Inscrivez-vous pour recevoir les actualités.</p>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              <input type="email" placeholder="Votre email" style={{ padding: '12px', border: 'none', borderRadius: '4px 0 0 4px', flex: 1 }} />
              <button style={{ background: 'var(--bem-red)', color: 'white', border: 'none', padding: '0 20px', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', fontSize: '0.8rem', color: '#7f8c8d' }}>
          &copy; 2026 BEM Dakar. Tous droits réservés. Design by Junior Entreprise.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
