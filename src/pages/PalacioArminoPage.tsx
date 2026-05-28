import { ArrowLeft } from 'lucide-react';

export default function PalacioArminoPage() {
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
        <h1 className="text-4xl font-serif italic text-[#2d2d2d] mb-12 text-center">La Casa del Armiño</h1>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-[#404040] leading-relaxed mb-6 font-serif">
            Vacaciones en una mansión histórica en el corazón de Toledo. Alójate en una residencia histórica vinculada al legado del Greco.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Una experiencia única en una casa de ensueño. La calma y la tranquilidad en el centro de la ciudad de las tres culturas, donde disfrutarás del lujo y el patrimonio en un solo lugar.
          </p>
          <a href="https://casadelarmino.es/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#2d2d2d] text-[#c5ad96] px-8 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-colors duration-300 font-bold tracking-widest text-xs uppercase mb-16">
            Visitar sitio web oficial
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-xl font-serif italic mb-4 text-[#2d2d2d]">Interior</h3>
            <p className="text-sm text-gray-600 leading-relaxed">El interior de la casa refleja un fuerte patrimonio histórico, donde la elegancia y la belleza de cada espacio cuentan la historia de este lugar único.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif italic mb-4 text-[#2d2d2d]">Exterior</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Los patios y jardines de la casa ofrecen un espacio íntimo, perfecto para disfrutar de momentos de descanso, reuniones o simplemente dejarse llevar por la calma del entorno.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif italic mb-4 text-[#2d2d2d]">El Torreón</h3>
            <p className="text-sm text-gray-600 leading-relaxed">El torreón le ofrece una vista de 360° sobre la ciudad de Toledo y sus alrededores, permitiendo disfrutar de momentos privados y tranquilos mientras contempla el paisaje.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "https://casadelarmino.es/wp-content/uploads/2026/02/60F79AF7-863A-472C-80AD-262F39BA38C7-1.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/IMG_0395.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/IMG_0413.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/IMG_0838.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/P1099115.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/arquitectura1.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/arco-arabe.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/03/406181825.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/03/406192970.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/03/406192974.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/03/406181860.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/casa.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/Salon-jardin.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/03/436815713.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/TORREON-2.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/Torreon-2-1.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/TORREON.jpg",
            "https://casadelarmino.es/wp-content/uploads/2026/02/VISTAS-AL-PATIO-DE-LA-CASA-DESDE-EL-TORREON.jpg"
          ].map((url, i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                <img 
                    src={url} 
                    alt={`Casa del Armiño ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
