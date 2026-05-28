import { motion } from 'motion/react';
import { useState } from 'react';
import { ChefHat, ShoppingBag, Leaf, ShieldCheck, HeartPulse, UserCheck, Instagram, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import InstagramModal from '../components/InstagramModal';

export default function LolaDeEspanaPage() {
  const { language, setLanguage, t } = useLanguage();
  const [isInstaOpen, setIsInstaOpen] = useState(false);

  return (
    <main className="w-full bg-[#fdfcf9]">
      <InstagramModal isOpen={isInstaOpen} onClose={() => setIsInstaOpen(false)} />
      {/* Navigation */}
      <nav className="bg-white border-b border-[#e5e5e5] py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[var(--color-oro-viejo)] transition-colors">
            <ArrowLeft size={16} />
            Grupo Aquiles
          </a>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsInstaOpen(true)}
              className="text-gray-400 hover:text-[var(--color-oro-viejo)] transition-colors"
            >
              <Instagram size={18} />
            </button>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-l border-gray-100 pl-6">
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
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=80" 
            alt="La Kocina de Lola Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[var(--color-oro-viejo)] uppercase tracking-[0.4em] text-sm font-bold mb-6 block">Especialistas en Hostelería</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              La Kocina <span className="italic font-light">de Lola</span>
            </h1>
            <div className="w-24 h-px bg-[var(--color-oro-viejo)] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light italic leading-relaxed max-w-3xl mx-auto">
              "Productos de IV y V Gama para facilitar la vida a la hostelería."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 text-[var(--color-oro-viejo)]">
              <ChefHat className="w-6 h-6" />
              <span className="uppercase tracking-[0.2em] text-xs font-bold">Nuestra Historia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-primary)] leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
              De la mano de grandes chefs
            </h2>
            <div className="space-y-6 text-lg text-[var(--color-on-surface-variant)] font-light leading-relaxed">
              <p>
                Desde hace 15 años nació <strong>La Kocina de Lola</strong>, de la mano de reconocidos maestros de la cocina.
              </p>
              <p>
                Nuestra misión siempre ha sido clara: elaborar productos de <strong>IV y V gama</strong> con la máxima calidad para facilitar la operatividad en el sector de la hostelería, sin renunciar al sabor artesano y la excelencia gastronómica.
              </p>
              <p>
                Con grandes clientes que siempre han confiado en nuestro buen hacer, apostamos por materias primas de primera calidad, productos de <strong>KM0</strong> y el fomento de la agricultura ecológica.
              </p>
            </div>
          </motion.div>
          <div className="flex justify-center items-center">
            <div className="relative max-w-sm w-full">
              <div className="aspect-[4/5] rounded shadow-2xl overflow-hidden">
                 <img 
                   src="https://fact-magazine.com/wp-content/uploads/2022/10/Cover-Image-1.jpg" 
                   alt="Nuestra Cocina" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[var(--color-oro-viejo)] p-4 text-white shadow-xl z-10 text-center">
                 <p className="text-[10px] uppercase tracking-widest font-bold">Excelencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24 bg-[#f8f6f2] px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-primary)] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Productos Especializados
            </h2>
            <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto font-light">
              Soluciones gastronómicas listas para servir o terminar en cocina, diseñadas para los paladares más exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Flamenquines y Croquetas", desc: "Clásicos de nuestra gastronomía con un toque gourmet y texturas impecables." },
              { title: "Canapés y Pastelaje", desc: "Elaboraciones delicadas ideales para eventos, cócteles y alta hostelería." },
              { title: "Rellenos y Aves", desc: "Infinidad de versiones de aves rellenas y elaboradas listas para su regeneración." },
              { title: "Productos Ad-hoc", desc: "Desarrollamos recetas personalizadas según las necesidades específicas de su establecimiento." },
              { title: "Certificados de Confidencialidad", desc: "Garantizamos el secreto de sus recetas exclusivas con total profesionalidad." },
              { title: "KM0 y Ecológico", desc: "Compromiso real con el mercado local y la sostenibilidad alimentaria." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 border border-[var(--color-borde-sutil)] hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-px bg-[var(--color-oro-viejo)] mb-6 group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-xl font-serif text-[var(--color-primary)] mb-4">{item.title}</h3>
                <p className="text-sm text-[var(--color-outline)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repostería Section */}
      <section className="py-24 bg-white px-4 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2 space-y-8 order-2 md:order-1">
              <div className="w-20 h-px bg-[var(--color-oro-viejo)]"></div>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-primary)] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Pastelería <span className="italic font-light">y</span> Repostería <br />
                <span className="text-[var(--color-oro-viejo)]">de Alta Gama</span>
              </h2>
              <div className="space-y-6 text-lg text-[var(--color-on-surface-variant)] font-light leading-relaxed">
                <p>
                  En <strong>La Kocina de Lola</strong>, entendemos que el postre es el broche de oro de cualquier experiencia gastronómica. Por ello, elaboramos una línea exclusiva de pastelaje y repostería fina.
                </p>
                <p>
                  Desde miniaturas delicadas hasta postres de plato complejos, nuestras creaciones combinan técnicas de vanguardia con los sabores más auténticos de nuestra tierra.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm uppercase mb-2">Ingredientes Premium</h4>
                    <p className="text-xs text-[var(--color-outline)]">Chocolates de origen, fruta de temporada y mantequillas artesanas.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm uppercase mb-2">Diseño Visual</h4>
                    <p className="text-xs text-[var(--color-outline)]">Presentaciones impecables que cautivan antes del primer bocado.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4 order-1 md:order-2">
              <div className="space-y-4">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80" 
                  alt="Dessert Gourmet" 
                  className="w-full h-72 object-cover rounded shadow-lg"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80" 
                  alt="Pastries" 
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80" 
                  alt="Eclairs" 
                  className="w-full h-56 object-cover rounded shadow-lg"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80" 
                  alt="Artisan Cookies" 
                  className="w-full h-64 object-cover rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Features Bento */}
      <section className="py-24 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 bg-[var(--color-primary)] p-12 text-white rounded flex flex-col justify-center">
              <ShoppingBag className="w-10 h-10 text-[var(--color-oro-viejo)] mb-6" />
              <h3 className="text-3xl font-serif mb-6">Hostelería en Toledo</h3>
              <p className="text-lg opacity-80 font-light mb-8">
                El Catering y la Hostelería en Toledo tienen un nombre propio: <strong>Grupo Aquiles</strong>. Nuestra infraestructura nos permite responder a cualquier volumen de demanda.
              </p>
              <button className="border border-[var(--color-oro-viejo)] text-[var(--color-oro-viejo)] py-4 px-8 text-xs uppercase tracking-widest font-bold hover:bg-[var(--color-oro-viejo)] hover:text-white transition-all w-fit">
                Contactar con Asesoría
              </button>
            </div>
            
            <div className="bg-[#fcf8f0] p-10 border border-[var(--color-borde-sutil)] rounded text-center flex flex-col items-center justify-center">
              <Leaf className="w-8 h-8 text-[var(--color-oro-viejo)] mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">SOSTENIBLE</h4>
              <p className="text-xs text-[var(--color-outline)] leading-relaxed">Priorizamos productos de KM0 y agricultura ecológica en todas nuestras recetas.</p>
            </div>

            <div className="bg-[#f0f4fc] p-10 border border-[var(--color-borde-sutil)] rounded text-center flex flex-col items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-[#2c3e50] mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">CONFIDENCIAL</h4>
              <p className="text-xs text-[var(--color-outline)] leading-relaxed">Contratos y certificados de compromiso de mercado para proteger su exclusividad.</p>
            </div>

            <div className="bg-[#fcf0f0] p-10 border border-[var(--color-borde-sutil)] rounded text-center flex flex-col items-center justify-center">
              <HeartPulse className="w-8 h-8 text-[#e74c3c] mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">CALIDAD IV-V</h4>
              <p className="text-xs text-[var(--color-outline)] leading-relaxed">Garantía total de seguridad alimentaria y estandarización de procesos.</p>
            </div>

            <div className="bg-white p-10 border border-[var(--color-borde-sutil)] rounded text-center flex flex-col items-center justify-center">
              <UserCheck className="w-8 h-8 text-[var(--color-oro-viejo)] mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">TRATO CERCANO</h4>
              <p className="text-xs text-[var(--color-outline)] leading-relaxed">Servicio personalizado adaptado a la dinámica de su cocina.</p>
            </div>

            <div className="md:col-span-2 bg-[#1a1a1a] p-12 text-white rounded relative overflow-hidden flex items-center">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-4">"Porque el buen gusto es un placer"</h3>
                <p className="text-[var(--color-oro-viejo)] font-light italic">Confíe en La Kocina de Lola</p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <ChefHat className="w-32 h-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-oro-viejo)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Interesado en nuestras soluciones para Hostelería?
          </h2>
          <p className="text-lg opacity-90 mb-12 font-light">
            Solicite nuestro catálogo especializado de productos de IV y V gama.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[var(--color-oro-viejo)] px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all">
              Descargar Catálogo
            </button>
            <button className="bg-transparent border-2 border-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-[var(--color-oro-viejo)] transition-all">
              Hablar con un Experto
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
