import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type ChatMessage = {
  role: 'user' | 'model';
  content: string;
};

export default function ChatBot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage = language === 'ES' 
        ? "Hola, soy AG, tu Asistente Gastronómico de Grupo Aquiles y Catering Toledo. ¿En qué te puedo ayudar hoy? ¿Buscas información sobre bodas, menús o eventos?"
        : "Hello, I am AG, your Gastronomic Assistant at Grupo Aquiles and Catering Toledo. How can I help you today? Are you looking for information on weddings, menus, or events?";
      setMessages([{ role: 'model', content: initialMessage }]);
    }
  }, [isOpen, messages.length, language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    
    // Convert to the exact subset needed for history
    const historyForApi: ChatMessage[] = messages.map(m => ({ role: m.role, content: m.content }));
    
    const newMessages = [...messages, { role: 'user' as const, content: userMsg }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: historyForApi }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      
      let botResponse = '';
      setMessages([...newMessages, { role: 'model', content: '' }]);

      while (true) {
        if (!reader) break;
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\\n\\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.substring(6);
            if (dataStr === '[DONE]') break;
            
            try {
              const data = JSON.parse(dataStr);
              if (data.text) {
                botResponse += data.text;
                setMessages((prev) => {
                  const updated = [...prev];
                  const lastIndex = updated.length - 1;
                  updated[lastIndex] = { ...updated[lastIndex], content: botResponse };
                  return updated;
                });
              }
            } catch (e) {
              console.error('Error parsing SSE data', e);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      const errorMsg = language === 'ES' 
        ? "Lo siento, ha habido un problema de conexión. Por favor, inténtalo de nuevo más tarde." 
        : "Sorry, there was a connection problem. Please try again later.";
      setMessages([...newMessages, { role: 'model', content: errorMsg }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[var(--color-oro-viejo)] text-white rounded-full shadow-2xl hover:brightness-110 hover:scale-105 transition-all duration-300 ring-4 ring-white/20"
        aria-label="Open Chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white border border-[#e5e5e5] shadow-2xl overflow-hidden flex flex-col font-sans"
            style={{ height: '500px', maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="bg-[var(--color-primary)] text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold tracking-wide flex items-center gap-2">
                  Asistente Gastronómico <span className="bg-[var(--color-oro-viejo)] text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded font-sans">AG</span>
                </h3>
                <p className="text-[10px] text-white/80 mt-1 uppercase tracking-[0.1em]">{language === 'ES' ? 'En línea' : 'Online'}</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-[var(--color-oro-viejo)] transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 text-[13px] leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-[var(--color-primary)] text-white rounded-l-2xl rounded-tr-2xl' 
                        : 'bg-white border border-[#e5e5e5] text-gray-800 rounded-r-2xl rounded-tl-2xl shadow-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#e5e5e5] p-3 rounded-r-2xl rounded-tl-2xl shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-[var(--color-oro-viejo)]" />
                    <span className="text-xs text-gray-400">...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 bg-white border-t border-[#e5e5e5]">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage() }}
                  placeholder={language === 'ES' ? 'Escribe tu mensaje...' : 'Type your message...'}
                  className="w-full bg-gray-50 border border-[#e5e5e5] rounded-full py-3 px-4 pr-12 text-sm focus:outline-none focus:border-[var(--color-oro-viejo)] text-gray-800"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 top-2 p-1.5 text-[var(--color-primary)] hover:text-[var(--color-oro-viejo)] disabled:opacity-50 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
