import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Tickets = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const TicketCard = ({ price, title, features, badge, color = 'var(--bem-blue-night)' }) => (
    <div className="ticket-card">
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

  const AccordionHeader = ({ id, title, isActive }) => (
    <div 
      className={`accordion-header ${isActive ? 'active' : ''}`}
      onClick={() => toggleSection(id)}
      style={{
        background: 'white',
        padding: '20px 25px',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        marginBottom: '10px',
        borderLeft: isActive ? '5px solid var(--bem-red)' : '5px solid #eee',
        transition: '0.3s'
      }}
    >
      <h2 style={{ margin: 0, fontSize: '1.1rem', fontFamily: 'Montserrat', fontWeight: 700, color: isActive ? 'var(--bem-red)' : 'var(--bem-blue-night)' }}>{title}</h2>
      <span style={{ 
        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', 
        transition: '0.3s',
        fontSize: '1.5rem',
        color: isActive ? 'var(--bem-red)' : '#ccc'
      }}>▾</span>
    </div>
  );

  return (
    <div style={{ padding: '100px 0', background: 'var(--bg-light)', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bem-red)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', marginBottom: '30px', textTransform: 'uppercase' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Retour à l'accueil
        </Link>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(209, 6, 61, 0.1)', border: '1px solid var(--bem-red)', color: 'var(--bem-red)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800, marginBottom: '15px', letterSpacing: '1px' }}>
            BILLETTERIE OFFICIELLE
          </div>
          <h1 style={{ fontWeight: 800, fontSize: '2.8rem', color: 'var(--bem-blue-night)', fontFamily: 'Montserrat', margin: 0, textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Réservez votre <span style={{ color: 'var(--bem-red)' }}>accès</span>
          </h1>
          <p style={{ color: 'var(--text-gray)', marginTop: '15px', fontSize: '1.1rem' }}>Choisissez la formule qui correspond à votre profil.</p>
        </div>
        
        <div style={{ background: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          {/* INTERVENANT */}
          <AccordionHeader id="intervenant" title="Intervenant" isActive={activeSection === 'intervenant'} />
          {activeSection === 'intervenant' && (
            <div className="accordion-content" style={{ padding: '20px', animation: 'fadeIn 0.3s' }}>
              <div className="tickets-grid">
                <TicketCard price="OFFERT" title="Pass Intervenant" features={["Accès VIP Lounge", "Prise de parole sur scène", "Networking Privé"]} />
              </div>
            </div>
          )}

          {/* VISITEUR */}
          <AccordionHeader id="visiteur" title="Visiteurs" isActive={activeSection === 'visiteur'} />
          {activeSection === 'visiteur' && (
            <div className="accordion-content" style={{ padding: '20px', animation: 'fadeIn 0.3s' }}>
              <div className="tickets-grid">
                <TicketCard price="GRATUIT" title="Pass Visiteur" features={["Accès stands", "Conférences"]} />
              </div>
            </div>
          )}

          {/* EXPOSANT */}
          <AccordionHeader id="exposant" title="Exposant" isActive={activeSection === 'exposant'} />
          {activeSection === 'exposant' && (
            <div className="accordion-content" style={{ padding: '20px', animation: 'fadeIn 0.3s' }}>
              <div className="tickets-grid">
                <TicketCard price="25 000 CFA" title="Formule Standard" features={["Inclut un stand", "Accès aux panels"]} />
                <TicketCard price="35 000 CFA" title="Formule Premium" features={["Inclut un stand", "Accès aux panels", "Déjeuners networking (Jour 1)"]} />
                <TicketCard price="50 000 CFA" title="Formule Gold" badge="Top Seller" features={["Stand en emplacement privilégié", "Accès aux panels", "Déjeuners networking (2 jours)"]} />
              </div>
            </div>
          )}

          {/* NOS PACKS SPONSORING */}
          <AccordionHeader id="sponsoring" title="Nos Packs Sponsoring" isActive={activeSection === 'sponsoring'} />
          {activeSection === 'sponsoring' && (
            <div className="accordion-content" style={{ padding: '20px', animation: 'fadeIn 0.3s' }}>
              <div className="tickets-grid">
                <TicketCard price="250 000 CFA" title="Pack Standard" features={["Logo sur les supports de communication", "Visibilité sur les réseaux sociaux", "2 invitations aux conférences", "Stand d'exposition", "Distribution de supports promotionnels", "Association de l'image à l'événement"]} />
                <TicketCard price="500 000 CFA" title="Pack Premium" badge="Best Value" features={["Logo en position prioritaire sur tous les supports", "Mention spéciale en tant que partenaire majeur", "Forte visibilité sur les réseaux sociaux", "4 invitations VIP aux conférences", "Stand premium (emplacement stratégique)", "Possibilité d'intervention (prise de parole)", "Distribution de supports promotionnels", "Association renforcée à l'événement", "Tarif préférentiel Dakar Marketing"]} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
