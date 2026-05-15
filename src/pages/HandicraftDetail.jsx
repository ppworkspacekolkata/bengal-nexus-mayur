import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ShieldCheck, Box, Anchor, FileText } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

// Mock Database for Handicraft details
const handicraftDB = {
  "jute-bags": {
    name: "Premium Jute Bags",
    tagline: "Eco-friendly, highly durable jute bags perfect for global retail and promotional use.",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80",
    description: "Sourced directly from the finest jute mills in West Bengal, our premium jute bags represent the pinnacle of sustainable fashion and utility. We offer complete customization including brand logo printing, specific dimensions, and colored dyes, making them ideal for supermarket chains, eco-boutiques, and corporate gifting.",
    specs: {
      material: "100% Natural Golden Jute Fiber",
      durability: "High Load Capacity (up to 15kg)",
      customization: "Screen Printing & Embroidery Available",
      origin: "Kolkata, West Bengal, India",
      certification: "Biodegradable & Eco-Friendly"
    },
    packaging: ["50-100 pcs per Export Carton", "Moisture-proof inner poly liner", "Custom Retail Tags Available"],
    moq: "1000 Pieces",
    port: "Kolkata / Haldia"
  },
  "terracotta": {
    name: "Terracotta Art & Pottery",
    tagline: "Traditional Bankura horse sculptures and intricate clay pottery.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted by generations of master artisans in Bankura, our Terracotta collection is a true reflection of Bengal's rich cultural heritage. Each piece is meticulously molded from riverbed clay and sun-baked to achieve its signature reddish-brown hue. Perfect for high-end home decor retailers and cultural boutiques.",
    specs: {
      material: "Natural Riverbed Clay",
      craftsmanship: "100% Hand-molded and baked",
      variants: "Bankura Horses, Vases, Wall Hangings",
      origin: "Bankura, West Bengal, India",
      finish: "Natural Matte Red/Brown"
    },
    packaging: ["Individual Bubble Wrap", "Thermocol / Styrofoam custom casing", "Heavy-duty Wooden Crates for Bulk"],
    moq: "100 Pieces (Mixed designs allowed)",
    port: "Kolkata / Haldia"
  },
  "dokra-art": {
    name: "Dokra Metal Craft",
    tagline: "Ancient non-ferrous metal casting using the lost-wax technique.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
    description: "Dokra is an ancient Indian metallurgical art form that dates back over 4000 years. Using the intricate lost-wax casting technique, our artisans create exquisite non-ferrous metal sculptures, figurines, and jewelry. These premium antique-finish items are highly sought after in international luxury decor markets.",
    specs: {
      material: "Brass / Bronze Alloy",
      technique: "Traditional Lost-Wax Casting",
      uniqueness: "Every piece is a unique mold",
      origin: "Burdwan, West Bengal, India",
      finish: "Antique / Rustic Gold"
    },
    packaging: ["Soft tissue wrapping", "Individual gift boxes", "Export-grade Master Cartons"],
    moq: "50 Pieces",
    port: "Kolkata / Haldia"
  },
  "kantha-stitch": {
    name: "Kantha Stitch Textiles",
    tagline: "Beautifully hand-embroidered textiles featuring traditional Kantha patterns.",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    description: "Kantha is a traditional embroidery style native to Bengal, characterized by intricate running stitches that create stunning geometric and floral motifs. We export premium Kantha stitched silk scarves, cotton throws, and bedspreads. Each item is a labor of love, taking weeks to complete by skilled rural women artisans.",
    specs: {
      material: "Pure Silk / 100% Cotton",
      embroidery: "Hand-stitched Kantha technique",
      products: "Scarves, Throws, Bedspreads, Jackets",
      origin: "Bolpur/Shantiniketan, West Bengal",
      care: "Dry Clean / Gentle Hand Wash"
    },
    packaging: ["Individual Polybags", "Premium Brand Boxes available", "Waterproof Export Cartons"],
    moq: "100 Pieces",
    port: "Kolkata / Mumbai"
  }
};

export default function HandicraftDetail() {
  const { id } = useParams();
  const product = handicraftDB[id] || handicraftDB["jute-bags"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants}
      style={{ paddingTop: '130px', paddingBottom: '80px', background: 'var(--bg-offwhite)' }}
    >
      <div className="container">
        <Link to="/handicrafts" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '30px', fontWeight: '600' }}>
          <ArrowLeft size={18} /> Back to Artisan Collection
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}
            style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', cursor: 'pointer' }}
          >
            <div style={{ width: '100%', height: '100%', minHeight: '400px', borderRadius: '16px', overflow: 'hidden', background: '#f5f5f5' }}>
              <motion.img 
                animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(242, 101, 34, 0.1)', color: 'var(--accent-gold)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '15px' }}>
              Authentic Handicraft
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy-blue)', marginBottom: '10px', lineHeight: '1.1', fontWeight: '800' }}>{product.name}</h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--primary-green)', fontWeight: '600', marginBottom: '25px' }}>{product.tagline}</p>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
              {product.description}
            </p>

            {/* Quick Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <motion.div whileHover={{ y: -5 }} style={{ background: 'var(--bg-white)', padding: '20px', borderRadius: '15px', border: '1px solid var(--border-color)', display: 'flex', gap: '15px', alignItems: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                <Anchor size={28} color="var(--primary-green)" />
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Loading Port</div>
                  <div style={{ fontWeight: '700', color: 'var(--navy-blue)' }}>{product.port}</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} style={{ background: 'var(--bg-white)', padding: '20px', borderRadius: '15px', border: '1px solid var(--border-color)', display: 'flex', gap: '15px', alignItems: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                <Box size={28} color="var(--primary-green)" />
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>MOQ</div>
                  <div style={{ fontWeight: '700', color: 'var(--navy-blue)' }}>{product.moq}</div>
                </div>
              </motion.div>
            </div>

            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}>
              Request Bulk / Custom Quotation
            </Link>
          </motion.div>
        </div>

        {/* Detailed Specs Tab */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ boxShadow: '0 20px 50px rgba(0,0,0,0.06)' }} transition={{ duration: 0.5 }}
            style={{ background: 'var(--bg-white)', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--navy-blue)' }}><FileText color="var(--accent-gold)" /> Product Specifications</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {Object.entries(product.specs).map(([key, value], i) => (
                <motion.li 
                  key={key} 
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '10px' }}
                >
                  <span style={{ textTransform: 'capitalize', color: 'var(--text-muted)', fontWeight: '600' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span style={{ fontWeight: '700', color: 'var(--navy-blue)', textAlign: 'right', flex: 1, minWidth: '150px' }}>{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(10, 50, 122, 0.4)' }}
            style={{ background: 'var(--navy-blue)', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '24px', color: 'white', boxShadow: '0 20px 40px rgba(10, 50, 122, 0.3)' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck color="var(--accent-gold)" /> Export Packaging</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {product.packaging.map((pack, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + (i * 0.1) }}
                  style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', fontWeight: '500' }}
                >
                  <CheckCircle size={20} color="var(--primary-green)" style={{ flexShrink: 0 }} /> {pack}
                </motion.li>
              ))}
            </ul>
            
            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px' }}>White-Label Customization</h4>
              <p style={{ color: '#E5E7EB', fontSize: '0.95rem', lineHeight: '1.6' }}>We provide comprehensive white-labeling services for retail brands, including custom tags, logo printing, and specialized eco-friendly retail packaging.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
