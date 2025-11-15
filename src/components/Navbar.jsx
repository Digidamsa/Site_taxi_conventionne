import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? 'text-sky-400'
        : 'text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 5, duration: 1 }}
            >
              <Car className="h-8 w-8 text-sky-500" />
            </motion.div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Taxi VSL Ambulance
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-6 font-medium">
            <NavLink to="/" className={navLinkClass} end>
              Accueil
            </NavLink>
            <NavLink to="/taxi-conventionne-lille" className={navLinkClass}>
              Lille
            </NavLink>
            <NavLink to="/taxi-conventionne-calais" className={navLinkClass}>
              Calais
            </NavLink>
            <NavLink to="/taxi-conventionne-boulogne" className={navLinkClass}>
              Boulogne
            </NavLink>
            <NavLink to="/taxi-conventionne-dunkerque" className={navLinkClass}>
              Dunkerque
            </NavLink>
          </div>

          <a
            href="tel:0759654473"
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-transform duration-300 hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            <span>07.59.65.44.73</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;