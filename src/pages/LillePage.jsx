import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Hotel as Hospital, Stethoscope, Users } from 'lucide-react';

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

const LillePage = () => {
  return (
    <PageLayout
      title="Taxi Conventionné CPAM, VSL, Ambulance Lille"
      description="Service de taxi, VSL et ambulance conventionné à Lille pour transport médical. CHRU, Hôpital Claude Huriez, centres de soin. Réservez 7j/7 24h/24."
      imageSrc="https://raw.githubusercontent.com/Digidamsa/Site_taxi_conventionne/refs/heads/main/images/image%20site3.jpg"
      imageAlt="Entrée de l'Hôpital Claude Huriez et Faculté de Médecine de Lille"
      city="Lille"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Vos déplacements médicaux (Taxi, VSL, Ambulance) à Lille en toute confiance</h2>
        <p>
          Nous sommes votre partenaire de confiance pour tous vos transports médicaux à Lille et dans la métropole lilloise. En tant que taxi, VSL et ambulance conventionné par la CPAM, nous vous assurons une prise en charge professionnelle pour vous rendre à vos consultations, hospitalisations ou traitements.
        </p>

        <div className="my-12 grid md:grid-cols-3 gap-8">
           <ServiceItem 
              icon={<Hospital size={24} />}
              title="Trajets vers les Hôpitaux"
              description="Nous desservons tous les établissements lillois : CHRU, Hôpital Claude Huriez, Saint-Vincent de Paul, etc."
            />
            <ServiceItem 
              icon={<Stethoscope size={24} />}
              title="Rendez-vous Spécialisés"
              description="Pour vos consultations, kinésithérapie, radiothérapie, chimiothérapie ou dialyse."
            />
             <ServiceItem 
              icon={<Users size={24} />}
              title="Accompagnement Personnalisé"
              description="Nous vous offrons une assistance pour vos démarches administratives et vous accompagnons jusqu'au service concerné."
            />
        </div>
        
        <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">Pourquoi choisir notre service à Lille ?</h3>
        <ul>
            <li><strong>Connaissance de la ville :</strong> Chauffeurs expérimentés connaissant parfaitement Lille pour éviter les retards.</li>
            <li><strong>Confort et Propreté :</strong> Véhicules (taxi, VSL, ambulance) récents, propres et confortables pour un trajet agréable.</li>
            <li><strong>Disponibilité 24/7 :</strong> Nous nous adaptons à vos contraintes horaires pour garantir votre présence à chaque rendez-vous.</li>
        </ul>
         <p>
            Pour organiser votre transport médicalisé à Lille, contactez-nous dès maintenant par téléphone. Nous sommes à votre écoute pour répondre à toutes vos questions.
         </p>
      </div>
    </PageLayout>
  );
};

export default LillePage;
