import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ES: {
    // Shared
    'enter': 'Entrar',
    'discover': 'Descubrir',
    'contact': 'Contacto',
    'home': 'Inicio',
    'catalog': 'Catálogo',
    'back': 'Volver',
    
    // HomePage
    'catering_toledo_subtitle': 'La distinción en celebraciones y alta gastronomía',
    'aquiles_gourmet_subtitle': 'Cestas Artesanas de regalo y Lotes Navideños',
    'footer_text': 'Excelencia Gastronómica',
    'footer_locations': 'Toledo - Madrid',

    // Catering Toledo Page
    'est_1982': 'Est. 1982',
    'toledo_hero_title': 'Catering Toledo',
    'toledo_hero_subtitle': 'La excelencia en el arte de recibir',
    'tab_empresas': 'EMPRESAS',
    'tab_particulares': 'PARTICULARES',
    'tab_express': 'EXPRESS',
    'tab_servicios': 'SERVICIOS ADICIONALES',
    'tab_espacios': 'NUESTROS ESPACIOS',

    // Gourmet Space
    'gourmet_title': 'Grupo Aquiles',
    'regalos_y_lotes': 'REGALOS Y LOTES',
    'lola_de_espana': 'LOLA DE ESPAÑA',
    'nuestras_opciones': 'NUESTRAS OPCIONES',
    'comprar_ahora': 'Comprar Ahora',
    
    // Contact
    'contact_title': 'Contacto',
    'name': 'Nombre',
    'email': 'Email',
    'message': 'Mensaje',
    'send': 'Enviar',
  },
  EN: {
    // Shared
    'enter': 'Enter',
    'discover': 'Discover',
    'contact': 'Contact',
    'home': 'Home',
    'catalog': 'Catalog',
    'back': 'Back',

    // HomePage
    'catering_toledo_subtitle': 'Distinction in celebrations and haute cuisine',
    'aquiles_gourmet_subtitle': 'Artisan gift baskets and Christmas boxes',
    'footer_text': 'Gastronomic Excellence',
    'footer_locations': 'Toledo - Madrid',

    // Catering Toledo Page
    'est_1982': 'Est. 1982',
    'toledo_hero_title': 'Catering Toledo',
    'toledo_hero_subtitle': 'Excellence in the art of receiving',
    'tab_empresas': 'COMPANIES',
    'tab_particulares': 'PRIVATE EVENTS',
    'tab_express': 'EXPRESS',
    'tab_servicios': 'ADDITIONAL SERVICES',
    'tab_espacios': 'OUR SPACES',

    // Gourmet Space
    'gourmet_title': 'Aquiles Group',
    'regalos_y_lotes': 'GIFTS & BOXES',
    'lola_de_espana': 'LOLA DE ESPAÑA',
    'nuestras_opciones': 'OUR OPTIONS',
    'comprar_ahora': 'Buy Now',

    // Contact
    'contact_title': 'Contact',
    'name': 'Name',
    'email': 'Email',
    'message': 'Message',
    'send': 'Send',
  }
};

