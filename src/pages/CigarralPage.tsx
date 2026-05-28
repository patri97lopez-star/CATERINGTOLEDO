import { ArrowLeft } from 'lucide-react';

export default function CigarralPage() {
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
        <h1 className="text-4xl font-serif italic text-[#2d2d2d] mb-12 text-center">Cigarral del Carmen</h1>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-[#404040] leading-relaxed mb-6 font-serif">
            Un alojamiento único situado en uno de los cigarrales históricos de Toledo. 
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Estas casas de campo, inspiradas en las antiguas villas romanas y árabes, fueron concebidas para resguardarse del intenso calor veraniego, por lo que están rodeadas de jardines, fuentes y arboledas.
            Con una de las vistas más emblemáticas de la ciudad, frente al puente de San Martín y la iglesia de San Juan de los Reyes, el Cigarral del Carmen se encuentra rodeado de senderos bordeados de cipreses, olivos y almendros, que conforman el paisaje tradicional de los cigarrales toledanos.
          </p>
          <a href="https://www.cigarraldelcarmen.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#2d2d2d] text-[#c5ad96] px-8 py-3 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-colors duration-300 font-bold tracking-widest text-xs uppercase mb-16">
            Visitar sitio web oficial
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "https://www.cigarraldelcarmen.com/media/cabeceras/cabeceraGaleria3.jpg",
            "https://www.cigarraldelcarmen.com/media/CIGARRAL_DEL_CARMEN_20240513_032.JPG",
            "https://www.cigarraldelcarmen.com/media/galeria/CIGARRAL_DEL_CARMEN_20240513_040.JPG",
            "https://www.cigarraldelcarmen.com/media/Piscina/CIGARRAL_DEL_CARMEN_20240513_063.jpg",
            "https://www.cigarraldelcarmen.com/media/galeria2/cigarral-del-carmen-20240513-047.jpg",
            "https://www.cigarraldelcarmen.com/media/galeria/dron2.jpg",
            "https://www.cigarraldelcarmen.com/media/galeria3/20241015_071.jpg",
            "https://www.cigarraldelcarmen.com/media/CIGARRAL_DEL_CARMEN_20240513_067.JPG",
            "https://www.cigarraldelcarmen.com/media/galeria3/20241015_001.jpg",
            "https://www.cigarraldelcarmen.com/media/Entrada%20edificio%20principal/CIGARRAL_DEL_CARMEN_20241015_004.jpg",
            "https://www.cigarraldelcarmen.com/media/Varios/CIGARRAL_DEL_CARMEN_20240513_070.jpg",
            "https://www.cigarraldelcarmen.com/media/galeria/CIGARRAL_DEL_CARMEN_20240513_208.JPG",
            "https://www.cigarraldelcarmen.com/media/El%20jard%C3%ADn/CIGARRAL_DEL_CARMEN_20240513_106.jpg",
            "https://www.cigarraldelcarmen.com/media/Sal%C3%B3n%20principal/CIGARRAL_DEL_CARMEN_20241015_021.jpg",
            "https://www.cigarraldelcarmen.com/media/Sal%C3%B3n%20principal/CIGARRAL_DEL_CARMEN_20241015_033.jpg",
            "https://www.cigarraldelcarmen.com/media/home/homesinantena.JPG"
          ].map((url, i) => (
            <div key={i} className="aspect-video bg-gray-100 rounded-lg overflow-hidden group">
                <img 
                    src={url} 
                    alt={`Cigarral del Carmen ${i + 1}`} 
                    className="w-full h-full object-cover rounded-lg shadow-md group-hover:scale-110 transition-transform duration-700"
                />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
