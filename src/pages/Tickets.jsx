import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Tickets = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const TicketCard = ({ price, title, features, badge, color = 'var(--bem-blue-night)' }) => (
    <div className="ticket-card-premium" style={{ 
      background: 'white', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      boxShadow: '0 15px 40px rgba(0,0,0,0.06)', 
      display: 'flex', 
      flexDirection: 'column',
      transition: '0.4s',
      border: '1px solid #f1f5f9',
      position: 'relative'
    }}>
      {badge && <div style={{ position: 'absolute', top: '15px', right: '-35px', background: 'var(--bem-red)', color: 'white', padding: '5px 40px', fontSize: '0.65rem', fontWeight: 900, transform: 'rotate(45deg)', zCenter: 10, boxShadow: '0 5px 10px rgba(0,0,0,0.1)' }}>{badge}</div>}
      <div style={{ padding: '40px 30px', textAlign: 'center', background: 'linear-gradient(to bottom, #fcfdfe, #f8fafc)', borderBottom: '1px solid #f1f5f9' }}>
        <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.2rem', color: 'var(--bem-blue-night)', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>{title}</h3>
        <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--bem-red)', fontFamily: 'Montserrat' }}>{price}</div>
      </div>
      <div style={{ padding: '40px 30px', flex: 1 }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px' }}>
          {features.map((f, i) => (
            <li key={i} style={{ fontSize: '0.9rem', marginBottom: '15px', color: 'var(--text-gray)', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bem-red)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
              {f}
            </li>
          ))}
        </ul>
        <button 
          className="btn-primary" 
          style={{ width: '100%', padding: '18px', fontWeight: 900, borderRadius: '4px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}
          onClick={() => navigate('/registration', { state: { category: title } })}
        >
          Sélectionner ce pass
        </button>
      </div>
    </div>
  );

  const AccordionHeader = ({ id, title, isActive }) => (
    <div 
      className={`accordion-header ${isActive ? 'active' : ''}`}
      onClick={() => toggleSection(id)}
      style={{
        background: isActive ? 'var(--bem-blue-night)' : 'white',
        padding: '25px 40px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: isActive ? '0 10px 30px rgba(27, 38, 49, 0.2)' : '0 4px 15px rgba(0,0,0,0.03)',
        marginBottom: '15px',
        transition: '0.4s',
        border: isActive ? 'none' : '1px solid #f1f5f9'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--bem-red)', opacity: isActive ? 1 : 0.3 }}></div>
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: 900, color: isActive ? 'white' : 'var(--bem-blue-night)', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h2>
      </div>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: '50%', 
        background: isActive ? 'rgba(255,255,255,0.1)' : '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: '0.4s'
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isActive ? 'white' : 'var(--bem-red)'} strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '120px 0', background: 'var(--bg-light)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '0', right: '0', width: '100%', height: '400px', background: 'linear-gradient(to bottom, rgba(196, 0, 48, 0.03), transparent)', zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bem-red)', textDecoration: 'none', fontWeight: 800, fontSize: '0.85rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Retour à l'accueil
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(196, 0, 48, 0.1)', border: '1px solid var(--bem-red)', color: 'var(--bem-red)', padding: '8px 25px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 900, marginBottom: '25px', letterSpacing: '2px' }}>
            BILLETTERIE OFFICIELLE 2026
          </div>
          <h1 style={{ fontWeight: 900, fontSize: '3.5rem', color: 'var(--bem-blue-night)', fontFamily: 'Montserrat', margin: '0 0 20px', textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: 1 }}>
            Réservez votre <span style={{ color: 'var(--bem-red)' }}>accès</span>
          </h1>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Sélectionnez la formule adaptée à vos objectifs pour cette nouvelle édition.</p>
        </div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* VISITEUR */}
          <AccordionHeader id="visiteur" title="Pass Visiteurs" isActive={activeSection === 'visiteur'} />
          {activeSection === 'visiteur' && (
            <div className="accordion-content" style={{ padding: '30px 0 50px', animation: 'fadeIn 0.5s' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: '400px', margin: '0 auto' }}>
                <TicketCard price="GRATUIT" title="Pass Visiteur" features={["Accès intégral aux stands", "Participation aux conférences publiques", "Badge numérique personnalisé", "Accès à l'espace Networking"]} />
              </div>
            </div>
          )}

          {/* INTERVENANT */}
          <AccordionHeader id="intervenant" title="Speaker / Intervenant" isActive={activeSection === 'intervenant'} />
          {activeSection === 'intervenant' && (
            <div className="accordion-content" style={{ padding: '30px 0 50px', animation: 'fadeIn 0.5s' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: '400px', margin: '0 auto' }}>
                <TicketCard price="OFFERT" title="Pass Intervenant" features={["Accès VIP Lounge & Catering", "Prise de parole sur scène principale", "Networking Privé avec les partenaires", "Mention spéciale sur le site officiel"]} />
              </div>
            </div>
          )}

          {/* EXPOSANT */}
          <AccordionHeader id="exposant" title="Espace Exposants" isActive={activeSection === 'exposant'} />
          {activeSection === 'exposant' && (
            <div className="accordion-content" style={{ padding: '30px 0 50px', animation: 'fadeIn 0.5s' }}>
              <div className="tickets-grid-premium" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                <TicketCard price="25 000 CFA" title="Formule Standard" features={["Stand modulable 4m²", "Accès aux panels & conférences", "Mention dans le guide visiteur"]} />
                <TicketCard price="35 000 CFA" title="Formule Premium" badge="Populaire" features={["Stand modulable 6m²", "Accès aux panels & conférences", "Déjeuners networking inclus", "Logo sur les écrans secondaires"]} />
                <TicketCard price="50 000 CFA" title="Formule Gold" badge="Premium" features={["Emplacement stratégique (Entrée)", "Stand modulable 9m²", "Accès VIP Lounge", "Pitch de 5min sur scène", "Déjeuners networking (2 jours)"]} />
              </div>
            </div>
          )}

          {/* NOS PACKS SPONSORING */}
          <AccordionHeader id="sponsoring" title="Partenaires & Sponsoring" isActive={activeSection === 'sponsoring'} />
          {activeSection === 'sponsoring' && (
            <div className="accordion-content" style={{ padding: '30px 0 50px', animation: 'fadeIn 0.5s' }}>
              <div className="tickets-grid-premium" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                <TicketCard price="250 000 CFA" title="Pack Standard" features={["Logo sur tous les supports print", "Visibilité réseaux sociaux", "2 invitations VIP", "Stand d'exposition standard", "Distribution de flyers"]} />
                <TicketCard price="500 000 CFA" title="Pack Premium" badge="Recommandé" features={["Logo format Large sur scène", "Partenaire majeur de l'événement", "4 invitations VIP Platinum", "Stand Premium 12m²", "Intervention dédiée 15min", "Accès base de données prospects"]} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
