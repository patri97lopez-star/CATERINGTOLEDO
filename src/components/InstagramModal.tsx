import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, MessageCircle, Send, Bookmark, User, MapPin } from 'lucide-react';

interface Post {
  id: number;
  user: string;
  location: string;
  image: string;
  likes: string;
  caption: string;
  type: 'image' | 'video';
  tags: string[];
}

const posts: Post[] = [
  {
    id: 1,
    user: 'cateringtoledo',
    location: 'Finca Los Olivos, Toledo',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    likes: '1,240',
    caption: 'Momentos que se quedan grabados. ✨ Bodas con alma donde cada detalle cuenta.',
    type: 'image',
    tags: ['#CateringToledo', '#Bodas2026', '#EventosConAlma']
  },
  {
    id: 2,
    user: 'cateringtoledo',
    location: 'Toledo, Spain',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
    likes: '1,502',
    caption: 'Aquiles Gourmet: El lujo de lo auténtico en tu mesa. 🍷 Descubre nuestros nuevos packs de experiencia gourmet. Desliza para ver la selección exclusiva.',
    type: 'image',
    tags: ['#AquilesGourmet', '#LujoGastronomico']
  },
  {
    id: 3,
    user: 'cateringtoledo',
    location: 'La Kocina de Lola',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80',
    likes: '960',
    caption: 'La Kocina de Lola: Behind the Scenes. 🌿 De la tierra a tu mesa. Así preparamos nuestras soluciones de IV y V gama con ingredientes KM0.',
    type: 'video',
    tags: ['#LaKocinaDeLola', '#KM0', '#BehindTheScenes']
  },
  {
    id: 4,
    user: 'cateringtoledo',
    location: 'Aquiles Repostería',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=80',
    likes: '2,890',
    caption: 'Aquiles Repostería: El arte de lo dulce. 🍰 Nuestra repostería artesanal se renueva para sorprender a los paladares más exigentes. ¿Cuál es tu favorito?',
    type: 'image',
    tags: ['#AquilesReposteria', '#AltaPasteleria', '#DulcesMomentos']
  },
  {
    id: 5,
    user: 'cateringtoledo',
    location: 'Toledo',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1000&q=80',
    likes: '745',
    caption: 'Alta gastronomía en cada plato. 🍽️ La excelencia es nuestra marca de la casa.',
    type: 'image',
    tags: ['#AltaGastronomia', '#EventosToledo']
  },
  {
    id: 6,
    user: 'cateringtoledo',
    location: 'Toledo',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80',
    likes: '1,820',
    caption: 'NUEVA ERA DIGITAL 2026 🚀 Fase 1: Auditoría. Fase 2: Web UX/UI. Fase 3: Social Media. Fase 4: Optimización. ¿Estás listo para el cambio?',
    type: 'image',
    tags: ['#Innovacion', '#CateringToledo2026', '#GastronomiaDigital']
  },
  {
    id: 7,
    user: 'cateringtoledo',
    location: 'Finca Los Olivos, Toledo',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1000&q=80',
    likes: '2,105',
    caption: 'Detalles que marcan la diferencia. 🍽️ Mesas diseñadas con mimo para tu gran día.',
    type: 'image',
    tags: ['#Bodas2026', '#CateringBodas', '#MesasBonitas']
  },
  {
    id: 8,
    user: 'cateringtoledo',
    location: 'Toledo, Spain',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    likes: '1,750',
    caption: 'Brindamos por el amor y los momentos inolvidables. 🥂 Tu celebración soñada, hecha realidad.',
    type: 'image',
    tags: ['#BodasExclusivas', '#EventosToledo', '#WeddingCatering']
  },
  {
    id: 9,
    user: 'cateringtoledo',
    location: 'Palacio de Galiana',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80',
    likes: '3,200',
    caption: 'Espacios de ensueño para bodas únicas. 🏰 Creamos atmósferas mágicas.',
    type: 'image',
    tags: ['#BodasToledo', '#DecoracionBodas', '#EventosUnicos']
  },
  {
    id: 10,
    user: 'cateringtoledo',
    location: 'Toledo',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    likes: '2,950',
    caption: 'La elegancia en cada plato. 🌿 Diseños que enamoran a primera vista.',
    type: 'image',
    tags: ['#CateringBonito', '#BodasConEncanto', '#GastronomiaToledo']
  },
  {
    id: 11,
    user: 'cateringtoledo',
    location: 'Catedrál de Toledo',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
    likes: '1,420',
    caption: 'Mesas dulces que son auténticas obras de arte. 🍰 Atrévete a sorprender.',
    type: 'image',
    tags: ['#ReposteríaArtesanal', '#MesasDulces', '#Bodas2026']
  },
  {
    id: 12,
    user: 'cateringtoledo',
    location: 'Finca Los Olivos, Toledo',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    likes: '3,810',
    caption: 'Texturas, colores y sabores que relatan historias. 🥗 Una experiencia sensorial.',
    type: 'image',
    tags: ['#CateringParaBodas', '#EventosDeLujo', '#Buffet']
  }
];

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstagramModal({ isOpen, onClose }: InstagramModalProps) {
  const [activeTab, setActiveTab] = React.useState('posts');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-xl overflow-hidden max-h-[95vh] flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left side: Profile & Feed */}
            <div className="flex-1 overflow-y-auto bg-white p-4 md:p-12 custom-scrollbar">
              {/* Profile Header */}
              <div className="flex items-center gap-6 md:gap-16 mb-12">
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-gray-50 to-gray-200 flex items-center justify-center font-serif text-5xl text-[var(--color-primary)] italic tracking-tighter">
                    CT
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <h2 className="text-3xl font-normal flex items-center gap-2">
                      cateringtoledo
                      <span className="w-5 h-5 bg-[#3897f0] rounded-full flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </span>
                    </h2>
                    <div className="flex gap-2">
                       <button className="px-6 py-1.5 bg-black text-white text-sm font-bold rounded-lg hover:bg-zinc-800 transition-colors">Follow</button>
                       <button className="px-6 py-1.5 bg-[#efefef] text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors">Message</button>
                    </div>
                  </div>
                  <div className="hidden md:flex gap-8 text-base mb-6">
                    <span><strong className="font-semibold">9</strong> posts</span>
                    <span><strong className="font-semibold">12.5K</strong> followers</span>
                    <span><strong className="font-semibold">450</strong> following</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold mb-1 text-[var(--color-primary)]">Catering Toledo</p>
                    <p className="text-gray-700 leading-relaxed font-light">
                      🍴 Gourmet Food & Eventos Exclusivos.<br/>
                      📍 Toledo | Madrid.<br/>
                      🌟 Tradición desde 1982.<br/>
                      ✨ Rediseñando el futuro de la gastronomía.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-t border-gray-200 flex justify-center gap-12 text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-8">
                 <button 
                  onClick={() => setActiveTab('posts')}
                  className={`py-4 border-t transition-colors -mt-px ${activeTab === 'posts' ? 'border-black text-black' : 'border-transparent hover:text-gray-600'}`}
                 >
                   Posts
                 </button>
                 <button 
                  onClick={() => setActiveTab('reels')}
                  className={`py-4 border-t transition-colors -mt-px ${activeTab === 'reels' ? 'border-black text-black' : 'border-transparent hover:text-gray-600'}`}
                 >
                   Reels
                 </button>
                 <button 
                  onClick={() => setActiveTab('tagged')}
                  className={`py-4 border-t transition-colors -mt-px ${activeTab === 'tagged' ? 'border-black text-black' : 'border-transparent hover:text-gray-600'}`}
                 >
                   Tagged
                 </button>
              </div>

              {/* Grid Feed */}
              <div className="grid grid-cols-3 gap-1 md:gap-8">
                {(activeTab === 'posts' ? posts : activeTab === 'reels' ? posts.filter((_, i) => i % 4 === 0) : posts.filter((_, i) => i % 3 === 1)).map((post) => (
                  <div key={post.id} className="aspect-square relative group cursor-pointer overflow-hidden rounded-sm">
                    <img src={post.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-6 font-bold">
                      <span className="flex items-center gap-2 text-sm"><Heart className="fill-current" size={18}/> {post.likes}</span>
                      <span className="flex items-center gap-2 text-sm"><MessageCircle className="fill-current" size={18}/> 32</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Detailed View */}
            <div className="hidden lg:flex flex-col w-[400px] border-l border-gray-100 bg-white">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-200 bg-gradient-to-tr from-gray-50 to-gray-200 flex items-center justify-center font-serif text-sm text-[var(--color-primary)] italic shadow-inner">CT</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold leading-none">cateringtoledo</span>
                    <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Toledo, Spain</span>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {posts.slice(0, 4).map(post => (
                  <div key={`det-${post.id}`} className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-50 to-gray-200 flex-shrink-0 flex items-center justify-center font-serif text-xs text-[var(--color-primary)] italic border border-gray-100 shadow-inner">CT</div>
                      <div className="flex-1">
                        <p className="text-[12px] leading-relaxed text-gray-800">
                          <span className="font-bold mr-2">cateringtoledo</span>
                          <span className="font-light text-gray-600">{post.caption}</span>
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {post.tags.map(tag => (
                            <span key={tag} className="text-[10px] text-[var(--color-primary)] font-medium cursor-pointer hover:underline">{tag}</span>
                          ))}
                        </div>
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest mt-2 block font-medium">2 HOURS AGO</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100">
                 <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-4">
                       <Heart size={24} className="hover:text-gray-500 cursor-pointer" />
                       <MessageCircle size={24} className="hover:text-gray-500 cursor-pointer" />
                       <Send size={24} className="hover:text-gray-500 cursor-pointer" />
                    </div>
                    <Bookmark size={24} className="hover:text-gray-500 cursor-pointer" />
                 </div>
                 <div className="flex flex-col gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#9B8133]">PRÓXIMAMENTE: NUEVA ERA 2026</span>
                    <a 
                      href="https://www.instagram.com/cateringtoledo?igsh=MWF3bmZqaGw0cXFudw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg text-center hover:bg-zinc-800 transition-all shadow-lg"
                    >
                      Ver perfil completo
                    </a>
                 </div>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button 
              onClick={onClose}
              className="md:hidden absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full z-10"
            >
              <X size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
