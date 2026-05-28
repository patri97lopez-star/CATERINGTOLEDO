import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import InstagramModal from './InstagramModal';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isInstaOpen, setIsInstaOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-10 py-8 border-b border-[var(--color-borde-sutil)] bg-white bg-opacity-95 relative z-50">
      <InstagramModal isOpen={isInstaOpen} onClose={() => setIsInstaOpen(false)} />
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[#9B8133] transition-colors">
          <ArrowLeft size={16} />
          Grupo Aquiles
        </Link>
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-carbon-profundo)]">
          <Link to="/catering-toledo" className="hover:text-[#9B8133] transition-colors">Catering</Link>
          <a href="/catering-toledo#eventos" className="hover:text-[#9B8133] transition-colors">Eventos</a>
          <Link to="/particulares" className="hover:text-[#9B8133] transition-colors">Particulares</Link>
          <Link to="/grupo" className="hover:text-[#9B8133] transition-colors">Grupo</Link>
          <Link to="/contacto" className="hover:text-[#9B8133] transition-colors">{t('contact_title')}</Link>
          <Link to="/lola-de-espana" className="hover:text-[#9B8133] transition-colors">{t('lola_de_espana')}</Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => setIsInstaOpen(true)}
          className="text-gray-400 hover:text-[#9B8133] transition-colors"
        >
          <Instagram size={18} />
        </button>

        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-l border-r border-gray-100 px-6 mx-2">
          <button 
            onClick={() => setLanguage('ES')}
            className={`${language === 'ES' ? 'text-[#9B8133]' : 'text-gray-400 hover:text-[#9B8133]'}`}
          >
            ES
          </button>
          <span className="text-gray-300">|</span>
          <button 
            onClick={() => setLanguage('EN')}
            className={`${language === 'EN' ? 'text-[#9B8133]' : 'text-gray-400 hover:text-[#9B8133]'}`}
          >
            EN
          </button>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#652d5b] font-bold mb-1">Catering</span>
          <span className="text-2xl md:text-3xl font-serif text-[#404040] italic" style={{ fontFamily: 'Playfair Display, serif' }}>Toledo</span>
        </div>
      </div>

      {/* Mobile nav placeholder */}
      <div className="md:hidden flex w-full justify-between items-center">
        <button className="text-[var(--color-carbon-profundo)] uppercase tracking-widest text-sm mx-auto">Menú</button>
      </div>
    </nav>
  );
}
