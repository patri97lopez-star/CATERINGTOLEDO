import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <main className="w-full bg-[#fdfcf9]">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#e5e5e5] py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[var(--color-oro-viejo)] transition-colors">
            <ArrowLeft size={16} />
            Grupo Aquiles
          </Link>
        </div>
      </nav>

      {/* Header & Image */}
      <section className="px-4 md:px-20 max-w-7xl mx-auto py-[120px]">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="font-serif text-[40px] md:text-[64px] leading-tight font-bold text-[var(--color-primary)] mb-8">Contáctenos</h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] leading-relaxed max-w-md">
              Permítanos elevar su próxima celebración con una propuesta gastronómica a la medida. Cada detalle cuenta en la creación de una experiencia inolvidable.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-[4/3] bg-[var(--color-surface-container)] overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC29KIix7RAmyOhESG054liN2sFCagn8nkPM542vTSEmumejFTQ81Ovy29-E9lwGHjrIuzzC6-H-KM7HONaMMfoSXWIggi-55t3jCXQmeAubRxmhOPycGjm3fIdQCGMunkLnqfJ25byJpeFJo8qNgevSP0PI6vmKsixLFyCRiZYlkes7KaggxdoJiQdV2cjMblCKPx6Gk4en6rYtrOV-8hSgYwyVFexxBDcN3thwX6WZyUp-cMSlhAdTUuGptIDGwKRHTH7pbS3F8nz" 
                alt="Plato elegante"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="px-4 md:px-20 max-w-7xl mx-auto pb-[120px]">
        <div className="flex flex-col md:flex-row gap-16 md:gap-[24px]">
          {/* Contact Form */}
          <div className="w-full md:w-7/12 border border-[var(--color-borde-sutil)] p-8 md:p-12 bg-white">
            <h2 className="font-serif text-[32px] font-semibold text-[var(--color-primary)] mb-8">Solicite Información</h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full border-b border-[var(--color-borde-sutil)] pb-4 bg-transparent outline-none focus:border-[var(--color-oro-viejo)] transition-colors text-[var(--color-primary)] placeholder-[var(--color-outline)] italic" 
                />
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="w-full border-b border-[var(--color-borde-sutil)] pb-4 bg-transparent outline-none focus:border-[var(--color-oro-viejo)] transition-colors text-[var(--color-primary)] placeholder-[var(--color-outline)] italic" 
                />
              </div>
              
              <div className="w-full border-b border-[var(--color-borde-sutil)]">
                <select className="w-full pb-4 bg-transparent outline-none text-[var(--color-outline)] italic appearance-none cursor-pointer">
                  <option value="" disabled selected>Tipo de evento</option>
                  <option value="boda">Boda</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="regalo">Cesta / Regalo Gourmet</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <textarea 
                placeholder="Cuéntenos sobre su evento..." 
                rows={4}
                className="w-full border-b border-[var(--color-borde-sutil)] bg-transparent outline-none focus:border-[var(--color-oro-viejo)] transition-colors text-[var(--color-primary)] placeholder-[var(--color-outline)] italic resize-none"
              ></textarea>

              <button type="submit" className="bg-black text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[var(--color-oro-viejo)] transition-colors duration-300 w-fit mt-4">
                ENVIAR SOLICITUD
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-5/12 ml-0 md:ml-12 flex flex-col justify-center">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-oro-viejo)] mb-6 block">Información Directa</span>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-[var(--color-on-surface-variant)]">
                  <Phone className="w-5 h-5 text-[var(--color-oro-viejo)]" />
                  <span>+34 925 213 776 / +34 606 817 291</span>
                </li>
                <li className="flex items-center gap-4 text-[var(--color-on-surface-variant)]">
                  <Mail className="w-5 h-5 text-[var(--color-oro-viejo)]" />
                  <span>info@grupoaquiles.es</span>
                </li>
                <li className="flex items-start gap-4 text-[var(--color-on-surface-variant)]">
                  <MapPin className="w-5 h-5 text-[var(--color-oro-viejo)] shrink-0" />
                  <span>Paseo de La Rosa, 132, 45006 Toledo, España</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-oro-viejo)] mb-6 block">Síguenos</span>
              <div className="flex gap-6 text-[var(--color-on-surface-variant)] items-center">
                <a 
                  href="https://www.instagram.com/cateringtoledo?igsh=MWF3bmZqaGw0cXFudw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#2d2d2d] text-[#c5ad96] px-6 py-2 rounded-full shadow-lg hover:bg-[#8c338c] hover:text-white transition-colors duration-300 flex items-center justify-center group font-bold tracking-widest text-xs uppercase"
                >
                  Instagram
                </a>
                <a href="#" className="hover:text-[var(--color-oro-viejo)] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[var(--color-oro-viejo)] transition-colors">Facebook</a>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[16/9] w-full relative overflow-hidden flex items-center justify-center border border-[var(--color-borde-sutil)]">
              <iframe 
                src="https://maps.google.com/maps?q=Paseo+de+La+Rosa,+132,+45006+Toledo,+España&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Suscríbase */}
      <section className="bg-[#1e1d1d] text-white py-[100px]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-[32px] md:text-[40px] font-bold mb-6">Suscríbase a la Excelencia</h2>
          <p className="text-gray-400 italic mb-10 max-w-md mx-auto">
            Reciba nuestras propuestas de temporada y menús exclusivos directamente en su correo.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Su email" 
              className="flex-1 bg-transparent border border-gray-600 px-6 py-4 outline-none focus:border-[var(--color-oro-viejo)] text-white placeholder-gray-500 transition-colors"
            />
            <button type="submit" className="border border-[var(--color-oro-viejo)] text-[var(--color-oro-viejo)] px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[var(--color-oro-viejo)] hover:text-white transition-all duration-300">
              UNIRSE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
