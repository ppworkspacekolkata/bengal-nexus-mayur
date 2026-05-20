import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, PenTool, Gem } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

export default function Handicrafts() {
  const [imageStates, setImageStates] = React.useState(
    Array.from({ length: 20 }, (_, i) => ({
      index: i + 1,
      ext: 'jpeg',
      failed: false
    }))
  );
  
  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const visibleImages = imageStates.filter(img => !img.failed);

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
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px', width: '100%' }}>The Collection Showcase</h2>
        
        {visibleImages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '24px', color: 'var(--text-muted)' }}>
            No gallery images found in public/assets/gallery/nexun/.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {visibleImages.map((img, idx) => {
              const src = `/assets/gallery/nexun/${img.index}.${img.ext}`;
              const title = getGalleryItemTitle(img.index);
              const desc = getGalleryItemDesc(img.index);
              
              return (
                <motion.div 
                  key={img.index}
                  className="gallery-card"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -12, scale: 1.01, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (idx % 3) * 0.1, type: 'spring', stiffness: 100, damping: 20 }}
                  style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', cursor: 'pointer', display: 'flex', flexDirection: 'column', border: '1px solid var(--border-color)' }}
                  onClick={() => setSelectedImage(src)}
                >
                  <div style={{ height: '280px', width: '100%', position: 'relative', overflow: 'hidden', background: '#f8f9fa' }}>
                    <img 
                      src={src} 
                      alt={title} 
                      onError={() => handleImageError(img.index)}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      className="gallery-img-hover"
                    />
                    {/* Hover Overlay */}
                    <div 
                      className="gallery-overlay"
                      style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17, 28, 39, 0.75) 0%, rgba(10, 92, 54, 0.2) 100%)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <div style={{ color: 'white', border: '1px solid white', padding: '10px 20px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        View Fullscreen
                      </div>
                    </div>
                    <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--navy-blue)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', zIndex: 2 }}>
                      #{img.index}
                    </div>
                  </div>
                  
                  <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'white' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-blue)', marginBottom: '12px', fontWeight: '800' }}>{title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: '80px', textAlign: 'center', background: 'var(--primary-green)', padding: '60px 20px', borderRadius: '30px', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '20px' }}>Looking for Custom Designs?</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 30px' }}>We offer white-labeling and custom dimensions for Jute bags and corporate gifting items.</p>
          <Link to="/contact" className="btn btn-gold" style={{ padding: '15px 35px', fontSize: '1.1rem' }}>Contact Our Specialists</Link>
        </div>

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
    </motion.div>
  );
}

const getGalleryItemTitle = (index) => {
  const titles = {
    1: "Premium Eco Jute Bags",
    2: "Quality Grading & Sorting",
    3: "Terracotta Handcrafted Pottery",
    4: "Kolkata Heritage Landmark",
    5: "Traditional Weaving Craft",
    6: "Organic Produce Selection",
    7: "Rigorous Export Sourcing",
    8: "Dokra Metal Artistry",
    9: "Custom Branding & Designing",
    10: "Seamless Export Shipping",
    11: "Artisan Wood Carvings",
    12: "Eco-Friendly Fiber Weaving",
    13: "Clay Model Sculpture",
    14: "Kantha Stitch Textile Art",
    15: "Natural Materials Display",
    16: "Handicrafts Quality Check",
    17: "Global Logistical Packing"
  };
  return titles[index] || `Bengal Heritage Collection #${index}`;
};

const getGalleryItemDesc = (index) => {
  const descs = {
    1: "Highly durable, eco-friendly jute bags custom manufactured for global retail.",
    2: "Our skilled workforce inspects and grades each batch before packaging.",
    3: "Clay craft sculpture preserved for generations in the heart of rural Bengal.",
    4: "Victoria Memorial at golden hour, celebrating our deep Kolkata roots.",
    5: "Interwoven cotton and silk threads showing exquisite tribal textures.",
    6: "Freshly harvested premium agricultural crops prepared for custom export.",
    7: "Inspecting crop grains to meet FSSAI and international quality criteria.",
    8: "Unique lost-wax metal casting artifacts hand-molded by local artisans.",
    9: "We offer tailored custom printing, labeling and size customizations.",
    10: "Safe container stuffing and loading operations for sea freight shipping.",
    11: "Intricate wooden designs carved by master regional carpenters.",
    12: "Organic fibers prepared and sorted for stitching eco-friendly bags.",
    13: "Traditional clay models sculpted by KUMARTULI master craftsmen.",
    14: "Delicate needlework patterns detailing rich cultural stories.",
    15: "Sourcing premium organic fibers directly from regional farmers.",
    16: "Comprehensive final inspection ensuring zero-defect export consignments.",
    17: "Shock-proof shipping packages destined for global international harbors."
  };
  return descs[index] || "Export-grade premium handicrafts and commodities sourced directly from rural Bengal.";
};
