import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tickets = () => {
  const navigate = useNavigate();

  const TicketCard = ({ price, title, features, badge, color = 'var(--bem-blue-night)' }) => (
    <div className="ticket-card" style={{ display: 'flex', background: 'white', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 30px var(--bem-red-shadow)', minHeight: '220px' }}>
      <div className="ticket-left" style={{ flex: '0 0 40%', background: color, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', color: 'white', textAlign: 'center' }}>
        <div className="price-box" style={{ background: 'white', color: color, padding: '15px', borderRadius: '4px', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.2rem', marginBottom: '20px', width: '100%' }}>{price}</div>
        <button className="btn-obtain" style={{ background: 'var(--bem-red)', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', cursor: 'pointer', width: '100%' }} onClick={() => navigate('/registration')}>Choisir ce pack</button>
      </div>
      <div className="ticket-divider" style={{ width: '2px', borderLeft: '2px dashed #eee', background: 'white' }}></div>
      <div className="ticket-right" style={{ flex: 1, padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {badge && <span style={{ display: 'inline-block', background: '#FF8A00', color: 'white', fontSize: '0.6rem', fontWeight: 800, padding: '4px 8px', borderRadius: '2px', textTransform: 'uppercase', marginBottom: '10px', width: 'fit-content' }}>{badge}</span>}
        <div className="ticket-title" style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.1rem', marginBottom: '12px', color: 'var(--bem-red)', textTransform: 'uppercase' }}>{title}</div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {features.map((f, i) => (
            <li key={i} style={{ fontSize: '0.8rem', marginBottom: '6px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: 'var(--bem-red)', marginTop: '3px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '80px 0', background: 'var(--bg-light)', minHeight: '60vh' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '50px', fontWeight: 800, fontSize: '2.5rem', fontFamily: 'Montserrat' }}>Billetterie & Sponsoring</h1>
        
        {/* INTERVENANT */}
        <h2 className="category-title" style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.5rem', textTransform: 'uppercase', margin: '40px 0 20px', borderLeft: '4px solid var(--bem-red)', paddingLeft: '15px' }}>Intervenant</h2>
        <div className="tickets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
          <TicketCard price="OFFERT" title="Pass Intervenant" features={["Accès VIP Lounge", "Prise de parole sur scène", "Networking Privé"]} />
        </div>

        {/* VISITEUR */}
        <h2 className="category-title" style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.5rem', textTransform: 'uppercase', margin: '40px 0 20px', borderLeft: '4px solid var(--bem-red)', paddingLeft: '15px' }}>Visiteurs</h2>
        <div className="tickets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
          <TicketCard price="GRATUIT" title="Pass Visiteur" features={["Accès stands", "Conférences"]} />
        </div>

        {/* EXPOSANT */}
        <h2 className="category-title" style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.5rem', textTransform: 'uppercase', margin: '40px 0 20px', borderLeft: '4px solid var(--bem-red)', paddingLeft: '15px' }}>Exposant</h2>
        <div className="tickets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
          <TicketCard 
            price="25 000 CFA" 
            title="Formule Standard" 
            features={["Inclut un stand", "Accès aux panels"]} 
          />
          <TicketCard 
            price="35 000 CFA" 
            title="Formule Premium" 
            features={["Inclut un stand", "Accès aux panels", "Déjeuners networking (Jour 1)"]} 
          />
          <TicketCard 
            price="50 000 CFA" 
            title="Formule Gold" 
            badge="Top Seller"
            features={["Stand en emplacement privilégié", "Accès aux panels", "Déjeuners networking (2 jours)"]} 
          />
        </div>

        {/* NOS PACKS SPONSORING */}
        <h2 className="category-title" style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.5rem', textTransform: 'uppercase', margin: '40px 0 20px', borderLeft: '4px solid var(--bem-red)', paddingLeft: '15px' }}>Nos Packs Sponsoring</h2>
        <div className="tickets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
          <TicketCard 
            price="250 000 CFA" 
            title="Pack Standard" 
            features={[
              "Logo sur les supports de communication",
              "Visibilité sur les réseaux sociaux",
              "2 invitations aux conférences",
              "Stand d'exposition",
              "Distribution de supports promotionnels",
              "Association de l'image à l'événement"
            ]} 
          />
          <TicketCard 
            price="500 000 CFA" 
            title="Pack Premium" 
            badge="Best Value"
            features={[
              "Logo en position prioritaire sur tous les supports",
              "Mention spéciale en tant que partenaire majeur",
              "Forte visibilité sur les réseaux sociaux",
              "4 invitations VIP aux conférences",
              "Stand premium (emplacement stratégique)",
              "Possibilité d'intervention (prise de parole)",
              "Distribution de supports promotionnels",
              "Association renforcée à l'événement",
              "Tarif préférentiel Dakar Marketing"
            ]} 
          />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
