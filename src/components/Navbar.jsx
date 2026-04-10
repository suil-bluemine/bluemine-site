import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '서비스', href: '#services' },
    { label: '왜 블루마인', href: '#why' },
    { label: '연락처', href: '#contact' },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={false}
      animate={scrolled ? { backgroundColor: 'rgba(26,46,74,0.9)' } : { backgroundColor: 'rgba(26,46,74,0)' }}
      transition={{ duration: 0.3 }}
      style={{ backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)' }}
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="블루마인 로고" className="h-9 w-auto" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.7))' }} />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              문의하기
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span className={`block w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-[#1a2e4a]/95 backdrop-blur-md px-4 pb-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-white/90 hover:text-white py-3 border-b border-white/10 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-3 w-full bg-[#2563eb] text-white text-sm font-medium px-4 py-2 rounded-md"
            >
              문의하기
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
