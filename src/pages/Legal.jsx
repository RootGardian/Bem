import React from 'react';

const Legal = () => {
  return (
    <div style={{ padding: '150px 0', background: 'var(--bg-light)', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '60px', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
        <h1 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--bem-blue-night)', marginBottom: '40px', borderBottom: '4px solid var(--bem-red)', display: 'inline-block' }}>Mentions Légales</h1>

        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>1. Éditeur du Site</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            Le présent site est édité par <strong>Dakar Marketing</strong>, la Junior Entreprise de BEM Dakar.<br />
            Siège social : Sacré Cœur 3, Dakar, Sénégal.<br />
            Email : contact@dakarmarketing.sn<br />
            Téléphone : +221 33 869 82 81
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>2. Hébergement</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            Le site est hébergé par <strong><Render></Render> Inc.</strong><br />
            Adresse : 104 10th St, San Francisco, CA 94103, USA.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>3. Propriété Intellectuelle</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
