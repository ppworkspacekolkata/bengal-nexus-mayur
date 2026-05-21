import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const products = [
  { id: "fresh-potatoes", name: "Fresh Potatoes", image: "/assets/fresh_potatoes.png", desc: "Premium export-quality Indian potatoes, ideal for all culinary uses." },
  { id: "red-onions", name: "Red Onions", image: "/assets/red_onions.png", desc: "Richly flavored red onions with long shelf life, perfect for export." },
  { id: "basmati-rice", name: "Basmati Rice", image: "/assets/basmati_rice.png", desc: "Long-grain, aromatic basmati rice known for its premium quality." }
  //{ id: "bengal-handicraft", name: "Bengal Handicraft", image: "https://images.unsplash.com/photo-1623864770284-9118c7bc772a?auto=format&fit=crop&w=600&q=80", desc: "Eco-friendly jute bags and authentic artisanal crafts from Bengal." }
];

export default function Products() {
  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants}
      style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--bg-offwhite)', overflow: 'hidden' }}
    >
      <div className="container">
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
          style={{ position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(27, 128, 57, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(242, 101, 34, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}
        />

        <div className="text-center" style={{ marginBottom: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(242, 101, 34, 0.1)', color: 'var(--accent-gold)', borderRadius: '30px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}
          >
            <Star size={16} fill="var(--accent-gold)" /> Global Catalog
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--navy-blue)', marginTop: '10px', fontWeight: '800' }}
          >
            Export Commodities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '20px auto 0' }}
          >
            Select a product to view detailed USA-standard export specifications, custom packaging options, and MOQs.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', position: 'relative', zIndex: 1 }}>
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -15, scale: 1.02, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 100, damping: 20 }}
              style={{ background: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid rgba(0,0,0,0.02)', cursor: 'pointer' }}
            >
              {/* Floating Product Image Area */}
              <div style={{ height: '320px', width: '100%', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                <motion.img 
                  src={product.image} 
                  alt={product.name} 
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ repeat: Infinity, duration: 4 + (index * 0.5), ease: "easeInOut" }}
                  style={{ width: '95%', height: '95%', objectFit: 'contain', filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.2))' }} 
                />
              </div>
              
              <div style={{ padding: '35px', display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'white', position: 'relative' }}>
                <h3 style={{ color: 'var(--navy-blue)', fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>{product.name}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.7', flexGrow: 1 }}>{product.desc}</p>
                <Link 
                  to={product.id === "bengal-handicraft" ? "/handicrafts" : `/product/${product.id}`} 
                  className="btn btn-outline" 
                  style={{ width: '100%', padding: '16px', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600', borderColor: 'var(--border-color)' }}
                >
                  View Specifications 
                  <motion.div whileHover={{ x: 5 }}><ArrowRight size={20} color="var(--primary-green)" /></motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
