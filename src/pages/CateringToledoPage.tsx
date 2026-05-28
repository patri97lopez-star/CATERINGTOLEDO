import { motion } from 'motion/react';
import { ArrowLeft, Instagram } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import InstagramModal from '../components/InstagramModal';

export default function CateringToledoPage() {
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'empresas' | 'particulares' | 'express' | 'servicios'>('empresas');
  const [isInstaOpen, setIsInstaOpen] = useState(false);

  const handleTabClick = (tab: 'empresas' | 'particulares' | 'express' | 'servicios') => {
    setActiveTab(tab);
    setTimeout(() => {
      const elementId = tab === 'servicios' ? 'servicios-adicionales' : tab;
      const element = document.getElementById(elementId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <main className="w-full bg-[#fdfcf9]">
      <InstagramModal isOpen={isInstaOpen} onClose={() => setIsInstaOpen(false)} />
      {/* Navigation */}
      <nav className="bg-white border-b border-[#e5e5e5] py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-[#2d2d2d] relative">
          <div className="flex items-center gap-12">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 hover:text-[var(--color-oro-viejo)] transition-colors pr-6 border-r border-gray-200"
            >
              <ArrowLeft size={14} />
              {language === 'ES' ? 'Atrás' : 'Back'}
            </Link>
            <div className="hidden lg:flex items-center gap-12">
              <button onClick={() => handleTabClick('empresas')} className={`hover:text-[var(--color-oro-viejo)] transition-colors uppercase ${activeTab === 'empresas' ? 'text-[var(--color-oro-viejo)]' : ''}`}>{t('tab_empresas')}</button>
              <button onClick={() => handleTabClick('particulares')} className={`hover:text-[var(--color-oro-viejo)] transition-colors uppercase ${activeTab === 'particulares' ? 'text-[var(--color-oro-viejo)]' : ''}`}>{t('tab_particulares')}</button>
              <button onClick={() => handleTabClick('express')} className={`hover:text-[var(--color-oro-viejo)] transition-colors uppercase ${activeTab === 'express' ? 'text-[var(--color-oro-viejo)]' : ''}`}>{t('tab_express')}</button>
              <button onClick={() => handleTabClick('servicios')} className={`hover:text-[var(--color-oro-viejo)] transition-colors uppercase ${activeTab === 'servicios' ? 'text-[var(--color-oro-viejo)]' : ''}`}>{t('tab_servicios')}</button>
              <div className="relative group">
                <button className="hover:text-[var(--color-oro-viejo)] transition-colors uppercase">{t('tab_espacios')}</button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-0 border border-gray-100 min-w-[200px]">
                  <a href="/castillo-guadamur" className="block px-4 py-2 text-xs hover:bg-gray-50 transition-colors">Castillo de Guadamur</a>
                  <a href="/palacio-armino" className="block px-4 py-2 text-xs hover:bg-gray-50 transition-colors">Palacio del Armiño</a>
                  <a href="/cigarral" className="block px-4 py-2 text-xs hover:bg-gray-50 transition-colors">Cigarral</a>
                </div>
              </div>
              <a href="/contacto" className="hover:text-[var(--color-oro-viejo)] transition-colors">{t('contact_title')}</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6 border-l border-gray-200 pl-8 ml-4">
            <button 
              onClick={() => setIsInstaOpen(true)}
              className="text-gray-400 hover:text-[var(--color-oro-viejo)] transition-colors"
            >
              <Instagram size={18} />
            </button>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setLanguage('ES')}
                className={`${language === 'ES' ? 'text-[var(--color-oro-viejo)]' : 'text-gray-400 hover:text-[var(--color-oro-viejo)]'}`}
              >
                ES
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => setLanguage('EN')}
                className={`${language === 'EN' ? 'text-[var(--color-oro-viejo)]' : 'text-gray-400 hover:text-[var(--color-oro-viejo)]'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80" 
            alt="Catering Toledo Excelencia" 
            className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-oro-viejo)] uppercase tracking-[0.4em] text-sm md:text-base font-semibold mb-6 block">{t('est_1982')}</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white italic leading-tight mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('toledo_hero_title')}
            </h1>
            <div className="w-24 h-px bg-[var(--color-oro-viejo)] mx-auto mb-8"></div>
            <p className="text-white/90 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto uppercase">
               {t('toledo_hero_subtitle')}
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] uppercase tracking-widest">Descubrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {activeTab === 'empresas' && (
      <section id="empresas" className="py-24 px-4 bg-[#fdfcf9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif italic text-[#2d2d2d] mb-8">SERVICIOS CATERING EMPRESAS</h2>
          <p className="text-lg text-gray-700 mb-6 italic">Tu éxito será el nuestro, por eso cuidamos todos los detalles para adaptarnos al evento que necesites.</p>
          <p className="text-lg text-gray-700 mb-12">Una pausa para tomar un café con repostería artesana, un almuerzo de trabajo, un cóctel de inauguración o una ocasión especial para tu empresa.</p>
          <div className="grid md:grid-cols-2 gap-4 text-[var(--color-oro-viejo)] font-bold text-lg">
            <p>Reuniones</p>
            <p>Conferencias</p>
            <p>Jornadas de formación</p>
            <p>Presentaciones de producto</p>
            <p>Cenas de Gala</p>
            <p>Inauguraciones</p>
            <p>Entregas de premios</p>
          </div>
        </div>

        {/* Coffee Break/Brunch & Vino Español */}
        <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4 py-4">
                <div className="h-px flex-1 bg-[#8c338c]"></div>
                <h3 className="text-xl font-serif text-gray-600 uppercase tracking-widest">COFFEE BREAK / BRUNCH</h3>
                <div className="h-px flex-1 bg-[#8c338c]"></div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 italic">Pausas con sabor y elegancia para tu jornada.</p>
              <p className="text-gray-600 max-w-lg mx-auto">
                Desde una pausa café revitalizante hasta un brunch completo con repostería artesana y bocados gourmet. Diseñados para mantener la energía y fomentar el networking.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300 max-w-xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-[#8c338c] font-bold uppercase tracking-wider text-sm">Coffee Break</h4>
                  <div className="grid grid-cols-3 gap-1 mb-4">
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/COFFE-BREAK-26-sp-1.jpg" alt="Coffee Break 1" className="w-full h-16 object-cover rounded shadow-sm" />
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/COFFE-BREAK-26-sp-2.jpg" alt="Coffee Break 2" className="w-full h-16 object-cover rounded shadow-sm" />
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/COFFE-BREAK-26-sp-3.jpg" alt="Coffee Break 3" className="w-full h-16 object-cover rounded shadow-sm" />
                  </div>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/COFFE-BREAK-26-sp.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-6 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-[10px] uppercase w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Dossier Coffee Break
                  </a>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#8c338c] font-bold uppercase tracking-wider text-sm">Menú Brunch</h4>
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/BRUNCH-26-sp-1.jpg" alt="Brunch 1" className="w-full h-16 object-cover rounded shadow-sm" />
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/BRUNCH-26-sp-2.jpg" alt="Brunch 2" className="w-full h-16 object-cover rounded shadow-sm" />
                  </div>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/BRUNCH-26-sp.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-6 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-[10px] uppercase w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Dossier Brunch
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4 py-4">
                <div className="h-px flex-1 bg-[#8c338c]"></div>
                <h3 className="text-xl font-serif text-gray-600 uppercase tracking-widest">VINO ESPAÑOL</h3>
                <div className="h-px flex-1 bg-[#8c338c]"></div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 italic">Un clásico imprescindible con toque vanguardista.</p>
              <p className="text-gray-600 max-w-lg mx-auto">
                Selección de bocados tradicionales y creativos maridados con los mejores caldos. La opción ideal para recepciones, inauguraciones y cierres de jornadas.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300 max-w-xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-[#8c338c] font-bold uppercase tracking-wider text-sm">Vino Español 1</h4>
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/vino-1-26-SP-1.jpg" alt="Vino Español 1 - Pág 1" className="w-full h-24 object-cover rounded shadow-sm" />
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/vino-1-26-SP-2.jpg" alt="Vino Español 1 - Pág 2" className="w-full h-24 object-cover rounded shadow-sm" />
                  </div>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/vino-1-26-SP.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-6 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-[10px] uppercase w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Dossier Vino 1
                  </a>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#8c338c] font-bold uppercase tracking-wider text-sm">Vino Español 2</h4>
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/vino-2-26-SP-1.jpg" alt="Vino Español 2 - Pág 1" className="w-full h-24 object-cover rounded shadow-sm" />
                    <img src="https://www.cateringtoledo.com/wp-content/uploads/vino-2-26-SP-2.jpg" alt="Vino Español 2 - Pág 2" className="w-full h-24 object-cover rounded shadow-sm" />
                  </div>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/vino-2-26-SP.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-6 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-[10px] uppercase w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Dossier Vino 2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4 py-4">
                <div className="h-px flex-1 bg-[#8c338c]"></div>
                <h3 className="text-xl font-serif text-gray-600 uppercase tracking-widest">MENÚS LUNCH</h3>
                <div className="h-px flex-1 bg-[#8c338c]"></div>
            </div>
            
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 italic">Elegancia y dinamismo para tus almuerzos corporativos.</p>
              <p className="text-gray-600 max-w-lg mx-auto">
                Soluciones gastronómicas ágiles y sofisticadas, perfectas para jornadas de networking o presentaciones donde prima la fluidez sin renunciar a la alta cocina.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300 max-w-xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-[#8c338c] font-bold uppercase tracking-wider text-sm">Menú Lunch 1</h4>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/LUNCH-1-26-SP.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-6 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-[10px] uppercase w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Descargar Lunch 1
                  </a>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#8c338c] font-bold uppercase tracking-wider text-sm">Menú Lunch 2</h4>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/LUNCH-2-26-SP.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-6 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-[10px] uppercase w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Descargar Lunch 2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Catering Toledo Instagram Gallery */}
        <div className="py-24 bg-gradient-to-b from-white to-[var(--color-crema-base)] border-t border-[var(--color-borde-sutil)] mt-16">
          <div className="max-w-7xl mx-auto px-4 md:px-20 overflow-hidden">
            <div className="text-center mb-16">
              <span className="text-[var(--color-oro-viejo)] text-[10px] uppercase tracking-[0.4em] font-bold mb-4 flex justify-center items-center gap-2">
                <Instagram className="w-4 h-4" /> ARTE, PASIÓN Y GASTRONOMÍA
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-primary)] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                @cateringtoledo
              </h2>
              <p className="text-[var(--color-on-surface-variant)] max-w-2xl mx-auto font-light leading-relaxed">
                Descubra instantes capturados de nuestras celebraciones más exclusivas. Desde solemnes de <strong>bodas de ensueño</strong> en emplazamientos cargados de historia, hasta la excelencia técnica en la organización de <strong>eventos corporativos</strong> y convenciones de primer nivel.
              </p>
              <div className="w-20 h-px bg-[var(--color-oro-viejo)] mx-auto mt-8 mb-4"></div>
              <a 
                href="https://drive.google.com/file/d/1xQNMg-Uu-taMDaMOpp4MYD30rjFWW-To/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] hover:text-[var(--color-oro-viejo)] transition-colors"
              >
                Síguenos en Instagram
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  id: 1,
                  image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
                  category: "BODAS DE ENSUEÑO",
                  title: "Montajes de Ensueño",
                  description: "Velas, flores frescas, mantelerías selectas y una iluminación de cuento de hadas para sellar su unión en un marco inigualables."
                },
                {
                  id: 2,
                  image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
                  category: "EVENTOS CORPORATIVOS",
                  title: "Exclusividad Empresarial",
                  description: "Pausas de café revitalizantes, presentaciones de producto y cenas de gala ejecutadas con la más estricta precisión y excelencia internacional."
                },
                {
                  id: 3,
                  image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
                  category: "ALTA COCINA",
                  title: "Sabor y Vanguardia",
                  description: "Platos elaborados con materias primas extraordinarias y KM0, presentados en miniatura o banquete por nuestros maestros cocineros."
                },
                {
                  id: 4,
                  image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
                  category: "REPOSTERÍA DE AUTOR",
                  title: "Detalles Dulces",
                  description: "Repostería artesanal de autor y broches de oro que coronan las grandes comidas con un deleite visual y gustativo incomparable."
                }
              ].map((post) => (
                <a 
                  key={post.id} 
                  href="https://drive.google.com/file/d/1xQNMg-Uu-taMDaMOpp4MYD30rjFWW-To/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative block bg-white border border-[var(--color-borde-sutil)] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Image Container with Elegant Ratio */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Subtle Dark Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#8c338c] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                    {/* Floating Appellation/Tag Badge */}
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] px-3 py-1 shadow-sm border border-[var(--color-oro-viejo)]/20">
                      {post.category}
                    </span>

                    {/* Icon Badge Overlay */}
                    <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--color-primary)]/85 backdrop-blur-sm p-2 rounded-full border border-white/20">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Content Section representing the Instagram Post Style */}
                  <div className="p-6">
                    <span className="text-[var(--color-oro-viejo)] text-[9px] uppercase tracking-[0.15em] font-semibold block mb-1">@cateringtoledo</span>
                    <h3 className="font-sans text-base font-semibold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-oro-viejo)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed font-light line-clamp-3">
                      {post.description}
                    </p>
                    
                    {/* Interaction Indicator simulating an elegant business feed */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] text-[var(--color-oro-viejo)] font-bold uppercase tracking-widest group-hover:opacity-100 transition-opacity">
                      <span>Ver en Instagram</span>
                      <span className="text-gray-400 group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="https://drive.google.com/file/d/1xQNMg-Uu-taMDaMOpp4MYD30rjFWW-To/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white hover:bg-[var(--color-oro-viejo)] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors rounded-full shadow-md"
              >
                <Instagram className="w-4 h-4 text-[var(--color-oro-viejo)]" /> Seguir @cateringtoledo
              </a>
            </div>
          </div>
        </div>
      </section>
      )}

      {activeTab === 'particulares' && (
      <section id="particulares" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif italic text-[#2d2d2d] mb-8">SERVICIOS CATERING PARTICULARES</h2>
          <p className="text-lg text-gray-700 mb-6 italic">Celebra tus momentos más especiales y hazlos inolvidables.</p>
          <p className="text-lg text-gray-700 mb-6">Las fiestas hay que vivirlas, por eso nos ocupamos de todo para que sólo te preocupes de disfrutar con tus invitados.</p>
          <p className="text-lg text-gray-700 mb-12">Elige la opción que mejor se adapta a ti, según la ocasión. Pondremos todo nuestro cariño en todos los detalles, para que todo esté a tu gusto.</p>
          
          <div className="w-full max-w-3xl mx-auto mb-16 aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://app.heygen.com/embeds/b77d4391d9834434a100c42251208558" 
              title="Video de presentación" 
              className="w-full h-full border-0" 
              allow="autoplay; fullscreen" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-[var(--color-oro-viejo)] font-bold text-lg mb-24">
            <p>Bautizos</p>
            <p>Comuniones</p>
            <p>Cumpleaños</p>
            <p>Fiestas familiares</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Lunch for Particulares */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 py-4">
                <div className="h-px flex-1 bg-[#8c338c]"></div>
                <h3 className="text-xl font-serif text-gray-600 uppercase tracking-widest">MENÚS LUNCH</h3>
                <div className="h-px flex-1 bg-[#8c338c]"></div>
            </div>
            
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 italic">La opción perfecta para celebraciones dinámicas.</p>
              <p className="text-gray-600 max-w-lg mx-auto">
                Nuestros menús lunch están diseñados para ofrecer una experiencia gastronómica completa y variada, ideal para eventos de pie donde la interacción es clave.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300 max-w-xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-[#8c338c] font-bold uppercase tracking-wider text-sm">Menú Lunch 1</h4>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/LUNCH-1-26-SP.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-6 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-[10px] uppercase w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Descargar Lunch 1
                  </a>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#8c338c] font-bold uppercase tracking-wider text-sm">Menú Lunch 2</h4>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/LUNCH-2-26-SP.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-6 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-[10px] uppercase w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Descargar Lunch 2
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Corner for Particulares */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 py-4">
                <div className="h-px flex-1 bg-[#8c338c]"></div>
                <h3 className="text-xl font-serif text-gray-600 uppercase tracking-widest">NUESTROS CORNER</h3>
                <div className="h-px flex-1 bg-[#8c338c]"></div>
            </div>
            
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 italic">Espacios temáticos que sorprenden y deleitan.</p>
              <p className="text-gray-600 max-w-lg mx-auto">
                Personaliza tu evento con nuestras estaciones gastronómicas: desde el corte de jamón ibérico de bellota hasta rincones de quesos artesanos, showcooking y repostería creativa.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300 max-w-md mx-auto">
                <h4 className="text-[#8c338c] font-bold mb-4 uppercase tracking-wider">Dossier Corners 25/26</h4>
                <p className="text-sm text-gray-500 mb-6">Descubre todas nuestras propuestas y estaciones temáticas para la nueva temporada.</p>
                <a 
                  href="https://www.cateringtoledo.com/wp-content/uploads/DOSSIER-CORNER-25-26.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-8 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-xs uppercase"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                  </svg>
                  Ver Dossier Corner (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {activeTab === 'express' && (
      <section id="express" className="py-24 px-4 bg-[#fdfcf9]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-serif italic text-[#2d2d2d]">CATERING EXPRESS</h2>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4 py-4">
                <div className="h-px flex-1 bg-[#8c338c]"></div>
                <h3 className="text-xl font-serif text-gray-600 uppercase tracking-widest">NUESTRO LUNCH EXPRESS</h3>
                <div className="h-px flex-1 bg-[#8c338c]"></div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 italic">¿Tienes una celebración en casa? ¿Una reunión de trabajo en la oficina?</p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Consulta nuestros «express» y sorprende. Con nuestra calidad de siempre, en un formato práctico y elegante. Te ofrecemos varios packs, elige la opción que mejor se adapta, según la ocasión, y te lo llevamos.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
                <div className="grid grid-cols-2 gap-2">
                  <img src="https://www.cateringtoledo.com/wp-content/uploads/slider-1.0.jpg" alt="Catering Express 1" className="w-full h-48 object-cover rounded shadow-md" />
                  <img src="https://www.cateringtoledo.com/wp-content/uploads/slider-2.jpg" alt="Catering Express 2" className="w-full h-48 object-cover rounded shadow-md" />
                  <img src="https://www.cateringtoledo.com/wp-content/uploads/FLORES-DE-IBÉRICOS.jpg" alt="Catering Express 3" className="w-full h-48 object-cover rounded shadow-md" />
                  <img src="https://www.cateringtoledo.com/wp-content/uploads/JAMÓN-IBÉRICO.jpg" alt="Catering Express 4" className="w-full h-48 object-cover rounded shadow-md" />
                </div>

                <div className="bg-white p-8 rounded-lg border border-dashed border-gray-300 shadow-sm">
                  <h4 className="text-[#8c338c] font-bold mb-4 uppercase tracking-wider">Catering Express 2026</h4>
                  <p className="text-sm text-gray-500 mb-6">Selecciona tus propias bandejas de nuestro listado o elige uno de nuestros packs ya diseñados.</p>
                  <a 
                    href="https://www.cateringtoledo.com/wp-content/uploads/LUNCH_EXPRESS_PARTICULARES__26-sp.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#2d2d2d] text-[#c5ad96] px-8 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-all duration-300 font-bold tracking-widest text-xs uppercase w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h3m-3 4h6m-6 4h6"></path>
                    </svg>
                    Descargar Menú Express (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-sm text-gray-600 text-left bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto border border-gray-100">
            <h4 className="font-bold text-gray-800 mb-6 underline decoration-[#8c338c] underline-offset-8">OBSERVACIONES SERVICIO EXPRESS</h4>
            <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-semibold">Transporte:</span> A domicilio incluido (consultar disponibilidad según localidad).</li>
                <li><span className="font-semibold">Presentación:</span> Entrega en material desechable de alta calidad, práctico y elegante.</li>
                <li><span className="font-semibold">Seguridad:</span> Seguro de Responsabilidad Civil y Alimentaria incluido.</li>
                <li><span className="font-semibold">Registro Sanitario:</span> 20.07765/TO; 23.01930/TO; 26.12332/TO; 40.058439/TO.</li>
                <li><span className="font-semibold">Condiciones:</span> IVA 10% no incluido.</li>
                <li><span className="font-semibold">Pago:</span> Mediante transferencia bancaria, efectivo o tarjeta de crédito el día del evento.</li>
            </ul>
          </div>
        </div>
      </section>
      )}

      {activeTab === 'servicios' && (
      <section id="servicios-adicionales" className="py-24 px-4 bg-[#fdfcf9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif italic text-[#2d2d2d] mb-12 text-center">SERVICIOS ESPECIALES</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#8c338c] mb-4">SERVICIO BARRA LIBRE por HORAS CON CAMARERO</h3>
              <p className="mb-2">Asistido por nuestros camareros durante el tiempo acordado</p>
              <p className="mb-2 italic">Incluye: BOTELLA + VASO SIDRA+REFRESCO+HIELO+FRUTA</p>
              <p className="font-bold mt-4 mb-2">A elegir tipo por el cliente:</p>
              <p className="mb-4">Ron (Barceló, Brugal), Whisky (JB, Johnny W, Ballentine`s), Ginebra (Beefeater, Seagrams) y Vodka (Smirnoff)</p>
              <p className="font-bold text-[#8c338c]">CONSULTAR PRECIOS X PAX</p>
              <p className="text-sm italic">(Mínimo servicio 2 Horas)</p>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-2xl font-bold text-[#8c338c] mb-4">SERVICIO BARRA LIBRE – PREMIUM por HORAS CON CAMARERO</h3>
              <p className="mb-2">Asistido por nuestros camareros durante el tiempo acordado</p>
              <p className="mb-2 italic">Incluye: BOTELLA + VASO SIDRA+REFRESCO+HIELO+FRUTA+PERSONAL ASISTENCIA</p>
              <p className="font-bold mt-4 mb-2">A elegir tipo por el cliente:</p>
              <p className="mb-4">Ron (Matusalem, Brugal 1888,..), Whisky (Johnny W-Etiqueta Negra, Jack Daniels,..), Ginebra (G.Vine, Hendricks…) y Vodka (Absolut)</p>
              <p className="font-bold text-[#8c338c]">CONSULTAR PRECIOS X PAX</p>
              <p className="text-sm italic">(Mínimo servicio 2 Horas)</p>
            </div>
          </div>

          <h2 className="text-4xl font-serif italic text-[#2d2d2d] mt-24 mb-12 text-center">SERVICIOS ADICIONALES</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#8c338c] mb-4">ANIMACION INFANTIL:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>PINTACARAS / GLOBOFLEXIA</li>
                <li>CASTILLOS HINCHABLES</li>
                <li>MAGIA</li>
                <li>PAYASOS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8c338c] mb-4">ANIMACION MUSICAL:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ORQUESTA</li>
                <li>DJ-DISCO MOVIL</li>
                <li>TABLAO FLAMENCO</li>
                <li>GUITARRA ESPAÑOLA</li>
                <li>CUARTETO DE CUERDA</li>
                <li>BANDA DE BLUES</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-bold mb-2">• DECORACION PERSONALIZADA (Floral, photocall, rincón vintage…)</p>
            <p className="font-bold mb-2">• SHOWCOOKING / TALLERES GASTRONOMICOS</p>
            <p className="font-bold mb-2">• CATAS DE VINO, ACEITE O QUESOS</p>
            <p className="font-bold mb-2">• FOOD TRUCK</p>
            <h3 className="text-xl font-bold text-[#8c338c] mt-6 mb-2">ALQUILER DE MOBILIARIO</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Carpas y Jaimas</li>
              <li>Setas de gas butano</li>
              <li>Sillas y mesas</li>
            </ul>
          </div>
        </div>
      </section>
      )}

    </main>
  );
}
