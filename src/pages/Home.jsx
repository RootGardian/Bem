import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        padding: '120px 0', 
        background: 'linear-gradient(135deg, var(--bem-blue-night) 0%, #1a2a6c 100%)', 
        position: 'relative', 
        overflow: 'hidden',
        color: 'white' 
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(209, 6, 61, 0.1)', border: '1px solid var(--bem-red)', color: 'var(--bem-red)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '1px' }}>
            ÉVÉNEMENT 2026
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '20px', color: 'white', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-1px' }}>
            La Foire de <br /><span style={{ color: 'var(--bem-red)' }}>l'Entrepreneuriat</span>
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '650px', marginBottom: '45px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
            Le rendez-vous incontournable de l'innovation et du leadership étudiant. Rejoignez la Junior Entreprise BEM Dakar pour deux jours d'échanges stratégiques et d'opportunités.
          </p>
          <div className="actions" style={{ display: 'flex', gap: '20px' }}>
            <Link to="/tickets" className="btn btn-primary" style={{ padding: '15px 35px' }}>Réserver mon pass</Link>
            <a href="#evenement" className="btn" style={{ border: '2px solid white', color: 'white', padding: '13px 33px' }}>En savoir plus</a>
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
      <section id="presentation" style={{ background: 'var(--bg-light)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="info-content">
              <div style={{ background: 'white', display: 'inline-flex', padding: '15px', borderRadius: '4px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                <img src="/Logo_DM.png" alt="Logo Dakar Marketing" style={{ height: '60px' }} />
              </div>
              <h3 className="font-montserrat" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--bem-blue-night)', marginBottom: '25px', lineHeight: '1.2' }}>L'excellence au service de <span style={{ color: 'var(--bem-red)' }}>votre croissance</span></h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-dark)' }}>
                Dakar Marketing est la Junior Entreprise de BEM Dakar, créée en 2014. Elle est la 1ère Junior Entreprise certifiée <strong>JE Global</strong> en Afrique subsaharienne.
              </p>
              <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>
                Structurée comme un véritable cabinet de conseil, elle accompagne les entreprises dans leurs problématiques de marketing stratégique, digital et d'études de marché.
              </p>
              <div style={{ display: 'flex', gap: '30px' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--bem-red)' }}>10+</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--bem-blue-night)', textTransform: 'uppercase' }}>Ans d'expertise</div>
                </div>
                <div style={{ width: '1px', background: '#ddd' }}></div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--bem-red)' }}>500+</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--bem-blue-night)', textTransform: 'uppercase' }}>Études réalisées</div>
                </div>
              </div>
            </div>
            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              {[
                { n: '01', t: 'Innovation', d: 'Solutions créatives et adaptées' },
                { n: '02', t: 'Excellence', d: 'Rigueur et qualité académique' },
                { n: '03', t: 'Réactivité', d: 'Respect strict des délais' },
                { n: '04', t: 'Efficacité', d: 'Impact mesurable pour nos clients' }
              ].map((v, i) => (
                <div key={i} className="feature-card" style={{ padding: '30px', textAlign: 'left', background: 'white' }}>
                  <div style={{ color: 'var(--bem-red)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '15px', opacity: 0.5 }}>{v.n}</div>
                  <h4 className="font-montserrat" style={{ fontSize: '1rem', marginBottom: '10px', color: 'var(--bem-blue-night)', fontWeight: 800 }}>{v.t}</h4>
                  <p style={{ fontSize: '0.8rem', margin: 0, color: 'var(--text-gray)' }}>{v.d}</p>
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
      <section id="format" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Format de la Foire</h2>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <h3 className="font-montserrat">Conférences</h3>
              <p>Tables rondes avec des experts du secteur.</p>
            </div>
            <div className="feature-card">
              <h3 className="font-montserrat">Pitch & Expo</h3>
              <p>Présentation de projets et stands d'exposition.</p>
            </div>
            <div className="feature-card">
              <h3 className="font-montserrat">Success Story</h3>
              <p>Partage d'expériences inspirantes.</p>
            </div>
            <div className="feature-card">
              <h3 className="font-montserrat">Networking</h3>
              <p>Espace d'échanges entre les acteurs de l'écosystème.</p>
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
      <section id="programme" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Chronogramme</h2>
          </div>
          <div className="schedule-grid">
            {/* VENDREDI 22 */}
            <div className="day-box">
              <div className="day-header">
                <h3 className="font-montserrat">Vendredi 22</h3>
              </div>
              <table className="schedule-table">
                <tbody>
                  {[
                    { t: "09:00 - 10:00", a: "Accueil & mise en place" },
                    { t: "10:00 - 10:15", a: "Mot d'ouverture" },
                    { t: "10:15 - 10:35", a: "Prise de parole" },
                    { t: "10:35 - 11:35", a: "Table Ronde n°1" },
                    { t: "11:35 - 11:50", a: "Pause 15 min" },
                    { t: "11:50 - 12:50", a: "Table Ronde n°2" },
                    { t: "12:50 - 13:50", a: "Success Story" },
                    { t: "13:50 - 14:00", a: "Mot de fin / Cocktails" }
                  ].map((row, i) => (
                    <tr key={i} className="schedule-row">
                      <td className="schedule-cell schedule-time">{row.t}</td>
                      <td className="schedule-cell schedule-activity">{row.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SAMEDI 23 */}
            <div className="day-box">
              <div className="day-header">
                <h3 className="font-montserrat">Samedi 23</h3>
              </div>
              <table className="schedule-table">
                <tbody>
                  {[
                    { t: "09:00 - 10:00", a: "Installation" },
                    { t: "10:00 - 13:00", a: "Foire (Matinée) & Animation" },
                    { t: "13:00 - 14:00", a: "Pause Déjeuner" },
                    { t: "14:00 - 18:30", a: "Foire (Après-midi) & Animation" },
                    { t: "18:30 - 19:00", a: "Clôture de la Foire" }
                  ].map((row, i) => (
                    <tr key={i} className="schedule-row">
                      <td className="schedule-cell schedule-time">{row.t}</td>
                      <td className="schedule-cell schedule-activity">{row.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
          <div className="partner-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '30px' 
          }}>
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
