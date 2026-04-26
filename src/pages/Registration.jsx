import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [form, setForm] = useState({
    fn: '',
    ln: '',
    jt: '',
    co: ''
  });

  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ["Tech", "Finance", "Agro-industrie", "Services", "Artisanat"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div style={{ padding: '100px 0', background: 'var(--bg-light)', minHeight: '80vh' }}>
      <div className="container">
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bem-red)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', marginBottom: '30px', textTransform: 'uppercase' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Retour à l'accueil
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          {/* FORM */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', borderTop: '5px solid var(--bem-red)' }}>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '2rem', textTransform: 'uppercase', marginBottom: '35px', color: 'var(--bem-blue-night)', letterSpacing: '-0.5px' }}>Inscription</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px', marginBottom: '35px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Prénom</label>
                  <input type="text" id="fn" placeholder="Ex: Amadou" value={form.fn} onChange={handleChange} style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Nom</label>
                  <input type="text" id="ln" placeholder="Ex: Sow" value={form.ln} onChange={handleChange} style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Poste</label>
                  <input type="text" id="jt" placeholder="Ex: Directeur" value={form.jt} onChange={handleChange} style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Entreprise</label>
                  <input type="text" id="co" placeholder="Ex: BEM Dakar" value={form.co} onChange={handleChange} style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} />
                </div>
              </div>

              <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Secteurs d'intérêt</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '15px' }}>
                {tags.map(tag => (
                  <div key={tag} onClick={() => toggleTag(tag)} style={{ 
                    padding: '10px 18px', 
                    background: selectedTags.includes(tag) ? 'var(--bem-red)' : '#f8fafc', 
                    color: selectedTags.includes(tag) ? 'white' : 'var(--text-dark)',
                    border: selectedTags.includes(tag) ? '1px solid var(--bem-red)' : '1px solid #e2e8f0',
                    borderRadius: '4px', 
                    cursor: 'pointer', 
                    fontSize: '0.8rem', 
                    fontWeight: 700,
                    transition: 'all 0.3s'
                  }}>
                    {tag}
                  </div>
                ))}
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '40px', padding: '18px', fontSize: '0.9rem' }}>Continuer vers le paiement</button>
            </form>
          </div>

          {/* BADGE SIDEBAR */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div style={{ background: 'white', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
              <div style={{ background: 'var(--bem-blue-night)', color: 'white', padding: '18px', textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2px' }}>APERÇU DU BADGE</div>
              <div style={{ padding: '40px 30px', textAlign: 'center' }}>
                <div style={{ width: '140px', height: '140px', background: '#f8fafc', margin: '0 auto 25px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', border: '1px solid #f1f5f9' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <div style={{ position: 'absolute', color: 'rgba(209, 6, 61, 0.2)', fontWeight: 900, transform: 'rotate(-45deg)', fontSize: '0.7rem', border: '1px solid', padding: '2px 8px', textTransform: 'uppercase', letterSpacing: '1px' }}>En attente</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.5rem', textTransform: 'uppercase', color: 'var(--bem-blue-night)', marginBottom: '8px', minHeight: '1.8rem', letterSpacing: '-0.5px' }}>
                  {`${form.fn} ${form.ln}`.trim() || "NOM COMPLET"}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-gray)', marginBottom: '30px', minHeight: '1.2rem', fontWeight: 500 }}>
                  {form.jt && form.co ? `${form.jt} @ ${form.co}` : "Poste @ Entreprise"}
                </div>
                <div style={{ background: 'var(--bem-red)', color: 'white', padding: '12px', margin: '0 -30px -40px', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px' }}>VISITEUR</div>
              </div>
            </div>

            <div style={{ background: 'var(--bem-blue-night)', color: 'white', padding: '30px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Total à régler :</span>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.6rem' }}>GRATUIT</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input type="text" placeholder="Code promo" style={{ flex: 1, padding: '12px', fontSize: '0.85rem', borderRadius: '4px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
                <button style={{ background: 'var(--bem-red)', color: 'white', border: 'none', padding: '0 20px', borderRadius: '4px', fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', cursor: 'pointer', transition: '0.3s' }}>Appliquer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
