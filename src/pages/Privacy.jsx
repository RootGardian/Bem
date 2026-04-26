import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div style={{ padding: '150px 0 100px', background: 'var(--bg-light)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '400px', background: 'linear-gradient(to bottom, rgba(196, 0, 48, 0.02), transparent)', zIndex: 0 }}></div>
      
      <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bem-red)', textDecoration: 'none', fontWeight: 800, fontSize: '0.85rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Retour à l'accueil
        </Link>

        <div style={{ background: 'white', padding: '80px', borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', borderTop: '6px solid var(--bem-red)' }}>
          <h1 className="font-serif" style={{ fontSize: '3rem', color: 'var(--bem-blue-night)', marginBottom: '50px', fontWeight: 900, letterSpacing: '-1.5px' }}>Politique de <span style={{ color: 'var(--bem-red)' }}>Confidentialité</span></h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>1. Collecte des Données</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                <p>
                  Dans le cadre de l'organisation de <strong>La Foire de l'Entrepreneuriat</strong>, Dakar Marketing collecte les informations nécessaires à la gestion de votre participation : Nom, Prénom, Poste, Entreprise, Email et Secteurs d'intérêt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>2. Utilisation des Données</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                <p>
                  Vos données sont utilisées exclusivement pour :
                </p>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>La génération de votre badge d'accès.</li>
                  <li>L'envoi d'informations relatives à l'événement.</li>
                  <li>La constitution d'un annuaire des participants (avec votre accord).</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>3. Protection et Conservation</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                <p>
                  Dakar Marketing s'engage à protéger la sécurité de vos données personnelles. Celles-ci ne seront jamais vendues ou cédées à des tiers à des fins commerciales sans votre consentement explicite.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
