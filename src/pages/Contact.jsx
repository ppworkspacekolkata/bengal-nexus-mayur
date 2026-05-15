import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Globe, Building } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

export default function Contact() {
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '0', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
          
          {/* Contact Info (Dark Premium Side) */}
          <div style={{ background: 'var(--navy-blue)', color: 'white', padding: '60px', position: 'relative', overflow: 'hidden' }}>
            {/* Background Accent */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(10, 92, 54, 0.4), transparent)', filter: 'blur(50px)' }}></div>
            
            <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', color: 'white', position: 'relative', zIndex: 2 }}>Headquarters</h3>
            <p style={{ color: '#A0AAB2', fontSize: '1.1rem', marginBottom: '50px', position: 'relative', zIndex: 2 }}>Bengal Nexus Exports Pvt Ltd.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '8px', fontSize: '1.2rem' }}>Corporate Office</h4>
                  <p style={{ color: '#A0AAB2', lineHeight: '1.6' }}>DTC Southern Heights,<br />Joka, Kolkata – 700104,<br />West Bengal, India</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '8px', fontSize: '1.2rem' }}>Direct Line</h4>
                  <p style={{ color: '#A0AAB2', lineHeight: '1.6' }}>+91 9073136651<br/><span style={{ fontSize: '0.9rem', color: 'var(--primary-green)' }}>Available on WhatsApp</span></p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Globe size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '8px', fontSize: '1.2rem' }}>Digital Inquiries</h4>
                  <p style={{ color: '#A0AAB2', lineHeight: '1.6' }}>bengalnexusexports@gmail.com<br/>www.bengalnexusexports.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grand Inquiry Form (Light Side) */}
          <div style={{ background: 'white', padding: '60px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--navy-blue)' }}>Request Quotation</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Fill out the form below and our export team will process your request immediately.</p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '25px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--navy-blue)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                  <input type="text" style={{ width: '100%', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', outline: 'none', transition: 'all 0.3s', fontSize: '1rem' }} placeholder="John Doe" required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--navy-blue)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Company Name</label>
                  <input type="text" style={{ width: '100%', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', outline: 'none', transition: 'all 0.3s', fontSize: '1rem' }} placeholder="Global Traders LLC" required />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '25px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--navy-blue)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
                  <input type="email" style={{ width: '100%', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', outline: 'none', transition: 'all 0.3s', fontSize: '1rem' }} placeholder="john@example.com" required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--navy-blue)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp Number</label>
                  <input type="tel" style={{ width: '100%', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', outline: 'none', transition: 'all 0.3s', fontSize: '1rem' }} placeholder="+1 234 567 8900" required />
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--navy-blue)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Destination Country</label>
                <input type="text" style={{ width: '100%', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', outline: 'none', transition: 'all 0.3s', fontSize: '1rem' }} placeholder="e.g., United States, UAE, UK" required />
              </div>

              <div style={{ marginBottom: '35px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--navy-blue)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Order Details & Requirements</label>
                <textarea style={{ width: '100%', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', outline: 'none', transition: 'all 0.3s', minHeight: '180px', resize: 'vertical', fontSize: '1rem' }} placeholder="Please specify the products, required quantity (e.g., 2x40ft FCL), packaging preferences, and target port..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', gap: '10px', borderRadius: '15px' }}>
                Send Official Inquiry <Send size={20} />
              </button>
            </form>
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
