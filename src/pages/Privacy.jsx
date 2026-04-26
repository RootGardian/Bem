import React from 'react';

const Privacy = () => {
  return (
    <div style={{ padding: '150px 0', background: 'var(--bg-light)', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '60px', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
        <h1 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--bem-blue-night)', marginBottom: '40px', borderBottom: '4px solid var(--bem-red)', display: 'inline-block' }}>Politique de Confidentialité</h1>
        
        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>1. Collecte des données</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            Nous collectons des informations lors de votre inscription à la Foire de l'Entrepreneuriat. Les informations collectées incluent votre nom, prénom, adresse e-mail, poste et entreprise.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>2. Utilisation des informations</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :<br />
            - Personnaliser votre expérience et répondre à vos besoins individuels<br />
            - Améliorer notre site Web<br />
            - Vous contacter par e-mail concernant l'événement.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>3. Protection des informations</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Seuls les employés qui ont besoin d'effectuer un travail spécifique ont accès aux informations personnelles identifiables.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
