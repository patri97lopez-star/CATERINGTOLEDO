import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-[var(--color-crema-base)] z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-[var(--color-borde-sutil)] flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[var(--color-oro-viejo)]" />
                <h2 className="font-serif text-xl font-bold text-[var(--color-primary)]">Su Cesta ({totalItems})</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[var(--color-primary)]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag className="w-16 h-16 mb-4 text-[var(--color-oro-viejo)]" />
                  <p className="font-serif text-lg italic">Su cesta está vacía</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 text-sm uppercase tracking-widest font-bold border-b border-[var(--color-primary)] pb-1"
                  >
                    Seguir comprando
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 bg-white border border-[var(--color-borde-sutil)] flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif font-bold text-[var(--color-primary)] truncate pr-2">{item.title}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[var(--color-oro-viejo)] font-bold text-sm">{item.price} €</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-[var(--color-borde-sutil)] bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-50 flex items-center justify-center w-8 h-8 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-50 flex items-center justify-center w-8 h-8 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-[var(--color-primary)]">{(item.price * item.quantity).toFixed(2)} €</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-[var(--color-borde-sutil)] bg-white">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block mb-1">Total (PVP)</span>
                    <span className="text-3xl font-serif font-bold text-[var(--color-primary)]">{totalPrice.toFixed(2)} €</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-[var(--color-oro-viejo)]">IVA INCLUIDO</span>
                </div>
                <button 
                  onClick={() => alert('Integración de pago próximamente')}
                  className="w-full bg-[var(--color-primary)] text-white py-5 text-sm uppercase tracking-[0.3em] font-bold hover:bg-[var(--color-oro-viejo)] transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  Finalizar Pedido
                </button>
                <p className="text-[10px] text-center mt-6 text-gray-400 uppercase tracking-widest font-bold">
                  Envío gratuito en Toledo ciudad
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
