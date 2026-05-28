import { ArrowLeft } from 'lucide-react';

export default function CastilloGuadamurPage() {
  return (
    <main className="w-full min-h-screen bg-[#fdfcf9]">
      <nav className="bg-white border-b border-[#e5e5e5] py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-16 text-xs font-bold uppercase tracking-[0.2em] text-[#2d2d2d] relative">
          <a href="/" className="absolute left-4 hidden md:flex items-center gap-2 text-gray-500 hover:text-[var(--color-oro-viejo)] transition-colors">
            <ArrowLeft size={20} />
            <span className="text-[10px]">INICIO</span>
          </a>
          <a href="/catering-toledo#empresas" className="hover:text-[var(--color-oro-viejo)] transition-colors">EMPRESAS</a>
          <a href="/catering-toledo#particulares" className="hover:text-[var(--color-oro-viejo)] transition-colors">PARTICULARES</a>
          <a href="/catering-toledo#express" className="hover:text-[var(--color-oro-viejo)] transition-colors">EXPRESS</a>
          <a href="/catering-toledo#servicios-adicionales" className="hover:text-[var(--color-oro-viejo)] transition-colors">SERVICIOS ADICIONALES</a>
          <div className="relative group">
            <button className="hover:text-[var(--color-oro-viejo)] transition-colors uppercase">NUESTROS ESPACIOS</button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-0 border border-gray-100 min-w-[200px]">
              <a href="/castillo-guadamur" className="block px-4 py-2 text-xs hover:bg-gray-50 transition-colors">Castillo de Guadamur</a>
              <a href="/palacio-armino" className="block px-4 py-2 text-xs hover:bg-gray-50 transition-colors">Palacio del Armiño</a>
              <a href="/cigarral" className="block px-4 py-2 text-xs hover:bg-gray-50 transition-colors">Cigarral</a>
            </div>
          </div>
          <a href="/contacto" className="hover:text-[var(--color-oro-viejo)] transition-colors">CONTACTO</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-24 px-4">
        <h1 className="text-4xl font-serif italic text-[#2d2d2d] mb-12 text-center">Castillo de Guadamur</h1>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-[#404040] leading-relaxed mb-6 font-serif">
            El Castillo de Guadamur es una fortaleza situada en el municipio español de Guadamur, en la provincia de Toledo. Una bella fortaleza del medievo castellano inmersa en la historia medieval de nuestro país.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            El castillo se convierte en un idílico paraje de cuento para hacer realidad el sueño de toda pareja de sellar su unión en un entorno exclusivo y un paraje natural privilegiado. El éxito está asegurado en la organización de un día tan especial, acompañados de una exquisita gastronomía.
          </p>
          <a href="https://castillodeguadamur.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#2d2d2d] text-[#c5ad96] px-8 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-colors duration-300 font-bold tracking-widest text-xs uppercase mb-16">
            Visitar sitio web oficial
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/1.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/2.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/3.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/4.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/5.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/6.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/7.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/8.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/9.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/10.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/11.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/13.png",
            "https://castillodeguadamur.com/wp-content/uploads/2026/04/14.png",
            "https://castillodeguadamur.com/wp-content/uploads/2024/03/castillo-de-guadamur-exterior.png",
            "https://castillodeguadamur.com/wp-content/uploads/2024/03/castillo-de-guadamur-interior.png",
            "https://castillodeguadamur.com/wp-content/uploads/2024/03/castillo-de-guadamur-reflejo-nocturno.png"
          ].map((url, i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                <img 
                    src={url} 
                    alt={`Galería Castillo Guadamur ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
