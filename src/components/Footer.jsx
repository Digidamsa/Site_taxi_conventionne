import React from 'react';
import { NavLink } from 'react-router-dom';
import { Car, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const cities = [
    { name: 'Lille', path: '/taxi-conventionne-lille' },
    { name: 'Calais', path: '/taxi-conventionne-calais' },
    { name: 'Boulogne', path: '/taxi-conventionne-boulogne' },
    { name: 'Dunkerque', path: '/taxi-conventionne-dunkerque' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-bold text-white">
                Taxi Conventionné CPAM
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Votre transport médicalisé avec sérénité. Taxi, VSL, Ambulance. Ponctualité, confort et
              discrétion assurés.
            </p>
            <div className="mt-4 space-y-2">
               <a
                href="tel:0759654473"
                className="flex items-center justify-center md:justify-start space-x-2 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold text-lg">07.59.65.44.73</span>
              </a>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
                <Clock className="h-5 w-5"/>
                <span>Disponible 7j/7 et 24h/24</span>
              </div>
              <p className="text-xs text-gray-500 pt-1">Uniquement par téléphone</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-4">
              Nos Zones Desservies
            </p>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.name}>
                  <NavLink
                    to={city.path}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Taxi VSL Ambulance {city.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-4">
              Informations
            </p>
            <p className="text-sm text-gray-400">
              Transport conventionné par la Caisse Primaire d'Assurance
              Maladie (CPAM). Nous acceptons les bons de transport pour vos
              déplacements médicaux.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Taxi Conventionné. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;