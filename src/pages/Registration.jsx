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

        <div className="registration-container-senior">
          {/* FORM */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ background: 'white', padding: 'clamp(25px, 5vw, 60px)', borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', borderTop: '6px solid var(--bem-red)' }}>
              <div style={{ marginBottom: '45px' }}>
                <h1 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '-1.5px', marginBottom: '10px', lineHeight: 1.1 }}>Finaliser <span style={{ color: 'var(--bem-red)' }}>votre inscription</span></h1>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>Remplissez les informations pour générer votre badge personnalisé.</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row-smart" style={{ marginBottom: '35px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Prénom</label>
                    <input type="text" id="fn" placeholder="Ex: Amadou" value={form.fn} onChange={handleChange} inputMode="text" autoComplete="given-name" style={{ padding: '18px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1rem', outline: 'none', background: '#f8fafc', transition: '0.3s', fontFamily: 'inherit', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Nom</label>
                    <input type="text" id="ln" placeholder="Ex: Sow" value={form.ln} onChange={handleChange} inputMode="text" autoComplete="family-name" style={{ padding: '18px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1rem', outline: 'none', background: '#f8fafc', transition: '0.3s', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div className="form-row-smart" style={{ marginBottom: '35px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Poste Actuel</label>
                    <input type="text" id="jt" placeholder="Ex: Directeur" value={form.jt} onChange={handleChange} inputMode="text" style={{ padding: '18px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1rem', outline: 'none', background: '#f8fafc', transition: '0.3s', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Entreprise / Institution</label>
                    <input type="text" id="co" placeholder="Ex: BEM Dakar" value={form.co} onChange={handleChange} inputMode="text" style={{ padding: '18px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1rem', outline: 'none', background: '#f8fafc', transition: '0.3s', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>Secteurs d'intérêt</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
                  {tags.map(tag => (
                    <div 
                      key={tag} 
                      onClick={() => toggleTag(tag)} 
                      className={`tag-btn-touch ${selectedTags.includes(tag) ? 'active' : ''}`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </form>
            </div>

            {/* PAYMENT SECTION */}
            {!isFree && (
              <div style={{ background: 'white', padding: 'clamp(25px, 5vw, 60px)', borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', borderLeft: '6px solid var(--bem-red)', animation: 'slideUp 0.5s ease-out' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '35px', color: 'var(--bem-blue-night)', letterSpacing: '-0.5px' }}>Règlement par <span style={{ color: 'var(--bem-red)' }}>Mobile Money</span></h3>
                
                <div className="payment-grid-adaptive">
                  <button 
                    onClick={() => setPaymentMethod('wave')}
                    style={{ 
                      padding: '30px', 
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
                    <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1ba2f1', letterSpacing: '1px' }}>WAVE PAY</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('om')}
                    style={{ 
                      padding: '30px', 
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
                    <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#ff7900', letterSpacing: '1px' }}>ORANGE MONEY</span>
                  </button>
                </div>

                {paymentMethod && (
                  <div style={{ animation: 'fadeIn 0.4s' }}>
                    <div style={{ background: '#f8fafc', padding: '35px', borderRadius: '12px', border: '2px dashed #cbd5e1', marginBottom: '35px' }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-gray)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Envoyer au numéro :
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <span style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', color: 'var(--bem-blue-night)', letterSpacing: '1px' }}>{phoneNumbers[paymentMethod]}</span>
                        <button 
                          onClick={() => handleCopy(phoneNumbers[paymentMethod])}
                          style={{ background: copied ? '#10b981' : 'var(--bem-blue-night)', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 900, cursor: 'pointer', transition: '0.3s', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
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
                        inputMode="text"
                        style={{ padding: '20px', border: '2px solid #f1f5f9', borderRadius: '4px', fontSize: '1.2rem', outline: 'none', background: '#f8fafc', fontWeight: 700, width: '100%', boxSizing: 'border-box' }} 
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-gray)', fontSize: '0.85rem' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        <span>Saisissez le code de confirmation reçu par SMS.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <button className="btn-primary" style={{ width: '100%', padding: '28px', fontSize: '1.2rem', fontWeight: 900, borderRadius: '4px', letterSpacing: '1px', boxShadow: '0 25px 50px rgba(196, 0, 48, 0.25)', position: 'relative', zIndex: 10 }}>
              {isFree ? 'VALIDER MON INSCRIPTION' : 'CONFIRMER LE PAIEMENT ET ENVOYER'}
            </button>
            <div style={{ height: '60px' }}></div> {/* Spacer for FAB safety */}
          </div>

          {/* BADGE SIDEBAR */}
          <div className="badge-preview-card-senior">
            <div style={{ background: 'var(--bem-blue-night)', color: 'white', padding: '20px', textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>VOTRE BADGE NUMÉRIQUE</div>
            <div style={{ padding: 'clamp(40px, 6vw, 60px) 40px', textAlign: 'center' }}>
              <div style={{ width: 'clamp(140px, 20vw, 180px)', height: 'clamp(140px, 20vw, 180px)', background: '#f8fafc', margin: '0 auto 35px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '2px solid #f1f5f9' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <div style={{ position: 'absolute', color: 'var(--bem-red)', fontWeight: 900, transform: 'rotate(-45deg)', fontSize: '0.8rem', border: '2px solid', padding: '4px 12px', textTransform: 'uppercase', letterSpacing: '1px', background: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>En attente</div>
              </div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.6rem, 5vw, 2rem)', textTransform: 'uppercase', color: 'var(--bem-blue-night)', marginBottom: '12px', minHeight: '2.4rem', letterSpacing: '-1px', lineHeight: 1.1 }}>
                {`${form.fn} ${form.ln}`.trim() || "PRÉNOM NOM"}
              </div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '40px', minHeight: '1.2rem', fontWeight: 600 }}>
                {form.jt && form.co ? `${form.jt} @ ${form.co}` : "Poste Actuel @ Entreprise"}
              </div>
              <div style={{ background: 'var(--bem-red)', color: 'white', padding: '18px', margin: '0 -40px -60px', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
