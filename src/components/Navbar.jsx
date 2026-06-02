import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

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
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setShowContactDropdown(true)}
              onMouseLeave={() => setShowContactDropdown(false)}
            >
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setShowContactDropdown(!showContactDropdown);
                }}
              >
                Contact
              </NavLink>
              
              <AnimatePresence>
                {showContactDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: '50%',
                      transform: 'translateX(50%)',
                      background: 'white',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      borderRadius: '12px',
                      padding: '20px',
                      minWidth: '240px',
                      zIndex: 1000,
                      marginTop: '15px',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Direct Phone</span>
                      <a href="tel:+919830540185" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--navy-blue)', fontSize: '1.05rem', fontWeight: '800', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'} onMouseLeave={(e) => e.target.style.color = 'var(--navy-blue)'}>
                        <Phone size={16} color="var(--primary-green)" /> +91 9830540185
                      </a>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</span>
                      <a href="mailto:bengalnexusexports@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--navy-blue)', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'} onMouseLeave={(e) => e.target.style.color = 'var(--navy-blue)'}>
                        <Mail size={14} color="var(--primary-green)" /> bengalnexusexports@gmail.com
                      </a>
                    </div>
                    
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
                      <Link 
                        to="/contact" 
                        onClick={() => setShowContactDropdown(false)}
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '8px 12px',
                          background: 'var(--navy-blue)',
                          color: 'white',
                          borderRadius: '8px',
                          fontSize: '0.85rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                        Inquiry Form
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #eee', paddingBottom: isMobileContactOpen ? '15px' : '10px' }}>
                <div 
                  onClick={() => setIsMobileContactOpen(!isMobileContactOpen)} 
                  style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '600', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'var(--navy-blue)'
                  }}
                >
                  <span>Contact</span>
                  <span style={{ fontSize: '0.8rem', transform: isMobileContactOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
                </div>
                
                <AnimatePresence>
                  {isMobileContactOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ 
                        overflow: 'hidden', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '12px', 
                        paddingTop: '15px', 
                        paddingLeft: '10px'
                      }}
                    >
                      <a href="tel:+919830540185" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: '700' }}>
                        <Phone size={16} color="var(--primary-green)" /> +91 9830540185
                      </a>
                      <a href="mailto:bengalnexusexports@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                        <Mail size={14} color="var(--primary-green)" /> bengalnexusexports@gmail.com
                      </a>
                      <Link 
                        to="/contact" 
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileContactOpen(false);
                        }}
                        style={{ 
                          color: 'var(--accent-gold)', 
                          fontSize: '0.9rem', 
                          fontWeight: '600',
                          textDecoration: 'underline'
                        }}
                      >
                        Go to Contact Page / Send Inquiry
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
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
