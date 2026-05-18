import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      className="page-transition-wrapper"
      style={{ paddingTop: '140px', paddingBottom: '80px', background: 'var(--bg-offwhite)' }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center" style={{ marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', padding: '12px', background: 'rgba(27, 128, 57, 0.1)', color: 'var(--primary-green)', borderRadius: '50%', marginBottom: '20px' }}>
            <Shield size={36} />
          </div>
          <h1 style={{ fontSize: '3rem', color: 'var(--navy-blue)', marginBottom: '15px' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Last updated: May 2026</p>
        </div>

        <div style={{ background: 'var(--bg-white)', padding: 'clamp(20px, 5vw, 50px)', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', border: '1px solid var(--border-color)', lineHeight: '1.8', color: 'var(--text-dark)' }}>
          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Lock size={20} color="var(--primary-green)" /> 1. Commitment to Privacy</h2>
            <p>
              At Bengal Nexus Exports Pvt. Ltd., we respect your privacy and are committed to protecting the personal data of our website visitors, clients, and trade partners. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our global trade portal.
            </p>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Eye size={20} color="var(--primary-green)" /> 2. Information We Collect</h2>
            <p>
              We collect information that is voluntarily provided by you when requesting quotations, product information, or communicating with our export team. This includes:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px' }}>
              <li><strong>Contact Information:</strong> Full name, corporate email address, phone number, WhatsApp number.</li>
              <li><strong>Company Details:</strong> Company name, registration status, corporate website, import-export license details.</li>
              <li><strong>Trade Preferences:</strong> Products of interest, shipping requirements, destination ports, CIF/FOB terms, and volume needs.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><FileText size={20} color="var(--primary-green)" /> 3. How We Use Your Information</h2>
            <p>
              The information we collect is strictly used to facilitate international B2B export requests and trade relationships. Specifically, we use it to:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px' }}>
              <li>Formulate and send precise CIF / FOB price quotations.</li>
              <li>Verify the legitimacy of buyer queries to ensure secure trade operations.</li>
              <li>Provide regular shipment updates, product availability catalogs, and port updates.</li>
              <li>Comply with agricultural export-import laws and phytosanitary verification procedures.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Shield size={20} color="var(--primary-green)" /> 4. Data Security & Sharing</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to safeguard trade queries and buyer portfolios. We <strong>do not sell, rent, or trade</strong> your business details with third-party marketing companies. Information is only shared with verified customs brokers, freight forwarders, and banking institutions strictly to coordinate and execute export shipments.
            </p>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px' }}>5. Cookies and Web Analytics</h2>
            <p>
              Our website uses basic, privacy-friendly cookies to analyze site traffic, monitor load speeds, and improve visitor interactions. These do not store personal, identifiable details and can be blocked via your browser's security settings.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px' }}>6. Contact Our Compliance Team</h2>
            <p>
              If you have any questions about this Privacy Policy, your trade records, or wish to update/delete your business details from our records, please reach out to us at:
            </p>
            <div style={{ marginTop: '15px', padding: '20px', background: 'var(--bg-offwhite)', borderRadius: '12px', borderLeft: '4px solid var(--primary-green)' }}>
              <strong>Bengal Nexus Exports Pvt. Ltd.</strong><br />
              285, Mahatma Gandhi Road, Kolkata 700104, India<br />
              Email: <a href="mailto:bengalnexusexports@gmail.com" style={{ color: 'var(--primary-green)', fontWeight: '600' }}>bengalnexusexports@gmail.com</a>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
