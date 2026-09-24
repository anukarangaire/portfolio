import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Menu, X, Home, User, GraduationCap, Code2, Award, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/#home', label: 'Home', Icon: Home },
    { to: '/#bio', label: 'About', Icon: User },
    { to: '/#education', label: 'Education', Icon: GraduationCap },
    { to: '/#skills', label: 'Skills', Icon: Code2 },
    { to: '/#art', label: 'Art', Icon: Award },
    { to: '/#achievements', label: 'Achievements', Icon: Award },
    { to: '/certificates', label: 'Certificates', Icon: Award },
    { to: '/#contact', label: 'Contact', Icon: Mail },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-slate-950/50 border-b border-slate-800'
            : 'bg-slate-950/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">

            {/* ── Logo ── */}
            <Link
              to="/#home"
              smooth
              className="flex items-center gap-2 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-9 h-9 rounded-lg bg-yellow-400 text-slate-900 flex items-center justify-center font-extrabold text-lg group-hover:rotate-12 transition-transform duration-300">
                A
              </div>
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                Anukaran<span className="text-yellow-400">.</span>
              </span>
            </Link>

            {/* ── Desktop Menu ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={label}
                  smooth
                  to={to}
                  className="group relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/70 hover:text-yellow-400 rounded-lg transition-colors duration-200"
                >
                  <span>{label}</span>

         
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-1/2 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* ── Mobile Toggle Button ── */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu (Full-screen overlay) ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(({ to, label }, index) => (
              <Link
                key={label}
                smooth
                to={to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-slate-800/60 rounded-lg transition-all duration-200"
                style={{ transitionDelay: isOpen ? `${index * 30}ms` : '0ms' }}
              >
               
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
        </div>
      </div>
    </>
  );
};

export default Navbar;