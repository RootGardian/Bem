import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.category || "Pass Visiteur";
  const isFree = category.toLowerCase().includes('visiteur') || category.toLowerCase().includes('intervenant');
  
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
    wave: '711228383',
    om: '711228383'
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
    <div className="registration-section" style={{ padding: '160px 0 120px', background: 'var(--bg-light)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative elements */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(196, 0, 48, 0.03)', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '30%', height: '30%', background: 'rgba(27, 38, 49, 0.03)', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          onClick={() => navigate(-1)} 
          style={{ 
            cursor: 'pointer', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            color: 'var(--bem-red)', 
            fontWeight: 900, 
            fontSize: '0.75rem', 
            marginBottom: '40px', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            background: 'white',
            padding: '12px 20px',
            borderRadius: '50px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            border: '1px solid #f1f5f9'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          RETOUR
        </div>

        <div className="registration-grid">
          {/* FORM */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ background: 'white', padding: 'clamp(20px, 5vw, 50px)', borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', borderTop: '6px solid var(--bem-red)' }}>
              <div style={{ marginBottom: '40px' }}>
                <h1 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '-1.5px', marginBottom: '10px' }}>Finaliser <span style={{ color: 'var(--bem-red)' }}>votre inscription</span></h1>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>Remplissez les informations pour générer votre badge personnalisé.</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Prénom</label>
                    <input type="text" id="fn" placeholder="Ex: Amadou" value={form.fn} onChange={handleChange} style={{ padding: '16px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1rem', outline: 'none', background: '#f8fafc', transition: '0.3s', fontFamily: 'inherit', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Nom</label>
                    <input type="text" id="ln" placeholder="Ex: Sow" value={form.ln} onChange={handleChange} style={{ padding: '16px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1rem', outline: 'none', background: '#f8fafc', transition: '0.3s', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Poste Actuel</label>
                    <input type="text" id="jt" placeholder="Ex: Directeur" value={form.jt} onChange={handleChange} style={{ padding: '16px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1rem', outline: 'none', background: '#f8fafc', transition: '0.3s', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Entreprise / Institution</label>
                    <input type="text" id="co" placeholder="Ex: BEM Dakar" value={form.co} onChange={handleChange} style={{ padding: '16px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1rem', outline: 'none', background: '#f8fafc', transition: '0.3s', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Secteurs d'intérêt</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
                  {tags.map(tag => (
                    <div key={tag} onClick={() => toggleTag(tag)} style={{ 
                      padding: '12px 24px', 
                      background: selectedTags.includes(tag) ? 'var(--bem-red)' : 'white', 
                      color: selectedTags.includes(tag) ? 'white' : 'var(--bem-blue-night)',
                      border: '2px solid',
                      borderColor: selectedTags.includes(tag) ? 'var(--bem-red)' : '#f1f5f9',
                      borderRadius: '50px', 
                      cursor: 'pointer', 
                      fontSize: '0.85rem', 
                      fontWeight: 800,
                      transition: 'all 0.3s'
                    }}>
                      {tag}
                    </div>
                  ))}
                </div>
              </form>
            </div>

            {/* PAYMENT SECTION */}
            {!isFree && (
              <div style={{ background: 'white', padding: 'clamp(20px, 5vw, 50px)', borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', borderLeft: '6px solid var(--bem-red)', animation: 'slideUp 0.5s ease-out' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '30px', color: 'var(--bem-blue-night)', letterSpacing: '-0.5px' }}>Règlement par <span style={{ color: 'var(--bem-red)' }}>Mobile Money</span></h3>
                
                <div className="payment-methods-grid">
                  <button 
                    onClick={() => setPaymentMethod('wave')}
                    style={{ 
                      padding: '25px', 
                      borderRadius: '12px', 
                      border: paymentMethod === 'wave' ? '3px solid #1ba2f1' : '2px solid #f1f5f9',
                      background: paymentMethod === 'wave' ? '#f0f9ff' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '15px',
                      transition: '0.3s'
                    }}
                  >
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#1ba2f1', display: paymentMethod === 'wave' ? 'block' : 'none' }}></div>
                    <span style={{ fontWeight: 900, fontSize: '1rem', color: '#1ba2f1', letterSpacing: '1px' }}>WAVE PAY</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('om')}
                    style={{ 
                      padding: '25px', 
                      borderRadius: '12px', 
                      border: paymentMethod === 'om' ? '3px solid #ff7900' : '2px solid #f1f5f9',
                      background: paymentMethod === 'om' ? '#fff7ed' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '15px',
                      transition: '0.3s'
                    }}
                  >
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff7900', display: paymentMethod === 'om' ? 'block' : 'none' }}></div>
                    <span style={{ fontWeight: 900, fontSize: '1rem', color: '#ff7900', letterSpacing: '1px' }}>ORANGE MONEY</span>
                  </button>
                </div>

                {paymentMethod && (
                  <div style={{ animation: 'fadeIn 0.4s' }}>
                    <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px dashed #cbd5e1', marginBottom: '35px' }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-gray)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Envoyer au numéro :
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <span style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>{phoneNumbers[paymentMethod]}</span>
                        <button 
                          onClick={() => handleCopy(phoneNumbers[paymentMethod])}
                          style={{ background: copied ? '#10b981' : 'var(--bem-blue-night)', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer', transition: '0.3s', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                        >
                          {copied ? '✓ COPIÉ' : 'COPIER LE NUMÉRO'}
                        </button>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>ID de Transaction</label>
                      <input 
                        type="text" 
                        placeholder="Ex: S-240426-XXXXXX" 
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        style={{ padding: '18px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1.1rem', outline: 'none', background: '#f8fafc', fontWeight: 700, width: '100%', boxSizing: 'border-box' }} 
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-gray)', fontSize: '0.8rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        <span>Saisissez le code de confirmation reçu par SMS.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <button className="btn-primary" style={{ width: '100%', padding: '25px', fontSize: '1.1rem', fontWeight: 900, borderRadius: '4px', letterSpacing: '1px', boxShadow: '0 20px 40px rgba(196, 0, 48, 0.2)' }}>
              {isFree ? 'VALIDER MON INSCRIPTION' : 'CONFIRMER LE PAIEMENT ET ENVOYER'}
            </button>
          </div>

          {/* BADGE SIDEBAR */}
          <div className="badge-preview-container">
            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
              <div style={{ background: 'var(--bem-blue-night)', color: 'white', padding: '20px', textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>VOTRE BADGE NUMÉRIQUE</div>
              <div style={{ padding: 'clamp(30px, 5vw, 50px) 30px', textAlign: 'center' }}>
                <div style={{ width: '160px', height: '160px', background: '#f8fafc', margin: '0 auto 30px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '2px solid #f1f5f9' }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <div style={{ position: 'absolute', color: 'var(--bem-red)', fontWeight: 900, transform: 'rotate(-45deg)', fontSize: '0.8rem', border: '2px solid', padding: '4px 12px', textTransform: 'uppercase', letterSpacing: '1px', background: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>En attente</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.4rem, 5vw, 1.8rem)', textTransform: 'uppercase', color: 'var(--bem-blue-night)', marginBottom: '10px', minHeight: '2.2rem', letterSpacing: '-1px' }}>
                  {`${form.fn} ${form.ln}`.trim() || "PRÉNOM NOM"}
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-gray)', marginBottom: '35px', minHeight: '1.2rem', fontWeight: 600 }}>
                  {form.jt && form.co ? `${form.jt} @ ${form.co}` : "Poste Actuel @ Entreprise"}
                </div>
                <div style={{ background: 'var(--bem-red)', color: 'white', padding: '15px', margin: '0 -30px -40px', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {category}
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bem-blue-night)', color: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <span style={{ fontSize: '1rem', opacity: 0.7, fontWeight: 500 }}>Ticket :</span>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.1rem', color: 'var(--bem-red)', textAlign: 'right' }}>{category}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                <span style={{ fontSize: '1.1rem', opacity: 0.7, fontWeight: 500 }}>Total :</span>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.5rem, 5vw, 2.2rem)' }}>{isFree ? 'OFFERT' : category.includes('Standard') ? '25 000 CFA' : category.includes('Premium') ? '35 000 CFA' : category.includes('Gold') ? '50 000 CFA' : category.includes('Pack') ? 'Voir Pack' : 'OFFERT'}</span>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <input type="text" placeholder="Code promo" style={{ flex: 1, padding: '16px', fontSize: '0.9rem', borderRadius: '4px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                <button style={{ background: 'var(--bem-red)', color: 'white', border: 'none', padding: '0 25px', borderRadius: '4px', fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', cursor: 'pointer', transition: '0.3s' }}>Appliquer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
