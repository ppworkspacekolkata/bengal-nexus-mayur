import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Globe, FileCheck } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

export default function TermsConditions() {
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
            <Scale size={36} />
          </div>
          <h1 style={{ fontSize: '3rem', color: 'var(--navy-blue)', marginBottom: '15px' }}>Terms & Conditions</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Last updated: May 2026</p>
        </div>

        <div style={{ background: 'var(--bg-white)', padding: 'clamp(20px, 5vw, 50px)', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', border: '1px solid var(--border-color)', lineHeight: '1.8', color: 'var(--text-dark)' }}>
          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Globe size={20} color="var(--primary-green)" /> 1. B2B International Trade Agreement</h2>
            <p>
              Welcome to Bengal Nexus Exports. By accessing our portal, requesting FOB/CIF quotations, or entering into export agreements with us, you agree to comply with and be bound by the following Terms & Conditions. These terms govern all trade transactions, catalog downloads, and trade communications between Bengal Nexus Exports Pvt. Ltd. and global buyers.
            </p>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><FileText size={20} color="var(--primary-green)" /> 2. Quotations and Product Specifications</h2>
            <p>
              All quotations requested via our platform are provided as non-binding estimates based on current international market conditions, ocean freight rates, and product availability.
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px' }}>
              <li><strong>Prices:</strong> Quotations are strictly valid for the duration specified in the official Proforma Invoice (PI).</li>
              <li><strong>Quality Standards:</strong> Sizing, quality grading, and packaging specifications will be executed strictly as agreed upon in the finalized contract. Phytosanitary certificates and quality checks are carried out before cargo loading.</li>
              <li><strong>Minimum Order Quantity (MOQ):</strong> Our standard MOQ is customizable and negotiable based on buyer specifications and country-specific port regulations.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><FileCheck size={20} color="var(--primary-green)" /> 3. Payment Terms and Financial Transactions</h2>
            <p>
              To ensure safe global trade practices, all international transactions operate strictly under standard B2B trade payment mechanisms:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px' }}>
              <li><strong>Irrevocable Letter of Credit (L/C):</strong> Confirmed and payable at sight from a prime top-tier international bank.</li>
              <li><strong>Telegraphic Transfer (T/T):</strong> Standard advanced deposit with the remaining balance payable against scanned original shipping documents (Bill of Lading).</li>
            </ul>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px' }}>4. Shipping, Delivery, and Loading Ports</h2>
            <p>
              Unless otherwise specified in writing, our principal ports of loading are <strong>Kolkata Port</strong> and <strong>Haldia Port</strong> (West Bengal, India). Bengal Nexus Exports is responsible for executing custom clearance and cargo loading at these ports for FOB contracts. For CIF contracts, responsibility extends to delivery at the buyer's designated destination port. Any delays due to custom inspections, port congestion, or carrier schedules will be handled according to Standard INCOTERMS.
            </p>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px' }}>5. Quality Inspection & Dispute Resolution</h2>
            <p>
              Buyers have the right to request third-party inspections (e.g., SGS, Bureau Veritas) at the loading port at their own cost. Once the cargo is loaded onto the vessel and the Clean Shipped on Board Bill of Lading is issued, quality parameters are deemed accepted as per the loading port reports. Any post-delivery disputes must be filed within 10 days of cargo arrival at the destination port, supported by official photographic and laboratory evidence.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '15px' }}>6. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal proceedings or disputes arising from trade relationships will be subject to the exclusive jurisdiction of the competent courts in Kolkata, West Bengal, India.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
