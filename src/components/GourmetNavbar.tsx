import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import InstagramModal from './InstagramModal';

export default function GourmetNavbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isInstaOpen, setIsInstaOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-[#e5e1d8] bg-[#fdfcf9] relative z-50">
      <InstagramModal isOpen={isInstaOpen} onClose={() => setIsInstaOpen(false)} />
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[#9B8133] transition-colors">
          <ArrowLeft size={16} />
          Grupo Aquiles
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-[#404040]">
           <a href="#regalos-y-lotes" className="hover:text-[#9B8133] transition-colors">{t('regalos_y_lotes')}</a>
           <Link to="/contacto" className="hover:text-[#9B8133] transition-colors">{t('contact_title')}</Link>
           <Link to="/lola-de-espana" className="hover:text-[#9B8133] transition-colors">{t('lola_de_espana')}</Link>
           <a href="#pedidos" className="bg-[#9B8133] text-white px-4 py-2 hover:bg-[#404040] transition-all">PEDIDOS</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => setIsInstaOpen(true)}
          className="text-gray-400 hover:text-[#9B8133] transition-colors"
        >
          <Instagram size={18} />
        </button>

        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-l border-r border-gray-200 px-6 mx-2">
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

        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group"
        >
          <ShoppingBag className="w-5 h-5 text-[#404040] group-hover:text-[#9B8133]" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-[#9B8133] text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>

        <div className="flex flex-col items-end">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B8133] font-bold mb-0.5">Aquiles</span>
          <span className="text-xl md:text-2xl font-serif text-[#404040] italic" style={{ fontFamily: 'Playfair Display, serif' }}>Gourmet</span>
        </div>
      </div>
    </nav>
  );
}
