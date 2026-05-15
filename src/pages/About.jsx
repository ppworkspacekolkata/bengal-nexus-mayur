import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Globe } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

export default function About() {
  return (
    <motion.div 
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      className="page-transition-wrapper"
      style={{ paddingTop: '100px' }}
    >
      {/* Header */}
      <section className="section" style={{ background: 'var(--navy-blue)', color: 'white', padding: '80px 0' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '20px' }}>About Us</h1>
          <p style={{ fontSize: '1.2rem', color: '#A0AAB2', maxWidth: '700px', margin: '0 auto' }}>From the fertile plains of Bengal to the global marketplace, we are dedicated to excellence in every shipment.</p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 className="section-title">Our Heritage & Mission</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Bengal Nexus Exports is a premier Kolkata-based export company committed to delivering premium agricultural products from India to global markets. We bridge the critical gap between local agricultural excellence and international demand.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                We source directly from trusted farmers and established suppliers, ensuring superior quality, competitive pricing, customized packaging, and timely shipment. Our strict adherence to international food safety and export regulations has made us a trusted partner for buyers worldwide.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
                <div style={{ background: 'var(--bg-offwhite)', padding: '20px', borderRadius: '12px' }}>
                  <Award size={32} color="var(--primary-green)" style={{ marginBottom: '15px' }} />
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Certifications</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>IEC Registered, FSSAI Compliant, APEDA Registered, and Quality Checked.</p>
                </div>
                <div style={{ background: 'var(--bg-offwhite)', padding: '20px', borderRadius: '12px' }}>
                  <Globe size={32} color="var(--primary-green)" style={{ marginBottom: '15px' }} />
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Global Reach</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Exporting to UAE, Middle East, Southeast Asia, Africa, and beyond.</p>
                </div>
              </div>
            </div>
            
            <div style={{ position: 'relative', marginTop: '30px' }}>
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ width: '100%', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
              >
                <img src="/assets/hero_banner.png" alt="Port Operations" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: '-40px', left: '-30px', background: 'var(--bg-white)', padding: '35px', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', maxWidth: '300px', border: '1px solid rgba(0,0,0,0.03)' }}
              >
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '5px', fontWeight: '800' }}>100%</h3>
                <p style={{ color: 'var(--navy-blue)', fontWeight: '700', fontSize: '1.1rem' }}>Export Quality Assurance</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
