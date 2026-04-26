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
        padding: '160px 0', 
        background: 'linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.85)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative', 
        overflow: 'hidden',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="animate-fade-in stagger-1" style={{ display: 'inline-block', background: 'rgba(196, 0, 48, 0.15)', border: '1px solid var(--bem-red)', color: 'var(--bem-red)', padding: '6px 20px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '25px', letterSpacing: '2px' }}>
            DAKAR MARKETING • JUNIOR ENTREPRISE
          </div>
          <h1 className="font-serif animate-fade-in stagger-2" style={{ fontSize: '4.8rem', fontWeight: 900, marginBottom: '20px', color: 'white', lineHeight: 1, letterSpacing: '-2px', textTransform: 'none' }}>
            La Foire de <br /><span style={{ color: 'var(--bem-red)', fontStyle: 'italic' }}>l'Entrepreneuriat</span>
          </h1>
          <p className="animate-fade-in stagger-3" style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 50px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', fontWeight: 400 }}>
            Le rendez-vous incontournable de l'innovation et du leadership étudiant à Dakar. Rejoignez-nous pour deux jours d'échanges stratégiques organisés par Dakar Marketing.
          </p>
          <div className="actions animate-fade-in stagger-4" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/tickets" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '0.9rem' }}>Réserver mon pass</Link>
            <a href="#presentation" className="btn" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '15px 38px', backdropFilter: 'blur(5px)', background: 'rgba(255,255,255,0.05)' }}>Découvrir nos services</a>
          </div>
        </div>
      </section>

      {/* STATS SECTION - TECH STYLE */}
      <section style={{ background: 'var(--bem-blue-night)', padding: '80px 0', marginTop: '-40px', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div className="stats-card-tech animate-fade-in stagger-1">
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--bem-red)', marginBottom: '5px', fontFamily: 'Montserrat' }}>10+</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>Années d'expérience</div>
              <div style={{ width: '30px', height: '2px', background: 'var(--bem-red)', marginTop: '15px' }}></div>
            </div>
            <div className="stats-card-tech animate-fade-in stagger-2">
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--bem-red)', marginBottom: '5px', fontFamily: 'Montserrat' }}>100+</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>Projets réalisés</div>
              <div style={{ width: '30px', height: '2px', background: 'var(--bem-red)', marginTop: '15px' }}></div>
            </div>
            <div className="stats-card-tech animate-fade-in stagger-3">
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--bem-red)', marginBottom: '5px', fontFamily: 'Montserrat' }}>50+</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>Clients satisfaits</div>
              <div style={{ width: '30px', height: '2px', background: 'var(--bem-red)', marginTop: '15px' }}></div>
            </div>
          </div>
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

      {/* FORMAT DE LA FOIRE */}
      <section id="format" style={{ background: 'white', padding: '100px 0' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="font-serif animate-fade-in" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--bem-blue-night)', textTransform: 'none' }}>Format de la Foire</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--bem-red)', margin: '20px auto' }}></div>
          </div>
          <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div className="feature-card animate-fade-in stagger-1">
              <div style={{ color: 'var(--bem-red)', fontSize: '2rem', marginBottom: '20px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="font-montserrat">Conférences</h3>
              <p>Tables rondes de haut niveau avec des experts du secteur et des leaders d'opinion.</p>
            </div>
            <div className="feature-card animate-fade-in stagger-2">
              <div style={{ color: 'var(--bem-red)', fontSize: '2rem', marginBottom: '20px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="font-montserrat">Pitch & Expo</h3>
              <p>Mise en lumière de projets disruptifs et stands d'exposition interactifs.</p>
            </div>
            <div className="feature-card animate-fade-in stagger-3">
              <div style={{ color: 'var(--bem-red)', fontSize: '2rem', marginBottom: '20px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <h3 className="font-montserrat">Success Story</h3>
              <p>Retours d'expérience inspirants de parcours entrepreneuriaux d'exception.</p>
            </div>
            <div className="feature-card animate-fade-in stagger-4">
              <div style={{ color: 'var(--bem-red)', fontSize: '2rem', marginBottom: '20px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <h3 className="font-montserrat">Networking</h3>
              <p>Espace privilégié d'échanges stratégiques entre les acteurs clés de l'écosystème.</p>
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
                  { t: "09:00 - 10:00", a: "Accueil & networking", i: "👥" },
                  { t: "10:00 - 10:15", a: "Cérémonie d'ouverture Officielle", i: "🎙️" },
                  { t: "10:15 - 10:35", a: "Keynote : L'avenir du Marketing", i: "✨" },
                  { t: "10:35 - 11:35", a: "Table Ronde #1 : Innovation & IA", i: "🤖" },
                  { t: "11:35 - 11:50", a: "Pause Café & Échanges", i: "☕" },
                  { t: "11:50 - 12:50", a: "Table Ronde #2 : Marketing Digital", i: "🌐" },
                  { t: "12:50 - 13:50", a: "Success Story : Parcours inspirants", i: "🏆" },
                  { t: "13:50 - 14:00", a: "Cocktail de clôture", i: "🍸" }
                ].map((item, idx) => (
                  <div key={idx} className={`timeline-item animate-fade-in stagger-${(idx % 5) + 1}`}>
                    <div className="timeline-time">
                      <span>{item.t.split(' - ')[0]}</span>
                    </div>
                    <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>{item.i}</div>
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
                  { t: "09:00 - 10:00", a: "Ouverture de la Foire aux stands", i: "🎪" },
                  { t: "10:00 - 13:00", a: "Expositions & Pitch Contest", i: "🚀" },
                  { t: "13:00 - 14:00", a: "Pause Déjeuner Networking", i: "🍱" },
                  { t: "14:00 - 18:30", a: "Foire (Après-midi) & Ateliers", i: "🛠️" },
                  { t: "18:30 - 19:00", a: "Grand Final & Remise de prix", i: "🏅" }
                ].map((item, idx) => (
                  <div key={idx} className={`timeline-item animate-fade-in stagger-${(idx % 5) + 1}`}>
                    <div className="timeline-time">
                      <span>{item.t.split(' - ')[0]}</span>
                    </div>
                    <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>{item.i}</div>
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
