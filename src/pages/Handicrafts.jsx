import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, PenTool, Gem } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const handicrafts = [
  {
    id: "jute-bags",
    name: "Premium Jute Bags",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80",
    desc: "Eco-friendly, highly durable jute bags perfect for retail, grocery, and promotional use. Customizable with brand logos.",
    features: ["100% Biodegradable", "Custom Logo Printing", "High Load Capacity"]
  },
  {
    id: "terracotta",
    name: "Terracotta Art & Pottery",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    desc: "Traditional Bankura horse sculptures and intricate clay pottery, handcrafted by generations of Bengal artisans.",
    features: ["Authentic Craftsmanship", "Cultural Heritage", "Safe Export Packaging"]
  },
  {
    id: "dokra-art",
    name: "Dokra Metal Craft",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
    desc: "Ancient non-ferrous metal casting using the lost-wax technique. Exquisite home decor and jewelry pieces.",
    features: ["Unique Lost-Wax Method", "Antique Finish", "Premium Decor"]
  },
  {
    id: "kantha-stitch",
    name: "Kantha Stitch Textiles",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    desc: "Beautifully hand-embroidered textiles, scarves, and throws featuring traditional Kantha patterns.",
    features: ["Hand Embroidered", "Premium Silk/Cotton", "Vibrant Patterns"]
  }
];

export default function Handicrafts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants}
      style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--bg-offwhite)' }}
    >
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', background: 'var(--navy-blue)', padding: '60px 20px', borderRadius: '30px', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), transparent)', filter: 'blur(30px)' }}></div>
          
          <span style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>Bengal Artisans Collection</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginTop: '15px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Authentic Handicrafts</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            Bringing the rich cultural heritage and exquisite craftsmanship of West Bengal's artisans to the global market. Ideal for boutiques, home decor retailers, and eco-conscious brands.
          </p>
        </div>

        {/* Why Bengal Handicrafts Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <Leaf size={40} color="var(--primary-green)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--navy-blue)' }}>Eco-Friendly & Sustainable</h3>
            <p style={{ color: 'var(--text-muted)' }}>Our jute and terracotta products are 100% natural, biodegradable, and support sustainable living practices globally.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <PenTool size={40} color="var(--primary-green)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--navy-blue)' }}>Master Craftsmanship</h3>
            <p style={{ color: 'var(--text-muted)' }}>Each piece is meticulously handcrafted by skilled artisans who have preserved these ancient techniques for generations.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <Gem size={40} color="var(--primary-green)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--navy-blue)' }}>Export Ready Packaging</h3>
            <p style={{ color: 'var(--text-muted)' }}>We utilize specialized moisture-proof and shock-absorbent packaging to ensure fragile handicrafts arrive in perfect condition.</p>
          </motion.div>
        </div>

        {/* Product Catalog */}
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px', width: '100%' }}>The Collection</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {handicrafts.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -15, scale: 1.02, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100, damping: 20 }}
              style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', cursor: 'pointer' }}
            >
              <div style={{ height: '320px', width: '100%', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
                <motion.img 
                  src={item.image} 
                  alt={item.name} 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4 + (index * 0.5), ease: "easeInOut" }}
                  style={{ width: '90%', height: '90%', objectFit: 'cover', borderRadius: '15px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }} 
                />
              </div>
              <div style={{ padding: '35px', display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'white' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--navy-blue)', marginBottom: '15px', fontWeight: '700' }}>{item.name}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '25px', lineHeight: '1.7', flexGrow: 1 }}>{item.desc}</p>
                
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                  {item.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }}></div>
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <Link to={`/handicraft/${item.id}`} className="btn btn-outline" style={{ width: '100%', padding: '16px', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600', borderColor: 'var(--border-color)' }}>
                  View Specifications <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '80px', textAlign: 'center', background: 'var(--primary-green)', padding: '60px 20px', borderRadius: '30px', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '20px' }}>Looking for Custom Designs?</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 30px' }}>We offer white-labeling and custom dimensions for Jute bags and corporate gifting items.</p>
          <Link to="/contact" className="btn btn-gold" style={{ padding: '15px 35px', fontSize: '1.1rem' }}>Contact Our Specialists</Link>
        </div>

      </div>
    </motion.div>
  );
}
