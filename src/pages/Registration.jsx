import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Registration = () => {
  const location = useLocation();
  const category = location.state?.category || "Pass Visiteur";
  
  const [form, setForm] = useState({
    fn: '',
    ln: '',
    jt: '',
    co: ''
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [transactionId, setTransactionId] = useState('');
  const [copied, setCopied] = useState(false);

  const tags = ["Tech", "Finance", "Agro-industrie", "Services", "Artisanat"];
  
  const phoneNumbers = {
    wave: '778878269',
    om: '778878269'
  };

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

  const handleCopy = (num) => {
    navigator.clipboard.writeText(num);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ background: 'white', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', borderTop: '5px solid var(--bem-red)' }}>
              <h1 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '2rem', textTransform: 'uppercase', marginBottom: '35px', color: 'var(--bem-blue-night)', letterSpacing: '-0.5px' }}>Inscription</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px', marginBottom: '35px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Prénom</label>
                    <input type="text" id="fn" placeholder="Ex: Amadou" value={form.fn} onChange={handleChange} style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Nom</label>
                    <input type="text" id="ln" placeholder="Ex: Sow" value={form.ln} onChange={handleChange} style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px', marginBottom: '35px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Poste</label>
                    <input type="text" id="jt" placeholder="Ex: Directeur" value={form.jt} onChange={handleChange} style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Entreprise</label>
                    <input type="text" id="co" placeholder="Ex: BEM Dakar" value={form.co} onChange={handleChange} style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none' }} />
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
              </form>
            </div>

            {/* PAYMENT SECTION */}
            {!category.includes('GRATUIT') && (
              <div style={{ background: 'white', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', borderLeft: '5px solid var(--bem-red)' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '25px', color: 'var(--bem-blue-night)' }}>Méthode de Paiement</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
                  <button 
                    onClick={() => setPaymentMethod('wave')}
                    style={{ 
                      padding: '20px', 
                      borderRadius: '8px', 
                      border: paymentMethod === 'wave' ? '2px solid #1ba2f1' : '1px solid #e2e8f0',
                      background: paymentMethod === 'wave' ? '#f0f9ff' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Wave_Logo_Color.png" alt="Wave" style={{ height: '30px' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.8rem', color: '#1ba2f1' }}>WAVE</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('om')}
                    style={{ 
                      padding: '20px', 
                      borderRadius: '8px', 
                      border: paymentMethod === 'om' ? '2px solid #ff7900' : '1px solid #e2e8f0',
                      background: paymentMethod === 'om' ? '#fff7ed' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Orange_logo.svg/1024px-Orange_logo.svg.png" alt="Orange Money" style={{ height: '30px' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.8rem', color: '#ff7900' }}>ORANGE MONEY</span>
                  </button>
                </div>

                {paymentMethod && (
                  <div style={{ animation: 'fadeIn 0.3s' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '15px' }}>
                      Veuillez effectuer le transfert au numéro suivant :
                    </p>
                    <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', border: '1px dashed #cbd5e1' }}>
                      <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.4rem', color: 'var(--bem-blue-night)' }}>{phoneNumbers[paymentMethod]}</span>
                      <button 
                        onClick={() => handleCopy(phoneNumbers[paymentMethod])}
                        style={{ background: copied ? '#10b981' : 'var(--bem-blue-night)', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer', transition: '0.3s' }}
                      >
                        {copied ? 'COPIÉ !' : 'COPIER'}
                      </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>ID de Transaction</label>
                      <input 
                        type="text" 
                        placeholder="Ex: S-240426-XXXXXX" 
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        style={{ padding: '14px', border: '1px solid #e0e6ed', borderRadius: '4px', fontSize: '1rem', outline: 'none' }} 
                      />
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-gray)', fontStyle: 'italic' }}>Entrez le code reçu par SMS après votre paiement.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <button className="btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1rem', fontWeight: 800 }}>
              {category.includes('GRATUIT') ? 'VALIDER MON INSCRIPTION' : 'CONFIRMER ET ENVOYER'}
            </button>
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
                <div style={{ background: 'var(--bem-red)', color: 'white', padding: '12px', margin: '0 -30px -40px', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {category}
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bem-blue-night)', color: 'white', padding: '30px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Ticket sélectionné :</span>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1rem', color: 'var(--bem-red)' }}>{category}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Total à régler :</span>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.6rem' }}>{category.includes('Standard') ? '25 000 CFA' : category.includes('Premium') ? '35 000 CFA' : category.includes('Gold') ? '50 000 CFA' : category.includes('Pack') ? 'Voir Pack' : 'GRATUIT'}</span>
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
