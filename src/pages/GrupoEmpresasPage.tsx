import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, UtensilsCrossed, Gift, ChefHat, CakeSlice } from 'lucide-react';

export default function GrupoEmpresasPage() {
  return (
    <main className="w-full bg-[#fdfcf9]">
      {/* Hero Section - Corporate Excellence */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Grupo Aquiles HQ" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-oro-viejo)] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Excelencia Gastronómica e Integral</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
              Grupo <span className="italic font-light">Aquiles</span>
            </h1>
            <div className="w-24 h-px bg-[var(--color-oro-viejo)] mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Building2 className="w-12 h-12 text-[var(--color-oro-viejo)] mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-primary)] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bienvenido a Grupo Aquiles: Tu Destino para Catering y Hostelería en Toledo
          </h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] font-light leading-relaxed italic">
            "El buen gusto es un placer. Producción propia de alta calidad, profesionalidad y pasión combinadas para conseguir su éxito."
          </p>
        </motion.div>
      </section>

      {/* Brands Grid */}
      <section className="pb-32 px-4 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-24">
          
          {/* Catering Toledo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                 <UtensilsCrossed className="w-8 h-8 text-[var(--color-oro-viejo)]" />
                 <h3 className="text-2xl font-serif font-bold text-[var(--color-primary)] uppercase tracking-wider">Catering Toledo</h3>
              </div>
              <p className="text-sm font-bold text-[var(--color-oro-viejo)] uppercase tracking-widest mb-6 border-b border-[var(--color-oro-viejo)] pb-2 inline-block">Empresas y Particulares</p>
              <div className="space-y-4 text-[var(--color-on-surface)] leading-relaxed font-light">
                <p>Catering Toledo es el resultado de la confianza de nuestros clientes. Su satisfacción es nuestra recompensa y motivación, gracias a ellos seguimos creciendo.</p>
                <p>Nuestro equipo humano destaca por su profesionalidad e implicación. Nos apasiona nuestro trabajo y día a día trabajamos para que cada evento sea una experiencia única.</p>
                <p>Producción propia de alta calidad, profesionalidad, buen gusto, detalles y mejora constante.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-video bg-gray-100 overflow-hidden border border-[var(--color-borde-sutil)]">
               <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80" alt="Catering Toledo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Aquiles Gourmet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video bg-gray-100 overflow-hidden border border-[var(--color-borde-sutil)]">
               <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1000&q=80" alt="Aquiles Gourmet - Lotes y Cestas" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                 <Gift className="w-8 h-8 text-[var(--color-oro-viejo)]" />
                 <h3 className="text-2xl font-serif font-bold text-[var(--color-primary)] uppercase tracking-wider">Aquiles Gourmet</h3>
              </div>
              <p className="text-sm font-bold text-[var(--color-oro-viejo)] uppercase tracking-widest mb-6 border-b border-[var(--color-oro-viejo)] pb-2 inline-block">Regalos y Lotes de Navidad</p>
              <div className="space-y-4 text-[var(--color-on-surface)] leading-relaxed font-light text-sm">
                <p>Llevamos más de 30 años dedicados a la elaboración de Regalos de Empresa, Lotes de Navidad y Cestas personalizadas, primero con nuestras tiendas físicas y ahora con nuestro E-Commerce.</p>
                <p>Buscando siempre la mejor relación calidad/Precio con productos Gourmet y Vinos de todas las D.O, Conservas premium (Los Peperetes, Ramón Peña), Embutidos Joselito, 5 Jotas, y caldos como Vega Sicilia o Moët & Chandon.</p>
                <p>Regalos adaptados a sus gustos, necesidades y presupuesto, con logística 360º.</p>
              </div>
            </div>
          </div>

          {/* La Kocina de Lola */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                 <ChefHat className="w-8 h-8 text-[var(--color-oro-viejo)]" />
                 <h3 className="text-2xl font-serif font-bold text-[var(--color-primary)] uppercase tracking-wider">Lola de España</h3>
              </div>
              <p className="text-sm font-bold text-[var(--color-oro-viejo)] uppercase tracking-widest mb-6 border-b border-[var(--color-oro-viejo)] pb-2 inline-block">La Kocina de Lola - IV y V Gama</p>
              <div className="space-y-4 text-[var(--color-on-surface)] leading-relaxed font-light text-sm">
                <p>De la Mano de grandes chefs como <strong>Richard Alcayde y Jordi Bataller</strong>, desde hace 15 años nació la Kocina de Lola para facilitar la vida a la hostelería.</p>
                <p>Elaboramos productos de <strong>IV y V gama</strong> con materias primas de primera calidad, productos de KM0 y agricultura ecológica. Con grandes clientes que siempre han confiado en nuestro buen hacer.</p>
                <p>Flamenquines, croquetas, canapés, pástelas, rellenos y aves en infinidad de versiones. Soluciones Ad-doc con certificados de confidencialidad y compromiso de mercado.</p>
                <Link to="/lola-de-espana" className="inline-block text-[var(--color-oro-viejo)] font-bold uppercase tracking-wider text-[10px] mt-4 hover:underline">
                  Ver Soluciones para Hostelería →
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-video bg-gray-100 overflow-hidden border border-[var(--color-borde-sutil)]">
               <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80" alt="La Kocina de Lola" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Aquiles Repostería */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video bg-gray-100 overflow-hidden border border-[var(--color-borde-sutil)]">
               <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80" alt="Aquiles Repostería" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                 <CakeSlice className="w-8 h-8 text-[var(--color-oro-viejo)]" />
                 <h3 className="text-2xl font-serif font-bold text-[var(--color-primary)] uppercase tracking-wider">Aquiles Repostería</h3>
              </div>
              <p className="text-sm font-bold text-[var(--color-oro-viejo)] uppercase tracking-widest mb-6 border-b border-[var(--color-oro-viejo)] pb-2 inline-block">Desde 1980 Tarta Express</p>
              <div className="space-y-4 text-[var(--color-on-surface)] leading-relaxed font-light text-sm">
                <p>Tarta Express ha sido su pastelería de confianza desde 1980. Ahora, bajo la marca Aquiles Repostería, presentamos una nueva línea de tartas, postres y pasteles.</p>
                <p>Atendiendo a la nueva demanda del mercado, con productos de cercanía hemos creado un nuevo catálogo para deleitar todos los paladares.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final Quote */}
      <section className="py-32 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <span className="text-[var(--color-oro-viejo)] text-6xl font-serif block mb-8 italic">“</span>
           <h2 className="text-3xl md:text-5xl font-serif italic mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
             Donde el buen gusto es un placer, confíe en nosotros.
           </h2>
           <div className="w-16 h-px bg-[var(--color-oro-viejo)] mx-auto mb-8"></div>
           <p className="text-xs uppercase tracking-[0.6em] font-bold text-white/40">© 2026 Grupo Aquiles</p>
        </div>
      </section>
    </main>
  );
}
