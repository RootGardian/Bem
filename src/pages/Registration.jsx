import React, { useState } from 'react';

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
    <div style={{ padding: '60px 0', background: 'var(--bg-light)', minHeight: '80vh' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* FORM */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '4px', boxShadow: '0 5px 20px var(--bem-red-shadow)', borderTop: '5px solid var(--bem-red)' }}>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '30px' }}>Inscription</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--bem-blue-night)' }}>Prénom</label>
                  <input type="text" id="fn" placeholder="Ex: Amadou" value={form.fn} onChange={handleChange} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--bem-blue-night)' }}>Nom</label>
                  <input type="text" id="ln" placeholder="Ex: Sow" value={form.ln} onChange={handleChange} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--bem-blue-night)' }}>Poste</label>
                  <input type="text" id="jt" placeholder="Ex: Directeur" value={form.jt} onChange={handleChange} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--bem-blue-night)' }}>Entreprise</label>
                  <input type="text" id="co" placeholder="Ex: BEM Dakar" value={form.co} onChange={handleChange} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
              </div>

              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--bem-blue-night)' }}>Secteurs d'intérêt</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                {tags.map(tag => (
                  <div key={tag} onClick={() => toggleTag(tag)} style={{ 
                    padding: '8px 15px', 
                    background: selectedTags.includes(tag) ? 'var(--bem-red)' : '#eee', 
                    color: selectedTags.includes(tag) ? 'white' : 'inherit',
                    borderRadius: '4px', 
                    cursor: 'pointer', 
                    fontSize: '0.85rem', 
                    fontWeight: 600,
                    transition: '0.3s'
                  }}>
                    {tag}
                  </div>
                ))}
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '30px', padding: '18px' }}>Continuer vers le paiement</button>
            </form>
          </div>

          {/* BADGE SIDEBAR */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{ background: 'white', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 40px var(--bem-red-shadow-heavy)', marginBottom: '20px' }}>
              <div style={{ background: 'var(--bem-blue-night)', color: 'white', padding: '15px', textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '1px' }}>APERÇU DU BADGE</div>
              <div style={{ padding: '30px', textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: '#f0f0f0', margin: '0 auto 20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <div style={{ position: 'absolute', color: 'rgba(209, 6, 61, 0.4)', fontWeight: 900, transform: 'rotate(-45deg)', fontSize: '0.8rem', border: '2px solid', padding: '2px 5px', textTransform: 'uppercase' }}>Badge non valide</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.4rem', textTransform: 'uppercase', color: 'var(--bem-blue-night)', marginBottom: '5px', minHeight: '1.8rem' }}>
                  {`${form.fn} ${form.ln}`.trim() || "NOM COMPLET"}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '20px', minHeight: '1.1rem' }}>
                  {`${form.jt} @ ${form.co}` || "Poste @ Entreprise"}
                </div>
                <div style={{ background: 'var(--bem-red)', color: 'white', padding: '10px', margin: '0 -30px -30px', fontFamily: 'Montserrat', fontWeight: 700 }}>VISITEUR</div>
              </div>
            </div>

            <div style={{ background: 'var(--bem-blue-night)', color: 'white', padding: '20px', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span>Total :</span>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.5rem' }}>GRATUIT</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input type="text" placeholder="Code promo" style={{ flex: 1, padding: 8, fontSize: '0.8rem', borderRadius: '4px', border: 'none' }} />
                <button style={{ background: 'var(--bem-red)', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', cursor: 'pointer' }}>Appliquer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
