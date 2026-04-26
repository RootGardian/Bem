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
      <section className="hero" style={{ padding: '100px 0', background: 'var(--bg-light)', borderBottom: '1px solid #eee', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px', color: 'var(--bem-blue-night)', lineHeight: 1.1 }}>La Foire de <br />l'Entrepreneuriat</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '40px', color: 'var(--text-gray)' }}>
            Le rendez-vous incontournable de l'innovation et du leadership étudiant. Rejoignez la Junior Entreprise BEM Dakar pour deux jours d'échanges intenses.
          </p>
          <div className="actions" style={{ display: 'flex', gap: '15px' }}>
            <Link to="/tickets" className="btn btn-primary">Réserver mon pass</Link>
            <a href="#" className="btn btn-secondary">En savoir plus</a>
          </div>
        </div>
      </section>

      {/* EVENT SECTION (MOT DE LA PRÉSIDENTE) */}
      <section id="evenement">
        <div className="container">
          <div className="section-title">
            <h2>Le Mot de la Présidente</h2>
          </div>
          <div className="quote-block" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', background: 'var(--bg-light)', padding: '60px', borderRadius: '4px' }}>
            <div className="profile-img" style={{ border: '5px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <img src="/team.png" alt="Makhtar Cissé" style={{ width: '100%', display: 'block' }} />
            </div>
            <div className="quote-content">
              <blockquote style={{ fontSize: '1.5rem', fontWeight: 400, fontStyle: 'italic', marginBottom: '30px', color: 'var(--text-dark)', position: 'relative' }}>
                "En tant que Junior Entreprise, notre mission est de transformer les étudiants en futurs leaders. 'La Foire' est le catalyseur de cette ambition à Dakar."
              </blockquote>
              <div className="signature" style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.1rem', color: 'var(--bem-red)' }}>
                Makhtar Cissé
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-gray)', textTransform: 'uppercase' }}>Président, Junior Entreprise BEM Dakar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAKAR MARKETING PRESENTATION */}
      <section id="presentation" style={{ background: 'white' }}>
        <div className="container">
          <div className="info-block">
            <div className="info-content">
              <img src="/Logo_DM.png" alt="Logo Dakar Marketing" style={{ height: '80px', marginBottom: '20px' }} />
              <h3 className="font-montserrat">Qu'est-ce que Dakar Marketing ?</h3>
              <p>
                Dakar Marketing est la Junior Entreprise de BEM Dakar, créée en 2014. Elle est la 1ère Junior Entreprise certifiée <strong>JE Global</strong> en Afrique subsaharienne.
              </p>
              <p>
                Structurée comme un véritable cabinet de conseil, elle accompagne les entreprises dans leurs problématiques de marketing stratégique, digital et d'études de marché.
              </p>
              <p>
                Notre mission est de proposer des solutions innovantes, efficaces et adaptées aux besoins de nos clients, tout en garantissant des tarifs compétitifs.
              </p>
            </div>
            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="feature-card" style={{ padding: '25px' }}>
                <div style={{ color: 'var(--bem-red)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '10px' }}>01</div>
                <h4 className="font-montserrat" style={{ fontSize: '0.9rem' }}>Innovation</h4>
              </div>
              <div className="feature-card" style={{ padding: '25px' }}>
                <div style={{ color: 'var(--bem-red)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '10px' }}>02</div>
                <h4 className="font-montserrat" style={{ fontSize: '0.9rem' }}>Excellence</h4>
              </div>
              <div className="feature-card" style={{ padding: '25px' }}>
                <div style={{ color: 'var(--bem-red)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '10px' }}>03</div>
                <h4 className="font-montserrat" style={{ fontSize: '0.9rem' }}>Réactivité</h4>
              </div>
              <div className="feature-card" style={{ padding: '25px' }}>
                <div style={{ color: 'var(--bem-red)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '10px' }}>04</div>
                <h4 className="font-montserrat" style={{ fontSize: '0.9rem' }}>Efficacité</h4>
              </div>
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
      <section id="partenaires" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Nos Partenaires</h2>
          </div>
          <div className="partner-grid">
            {[
              { name: 'Kirène avec Orange', src: 'kirene.png' },
              { name: 'Supeco', src: 'supeco.png' },
              { name: 'L\'Oréal', src: 'loreal.jpg' },
              { name: 'BEM Tech', src: 'bem_tech.png' },
              { name: 'Samsung', src: 'samsung.png' },
              { name: 'Yonnubio', src: 'Yono.png' },
              { name: 'BEM Dakar', src: 'Bem.png' },
              { name: 'Advention', src: 'advention.jpeg' },
              { name: 'ESTP Paris', src: 'estp.png' },
              { name: 'CBAO', src: 'cbao.jpeg' }
            ].map((p, i) => (
              <div key={i} className="partner-item" style={{ 
                background: 'white', 
                padding: '20px', 
                borderRadius: '8px', 
                boxShadow: '0 5px 15px var(--bem-red-shadow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '120px',
                transition: 'transform 0.3s'
              }}>
                <img 
                  src={`/${p.src}`} 
                  alt={p.name} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '70px', 
                    objectFit: 'contain',
                    transition: 'all 0.3s'
                  }} 
                  onMouseOver={e => {
                    e.currentTarget.parentElement.style.transform = 'translateY(-5px)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.parentElement.style.transform = 'translateY(0)';
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
