import React from 'react';

const Terms = () => {
  return (
    <div style={{ padding: '150px 0', background: 'var(--bg-light)', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '60px', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
        <h1 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--bem-blue-night)', marginBottom: '40px', borderBottom: '4px solid var(--bem-red)', display: 'inline-block' }}>Conditions Générales</h1>
        
        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>1. Objet</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            Les présentes conditions générales de vente régissent les relations entre Dakar Marketing et toute personne procédant à l'achat d'un ticket pour la Foire de l'Entrepreneuriat.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>2. Billetterie</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            Les tickets sont nominatifs et non remboursables, sauf en cas d'annulation totale de l'événement par l'organisateur. Toute revente de ticket est strictement interdite.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 className="font-montserrat" style={{ fontSize: '1.2rem', color: 'var(--bem-red)', marginBottom: '20px', textTransform: 'uppercase' }}>3. Accès à l'événement</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            L'organisateur se réserve le droit de refuser l'accès à toute personne ne présentant pas un ticket valide ou dont le comportement pourrait nuire au bon déroulement de l'événement.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
