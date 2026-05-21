import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ShieldCheck, Box, Anchor, FileText } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

// Mock Database for product details
const productDB = {
  "fresh-potatoes": {
    name: "Premium Fresh Potatoes",
    tagline: "High-grade Indian potatoes sorted for universal culinary excellence.",
    image: "/assets/fresh_potatoes.png",
    description: "Our export-grade fresh potatoes are cultivated in the most fertile regions of India. We employ strict grading parameters to ensure uniform size, smooth skin, and low moisture content, making them ideal for long sea transit and extended shelf life.",
    specs: {
      variety: "Jyoti / Pukhraj / LR",
      size: "45mm+ / 55mm+",
      quality: "Sortex Cleaned, A-Grade",
      origin: "West Bengal / UP, India",
      shelfLife: "60 Days from loading"
    },
    packaging: ["10kg / 25kg / 50kg Mesh Bags", "Jute Bags", "Custom Branded Packaging"],
    moq: "As per buyer requirement",
    port: "Kolkata / Haldia"
  },
  "red-onions": {
    name: "Indian Red Onions",
    tagline: "Richly flavored, low-moisture red onions for global markets.",
    image: "/assets/red_onions.png",
    description: "Sourced directly from the rich soils of Nasik and Bengal, our Red Onions are famous for their strong pungency and vibrant color. Cured perfectly to ensure zero sprouting during transit.",
    specs: {
      variety: "Nasik Red / Agrifound Light Red",
      size: "40mm to 60mm+",
      quality: "A-Grade, Machine Sorted",
      origin: "Maharashtra / Bengal, India",
      shelfLife: "3-4 Months under optimum conditions"
    },
    packaging: ["5kg / 10kg / 25kg Mesh Bags", "Jute Bags"],
    moq: "As per buyer requirement",
    port: "Kolkata / Haldia"
  },
  "basmati-rice": {
    name: "Premium Basmati Rice",
    tagline: "Extra-long grain, highly aromatic authentic Indian Basmati.",
    image: "/assets/basmati_rice.png",
    description: "Aged to perfection, our 1121 Basmati Rice is the pinnacle of Indian rice exports. Known for its extraordinary length after cooking and sweet aroma, it is the preferred choice for premium restaurants and retail brands worldwide.",
    specs: {
      variety: "1121 Steam / Sella Basmati",
      averageLength: "8.35mm",
      moisture: "12% Max",
      broken: "1% Max",
      origin: "Punjab / Haryana, India"
    },
    packaging: ["5kg / 10kg / 25kg Non-Woven Bags", "PP Bags", "Vacuum Packs"],
    moq: "As per buyer requirement",
    port: "Kolkata / Haldia"
  },
  "bengal-handicraft": {
    name: "Authentic Bengal Handicrafts",
    tagline: "Exquisite eco-friendly jute and artisanal crafts from the heart of Bengal.",
    image: "https://images.unsplash.com/photo-1623864770284-9118c7bc772a?auto=format&fit=crop&w=800&q=80",
    description: "Discover the rich cultural heritage of West Bengal through our premium selection of handcrafted items. We specialize in eco-friendly Jute bags, intricate terracotta items, and Dokra art, expertly crafted by rural artisans and ready for global retail distribution.",
    specs: {
      category: "Jute Bags, Terracotta, Dokra Art",
      material: "100% Eco-Friendly & Sustainable",
      quality: "Export Quality, Handcrafted",
      origin: "West Bengal, India",
      customization: "Available for Bulk Orders"
    },
    packaging: ["Export Standard Carton Boxes", "Moisture-proof Wrapping", "Individual Retail Packaging Available"],
    moq: "As per buyer requirement",
    port: "Kolkata / Haldia"
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productDB[id] || productDB["fresh-potatoes"]; // Fallback for demo

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants}
      style={{ paddingTop: '130px', paddingBottom: '80px', background: 'var(--bg-offwhite)' }}
    >
      <div className="container">
        <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '30px', fontWeight: '500' }}>
          <ArrowLeft size={18} /> Back to Catalog
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
          >
            <div style={{ width: '100%', height: '100%', minHeight: '400px', borderRadius: '16px', overflow: 'hidden', background: '#f5f5f5' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(212, 175, 55, 0.1)', color: '#B8860B', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '15px' }}>
              Export Quality Verified
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy-blue)', marginBottom: '10px', lineHeight: '1.1' }}>{product.name}</h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--primary-green)', fontWeight: '500', marginBottom: '25px' }}>{product.tagline}</p>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
              {product.description}
            </p>

            {/* Quick Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div style={{ background: 'var(--bg-white)', padding: '20px', borderRadius: '15px', border: '1px solid var(--border-color)', display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Anchor size={28} color="var(--primary-green)" />
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Loading Port</div>
                  <div style={{ fontWeight: '600', color: 'var(--navy-blue)' }}>{product.port}</div>
                </div>
              </div>
              <div style={{ background: 'var(--bg-white)', padding: '20px', borderRadius: '15px', border: '1px solid var(--border-color)', display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Box size={28} color="var(--primary-green)" />
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>MOQ</div>
                  <div style={{ fontWeight: '600', color: 'var(--navy-blue)' }}>{product.moq}</div>
                </div>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}>
              Request FOB / CIF Quotation
            </Link>
          </motion.div>
        </div>

        {/* Detailed Specs Tab */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: 'var(--bg-white)', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}><FileText color="var(--accent-gold)" /> Technical Specifications</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ textTransform: 'capitalize', color: 'var(--text-muted)', fontWeight: '500' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span style={{ fontWeight: '600', color: 'var(--navy-blue)', textAlign: 'right', flex: 1, minWidth: '150px' }}>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ background: 'var(--navy-blue)', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '24px', color: 'white', boxShadow: '0 20px 40px rgba(0,21,41,0.2)' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck color="var(--primary-green)" /> Packaging Options</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {product.packaging.map((pack, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem' }}>
                  <CheckCircle size={20} color="var(--primary-green)" style={{ flexShrink: 0 }} /> {pack}
                </li>
              ))}
            </ul>
            
            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px' }}>Custom Buyer Instructions</h4>
              <p style={{ color: '#A0AAB2', fontSize: '0.95rem' }}>We offer complete customization of packaging materials including private labeling, logo printing, and specific configurations per buyer instructions.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
