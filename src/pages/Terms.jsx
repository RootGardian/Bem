import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div style={{ padding: '150px 0 100px', background: 'var(--bg-light)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '400px', background: 'linear-gradient(to bottom, rgba(196, 0, 48, 0.02), transparent)', zIndex: 0 }}></div>
      
      <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bem-red)', textDecoration: 'none', fontWeight: 800, fontSize: '0.85rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Retour à l'accueil
        </Link>

        <div style={{ background: 'white', padding: '80px', borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', borderTop: '6px solid var(--bem-red)' }}>
          <h1 className="font-serif" style={{ fontSize: '3rem', color: 'var(--bem-blue-night)', marginBottom: '50px', fontWeight: 900, letterSpacing: '-1.5px' }}>Conditions <span style={{ color: 'var(--bem-red)' }}>Générales</span></h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>1. Objet</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                <p>
                  Les présentes conditions générales régissent l'inscription et la participation à <strong>La Foire de l'Entrepreneuriat</strong> organisée par Dakar Marketing. Toute inscription implique l'acceptation sans réserve de ces conditions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>2. Inscription et Paiement</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                <p>
                  L'inscription est définitive après validation du formulaire et, pour les packs payants, réception de la preuve de paiement (ID de transaction). 
                </p>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>Les Pass Visiteurs et Intervenants sont gratuits.</li>
                  <li>Les Pass Exposants et Packs Sponsoring sont soumis aux tarifs en vigueur.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-montserrat" style={{ fontSize: '1rem', color: 'var(--bem-red)', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px' }}>3. Annulation</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                <p>
                  En cas d'annulation du fait de l'organisateur, les frais d'inscription seront intégralement remboursés. En cas de désistement du participant moins de 7 jours avant l'événement, aucun remboursement ne sera effectué.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
