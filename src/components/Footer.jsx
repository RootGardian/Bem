import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bem-blue-night)', color: 'var(--white)', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          {/* Column 1: DM Info */}
          <div className="footer-col">
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <img src="/Logo_DM.png" alt="Dakar Marketing" className="footer-logo" style={{ width: 'fit-content', marginBottom: '15px' }} />
              <h4 style={{ color: 'var(--white)', fontWeight: 800, fontSize: '1.2rem', fontFamily: 'Montserrat', margin: 0 }}>Dakar Marketing</h4>
            </div>
            <p style={{ color: '#bdc3c7', fontSize: '0.85rem', lineHeight: '1.6' }}>
              Junior entreprise de BEM Dakar, spécialisée en études de marché et consultance marketing stratégique.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 style={{ fontSize: '1rem', marginBottom: '20px', color: 'var(--bem-red)', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/" style={{ color: '#bdc3c7', fontSize: '0.85rem', textDecoration: 'none' }}>Accueil</Link></li>
              <li style={{ marginBottom: '10px' }}><a href="/#evenement" style={{ color: '#bdc3c7', fontSize: '0.85rem', textDecoration: 'none' }}>À Propos</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/#pourquoi-nous" style={{ color: '#bdc3c7', fontSize: '0.85rem', textDecoration: 'none' }}>Services</a></li>
              <li style={{ marginBottom: '10px' }}><Link to="/tickets" style={{ color: '#bdc3c7', fontSize: '0.85rem', textDecoration: 'none' }}>Billetterie</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 style={{ fontSize: '1rem', marginBottom: '20px', color: 'var(--bem-red)', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ color: '#bdc3c7', fontSize: '0.85rem', marginBottom: '10px' }}>Études de Marché</li>
              <li style={{ color: '#bdc3c7', fontSize: '0.85rem', marginBottom: '10px' }}>Business Plan</li>
              <li style={{ color: '#bdc3c7', fontSize: '0.85rem', marginBottom: '10px' }}>Enquêtes Marketing</li>
            </ul>
          </div>

          {/* Column 4: Légal */}
          <div className="footer-col">
            <h4 style={{ fontSize: '1rem', marginBottom: '20px', color: 'var(--bem-red)', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Légal</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/legal" style={{ color: '#bdc3c7', fontSize: '0.85rem', textDecoration: 'none' }}>Mentions Légales</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/privacy" style={{ color: '#bdc3c7', fontSize: '0.85rem', textDecoration: 'none' }}>Confidentialité</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/terms" style={{ color: '#bdc3c7', fontSize: '0.85rem', textDecoration: 'none' }}>Conditions Générales</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', fontSize: '0.8rem', color: '#7f8c8d', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          <span>&copy; 2026 Dakar Marketing. Tous droits réservés.</span>
          <span>Powered by BlackCore Tech</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
