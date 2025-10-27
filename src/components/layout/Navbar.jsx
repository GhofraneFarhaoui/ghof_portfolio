import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  // Scroll direction logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
      if (isMenuOpen) setIsMenuOpen(false); // Close mobile menu on scroll
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Track active section
  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'connect'];
    const scrollPos = window.scrollY + 100;

    for (const section of sections) {
      const elem = document.getElementById(section);
      if (elem) {
        const offsetTop = elem.offsetTop;
        const offsetHeight = elem.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Journey', id: 'experience' },
    { label: 'Work', id: 'projects' },
    { label: 'Connect', id: 'connect' },
  ];

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-sm bg-white/80 border-b border-lavender-100"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              {/* Logo */}
              <motion.h1
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-lavender-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Ghofrane
                </span>
              </motion.h1>

              {/* Desktop Nav - hidden on mobile */}
              <div className="hidden md:flex space-x-7 text-gray-600 font-medium">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative group transition-colors ${
                      activeSection === item.id ? 'text-lavender-600' : 'hover:text-lavender-600'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-lavender-500 to-pink-500 rounded-full"
                        layoutId="navIndicator"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </div>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden text-gray-700 focus:outline-none z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
                <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </button>
            </div>

            {/* Mobile Menu (Overlay) */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-sm z-40"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
     <div className="flex flex-col py-6 px-6 space-y-5 items-end pr-8">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`text-xl font-medium relative py-2 ${
                          activeSection === item.id ? 'text-lavender-600' : 'text-gray-700'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <motion.span
                         className="absolute -bottom-1 left-0 h-0.5 w-8 bg-gradient-to-r from-lavender-500 to-pink-500 rounded-full"

                          layoutId="mobileNavIndicator"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Navbar;