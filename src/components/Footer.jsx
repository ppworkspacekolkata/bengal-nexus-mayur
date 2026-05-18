import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-modern">
      
      {/* Newsletter / CTA Section at the top of footer */}
      <div className="footer-newsletter">
        <div className="container newsletter-flex">
          <div className="newsletter-text">
            <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '10px' }}>Ready to Import?</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Get our latest product catalog and pricing straight to your inbox.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Business Email" className="newsletter-input" />
            <button className="btn" style={{ background: 'var(--navy-blue)', color: 'white', borderRadius: '30px', padding: '18px 35px' }}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="/assets/logo.png" alt="Bengal Nexus Logo" style={{ height: '60px', width: 'auto', background: 'white', padding: '5px', borderRadius: '10px' }} onError={(e) => { e.target.style.display = 'none'; }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0', lineHeight: '1', fontWeight: '800' }}>BENGAL NEXUS</h2>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '3px', fontWeight: '700', textTransform: 'uppercase' }}>Global Exports</span>
              </div>
            </div>
            <p style={{ color: '#A0AAB2', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Your trusted partner for sourcing premium Indian agricultural products. From local roots to global markets, delivered with unmatched excellence.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
              <a href="#" aria-label="LinkedIn" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s', fontWeight: '600' }}>in</a>
              <a href="#" aria-label="Facebook" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s', fontWeight: '600' }}>f</a>
              <a href="#" aria-label="Twitter" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s', fontWeight: '600' }}>tw</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.3rem', position: 'relative', display: 'inline-block' }}>
              Quick Links
              <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--accent-gold)' }}></span>
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li><Link to="/" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> Home</Link></li>
              <li><Link to="/about" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> About Us</Link></li>
              <li><Link to="/products" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> Product Catalog</Link></li>
              <li><Link to="/handicrafts" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> Bengal Handicrafts</Link></li>
              <li><Link to="/contact" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Products */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.3rem', position: 'relative', display: 'inline-block' }}>
              Top Commodities
              <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--accent-gold)' }}></span>
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li><Link to="/product/fresh-potatoes" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> Fresh Potatoes</Link></li>
              <li><Link to="/product/red-onions" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> Red Onions</Link></li>
              <li><Link to="/product/basmati-rice" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> Basmati Rice</Link></li>
              <li><Link to="/handicrafts" style={{ color: '#A0AAB2', display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowRight size={14} color="var(--primary-green)" /> Bengal Artisans</Link></li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.3rem', position: 'relative', display: 'inline-block' }}>
              Global Office
              <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--accent-gold)' }}></span>
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#A0AAB2' }}>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '5px' }} />
                <span>Bengal Nexus Exports<br />285, Mahatma Gandhi Road,<br />Kolkata 700104</span>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Phone size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>+91 9830540185</span>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Mail size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span style={{ overflowWrap: 'anywhere', wordBreak: 'break-word', fontSize: '0.95rem' }}>bengalnexusexports@gmail.com</span>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Globe size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>www.bengalnexusexports.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: 'center', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#A0AAB2', fontSize: '0.95rem' }}>
          <p>&copy; {new Date().getFullYear()} Bengal Nexus Exports. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: '#A0AAB2' }}>Privacy Policy</Link>
            <Link to="/terms-conditions" style={{ color: '#A0AAB2' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
