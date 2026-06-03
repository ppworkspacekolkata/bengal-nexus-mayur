import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 30;
  const dynamicTop = Math.max(0, 35 - scrollY);

  return (
    <>
      {/* Top Bar for Premium Feel - Hidden on mobile via CSS */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-info">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Phone size={14} color="var(--accent-gold)" /> +91 9830540185</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Mail size={14} color="var(--accent-gold)" /> bengalnexusexports@gmail.com</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={14} color="var(--accent-gold)" /> 285, Mahatma Gandhi Road, Kolkata - 700104</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
        top: `${dynamicTop}px`,
        padding: isScrolled ? '15px 0' : '20px 0'
      }}>
        <div className="container nav-container">
          <Link to="/" className="nav-brand">
            {/* Using the renamed logo */}
            <img src="/assets/logo.png" alt="Bengal Nexus Logo" className="nav-logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
            {/* Fallback if logo not found */}
            <div style={{ display: 'none', flexDirection: 'column' }}>
              <h1 style={{ fontSize: '1.6rem', color: 'var(--navy-blue)', marginBottom: '0', lineHeight: '1', letterSpacing: '-0.5px', fontWeight: '800' }}>BENGAL NEXUS</h1>
              <span style={{ fontSize: '0.7rem', color: 'var(--primary-green)', letterSpacing: '3px', fontWeight: '700', textTransform: 'uppercase' }}>Global Exports</span>
            </div>
          </Link>
          
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
            <NavLink to="/handicrafts" className={({ isActive }) => isActive ? "active" : ""}>Handicrafts</NavLink>
            
            {/* Click/Hover to reveal contact info underneath */}
            <div 
              className="nav-contact-container"
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setShowContactDropdown(true)}
              onMouseLeave={() => setShowContactDropdown(false)}
            >
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "active" : ""}
                style={{ paddingBottom: '15px', marginBottom: '-15px' }}
                onClick={(e) => {
                  setShowContactDropdown(!showContactDropdown);
                }}
              >
                Contact
              </NavLink>
              {showContactDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  borderRadius: '12px',
                  padding: '15px 20px',
                  zIndex: 1000,
                  minWidth: '200px',
                  marginTop: '15px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: '-8px', 
                    left: '50%', 
                    transform: 'translateX(-50%) rotate(45deg)', 
                    width: '16px', 
                    height: '16px', 
                    background: 'white', 
                    borderLeft: '1px solid rgba(0,0,0,0.08)', 
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                    zIndex: 999
                  }}></div>
                  <a href="tel:+919830540185" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--navy-blue)', fontSize: '0.95rem', fontWeight: '700', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <Phone size={14} color="var(--primary-green)" /> +91 9830540185
                  </a>
                  <a href="mailto:bengalnexusexports@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', wordBreak: 'break-all', transition: 'color 0.2s' }}>
                    <Mail size={12} color="var(--primary-green)" /> bengalnexusexports@gmail.com
                  </a>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem', borderRadius: '30px', fontWeight: '600', marginLeft: '10px' }}>Request Quote</Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-menu"
            >
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.2rem', fontWeight: '600', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Home</NavLink>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.2rem', fontWeight: '600', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>About Us</NavLink>
              <NavLink to="/products" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.2rem', fontWeight: '600', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Products</NavLink>
              <NavLink to="/handicrafts" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.2rem', fontWeight: '600', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Handicrafts</NavLink>
              
              {/* Show mobile number underneath Contact directly in the mobile menu */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.2rem', fontWeight: '600' }}>Contact</NavLink>
                <a href="tel:+919830540185" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', paddingLeft: '5px', paddingTop: '5px' }}>
                  <Phone size={14} color="var(--primary-green)" /> +91 9830540185
                </a>
              </div>
              
              <Link to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '10px', textAlign: 'center' }}>Request Quote</Link>
              
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={16} color="var(--primary-green)" /> +91 9830540185</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} color="var(--primary-green)" /> bengalnexusexports@gmail.com</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
