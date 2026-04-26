import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeDay, setActiveDay] = useState('vendredi');
  const sponsors = [
    { src: 'CBAO.jpg', alt: 'CBAO' },
    { src: 'sonatel.png', alt: 'Sonatel' },
    { src: 'mazars.png', alt: 'Mazars' },
    { src: 'Deloitte.png', alt: 'Deloitte' },
    { src: 'kedge.png', alt: 'Kedge' },
    { src: 'junia.png', alt: 'Junia' },
    { src: 'apix.png', alt: 'APIX' },
    { src: 'der.png', alt: 'DER' }
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(13, 27, 42, 0.4), rgba(13, 27, 42, 0.4)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative', 
        overflow: 'hidden',
        color: 'white',
        textAlign: 'center',
        padding: '100px 0'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="animate-fade-in stagger-1" style={{ display: 'inline-block', background: 'rgba(196, 0, 48, 0.15)', border: '1px solid var(--bem-red)', color: 'var(--bem-red)', padding: '6px 20px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '25px', letterSpacing: '2px' }}>
            DAKAR MARKETING • JUNIOR ENTREPRISE
          </div>
          <h1 className="font-serif animate-fade-in stagger-2" style={{ fontSize: '5.5rem', fontWeight: 900, marginBottom: '20px', color: 'white', lineHeight: 1, letterSpacing: '-2px' }}>
            La Foire de <br />l'Entrepreneuriat
          </h1>
          <p className="animate-fade-in stagger-3" style={{ fontSize: '1.5rem', maxWidth: '900px', margin: '0 auto 10px', color: 'white', lineHeight: '1.4', fontWeight: 500, fontFamily: 'Montserrat' }}>
            L'événement entrepreneurial majeur de BEM Dakar
          </p>
          <p className="animate-fade-in stagger-3" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 40px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', fontWeight: 400 }}>
            Connectez-vous à l'innovation, découvrez des projets disruptifs et rencontrez les leaders de demain. Deux jours pour transformer vos idées en business.
          </p>

          <div className="actions animate-fade-in stagger-4" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px' }}>
            <Link to="/tickets" className="btn btn-primary" style={{ padding: '18px 45px', fontSize: '1rem', borderRadius: '4px' }}>Réserver mon pass</Link>
            <a href="#evenement" className="btn" style={{ padding: '18px 45px', fontSize: '1rem', border: '2px solid white', color: 'white', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              En savoir plus
            </a>
          </div>

          <div className="stats-row animate-fade-in stagger-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { n: '10+', t: "ÉDITIONS PASSÉES" },
              { n: '1000+', t: "VISITEURS ATTENDUS" },
              { n: '50+', t: "EXPOSANTS" }
            ].map((s, idx) => (
              <div key={idx} className="stats-card-tech" style={{ padding: '30px', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--bem-red)', marginBottom: '5px', fontFamily: 'Montserrat' }}>{s.n}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', letterSpacing: '1px' }}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Arrow */}
        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite', color: 'white' }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path></svg>
        </div>
      </section>

      {/* EVENT SECTION (MOT DE LA PRÉSIDENTE) */}
      <section id="evenement" style={{ background: 'white', padding: '100px 0' }}>
        <div className="container">
          <div className="quote-block" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center' }}>
            <div className="profile-img" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', borderTop: '4px solid var(--bem-red)', borderLeft: '4px solid var(--bem-red)', zIndex: 0 }}></div>
              <img src="/team.png" alt="Makhtar Cissé" style={{ width: '100%', borderRadius: '4px', position: 'relative', zIndex: 1, boxShadow: '20px 20px 0 var(--bg-light)' }} />
            </div>
            <div className="quote-content">
              <div style={{ color: 'var(--bem-red)', fontSize: '4rem', fontFamily: 'serif', lineHeight: 0, marginBottom: '20px', opacity: 0.3 }}>&ldquo;</div>
              <blockquote style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--bem-blue-night)', marginBottom: '40px', lineHeight: '1.4', position: 'relative', marginTop: '-20px' }}>
                En tant que Junior Entreprise, notre mission est de transformer les étudiants en futurs leaders. <span style={{ color: 'var(--bem-red)' }}>'La Foire'</span> est le catalyseur de cette ambition à Dakar.
              </blockquote>
              <div className="signature" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '40px', height: '2px', background: 'var(--bem-red)' }}></div>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.2rem', color: 'var(--bem-blue-night)', textTransform: 'uppercase', letterSpacing: '1px' }}>Makhtar Cissé</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600 }}>Président, Junior Entreprise BEM Dakar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAKAR MARKETING PRESENTATION */}
      <section id="presentation" style={{ background: 'var(--bg-light)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="info-content animate-fade-in stagger-1">
              <div style={{ background: 'white', display: 'inline-flex', padding: '15px', borderRadius: '4px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                <img src="/Logo_DM.png" alt="Logo Dakar Marketing" style={{ height: '60px' }} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--bem-blue-night)', marginBottom: '25px', lineHeight: '1.1', textTransform: 'none' }}>L'excellence au service de <br /><span style={{ color: 'var(--bem-red)' }}>votre croissance</span></h3>
              <p style={{ fontSize: '1.15rem', marginBottom: '20px', color: 'var(--text-dark)', lineHeight: '1.7' }}>
                Dakar Marketing est la Junior Entreprise de BEM Dakar, créée en 2014. Elle est la 1ère Junior Entreprise certifiée <strong>JE Global</strong> en Afrique subsaharienne.
              </p>
              <p style={{ color: 'var(--text-gray)', marginBottom: '40px', lineHeight: '1.7' }}>
                Structurée comme un véritable cabinet de conseil, elle accompagne les entreprises dans leurs problématiques de marketing stratégique, digital et d'études de marché.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--bem-red)', fontFamily: 'Montserrat' }}>10+</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--bem-blue-night)', textTransform: 'uppercase', letterSpacing: '1px' }}>Ans d'expertise</div>
                </div>
                <div style={{ width: '1px', background: '#e0e0e0' }}></div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--bem-red)', fontFamily: 'Montserrat' }}>500+</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--bem-blue-night)', textTransform: 'uppercase', letterSpacing: '1px' }}>Études réalisées</div>
                </div>
              </div>
            </div>
            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              {[
                { n: '01', t: 'Innovation', d: 'Solutions créatives et adaptées aux enjeux du marché.' },
                { n: '02', t: 'Excellence', d: 'Rigueur académique et qualité professionnelle.' },
                { n: '03', t: 'Réactivité', d: 'Respect strict des délais et agilité opérationnelle.' },
                { n: '04', t: 'Efficacité', d: 'Impact mesurable et concret pour nos clients.' }
              ].map((v, i) => (
                <div key={i} className={`feature-card animate-fade-in stagger-${i+2}`} style={{ padding: '35px', textAlign: 'left', background: 'white' }}>
                  <div style={{ color: 'var(--bem-red)', fontWeight: 900, fontSize: '1.4rem', marginBottom: '15px', opacity: 0.3 }}>{v.n}</div>
                  <h4 className="font-montserrat" style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--bem-blue-night)', fontWeight: 800 }}>{v.t}</h4>
                  <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-gray)', lineHeight: '1.6' }}>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT & OBJECTIVES */}
      <section id="concept" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Concept & Objectifs 2026</h2>
          </div>
          <div className="info-block" style={{ marginBottom: '60px' }}>
            <div className="info-content">
              <p>
                L'entrepreneuriat constitue aujourd'hui un levier majeur de croissance économique et de création d'emplois au Sénégal.
              </p>
              <p>
                <strong>La Foire de l'entrepreneuriat</strong> est un événement qui met en relation étudiants, jeunes diplômés et entrepreneurs autour de l'innovation et de l'initiative.
              </p>
            </div>
            <div className="info-content">
              <ul className="bem-list">
                <li>Encourager l'esprit d'initiative chez les étudiants</li>
                <li>Mettre en lumière des projets innovants</li>
                <li>Favoriser les rencontres entrepreneurs/étudiants</li>
                <li>Créer des opportunités de réseautage stratégique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI COLLABORER AVEC NOUS (RE-DESIGNED) */}
      <section id="pourquoi-nous" style={{ background: 'white', padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
            {/* Left Content */}
            <div className="animate-fade-in stagger-1">
              <h2 className="font-montserrat" style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--bem-blue-night)', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Pourquoi collaborer avec nous ?
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-gray)', lineHeight: '1.8', marginBottom: '40px' }}>
                En devenant partenaire de la Foire de l'Entrepreneuriat, vous associez votre image à une initiative en faveur de la jeunesse, de l'innovation et du développement économique.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Renforcer votre visibilité auprès d'un public ciblé",
                  "Valoriser votre engagement sociétal et RSE",
                  "Créer des connexions stratégiques avec l'écosystème",
                  "Identifier et recruter de nouveaux talents",
                  "Contribuer à la promotion de l'entrepreneuriat au Sénégal"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px', fontSize: '0.95rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--bem-red)" strokeWidth="3" style={{ marginTop: '2px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Red Box */}
            <div className="animate-fade-in stagger-2">
              <div style={{ background: 'var(--bem-red)', padding: '60px 50px', borderRadius: '8px', color: 'white', boxShadow: '0 20px 50px rgba(196, 0, 48, 0.2)' }}>
                <h3 className="font-montserrat" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Cibles de l'événement
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                  {[
                    "Étudiants entrepreneurs & porteurs de projets",
                    "Startups développées au sein des grandes écoles",
                    "Partenaires institutionnels et professionnels"
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', fontSize: '0.95rem', fontWeight: 600 }}>
                      <div style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/tickets" style={{ 
                  display: 'block', 
                  width: '100%', 
                  background: 'white', 
                  color: 'var(--bem-red)', 
                  textAlign: 'center', 
                  padding: '18px', 
                  borderRadius: '4px', 
                  textDecoration: 'none', 
                  fontWeight: 800, 
                  fontSize: '0.9rem', 
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: '0.3s'
                }}>
                  Devenir Partenaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABLES RONDES */}
      <section id="tables-rondes" style={{ background: 'var(--bem-blue-night)', color: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: 'white' }}>Les Tables Rondes</h2>
          </div>
          <div className="round-table-grid">
            <div className="round-table-card" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>
              <div className="subtitle" style={{ color: '#aaa' }}>Innovation, Technologie, IA</div>
              <h3 className="font-montserrat">Oser Entreprendre</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Réunion de fondateurs de startups, investisseurs et mentors qui transforment leurs visions en réalités concrètes au Sénégal.
              </p>
            </div>
            <div className="round-table-card" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>
              <div className="subtitle" style={{ color: '#aaa' }}>Les tips qui marchent</div>
              <h3 className="font-montserrat">Le Marketing Digital</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Algorithmes, personal branding, monétisation... décryptage des stratégies qui fonctionnent sur le marché africain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARRAINAGE */}
      <section id="parrainage" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'var(--bg-light)', padding: '50px', borderRadius: '4px', borderTop: '5px solid var(--bem-red)' }}>
            <h3 className="font-montserrat" style={{ marginBottom: '20px', color: 'var(--bem-blue-night)' }}>Notre Parrain : Marketing Méditerranée</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '20px' }}>
              "Junior-Entreprise de KEDGE Business School Marseille, c'est la Junior-Entreprise la plus titrée de France et d'Europe."
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Elle détient depuis 1969, 16 titres à l'échelle nationale et internationale remis par des grandes entreprises telles que BNP Paribas, ALTEN, EY ou encore ENGIE.
            </p>
          </div>
        </div>
      </section>

      {/* CHRONOGRAMME */}
      <section id="programme" style={{ background: '#f8fafc', padding: '120px 0' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="font-serif" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--bem-blue-night)', textTransform: 'none' }}>Programme Officiel</h2>
            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginTop: '10px' }}>Deux jours d'immersion totale dans l'écosystème entrepreneurial</p>
          </div>

          <div className="program-tabs">
            <div className={`program-tab ${activeDay === 'vendredi' ? 'active' : ''}`} onClick={() => setActiveDay('vendredi')}>
              Vendredi 22 Mai
            </div>
            <div className={`program-tab ${activeDay === 'samedi' ? 'active' : ''}`} onClick={() => setActiveDay('samedi')}>
              Samedi 23 Mai
            </div>
          </div>

          <div className="timeline-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {activeDay === 'vendredi' ? (
              <div className="animate-fade-in">
                {[
                  { t: "09:00 - 10:00", a: "Accueil & networking" },
                  { t: "10:00 - 10:15", a: "Cérémonie d'ouverture Officielle" },
                  { t: "10:15 - 10:35", a: "Keynote : L'avenir du Marketing" },
                  { t: "10:35 - 11:35", a: "Table Ronde #1 : Innovation & IA" },
                  { t: "11:35 - 11:50", a: "Pause Café & Échanges" },
                  { t: "11:50 - 12:50", a: "Table Ronde #2 : Marketing Digital" },
                  { t: "12:50 - 13:50", a: "Success Story : Parcours inspirants" },
                  { t: "13:50 - 14:00", a: "Cocktail de clôture" }
                ].map((item, idx) => (
                  <div key={idx} className={`timeline-item animate-fade-in stagger-${(idx % 5) + 1}`}>
                    <div className="timeline-time">
                      <span>{item.t.split(' - ')[0]}</span>
                    </div>
                    <div className="timeline-content">
                      <h4>{item.a}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', margin: '5px 0 0' }}>{item.t}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="animate-fade-in">
                {[
                  { t: "09:00 - 10:00", a: "Ouverture de la Foire aux stands" },
                  { t: "10:00 - 13:00", a: "Expositions & Pitch Contest" },
                  { t: "13:00 - 14:00", a: "Pause Déjeuner Networking" },
                  { t: "14:00 - 18:30", a: "Foire (Après-midi) & Ateliers" },
                  { t: "18:30 - 19:00", a: "Grand Final & Remise de prix" }
                ].map((item, idx) => (
                  <div key={idx} className={`timeline-item animate-fade-in stagger-${(idx % 5) + 1}`}>
                    <div className="timeline-time">
                      <span>{item.t.split(' - ')[0]}</span>
                    </div>
                    <div className="timeline-content">
                      <h4>{item.a}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', margin: '5px 0 0' }}>{item.t}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY COLLABORATE */}
      <section id="collaboration" style={{ background: 'white' }}>
        <div className="container">
          <div className="info-block">
            <div className="info-content">
              <h2 className="font-montserrat" style={{ color: 'var(--bem-blue-night)', marginBottom: '30px' }}>Pourquoi collaborer avec nous ?</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                En devenant partenaire de la Foire de l'Entrepreneuriat, vous associez votre image à une initiative en faveur de la jeunesse, de l'innovation et du développement économique.
              </p>
              <ul className="bem-list">
                <li>Renforcer votre visibilité auprès d'un public ciblé</li>
                <li>Valoriser votre engagement sociétal et RSE</li>
                <li>Créer des connexions stratégiques avec l'écosystème</li>
                <li>Identifier et recruter de nouveaux talents</li>
                <li>Contribuer à la promotion de l'entrepreneuriat au Sénégal</li>
              </ul>
            </div>
            <div style={{ background: 'var(--bem-red)', padding: '40px', borderRadius: '4px', color: 'white' }}>
              <h4 className="font-montserrat" style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Cibles de l'événement</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                  <span>▪</span> Étudiants entrepreneurs & porteurs de projets
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                  <span>▪</span> Startups développées au sein des grandes écoles
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                  <span>▪</span> Partenaires institutionnels et professionnels
                </li>
              </ul>
              <button className="btn" style={{ background: 'white', color: 'var(--bem-red)', marginTop: '20px', width: '100%' }}>Devenir Partenaire</button>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section id="partenaires" style={{ background: '#F8FAFC', padding: '100px 0' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--bem-blue-night)', marginBottom: '10px' }}>Nos Clients</h2>
            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>Ils nous font confiance pour développer leur stratégie marketing</p>
          </div>
          <div className="clients-grid">
            {[
              { name: 'BEM Dakar', src: 'Bem.png' },
              { name: 'BEM Tech', src: 'bem_tech.png' },
              { name: 'L\'Oréal', src: 'loreal.jpg' },
              { name: 'Samsung', src: 'samsung.png' },
              { name: 'ESTP Paris', src: 'estp.png' },
              { name: 'Kirène avec Orange', src: 'kirene.png' },
              { name: 'Supeco', src: 'supeco.png' },
              { name: 'Advention', src: 'advention.jpeg' }
            ].map((p, i) => (
              <div key={i} style={{ 
                background: 'white', 
                padding: '40px 20px', 
                borderRadius: '16px', 
                boxShadow: '0 4px 25px rgba(0,0,0,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                   src={`/${p.src}`} 
                   alt={p.name} 
                   style={{ 
                     maxWidth: '80%', 
                     maxHeight: '80px', 
                     objectFit: 'contain'
                   }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
