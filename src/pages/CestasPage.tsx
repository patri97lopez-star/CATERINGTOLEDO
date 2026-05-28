import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, Briefcase, Check, Truck, Award, Headset, ShoppingBag, Instagram } from "lucide-react";
import { useCart } from '../context/CartContext';

export default function CestasPage() {
  const { addToCart } = useCart();
  const [sortOrder, setSortOrder] = useState<'desc' | null>(null);

  const products = [
    { id: 1, title: "Lote Nº1", description: "Vino tinto, queso de oveja y selección artesana.", price: "36.76", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No1-Aquiles-Gourmet-800x534.jpg" },
    { id: 2, title: "Lote Nº2", description: "Aceite de oliva virgen extra y selección de conservas.", price: "37.37", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No2-aquiles-Gourmet-800x534.jpg" },
    { id: 3, title: "Lote Nº3", description: "Estuche de ibéricos y picos artesanos.", price: "39.78", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No3-Auiles-Gourmet-800x534.jpg" },
    { id: 4, title: "Lote Nº4", description: "Selección de conservas finas y vino blanco.", price: "43.69", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No4-Aquiles-Gourmet-800x534.jpg" },
    { id: 5, title: "Lote Nº5", description: "Vino, conservas gourmet y dulces tradicionales.", price: "46.94", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No5-aquiles-Gourmet-800x534.jpg" },
    { id: 6, title: "Lote Nº6", description: "Lote ibérico con vino tinto y aceite premium.", price: "63.02", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No6-Aquiles-Gourmet-800x534.jpg" },
    { id: 7, title: "Lote Nº7", description: "Baúl gourmet con una selección completa.", price: "67.07", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No7-Aquiles-Gourmet-800x534.jpg" },
    { id: 8, title: "Lote Nº8", description: "Cesta de Navidad con productos de primera calidad.", price: "83.07", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No8-Aquiles-Gourmet-800x534.jpg" },
    { id: 9, title: "Lote Nº9", description: "Arcón de madera con ibéricos y tintos reserva.", price: "117.58", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No9-Aquiles-Gourmet-800x534.jpg" },
    { id: 10, title: "Lote Nº10", description: "Caja Aquiles con Champagne y selección elite.", price: "115.96", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No10-aquiles-Gourmet-800x534.jpg" },
    { id: 11, title: "Lote Nº11", description: "Caja Original con las mejores denominaciones de origen.", price: "125.36", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No11-Aquiles-Gourmet-800x534.jpg" },
    { id: 12, title: "Lote Nº12", description: "Bandeja Gran Gourmet con catálogo completo.", price: "142.93", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No12-aquiles-Gourmet-800x534.jpg" },
    { id: 13, title: "Lote Nº13", description: "Caja Gran Selección con jamón de bellota.", price: "145.55", image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No13-Aquiles-Gourmet-800x534.jpg" }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'desc') {
      return parseFloat(b.price) - parseFloat(a.price);
    }
    return 0;
  });

  return (
    <main className="w-full">
      {/* Hero Section */}
      <header className="relative h-[650px] flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 opacity-40">
          <img 
            alt="Luxury Christmas Baskets" 
            className="w-full h-full object-cover" 
            src="https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No13-Aquiles-Gourmet-800x534.jpg"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold mb-4 block text-[var(--color-oro-viejo)]">Aquiles Gourmet</span>
            <div className="w-12 h-px bg-[var(--color-oro-viejo)] mx-auto mb-8"></div>
            <h1 className="font-serif text-5xl md:text-8xl leading-tight font-bold mb-8 max-w-5xl mx-auto tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Lotes <span className="italic font-light text-[var(--color-oro-viejo)]">y</span> Cestas
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-light tracking-wide uppercase italic mb-8">
              Joyas de nuestra gastronomía <br />
              <span className="text-xs tracking-[0.3em] opacity-60 not-italic">Colección Artesana 2026</span>
            </p>
            <a 
              href="https://www.aquilesgourmet.es/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[var(--color-oro-viejo)] text-white px-8 py-3 rounded-full shadow-lg hover:bg-white hover:text-[var(--color-oro-viejo)] transition-colors duration-300 font-bold tracking-widest text-xs uppercase"
            >
              Visitar sitio web oficial
            </a>
          </motion.div>
        </div>
      </header>

      {/* Section Navigation */}
      <nav className="bg-white border-b border-[var(--color-borde-sutil)] sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-20 flex justify-center gap-12 py-6">
          <a href="#regalos-empresa" className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] hover:text-[var(--color-oro-viejo)] transition-colors">Regalos de Empresa</a>
          <a href="#cestas-navidad" className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] hover:text-[var(--color-oro-viejo)] transition-colors">Cestas de Navidad</a>
        </div>
      </nav>

      {/* Section 1: Regalos de Empresa */}
      <section id="regalos-empresa" className="bg-white py-24 px-4 md:px-20 scroll-mt-[130px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-oro-viejo)] text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Exclusividad Corporativa</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-primary)] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Regalos de Empresa
            </h2>
            <div className="w-24 h-px bg-[var(--color-oro-viejo)] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            <div className="space-y-8 text-lg text-[var(--color-on-surface-variant)] leading-relaxed font-light">
              <p className="text-2xl font-serif italic text-[var(--color-primary)] leading-snug border-l-4 border-[var(--color-oro-viejo)] pl-6">
                "Diseñamos experiencias gastronómicas que fortalecen los lazos corporativos con un toque de distinción."
              </p>
              <div className="space-y-4">
                <p>
                  En Aquiles Gourmet nos especializamos en la <strong>confección de regalos exclusivos</strong> para empresas que buscan diferenciarse. Nuestra propuesta combina la tradición de los mejores productores nacionales con una presentación de lujo.
                </p>
                <p>
                  Desde detalles individuales para eventos hasta grandes lotes para empleados y clientes VIP, nos adaptamos a su presupuesto sin comprometer la excelencia.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-[var(--color-oro-viejo)] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm uppercase mb-1">Personalización Total</h4>
                    <p className="text-xs">Branding corporativo en estuches y tarjetas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-[var(--color-oro-viejo)] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm uppercase mb-1">Stock Garantizado</h4>
                    <p className="text-xs">Reserva anticipada de productos exclusivos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-[var(--color-oro-viejo)] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm uppercase mb-1">Logística VIP</h4>
                    <p className="text-xs">Envíos capilares a múltiples destinos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-[var(--color-oro-viejo)] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm uppercase mb-1">Asesoría Gourmet</h4>
                    <p className="text-xs">Sommeliers y expertos a su servicio.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src="https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No10-aquiles-Gourmet-800x534.jpg" alt="Regalo Elite" className="w-full h-80 object-cover rounded shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
                  <div className="bg-[var(--color-primary)] p-6 text-white text-center rounded">
                    <p className="text-2xl font-serif mb-1">100%</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-70">Personalizados</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-[var(--color-oro-viejo)] p-8 text-white text-center rounded">
                    <Briefcase className="w-8 h-8 mx-auto mb-4" />
                    <p className="text-xs uppercase tracking-widest font-bold">Dossier 2026</p>
                  </div>
                  <img src="https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No11-Aquiles-Gourmet-800x534.jpg" alt="Regalo Premium" className="w-full h-80 object-cover rounded shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-crema-base)] -z-10 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section: Bento Grid (Adapted for Regalos de Empresa / Personalization) */}
      <section className="bg-[#f5f3f3] py-[100px]">
        <div className="max-w-7xl mx-auto px-4 md:px-20 text-center mb-12">
            <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">¿Por qué elegir Aquiles Gourmet para su empresa?</h3>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 md:h-[600px]">
            {/* Box 1 (Large) - Corporate Information */}
            <div className="md:col-span-2 md:row-span-2 bg-white p-12 flex flex-col justify-center border border-[var(--color-borde-sutil)]">
              <div className="flex items-center gap-4 mb-6">
                <Briefcase className="w-8 h-8 text-[var(--color-oro-viejo)]" />
                <span className="text-[var(--color-oro-viejo)] text-[10px] uppercase tracking-[0.3em] font-bold">Personalización</span>
              </div>
              <h2 className="font-serif text-[32px] leading-10 font-semibold mb-6">Proyectos a Medida</h2>
              <p className="text-lg text-[var(--color-outline)] mb-8">
                Diseñamos lotes únicos que integran la identidad de su marca mediante logotipos grabados, tarjetas personalizadas y una logística impecable.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--color-oro-viejo)]" />
                  <span>Branding corporativo en estuches</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--color-oro-viejo)]" />
                  <span>Mensajes de agradecimiento personalizados</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--color-oro-viejo)]" />
                  <span>Gestión de envíos a múltiples destinos</span>
                </li>
              </ul>
              <Link to="/contacto" className="border border-[var(--color-oro-viejo)] text-[var(--color-oro-viejo)] py-4 px-8 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--color-oro-viejo)] hover:text-white transition-all w-fit block text-center">
                Solicitar Dossier Empresa
              </Link>
            </div>

            {/* Box 2 (Top Right Wide) */}
            <div className="md:col-span-2 bg-[var(--color-primary)] text-white p-12 flex flex-col justify-center rounded-sm">
              <h3 className="font-serif text-2xl font-semibold mb-4">Garantía Logística</h3>
              <p className="opacity-80">Entregas en 24/48h en toda la península con embalajes reforzados y seguimiento constante de su pedido.</p>
              <div className="mt-6 flex items-center gap-4 text-[var(--color-oro-viejo)]">
                <Truck className="w-6 h-6" />
                <span className="text-xs uppercase tracking-[0.1em] font-semibold">DISTRIBUCIÓN NACIONAL</span>
              </div>
            </div>

            {/* Box 3 (Bottom Left Small) */}
            <div className="md:col-span-1 bg-[var(--color-oro-viejo)] p-8 flex flex-col items-center justify-center text-center text-white rounded-sm">
              <Award className="w-8 h-8 mb-4" />
              <h4 className="text-xs uppercase tracking-[0.1em] font-semibold mb-2">CALIDAD EXTREMA</h4>
              <p className="text-xs opacity-90 leading-relaxed">Seleccionamos solo lo mejor de cada D.O.</p>
            </div>

            {/* Box 4 (Bottom Right Small) */}
            <div className="md:col-span-1 bg-white border border-[var(--color-borde-sutil)] p-8 flex flex-col items-center justify-center text-center">
              <Headset className="w-8 h-8 text-[var(--color-oro-viejo)] mb-4" />
              <h4 className="text-xs uppercase tracking-[0.1em] font-semibold mb-2">SERVICIO VIP</h4>
              <p className="text-xs text-[var(--color-outline)] leading-relaxed">Gestión personalizada paso a paso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Cestas de Navidad */}
      <section id="cestas-navidad" className="bg-white py-24 px-4 md:px-20 scroll-mt-[130px]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-[var(--color-oro-viejo)] text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Tradición Gastronómica</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-primary)] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Cestas de Navidad
          </h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] max-w-3xl mx-auto font-light leading-relaxed">
            Nuestra <strong>Colección Artesana 2026</strong> reúne los clásicos de siempre con propuestas vanguardistas. Lotes diseñados para celebrar la magia de la Navidad con los paladares más exigentes.
          </p>
        </div>

        {/* Catalog Controls */}
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-8 border-y border-[var(--color-borde-sutil)] py-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">Explorar Colección</h3>
          <div className="flex gap-8">
            <button className="group flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-on-surface)] hover:text-[var(--color-oro-viejo)] transition-all">
              <span>FILTRAR</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button 
              className="group flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-on-surface)] hover:text-[var(--color-oro-viejo)] transition-all"
              onClick={() => setSortOrder(prev => prev === 'desc' ? null : 'desc')}
            >
              <span>{sortOrder === 'desc' ? 'PRECIO ALTO' : 'ORDENAR PRECIO'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {sortedProducts.map((product) => (
            <article key={product.id} className="group">
              <div className="h-72 w-full bg-[#eceef0] mb-6 overflow-hidden relative flex items-center justify-center">
                <img 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={product.image}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1549488344-c775f7871b23?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="text-center px-4">
                <h3 className="font-sans text-[18px] text-[#2d2d2d] mb-1 font-normal tracking-wide">{product.title}</h3>
                <p className="text-[13px] text-gray-500 mb-2 font-light line-clamp-1 italic">{product.description}</p>
                <p className="text-[15px] font-medium text-[#444444] mb-6">
                  {product.price} € <span className="text-[11px] text-gray-400 font-normal">IVA incluido</span>
                </p>
                
                <button 
                  onClick={() => addToCart({ ...product, price: product.price })}
                  className="w-full bg-[#822718] text-white py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#2d2d2d] transition-colors duration-300 shadow-sm"
                >
                  Añadir al carrito
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* Holiday Invitation and Logistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-20 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
             <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" alt="Navidad Aquiles" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-[var(--color-primary)] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Momentos memorables esta Navidad</h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-4">
                Esta Navidad, haz que cada momento sea memorable con los regalos, lotes y cestas de Aquiles Gourmet. 
                Te invitamos a explorar nuestro catálogo y compartir la alegría de la temporada con los que más quieres.
              </p>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                Haz tu pedido hoy y celebra la Navidad de una manera única y deliciosa.
              </p>
            </div>
            
            <div className="bg-[var(--color-crema-base)] p-8 border-l-4 border-[var(--color-oro-viejo)]">
              <h3 className="font-bold text-[var(--color-primary)] uppercase tracking-widest mb-4 flex items-center gap-3">
                <Truck className="w-5 h-5 text-[var(--color-oro-viejo)]" />
                Entrega a domicilio
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-on-surface-variant)]">
                Ofrecemos un servicio de entrega a domicilio rápido y confiable en toda España. No importa si estás ocupado o lejos de tus seres queridos, 
                nosotros nos encargamos de llevar la magia de la Navidad directamente a sus puertas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Instagram Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[var(--color-crema-base)] border-t border-[var(--color-borde-sutil)]">
        <div className="max-w-7xl mx-auto px-4 md:px-20 overflow-hidden">
          <div className="text-center mb-16">
            <span className="text-[var(--color-oro-viejo)] text-[10px] uppercase tracking-[0.4em] font-bold mb-4 flex justify-center items-center gap-2">
              <Instagram className="w-4 h-4" /> COMPROMISO SOCIAL Y GOURMET
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-primary)] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nuestra Galería de Instagram
            </h2>
            <p className="text-[var(--color-on-surface-variant)] max-w-2xl mx-auto font-light leading-relaxed">
              Explore los bastidores de nuestro taller artesano, detalles exclusivos sobre las <strong>cestas de Navidad</strong> y propuestas para los <strong>lotes de empresa</strong> de este año. Descubra la sofisticación en cada presentación.
            </p>
            <div className="w-20 h-px bg-[var(--color-oro-viejo)] mx-auto mt-8 mb-4"></div>
            <a 
              href="https://drive.google.com/file/d/1xQNMg-Uu-taMDaMOpp4MYD30rjFWW-To/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] hover:text-[var(--color-oro-viejo)] transition-colors"
            >
              @aquilesgourmet
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                id: 1,
                image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No13-Aquiles-Gourmet-800x534.jpg",
                category: "CESTAS NAVI-GIVING",
                title: "Lote Premium Nº13",
                description: "Vanguardia, jamón ibérico Bellota y caldos reserva que marcan la diferencia en cualquier felicitación de empresa."
              },
              {
                id: 2,
                image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No10-aquiles-Gourmet-800x534.jpg",
                category: "PROYECTOS CORPORATIVOS",
                title: "Identidad Personalizada",
                description: "Grabado en madera noble, branding directo y tarjetas de agradecimiento integradas con elegancia suprema."
              },
              {
                id: 3,
                image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No7-Aquiles-Gourmet-800x534.jpg",
                category: "ALTA CHARCUTERÍA",
                title: "Selección Artesana",
                description: "Delicatesen de procedencia local y embutidos Cinco Jotas seleccionados meticulosamente pieza por pieza."
              },
              {
                id: 4,
                image: "https://www.aquilesgourmet.es/wp-content/uploads/2023/09/Lote-No8-Aquiles-Gourmet-800x534.jpg",
                category: "LOGÍSTICA EXCLUSIVA",
                title: "Garantía de Entrega",
                description: "Embalaje reforzado y transporte con temperatura controlada para que sus lotes lleguen en perfecto estado."
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
                  <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
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
                  <span className="text-[var(--color-oro-viejo)] text-[9px] uppercase tracking-[0.15em] font-semibold block mb-1">@aquilesgourmet</span>
                  <h3 className="font-sans text-base font-semibold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-oro-viejo)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed font-light line-clamp-3">
                    {post.description}
                  </p>
                  
                  {/* Interaction Indicator simulating an elegant business feed */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] text-[var(--color-oro-viejo)] font-bold uppercase tracking-widest group-hover:opacity-100 transition-opacity">
                    <span>Ver publicación</span>
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
              <Instagram className="w-4 h-4 text-[var(--color-oro-viejo)]" /> Seguir @aquilesgourmet
            </a>
          </div>
        </div>
      </section>

      {/* Pedidos / Contact CTA */}
      <section id="pedidos" className="py-24 bg-[var(--color-crema-base)] border-t border-[var(--color-borde-sutil)] text-center">
        <div className="max-w-4xl mx-auto px-4">
           <span className="text-[var(--color-oro-viejo)] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Central de Pedidos</span>
           <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-primary)] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Haga su pedido hoy mismo</h2>
           <p className="text-[var(--color-on-surface-variant)] mb-10 max-w-2xl mx-auto leading-relaxed">
             Estamos a su disposición para asesorarle en su elección. Contacte con nuestro equipo para pedidos a gran escala o personalizaciones especiales.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contacto" className="bg-[var(--color-primary)] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-oro-viejo)] transition-colors">Contactar Ahora</Link>
              <a href="tel:+34910000000" className="border border-[var(--color-primary)] text-[var(--color-primary)] px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors">Llamar 925 XX XX XX</a>
           </div>
        </div>
      </section>
    </main>
  );
}

