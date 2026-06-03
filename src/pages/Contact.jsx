import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Globe, Building, Check, Award } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const name = formData.get("name") || "";
    const company = formData.get("company") || "N/A";
    const email = formData.get("email") || "";
    const whatsapp = formData.get("whatsapp") || "";
    const country = formData.get("country") || "";
    const enquiry_type = formData.get("enquiry_type") || "";
    const message = formData.get("message") || "";
    
    // Construct the WhatsApp message with clean formatting
    const text = `*New B2B Export Inquiry*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${name}
🏢 *Company:* ${company}
✉️ *Email:* ${email}
📞 *Phone/WhatsApp:* ${whatsapp}
🌍 *Country:* ${country}
💼 *Enquiry Type:* ${enquiry_type}
📝 *Requirements:*
${message}
━━━━━━━━━━━━━━━━━━━━`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "919830540185"; // Owner's WhatsApp Number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;
    
    setIsSuccess(true);
    e.target.reset();
    setIsSubmitting(false);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants}
      style={{ paddingTop: '120px', paddingBottom: '0', background: 'var(--bg-offwhite)' }}
    >
      <div className="container" style={{ marginBottom: '80px' }}>
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span style={{ color: 'var(--primary-green)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Global Trade Inquiries</span>
          <h1 style={{ fontSize: '4rem', color: 'var(--navy-blue)', marginTop: '10px' }}>Let's Build a Partnership</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '20px auto 0' }}>Request a comprehensive FOB or CIF quotation. Our export specialists will respond within 24 hours.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
          
          {/* Contact Info (Dark Premium Side) */}
          <div style={{ background: '#111C27', color: 'white', padding: 'clamp(40px, 5vw, 60px)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            {/* Background Accent */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(229, 184, 52, 0.1), transparent)', filter: 'blur(50px)' }}></div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span style={{ color: '#E5B834', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>Enquiry Portal</span>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', color: 'white', lineHeight: '1.2', fontFamily: 'serif' }}>Request a<br />Premium<br />Quote</h3>
              <p style={{ color: '#A0AAB2', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '300px' }}>Direct access to our specialists for volume exports and bespoke requirements.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '16px 20px', background: '#1C2B3A', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(229, 184, 52, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E5B834', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <span style={{ color: '#E2E8F0', fontSize: '0.95rem', fontWeight: '500', wordBreak: 'break-all' }}>bengalnexusexports@gmail.com</span>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '16px 20px', background: '#1C2B3A', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(229, 184, 52, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E5B834', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <span style={{ color: '#E2E8F0', fontSize: '0.95rem', fontWeight: '500' }}>+91 9830540185</span>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 2, marginTop: '40px', display: 'flex', alignItems: 'center', gap: '10px', color: '#A0AAB2', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(229, 184, 52, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E5B834' }}>
                <Award size={18} />
              </div>
              <span>PREMIUM QUALITY ASSURED</span>
            </div>
          </div>

          {/* Grand Inquiry Form (Dark Theme matching the reference) */}
          <div style={{ background: '#121E2C', padding: 'clamp(30px, 5vw, 60px)', position: 'relative' }}>
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(229, 184, 52, 0.05)', borderRadius: '20px', border: '1px solid rgba(229, 184, 52, 0.1)' }}
              >
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#E5B834', color: '#0B131D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px' }}>
                  <Check size={36} />
                </div>
                <h3 style={{ color: '#E5B834', fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>Inquiry Submitted Successfully!</h3>
                <p style={{ color: '#A0AAB2', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>Thank you for reaching out. Our global trade and export specialists have received your requirements and will compile a customized quotation for you within 24 hours.</p>
                <button onClick={() => setIsSuccess(false)} className="btn btn-outline" style={{ marginTop: '30px', padding: '12px 28px', color: '#E5B834', borderColor: '#E5B834', background: 'transparent', borderRadius: '30px' }}>Send Another Inquiry</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#E5B834', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name *</label>
                    <input type="text" name="name" className="premium-dark-input" placeholder="Rahul Sharma" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#E5B834', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Company Name *</label>
                    <input type="text" name="company" className="premium-dark-input" placeholder="Optional" />
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#E5B834', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Work Email *</label>
                    <input type="email" name="email" className="premium-dark-input" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#E5B834', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone Number *</label>
                    <input type="tel" name="whatsapp" className="premium-dark-input" placeholder="+91 ..." required />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#E5B834', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Destination Country *</label>
                    <select name="country" className="premium-dark-input" defaultValue="" required>
                      <option value="" disabled style={{ color: '#6B7C8E' }}>Select Country</option>
                      <optgroup label="Popular Destinations" style={{ background: '#121E2C', color: '#E5B834' }}>
                        <option value="United States">United States (USA)</option>
                        <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="United Kingdom">United Kingdom (UK)</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Germany">Germany</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Japan">Japan</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                      </optgroup>
                      <optgroup label="All Countries" style={{ background: '#121E2C', color: 'white' }}>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Austria">Austria</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Egypt">Egypt</option>
                        <option value="France">France</option>
                        <option value="Greece">Greece</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Italy">Italy</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Morocco">Morocco</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Russia">Russia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Other">Other Country (Specify below)</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#E5B834', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Enquiry Type *</label>
                    <select name="enquiry_type" className="premium-dark-input" defaultValue="" required>
                      <option value="" disabled style={{ color: '#6B7C8E' }}>Select Service Type</option>
                      <option value="Agro & Food Products">Rice & Agro Exports (Basmati, Potatoes, Onions)</option>
                      <option value="Eco Jute & Shopping Bags">Eco Jute & Cotton Shopping Bags</option>
                      <option value="Traditional Handicrafts">Indian Traditional Handicrafts & Decor</option>
                      <option value="B2B Sourcing / Bulk OEM">Bulk Custom B2B Sourcing / OEM</option>
                      <option value="General Trade Inquiry">General Export/Partnership Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#E5B834', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Message / Requirements *</label>
                  <textarea name="message" className="premium-dark-input" style={{ minHeight: '130px', resize: 'vertical' }} placeholder="Tell us about your requirements..." required></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  style={{
                    width: '100%',
                    padding: '20px',
                    fontSize: '1.1rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#0B131D',
                    background: '#E5B834',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(229, 184, 52, 0.2)',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'} <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <div style={{ width: '100%', height: '400px', marginTop: '40px' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.732959632427!2d88.29367331505322!3d22.476686185232152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027afdbb99d2eb%3A0xe54b9d5c41ccb47a!2sDTC%20Southern%20Heights!5e0!3m2!1sen!2sin!4v1689254041777!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Map">
        </iframe>
      </div>
    </motion.div>
  );
}
