import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Waves, Ship, HeartPulse } from 'lucide-react';

const ServiceItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 dark:bg-sky-900 text-sky-500">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

const CalaisPage = () => {
  return (
    <PageLayout
      title="Taxi Conventionné CPAM, VSL, Ambulance Calais"
      description="Votre taxi, VSL ou ambulance conventionné à Calais pour vos transports médicaux vers le Centre Hospitalier, cliniques et spécialistes. Contact 7j/7 24h/24."
      imageSrc="https://raw.githubusercontent.com/Digidamsa/Site_taxi_conventionne/refs/heads/main/images/Calais.jpg"
      imageAlt="Centre Hospitalier de Calais vu de l'extérieur"
      city="Calais"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Transport médical (Taxi, VSL, Ambulance) conventionné à Calais</h2>
        <p>
          Besoin d'un transport médical fiable à Calais ? Notre service de taxi, VSL et ambulance conventionné est à votre disposition pour vous conduire à vos rendez-vous médicaux en toute sécurité. Nous couvrons Calais, Coquelles, Marck et l'ensemble du Calaisis.
        </p>

        <div className="my-12 grid md:grid-cols-3 gap-8">
           <ServiceItem 
              icon={<Ship size={24} />}
              title="Centre Hospitalier de Calais"
              description="Nous assurons des liaisons fréquentes avec le Centre Hospitalier de Calais pour vos consultations, examens ou hospitalisations."
            />
            <ServiceItem 
              icon={<HeartPulse size={24} />}
              title="Soins Réguliers"
              description="Transport adapté (Taxi, VSL, Ambulance) pour les patients nécessitant des soins récurrents comme la dialyse ou la chimiothérapie."
            />
             <ServiceItem 
              icon={<Waves size={24} />}
              title="Flexibilité et Ponctualité"
              description="Nous comprenons l'importance de la ponctualité pour vos soins et nous nous engageons à respecter scrupuleusement vos horaires."
            />
        </div>
        
        <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">Un service de qualité sur le littoral</h3>
        <ul>
            <li><strong>Prise en charge CPAM :</strong> Voyagez sans souci financier grâce au conventionnement avec l'Assurance Maladie.</li>
            <li><strong>Assistance au patient :</strong> Notre chauffeur vous aide dans vos déplacements et s'assure de votre confort du début à la fin.</li>
            <li><strong>Disponibilité 24h/24 7j/7 :</strong> Un service fiable, de jour comme de nuit, pour toutes vos urgences et rendez-vous.</li>
        </ul>
         <p>
            Réservez votre taxi, VSL ou ambulance conventionné à Calais en nous appelant directement. Nous sommes disponibles pour planifier votre prochain trajet médical.
         </p>
      </div>
    </PageLayout>
  );
};

export default CalaisPage;