// Extremely comprehensive unique translation dictionary for full DOM translation
const esToEnDictionary: Record<string, string> = {
  // Navigation & Shared items
  "EMPRESAS": "COMPANIES",
  "PARTICULARES": "INDIVIDUALS",
  "EXPRESS": "EXPRESS",
  "SERVICIOS ADICIONALES": "ADDITIONAL SERVICES",
  "NUESTROS ESPACIOS": "OUR SPACES",
  "Nuestros Espacios": "Our Spaces",
  "CONTACTO": "CONTACT",
  "Contacto": "Contact",
  "INICIO": "HOME",
  "Inicio": "Home",
  "Grupo Aquiles": "Aquiles Group",
  "Dossier Coffee Break": "Coffee Break Brochure",
  "Dossier Brunch": "Brunch Brochure",
  "Dossier Cóctel de Gala": "Gala Cocktail Brochure",
  "Dossier Vino Español": "Spanish Wine Brochure",
  "Dossier Vino 2": "Wine 2 Brochure",
  "Descargar Lunch 1": "Download Lunch 1",
  "Descargar Lunch 2": "Download Lunch 2",
  
  // Tab headers (Upper & Mixed case)
  "empresas": "COMPANIES",
  "particulares": "PRIVATE EVENTS",
  "express": "EXPRESS",
  "servicios": "ADDITIONAL SERVICES",
  "espacios": "OUR SPACES",

  // Castillo de Guadamur Page
  "Castillo de Guadamur": "Guadamur Castle",
  "El Castillo de Guadamur es una fortaleza situada en el municipio español de Guadamur, en la provincia de Toledo. Una bella fortaleza del medievo castellano inmersa en la historia medieval de nuestro país.": 
    "The Castillo de Guadamur is a fortress located in the Spanish municipality of Guadamur, in the province of Toledo. A beautiful fortress of the Castilian Middle Ages immersed in the medieval history of Spain.",
  "El castillo se convierte en un idílico paraje de cuento para hacer realidad el sueño de toda pareja de sellar su unión en un entorno exclusivo y un paraje natural privilegiado. El éxito está asegurado en la organización de un día tan especial, acompañados de una exquisita gastronomía.": 
    "The castle becomes an idyllic fairytale setting to make every couple's dream of sealing their union in an exclusive environment and a privileged natural setting come true. Success is guaranteed in the organization of such a special day, accompanied by exquisite gastronomy.",
  "Visitar sitio web oficial": "Visit Official Website",

  // Casa del Armiño Page
  "La Casa del Armiño": "The House of Ermine",
  "Vacaciones en una mansión histórica en el corazón de Toledo. Alójate en una residencia histórica vinculada al legado del Greco.":
    "Vacation in a historic mansion in the heart of Toledo. Stay in a historical residence linked to El Greco's legacy.",
  "Una experiencia única en una casa de ensueño. La calma y la tranquilidad en el centro de la ciudad de las tres culturas, donde disfrutarás del lujo y el patrimonio en un solo lugar.":
    "A unique experience in a dream home. The calm and tranquility in the center of the city of the three cultures, where you will enjoy luxury and heritage all in one place.",
  "Interior": "Interior",
  "El interior de la casa refleja un fuerte patrimonio histórico, donde la elegancia y la belleza de cada espacio cuentan la historia de este lugar único.":
    "The interior of the house reflects a strong historical heritage, where the elegance and beauty of each space tell the story of this unique place.",
  "Exterior": "Exterior",
  "Los patios y jardines de la casa ofrecen un espacio íntimo, perfectos para disfrutar de momentos de descanso, reuniones o simplemente dejarse llevar por la calma del entorno.":
    "The patios and gardens of the house offer an intimate space, perfect for enjoying moments of rest, meetings or simply letting yourself go in the calm of the surroundings.",
  "El Torreón": "The Tower",
  "El torreón le ofrece una vista de 360° sobre la ciudad de Toledo y sus alrededores, permitiendo disfrutar de momentos privados y tranquilos mientras contempla el paisaje.":
    "The tower offers a 360° view over the city of Toledo and its surroundings, allowing you to enjoy private and quiet moments while contemplating the landscape.",

  // Cigarral Page
  "Cigarral del Carmen": "Cigarral del Carmen",
  "Un alojamiento único situado en uno de los cigarrales históricos de Toledo.":
    "A unique accommodation located in one of the historic cigarrales of Toledo.",
  "Estas casas de campo, inspiradas en las antiguas villas romanas y árabes, fueron concebidas para resguardarse del intenso calor veraniego, por lo que están rodeadas de jardines, fuentes y arboledas.":
    "These country houses, inspired by ancient Roman and Arabic villas, were designed to escape the intense summer heat, and are therefore surrounded by gardens, fountains, and groves.",
  "Con una de las vistas más emblemáticas de la ciudad, frente al puente de San Martín y la iglesia de San Juan de los Reyes, el Cigarral del Carmen se encuentra rodeado de senderos bordeados de cipreses, olivos y almendros, que conforman el paisaje tradicional de los cigarrales toledanos.":
    "With one of the most emblematic views of the city, in front of San Martín Bridge and San Juan de los Reyes Church, Cigarral del Carmen is surrounded by paths lined with cypresses, olive trees, and almond trees, creating the traditional landscape of Toledo's cigarrales.",

  // Contact Page
  "Contáctenos": "Contact Us",
  "Permítanos elevar su próxima celebración con una propuesta gastronómica a la medida. Cada detalle cuenta en la creación de una experiencia inolvidable.":
    "Allow us to elevate your next celebration with a custom gastronomic proposal. Every detail counts in creating an unforgettable experience.",
  "Solicite Información": "Request Information",
  "Nombre completo": "Full Name",
  "Correo electrónico": "Email Address",
  "Tipo de evento": "Event Type",
  "Boda": "Wedding",
  "Evento Corporativo": "Corporate Event",
  "Cesta / Regalo Gourmet": "Gourmet Gift / Box",
  "Otro": "Other",
  "Cuéntenos sobre su evento...": "Tell us about your event...",
  "ENVIAR SOLICITUD": "SEND REQUEST",
  "Información Directa": "Direct Contact",
  "Paseo de La Rosa, 132, 45006 Toledo, España": "Paseo de La Rosa, 132, 45006 Toledo, Spain",
  "Síguenos": "Follow Us",
  "Solicite información": "Request Information",

  // Lola de España / Lola de España Page
  "Especialistas en Hostelería": "Hospitality Specialists",
  "La Kocina de Lola": "Lola's Kitchen",
  "de Lola": "of Lola",
  "Productos de IV y V Gama para facilitar la vida a la hostelería.": "Pre-prepared & Ready-to-serve products to make life easier in hospitality.",
  "Nuestra Historia": "Our Story",
  "De la mano de grandes chefs": "Hand in hand with great chefs",
  "Desde hace 15 años nació La Kocina de Lola, de la mano de reconocidos maestros de la cocina.": "Founded 15 years ago, La Kocina de Lola was developed by renowned kitchen masters.",
  "Nuestra misión siempre ha sido clara: elaborar productos de IV y V gama con la máxima calidad para facilitar la operatividad en el sector de la hostelería, sin renunciar al sabor artesano y la excelencia gastronómica.":
    "Our mission has always been clear: to manufacture premium pre-prepared and ready-to-serve products with the highest quality to facilitate hospitality operations, without sacrificing artisanal flavor and culinary excellence.",
  "Con grandes clientes que siempre han confiado en nuestro buen hacer, apostamos por materias primas de primera calidad, productos de KM0 y el fomento de la agricultura ecológica.":
    "With prestigious clients who have always trusted our expertise, we commit to premium raw materials, local KM0 ingredients, and the promotion of organic farming.",
  "Nuestra Cocina": "Our Kitchen",
  "Lola de España": "Lola de España",

  // Additional elements
  "COFFEE BREAK / BRUNCH": "COFFEE BREAK / BRUNCH",
  "Pausas con sabor y elegancia para tu jornada.": "Flavorful and elegant pauses for your workday.",
  "Desde una pausa café revitalizante hasta un brunch completo con repostería artesana y bocados gourmet. Diseñados para mantener la energía y fomentar el networking.":
    "From a revitalizing coffee break to a full brunch with artisanal pastries and gourmet bites. Designed to sustain energy and foster networking.",
  "VINO ESPAÑOL": "SPANISH WINE EXPERIENCE",
  "El broche de oro perfecto para tus presentaciones.": "The perfect golden touch for your presentations.",
  "Un formato dinámico, exquisito y típicamente nuestro. Selecciones de tapas frías y calientes elaboradas al momento, maridadas con los mejores caldos de la tierra.":
    "A dynamic, exquisite, and typically local format. On-the-spot selection of hot and cold tapas, paired with the land's finest wines.",
  "COCTEL DE GALA": "GALA COCKTAIL",
  "Distinción y alta gastronomía en formato cóctel.": "Distinction and haute cuisine in dynamic cocktail form.",
  "Para las ocasiones más solemnes de tu empresa. Un despliegue de creatividad y sabor donde la cocina en miniatura sorprende a los paladares más exigentes.":
    "For your business's most solemn occasions. A showcase of creativity and flavor where miniature haute cuisine surprises the most demanding palates.",
  "SERVICIOS CATERING EMPRESAS": "BUSINESS CATERING SERVICES",
  "Tu éxito será el nuestro, por eso cuidamos todos los detalles para adaptarnos al evento que necesites.":
    "Your success is ours, which is why we take care of every detail to adapt to any event you require.",
  "Una pausa para tomar un café con repostería artesana, un almuerzo de trabajo, un cóctel de inauguración o una ocasión especial para tu empresa.":
    "A coffee break with handmade pastries, a business lunch, an opening cocktail, or any special occasion for your company.",
  "SERVICIOS CATERING PARTICULARES": "PRIVATE CATERING SERVICES",
  "Celebra tus momentos más especiales y hazlos inolvidables.": "Celebrate your most special moments and make them unforgettable.",
  "Las fiestas hay que vivirlas, por eso nos ocupamos de todo para que sólo te preocupes de disfrutar con tus invitados.":
    "Parties are meant to be lived, which is why we handle everything so you only have to enjoy with your guests.",
  "Elige la opción que mejor se adapta a ti, según la ocasión. Pondremos todo nuestro cariño en todos los detalles, para que todo esté a tu gusto.":
    "Choose the option that best suits you, according to the occasion. We will put all our love into every detail so that everything is to your taste.",
  "La opción perfecta para celebraciones dinámicas.": "The perfect choice for dynamic celebrations.",
  "Nuestros menús lunch están diseñados para ofrecer una experiencia gastronómica completa y variada, ideal para eventos de pie donde la interacción es clave.":
    "Our lunch menus are designed to offer a complete and diverse gastronomic experience, ideal for stand-up events where interaction is key.",
  "SERVICIOS EXPRESS": "EXPRESS CATERING",
  "Disfruta de la alta gastronomía en tu casa u oficina de forma cómoda.": "Enjoy haute cuisine at home or in your office comfortably.",
  "Te lo llevamos a donde nos digas listo para servir. Platos elaborados con el mismo mimo y calidad de siempre, presentados en formato práctico.":
    "We deliver it ready to serve wherever you specify. Dishes prepared with our lifelong care and quality, presented in a practical format.",
  "Cortador de Jamón": "Ham Carver",
  "Barra de Cócteles": "Cocktail Bar",
  "Decoración y Flores": "Decoration and Flowers",
  "Música e Iluminación": "Music and Lighting",
  "Descubre los lugares de ensueño donde podemos realizar tu evento.": "Discover the dream locations where we can host your event.",
  "Colaboramos en exclusiva con las fincas, palacios y castillos más espectaculares de Toledo y alrededores, garantizando un marco inigualable.":
    "We collaborate exclusively with the most spectacular estates, palaces, and castles in and around Toledo, securing an unmatched setting.",
  
  // Cart-related
  "Su Cesta": "Your Cart",
  "Su cesta está vacía": "Your cart is empty",
  "Seguir comprando": "Continue shopping",
  "Total (PVP)": "Total (VAT Incl.)",
  "IVA INCLUIDO": "VAT INCLUDED",
  "Finalizar Pedido": "Go to Checkout",
  "Envío gratuito en Toledo ciudad": "Free shipping in Toledo city",
  "Integración de pago próximamente": "Payment integration coming soon",

  // ChatBot
  "Asistente Aquiles": "Aquiles Assistant",
  "¡Hola! Soy tu asistente de Grupo Aquiles. ¿En qué puedo ayudarte hoy?": "Hello! I am your Aquiles Group Assistant. How can I help you today?",
  "Escribir un mensaje...": "Write a message...",
  "Pregúntame lo que quieras": "Ask me anything",
  
  // Grupo Empresas Homepage & Brand Descriptions
  "Excelencia Gastronómica e Integral": "Integral & Gastronomic Excellence",
  "Grupo Aquiles: Tu Destino para Catering y Hostelería en Toledo": "Aquiles Group: Your Destination for Catering and Hospitality in Toledo",
  "Bienvenido a Grupo Aquiles: Tu Destino para Catering y Hostelería en Toledo": "Welcome to Aquiles Group: Your Destination for Catering and Hospitality in Toledo",
  "El buen gusto es un placer. Producción propia de alta calidad, profesionalidad y pasión combinadas para conseguir su éxito.":
    "Good taste is a pleasure. Premium self-production, professionalism, and passion combined for your success.",
  "Catering Toledo es el resultado de la confianza de nuestros clientes. Su satisfacción es nuestra recompensa y motivación, gracias a ellos seguimos creciendo.":
    "Catering Toledo is the result of our clients' trust. Your satisfaction is our reward and motivation; thanks to you, we continue to grow.",
  "Nuestro equipo humano destaca por su profesionalidad e implicación. Nos apasiona nuestro trabajo y día a día trabajamos para que cada evento sea una experiencia única.":
    "Our outstanding human team stands out for its professionalism and commitment. We love what we do and work day in and day out to make every event a unique experience.",
  "Producción propia de alta calidad, profesionalidad, buen gusto, detalles y mejora constante.":
    "Bespoke high-quality self-production, professionalism, refined taste, attention to detail, and constant improvement.",
  "Empresas y Particulares": "For Businesses and Private Events",
  "Llevamos más de 30 años dedicados a la elaboración de Regalos de Empresa, Lotes de Navidad y Cestas personalizadas, primero con nuestras tiendas físicas y ahora con nuestro E-Commerce.":
    "For over 30 years we have been dedicated to designing Corporate Gifts, Christmas Boxes, and personalized Baskets, first in our physical shops and now through our E-commerce.",
  "Buscando siempre la mejor relación calidad/Precio con productos Gourmet y Vinos de todas las D.O, Conservas premium (Los Peperetes, Ramón Peña), Embutidos Joselito, 5 Jotas, y caldos como Vega Sicilia o Moët & Chandon.":
    "Always with the finest visual price-to-quality ratio, featuring Gourmet foods and Wines from leading Appellations, premium local preserves (Los Peperetes, Ramón Peña), Joselito/5 Jotas cured ham, and fine selections like Vega Sicilia or Moët & Chandon.",
  "Regalos adaptados a sus gustos, necesidades y presupuesto, con logística 360º.":
    "Tailor-made gifts suited to your taste, needs, and budget, with fully integrated 360-degree logistics.",
  "Regalos y Lotes de Navidad": "Gifts and Christmas Gift Boxes",
  "La Kocina de Lola - IV y V Gama": "Lola's Kitchen - Pre-prepared Gastronomy",
  "De la Mano de grandes chefs como Richard Alcayde y Jordi Bataller, desde hace 15 años nació la Kocina de Lola para facilitar la vida a la hostelería.":
    "Crafted by culinary masters such as Richard Alcayde and Jordi Bataller, Lola's Kitchen was born 15 years ago to streamline operations for the hospitality industry.",
  "Elaborando con la máxima calidad y materias primas excelentes para facilitar la operatividad de los negocios, sin renunciar al sabor tradicional.":
    "Elaborating with the highest standards and supreme raw ingredients to optimize business hospitality workflows without losing the home-cooked traditional flavor.",
  "Soluciones para catering, banquetes y restaurantes.": "Optimized solutions for catering, banquets, and restaurants.",
  
  // Cestas Page
  "Regalos de Empresa": "Corporate Gifts",
  "Lotes y Cestas": "Gourmet Boxes & Baskets",
  "Joyas de nuestra gastronomía": "Jewels of our local gastronomy",
  "Colección Artesana 2026": "Artisan Collection 2026",
  "Exclusividad Corporativa": "Corporate Exclusivity",
  "Diseñamos experiencias gastronómicas que fortalecen los lazos corporativos con un toque de distinción.":
    "We design dynamic culinary experiences that strengthen corporate bonds with an exquisite touch of refinement.",
  "En Aquiles Gourmet nos especializamos en la confección de regalos exclusivos para empresas que buscan diferenciarse. Nuestra propuesta combina la tradición de los mejores productores nacionales con una presentación de lujo.":
    "At Aquiles Gourmet we specialize in crafting exclusive corporative gifts for brands wishing to rise above. Our collection pairs the legacy of supreme national producers with luxurious presentation.",
  "Desde detalles individuales para eventos hasta grandes lotes para empleados y clientes VIP, nos adaptamos a su presupuesto sin comprometer la excelencia.":
    "From individual gift sets for special ceremonies to massive supplies for personnel and VIP partners, we accommodate your budget parameters without sacrificing excellence.",
  "Personalización Total": "Complete Customization",
  "Branding corporativo en estuches y tarjetas.": "Corporate custom branding on packages, cases, and greetings.",
  "Stock Garantizado": "Guaranteed Availability",
  "Reserva anticipada de productos exclusivos.": "Advance stock reservation for premium select articles.",
  "Logística VIP": "VIP Transport Logistics",
  "Envíos capilares a múltiples destinos.": "Capillary direct shipments to numerous multiple addresses.",
  "Asesoría Gourmet": "Culinary Advisory",
  "Sommeliers y expertos a su servicio.": "Premium expert sommeliers and gourmet advisors at your disposal.",
  "100% Personalizados": "100% Bespoke",
  "Dossier 2026": "2026 Portfolio Brochure",
  "¿Por qué elegir Aquiles Gourmet para su empresa?": "Why opt for Aquiles Gourmet for your business?",
  "Proyectos a Medida": "Tailor-made Projects",
  "Diseñamos lotes únicos que integran la identidad de su marca mediante logotipos grabados, tarjetas personalizadas y una logística impecable.":
    "We design unique hampers integrating your brand's unique identity with custom printed cards, custom engravings, and spotless delivery.",
  "Branding corporativo en estuches": "Corporate branding integrated on gift cases",
  "Mensajes de agradecimiento personalizados": "Bespoke personalized greeting notes",
  "Gestión de envíos a múltiples destinos": "Comprehensive direct shipping to thousands of endpoints",
  "Solicitar Dossier Empresa": "Request Business Brochure",
  "Garantía Logística": "Logistical Guarantee",
  "Entregas en 24/48h en toda la península con embalajes reforzados y seguimiento constante de su pedido.":
    "24/48 hours mainland delivery across the nation, reinforced packaging containers, and ongoing active tracking.",
  "DISTRIBUCIÓN NACIONAL": "NATIONAL MAINLAND COVERAGE",
  "CALIDAD EXTREMA": "MAXIMUM QUALITY",
  "Seleccionamos solo lo mejor de cada D.O.": "We select only the best items of each Appellation of Origin.",
  "SERVICIO VIP": "VIP SERVICE",
  "Gestión personalizada paso a paso.": "Bespoke, direct step-by-step communication.",
  "La tradición de compartir momentos únicos alrededor de una mesa excelente.":
    "The fine tradition of celebrating unforgettable events around an exceptional gourmet feast.",
  "En Aquiles Gourmet diseñamos las Cestas de Navidad más exclusivas del mercado, seleccionando cuidadosamente cada embutido, turrón y caldo para que su regalo sea inolvidable.":
    "At Aquiles Gourmet we compose the most prestigious Christmas selection, carefully picking outstanding charcuterie, confectioneries, and wines to secure a precious gift.",
  "Nuestra reputación se avala en la fidelidad de miles de clientes satisfied que año tras año delegan en nosotros su regalo navideño.":
    "Our prestige rests upon the loyalty of thousands of content customers who rely on our Christmas configurations year after year.",
  "Comprar lotes": "Shop Christmas Sets",
  "Ordenar por precio": "Sort by price",
  "Ordenar por Mayor Precio": "Order by highest price",
  "Precios": "Price List",
  "Añadir": "Add",
  
  // Products (Lotes)
  "Vino tinto, queso de oveja y selección artesana.": "Red wine, sheep cheese and handpicked selection.",
  "Aceite de oliva virgen extra y selección de conservas.": "Extra virgin olive oil and preserve selection.",
  "Estuche de ibéricos y picos artesanos.": "Iberian charcuterie box and hand-baked breadsticks.",
  "Selección de conservas finas and vino blanco.": "White wine and gourmet select preserves.",
  "Vino, conservas gourmet y dulces tradicionales.": "Wine, gourmet preserves and traditional sweets.",
  "Lote ibérico con vino tinto y aceite premium.": "Iberian set with red wine and premium olive oil.",
  "Baúl gourmet con una selección completa.": "Complete gourmet wooden chest selection.",
  "Cesta de Navidad con productos de primera calidad.": "Premium holiday food basket with top ingredients.",
  "Arcón de madera con ibéricos y tintos reserva.": "Rustic wooden trunk filled with Iberians and aged red wines.",
  "Caja Aquiles con Champagne y selección elite.": "Aquiles Box with Champagne and elite selects.",
  "Caja Original con las mejores denominaciones de origen.": "Original Box with the finest Appellations of Origin.",
  "Bandeja Gran Gourmet con catálogo completo.": "Grand Gourmet tray with our complete catalog.",
  "Caja Gran Selección con jamón de bellota.": "Grand Selection Box including acorn-fed Iberian ham.",

  // Footer / Buttons / More
  "Volver": "Back",
  "Entrar": "Enter",
  "Descubrir": "Discover",
  "La distinción en celebraciones y alta gastronomía": "Distinction in celebrations and haute cuisine",
  "Cestas Artesanas de regalo y Lotes Navideños": "Artisanal gift baskets & Christmas boxes",

  // Miscellany
  "Est. 1982": "Est. 1982",
  "De la de Lola de España": "Lola de España",
  "Bautizos": "Baptisms",
  "Comuniones": "Communions",
  "Cumpleaños": "Birthdays",
  "Fiestas familiares": "Family celebrations",
  "Reuniones": "Meetings",
  "Conferencias": "Conferences",
  "Jornadas de formación": "Training sessions",
  "Cenas de Gala": "Gala Dinners",
  "Inauguraciones": "Inaugurations",
  "Entregas de premios": "Awards events",
  "Catering Toledo": "Catering Toledo",
  "La excelencia en el arte de recibir": "Excellence in the art of receiving",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ES');
  const location = useLocation();

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    const dictionary = esToEnDictionary;

    const translateTextNode = (node: Node) => {
      // Ignore scripts, styles, iframes
      if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE' || node.nodeName === 'IFRAME') {
        return;
      }

      const inputNodeTypes = ['INPUT', 'TEXTAREA'];
      if (inputNodeTypes.includes(node.nodeName)) {
        const inputNode = node as HTMLInputElement;
        const placeholder = inputNode.getAttribute('placeholder');
        if (placeholder) {
          const trimmedPh = placeholder.trim();
          if (!(inputNode as any).__originalPlaceholderES) {
            (inputNode as any).__originalPlaceholderES = placeholder;
          }
          if (language === 'EN') {
            if (dictionary[trimmedPh]) {
              inputNode.setAttribute('placeholder', dictionary[trimmedPh]);
            }
          } else {
            if ((inputNode as any).__originalPlaceholderES !== undefined) {
              inputNode.setAttribute('placeholder', (inputNode as any).__originalPlaceholderES);
            }
          }
        }
        return;
      }

      if (node.nodeType === Node.TEXT_NODE) {
        const value = node.nodeValue;
        if (!value) return;
        const trimmed = value.trim();
        
        if (!trimmed) return;

        // Strip surrounding punctuation & colon if needed for flexible matching
        const cleanTrimmed = trimmed.replace(/:$/, '');

        // Save original if not already saved
        if (!(node as any).__originalES) {
          (node as any).__originalES = value;
        }

        if (language === 'EN') {
          if (dictionary[trimmed]) {
            node.nodeValue = value.replace(trimmed, dictionary[trimmed]);
          } else if (dictionary[cleanTrimmed]) {
            const translatedClean = dictionary[cleanTrimmed];
            const suffix = trimmed.endsWith(':') ? ':' : '';
            node.nodeValue = value.replace(trimmed, translatedClean + suffix);
          }
        } else {
          // Restore Spanish
          if ((node as any).__originalES !== undefined) {
            node.nodeValue = (node as any).__originalES;
          }
        }
      } else {
        node.childNodes.forEach(translateTextNode);
      }
    };

    // Initial translation run
    const performTranslation = () => {
      translateTextNode(document.body);
    };

    // Frame delay to let React DOM render complete
    const handle = requestAnimationFrame(performTranslation);

    // Mutation Observer to auto-translate any dynamic client-side DOM insertions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((addedNode) => {
            translateTextNode(addedNode);
          });
        } else if (mutation.type === 'characterData') {
          const target = mutation.target;
          const value = target.nodeValue;
          if (value) {
            const trimmed = value.trim();
            const cleanTrimmed = trimmed.replace(/:$/, '');
            if (language === 'EN') {
              if (dictionary[trimmed] && value !== dictionary[trimmed]) {
                if (!(target as any).__originalES) {
                  (target as any).__originalES = value;
                }
                target.nodeValue = dictionary[trimmed];
              } else if (dictionary[cleanTrimmed]) {
                const suffix = trimmed.endsWith(':') ? ':' : '';
                const translatedWithSuffix = dictionary[cleanTrimmed] + suffix;
                if (value !== translatedWithSuffix) {
                  if (!(target as any).__originalES) {
                    (target as any).__originalES = value;
                  }
                  target.nodeValue = value.replace(trimmed, translatedWithSuffix);
                }
              }
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelAnimationFrame(handle);
      observer.disconnect();
    };
  }, [language, location.pathname]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
