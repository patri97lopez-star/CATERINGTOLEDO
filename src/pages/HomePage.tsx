import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import InstagramModal from '../components/InstagramModal';

export default function HomePage() {
  const { language, setLanguage, t } = useLanguage();
  const [isInstaOpen, setIsInstaOpen] = useState(false);
  const [bgImage, setBgImage] = useState(
    "https://drive.google.com/thumbnail?id=1vnNL1qsRETnc0_FXhN3EPuAWORZF1JL1&sz=w3840"
  );

  return (
    <main 
      id="home-page-container" 
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center font-sans"
    >
      <InstagramModal isOpen={isInstaOpen} onClose={() => setIsInstaOpen(false)} />

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Catering Toledo - Arte y Gastronomía" 
          className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-[4000ms] scale-100 hover:scale-105"
          referrerPolicy="no-referrer"
          onError={() => {
            // Fallback to high-quality Unsplash image in case of Drive connection delay
            setBgImage("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80");
          }}
        />
        {/* Deep, luxurious vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60"></div>
      </div>

      {/* Embedded Language Switcher & Instagram Indicator */}
      <div className="absolute top-8 right-8 z-50 flex items-center gap-6">
        <button 
          onClick={() => setIsInstaOpen(true)}
          className="text-white/60 hover:text-white transition-colors duration-300"
          title="Ver Instagram"
        >
          <Instagram size={18} />
        </button>

        <div className="flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold border-l border-white/20 pl-6">
          <button 
            onClick={() => setLanguage('ES')}
            className={`${language === 'ES' ? 'text-white' : 'text-white/40 hover:text-white'} transition-colors duration-300`}
          >
            ES
          </button>
          <span className="text-white/20">|</span>
          <button 
            onClick={() => setLanguage('EN')}
            className={`${language === 'EN' ? 'text-white' : 'text-white/40 hover:text-white'} transition-colors duration-300`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Main Premium Invitation Card / Content Panel */}
      <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center justify-end h-full pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Big Portal CTA Button */}
          <Link 
            to="/catering-toledo" 
            className="group relative inline-flex items-center gap-4 text-white text-[11px] font-bold uppercase tracking-[0.34em] border border-white/30 hover:border-[var(--color-oro-viejo)]/80 px-12 py-5 overflow-hidden transition-all duration-700 bg-white/5 hover:bg-[var(--color-primary)] rounded-full backdrop-blur-md shadow-2xl hover:shadow-[var(--color-oro-viejo)]/10 text-center"
          >
            {/* Ambient hover glowing circle inside the button */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#8a4d7d]/10 to-[var(--color-oro-viejo)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            
            <span className="relative z-10 flex items-center gap-3">
              {language === 'ES' ? 'DESCUBRIR CATERING TOLEDO' : 'DISCOVER CATERING TOLEDO'}
              <ArrowRight className="w-4 h-4 text-[var(--color-oro-viejo)] group-hover:translate-x-1.5 transition-transform duration-500" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Signature Footer */}
      <div className="absolute bottom-6 left-0 w-full z-20 px-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-[9px] tracking-[0.4em] uppercase font-bold text-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span>© 2026 Catering Toledo</span>
          <span className="text-white/30">{language === 'ES' ? 'Creado por:' : 'Created by:'} Patricia</span>
        </div>
        <div className="hidden md:flex gap-8">
          <span>{language === 'ES' ? 'ALTA GASTRONOMÍA' : 'HAUTE CUISINE'}</span>
          <span>TOLEDO • MADRID • ESPAÑA</span>
        </div>
      </div>
    </main>
  );
}
