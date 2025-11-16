import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Menu, X, Home, User, GraduationCap, Award, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/#home', label: 'Home', Icon: Home },
    { to: '/#bio', label: 'About', Icon: User },
    { to: '/#education', label: 'Education', Icon: GraduationCap },
    { to: '/#skills', label: 'Skills', Icon: GraduationCap },

    { to: '/certificates', label: 'Certificates', Icon: Award },
  ];

  return (
    <nav className="fixed top-0 w-full z-20 bg-black shadow-md">
      <div className="container mx-auto  py-2 flex justify-between items-center">
        <div className="text-base sm:text-4xl font-semibold text-white">ANUKARAN GAIRE</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          {navLinks.map(({ to, label, Icon }) => ( // include Icon here
            <Link
              key={label}
              smooth
              to={to}
              className="flex items-center gap-1 px-2 py-1 text-white text-sm hover:bg-purple-600 rounded-md transition"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-1 text-white hover:bg-purple-600 rounded"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          className={`md:hidden bg-purple-800 overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] py-2' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 px-4">
            {navLinks.map(({ to, label, Icon }) => (
              <Link
                key={label}
                smooth
                to={to}
                className="flex items-center gap-2 px-2 py-1 text-white text-sm hover:bg-purple-600 rounded"
                onClick={toggleMenu}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
