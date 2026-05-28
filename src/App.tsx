import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartSidebar from './components/CartSidebar';
import ChatBot from './components/ChatBot';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import CateringToledoPage from './pages/CateringToledoPage';
import ContactPage from './pages/ContactPage';
import CastilloGuadamurPage from './pages/CastilloGuadamurPage';
import PalacioArminoPage from './pages/PalacioArminoPage';
import CigarralPage from './pages/CigarralPage';
import GrupoEmpresasPage from './pages/GrupoEmpresasPage';
import LolaDeEspanaPage from './pages/LolaDeEspanaPage';
import CestasPage from './pages/CestasPage';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-[var(--color-crema-base)] text-[var(--color-primary)] font-sans relative">
      <CartSidebar />
      <ChatBot />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catering-toledo" element={<CateringToledoPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/castillo-guadamur" element={<CastilloGuadamurPage />} />
        <Route path="/palacio-armino" element={<PalacioArminoPage />} />
        <Route path="/cigarral" element={<CigarralPage />} />
        <Route path="/grupo" element={<GrupoEmpresasPage />} />
        <Route path="/lola-de-espana" element={<LolaDeEspanaPage />} />
        <Route path="/cestas" element={<CestasPage />} />
        {/* We can map /particulares to a page if it exists later */}
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
