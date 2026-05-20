import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Truck, ArrowRight, Globe, CheckCircle, BarChart3, Star } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <motion.div 
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      className="page-transition-wrapper"
    >
      {/* 3D Hero Section */}
      <section className="hero-3d" style={{ paddingTop: '120px', display: 'flex', alignItems: 'center' }}>
        <div className="container hero-content-wrapper">
          <div className="hero-grid">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            >
              <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(242, 101, 34, 0.1)', color: 'var(--accent-gold)', borderRadius: '30px', fontWeight: '700', marginBottom: '20px', fontSize: '0.9rem', border: '1px solid rgba(242, 101, 34, 0.2)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <Star size={14} fill="var(--accent-gold)" style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-top' }} /> GLOBAL AGRO EXPORTS
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: '1.1', fontWeight: '800' }}>
                Exporting <span style={{ color: 'var(--primary-green)' }}>Premium</span><br/> Indian Quality
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: 'var(--text-muted)', marginTop: '20px', marginBottom: '40px', maxWidth: '550px' }}>
                Bridging local roots with global markets. We supply export-grade agricultural commodities with an uncompromising commitment to quality, tracking, and timeline.
              </p>
              <div className="hero-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', marginTop: '30px', justifyContent: 'center' }}>
                <Link to="/products" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                  Explore Catalog <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-gold" style={{ padding: '16px 36px', fontSize: '1.1rem', background: 'var(--accent-gold)', color: 'white', border: 'none' }}>
                  Get Quote
                </Link>
              </div>
            </motion.div>

            {/* Animated Heritage Kolkata / Victoria Memorial Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              style={{ width: '100%', height: '500px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="hero-3d-visual"
            >
              {/* Floating Glowing Aura */}
              <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(229,184,52,0.15) 0%, rgba(10,92,54,0.05) 50%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }}></div>

              {/* Main Animated Photo Frame */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{
                  position: 'relative',
                  width: '90%',
                  maxWidth: '480px',
                  height: '360px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(17, 28, 39, 0.25), 0 0 40px rgba(229, 184, 52, 0.15)',
                  border: '2px solid rgba(229, 184, 52, 0.3)',
                  zIndex: 2
                }}
              >
                <img 
                  src="/assets/victoria_memorial.png" 
                  alt="Victoria Memorial Kolkata Heritage" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.02)' }} 
                />
                {/* Dark overlay for rich premium feel */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17, 28, 39, 0.5) 0%, transparent 60%)' }}></div>
                
                {/* Floating badge inside image */}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(17, 28, 39, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 18px', borderRadius: '30px', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#25D366', display: 'inline-block' }}></span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Kolkata Source Port</span>
                </div>
              </motion.div>

              {/* Decorative Floating Badges (Parallax depth effect) */}
              <motion.div 
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '15%',
                  right: '5%',
                  background: 'white',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderRadius: '16px',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 3,
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ background: 'rgba(229, 184, 52, 0.1)', color: 'var(--accent-gold)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>★</div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--navy-blue)', margin: 0, fontWeight: '800' }}>Heritage Quality</h4>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>Export Standard</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '5%',
                  background: 'var(--navy-blue)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 3,
                  border: '1px solid rgba(255,255,255,0.05)',
                  color: 'white'
                }}
              >
                <div style={{ background: 'rgba(10, 92, 54, 0.2)', color: 'var(--primary-green)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'white', margin: 0, fontWeight: '800' }}>100% Reliable</h4>
                  <p style={{ fontSize: '0.7rem', color: '#A0AAB2', margin: 0 }}>Assured Logistics</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'var(--navy-blue)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll Down</span>
          <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, var(--navy-blue), transparent)' }}></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section style={{ background: 'var(--navy-blue)', color: 'white', padding: '60px 0', borderBottom: '5px solid var(--accent-gold)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '40px', textAlign: 'center' }}>
            {[
              { num: "100%", label: "Quality Assurance", icon: <ShieldCheck size={32} color="var(--accent-gold)" /> },
              { num: "50+", label: "Farming Partners", icon: <Leaf size={32} color="var(--accent-gold)" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring' }}>{stat.icon}</motion.div>
                <h3 style={{ fontSize: '3.5rem', color: 'white', margin: 0, fontWeight: '800' }}>{stat.num}</h3>
                <p style={{ color: '#A0AAB2', fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bengal Nexus Advantage */}
      <section className="section section-bg pt-120 pb-120" style={{ position: 'relative' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center" style={{ marginBottom: '80px' }}
          >
            <span style={{ color: 'var(--primary-green)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Why Choose Us</span>
            <h2 className="section-title" style={{ marginTop: '10px' }}>The Global Standard</h2>
            <p className="section-subtitle">We don't just export products; we deliver reliability, transparency, and top-tier Indian agricultural excellence to your doorstep.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="features-grid"
          >
            <motion.div variants={itemVariant} className="feature-card-modern" style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px' }}>
              <div className="feature-icon-modern" style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))' }}><Leaf size={32} /></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--navy-blue)' }}>Direct Sourcing</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>We procure goods directly from farmers and established co-ops, ensuring maximum freshness, traceability, and highly competitive pricing for our global buyers.</p>
            </motion.div>
            
            <motion.div variants={itemVariant} className="feature-card-modern" style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px' }}>
              <div className="feature-icon-modern" style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--navy-blue-light))' }}><ShieldCheck size={32} /></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--navy-blue)' }}>Rigorous Quality</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>Our sorting processes utilize advanced technology to meet strict international standards like FSSAI. Every container is inspected before dispatch.</p>
            </motion.div>
            
            <motion.div variants={itemVariant} className="feature-card-modern" style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px' }}>
              <div className="feature-icon-modern" style={{ background: 'linear-gradient(135deg, var(--accent-gold), #FF8547)' }}><Truck size={32} color="white" /></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--navy-blue)' }}>Seamless Logistics</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>From customs clearance to container loading at major Indian ports, our logistics network ensures on-time global delivery without the hassle.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Floating UI */}
      <section className="section" style={{ background: 'var(--bg-offwhite)', padding: '100px 0', overflow: 'hidden' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}
          >
            <div>
              <span style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Catalog</span>
              <h2 className="section-title" style={{ marginTop: '10px' }}>Premium Commodities</h2>
            </div>
            <Link to="/products" className="btn btn-outline" style={{ borderRadius: '15px', padding: '14px 28px' }}>View Full Catalog <ArrowRight size={20} /></Link>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', position: 'relative', zIndex: 1 }}>
            {[
              { id: "fresh-potatoes", name: "Fresh Potatoes", image: "/assets/fresh_potatoes.jpg", desc: "Premium grade potatoes, carefully sorted for size and quality." },
              { id: "red-onions", name: "Red Onions", image: "/assets/red_onions.png", desc: "Rich flavor, low moisture red onions with long shelf life." },
              { id: "basmati-rice", name: "Basmati Rice", image: "/assets/basmati_rice.png", desc: "Extra long grain, highly aromatic premium Indian Basmati." }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15, type: 'spring', stiffness: 50 }}
                style={{ background: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid rgba(0,0,0,0.02)' }}
              >
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--navy-blue)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', zIndex: 2 }}>Top Export</div>
                
                {/* Floating Product Image Area */}
                <div style={{ height: '320px', width: '100%', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                  <motion.img 
                    src={prod.image} 
                    alt={prod.name} 
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ repeat: Infinity, duration: 4 + (i * 0.5), ease: "easeInOut" }}
                    style={{ width: '95%', height: '95%', objectFit: 'contain', filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.2))' }} 
                  />
                </div>
                
                <div style={{ padding: '35px', display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'white' }}>
                  <h3 style={{ color: 'var(--navy-blue)', fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>{prod.name}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.7', flexGrow: 1 }}>{prod.desc}</p>
                  <Link 
                    to={`/product/${prod.id}`} 
                    className="btn btn-outline" 
                    style={{ width: '100%', padding: '16px', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600', borderColor: 'var(--border-color)', color: 'var(--navy-blue)' }}
                  >
                    View Specifications 
                    <motion.div whileHover={{ x: 5 }}><ArrowRight size={20} color="var(--primary-green)" /></motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      {/* Export Process Timeline */}
      <section className="section section-bg pt-120 pb-120">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center" style={{ marginBottom: '80px' }}
          >
            <h2 className="section-title">How We Export</h2>
            <p className="section-subtitle">A transparent, streamlined process from Indian farms to your international warehouse.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', position: 'relative' }}>
            {[
              { step: "01", title: "Inquiry & Quote", desc: "Submit your requirements, and we provide a highly competitive quote." },
              { step: "02", title: "Sourcing & Sorting", desc: "We procure premium products directly and sort them to export-grade standards." },
              { step: "03", title: "Custom Packaging", desc: "Products are packed exactly to your brand or market specifications." },
              { step: "04", title: "Shipping & Delivery", desc: "We handle all customs and logistics, ensuring on-time vessel departure." }
            ].map((process, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                style={{ background: 'var(--bg-offwhite)', padding: '50px 30px', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid var(--border-color)' }}
              >
                <div style={{ position: 'absolute', top: '-15px', right: '-15px', fontSize: '9rem', fontWeight: '900', color: 'rgba(10, 50, 122, 0.04)', lineHeight: '1' }}>
                  {process.step}
                </div>
                <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'var(--navy-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700', marginBottom: '25px', boxShadow: '0 10px 20px rgba(10, 50, 122, 0.2)' }}>
                  {process.step}
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '15px', color: 'var(--navy-blue)', fontWeight: '700' }}>{process.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance Section */}
      <section className="section" style={{ background: 'var(--navy-blue)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Quality & Compliance</span>
            <h2 className="section-title" style={{ marginTop: '10px', color: 'white' }}>Global Export Standards</h2>
            <p style={{ color: '#A0AAB2', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>We adhere to the strictest international food safety and export regulations to ensure seamless customs clearance worldwide.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {[
              { name: "APEDA Certified", desc: "Registered with Agricultural and Processed Food Products Export Development Authority of India." },
              { name: "FSSAI Approved", desc: "Compliant with Food Safety and Standards Authority of India for all agricultural exports." },
              { name: "Phytosanitary Cleared", desc: "All shipments undergo strict phytosanitary checks to prevent pest propagation." }
            ].map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '30px', textAlign: 'center' }}
              >
                <div style={{ width: '60px', height: '60px', margin: '0 auto 20px', background: 'rgba(212, 175, 55, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={30} color="var(--accent-gold)" />
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>{cert.name}</h4>
                <p style={{ color: '#A0AAB2', fontSize: '0.9rem', lineHeight: '1.6' }}>{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function GallerySection() {
  const [imageStates, setImageStates] = React.useState(
    Array.from({ length: 20 }, (_, i) => ({
      index: i + 1,
      ext: 'jpeg',
      failed: false
    }))
  );
  
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageError = (index) => {
    setImageStates(prev => prev.map(img => {
      if (img.index === index) {
        if (img.ext === 'jpeg') {
          return { ...img, ext: 'jpg' };
        } else if (img.ext === 'jpg') {
          return { ...img, ext: 'png' };
        } else if (img.ext === 'png') {
          return { ...img, ext: 'webp' };
        } else {
          return { ...img, failed: true };
        }
      }
      return img;
    }));
  };

  const visibleImages = imageStates.filter(img => !img.failed).slice(0, 6);

  return (
    <section className="section" style={{ background: 'white', padding: '100px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: 'var(--primary-green)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Visual Showcase</span>
          <h2 className="section-title" style={{ marginTop: '10px' }}>Export Operations Gallery</h2>
          <p className="section-subtitle" style={{ margin: '15px auto 0', maxWidth: '600px' }}>
            A real-time glimpse of our premium quality agricultural produce, advanced sorting processes, and global logistics operations.
          </p>
        </div>

        {visibleImages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg-offwhite)', borderRadius: '24px', color: 'var(--text-muted)' }}>
            No gallery images found. Place images named 1, 2, 3, etc. in your public/assets/gallery/nexun/ folder.
          </div>
        ) : (
          <div className="gallery-grid">
            {visibleImages.map((img, idx) => {
              const src = `/assets/gallery/nexun/${img.index}.${img.ext}`;
              return (
                <motion.div
                  key={img.index}
                  className="gallery-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                  whileHover={{ y: -8 }}
                  style={{ cursor: 'pointer', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)', height: '260px', position: 'relative' }}
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Gallery Image ${img.index}`}
                    onError={() => handleImageError(img.index)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="gallery-img-hover"
                  />
                  {/* Hover Overlay */}
                  <div 
                    className="gallery-overlay"
                    style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17, 28, 39, 0.75) 0%, rgba(10, 92, 54, 0.2) 100%)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <div style={{ color: 'white', border: '1px solid white', padding: '10px 20px', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      View Fullscreen
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{ position: 'fixed', inset: 0, background: 'rgba(17, 28, 39, 0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            style={{ position: 'absolute', top: '30px', right: '30px', background: 'transparent', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer', outline: 'none' }}
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage} 
            alt="Gallery Fullscreen" 
            style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: '20px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', objectFit: 'contain', border: '2px solid rgba(255, 255, 255, 0.1)' }} 
          />
        </div>
      )}
    </section>
  );
}

