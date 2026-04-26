import React from 'react';
import { Link } from 'react-router-dom';

const Legal = () => {
  return (
    <div style={{ padding: '150px 0 100px', background: 'var(--bg-light)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '400px', background: 'linear-gradient(to bottom, rgba(196, 0, 48, 0.02), transparent)', zIndex: 0 }}></div>
      
      <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bem-red)', textDecoration: 'none', fontWeight: 800, fontSize: '0.85rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Retour à l'accueil
        </Link>

        <div style={{ background: 'white', padding: '80px', borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', borderTop: '6px solid var(--bem-red)' }}>
          <h1 className="font-serif" style={{ fontSize: '3rem', color: 'var(--bem-blue-night)', marginBottom: '50px', fontWeight: 900, letterSpacing: '-1.5px' }}>Mentions <span style={{ color: 'var(--bem-red)' }}>Légales</span></h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>1. Éditeur du Site</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem', background: '#f8fafc', padding: '30px', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
                <p style={{ margin: 0 }}>
                  Le présent site est édité par <strong>Dakar Marketing</strong>, la Junior Entreprise de BEM Dakar.<br /><br />
                  <strong>Siège social :</strong> Sacré Cœur 3, Dakar, Sénégal.<br />
                  <strong>Email :</strong> contact@dakarmarketing.sn<br />
                  <strong>Téléphone :</strong> +221 71 122 83 83
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>2. Hébergement</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                <p>
                  Le site est hébergé par la plateforme <strong>Render.com</strong><br />
                  Siège social : 104 10th St, San Francisco, CA 94103, USA.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>3. Propriété Intellectuelle</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                <p>
                  L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de Dakar Marketing.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
