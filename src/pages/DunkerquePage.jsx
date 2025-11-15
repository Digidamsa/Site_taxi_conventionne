import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Wind, Lamp as Lighthouse, Activity } from 'lucide-react';

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

const DunkerquePage = () => {
  return (
    <PageLayout
      title="Taxi Conventionné CPAM, VSL, Ambulance Dunkerque"
      description="Service de taxi, VSL, ambulance conventionné CPAM à Dunkerque (DK). Centre Hospitalier, Polyclinique de Grande-Synthe. Disponible 24/7."
      imageSrc="https://horizons-cdn.hostinger.com/803a1e4b-f6f6-4bd4-a77d-5ce8956c29e1/2afa14862d4fa92f1fdff4a5cf9430e8.jpg"
      imageAlt="Façade du Centre Hospitalier de Dunkerque"
      city="Dunkerque"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Se déplacer pour raisons médicales à Dunkerque (Taxi, VSL, Ambulance)</h2>
        <p>
          Notre service de taxi, VSL et ambulance conventionné vous accompagne pour tous vos déplacements médicaux à Dunkerque et dans le dunkerquois. Profitez d'un transport sécurisé et ponctuel, pris en charge par l'Assurance Maladie, 24h/24 et 7j/7.
        </p>

        <div className="my-12 grid md:grid-cols-3 gap-8">
           <ServiceItem 
              icon={<Lighthouse size={24} />}
              title="Pôles de Santé Dunkerquois"
              description="Nous desservons le CHD, la Polyclinique de Grande-Synthe, la Clinique Villette et tous les centres de soins."
            />
            <ServiceItem 
              icon={<Activity size={24} />}
              title="Transferts et Admissions"
              description="Entrées/sorties d'hospitalisation, transferts inter-établissements, nous gérons votre transport de A à Z."
            />
             <ServiceItem 
              icon={<Wind size={24} />}
              title="Toutes distances"
              description="Que ce soit pour un rendez-vous local ou un trajet vers Lille, Boulogne ou Calais, nous sommes à votre service."
            />
        </div>
        
        <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">Votre sérénité, notre priorité</h3>
        <ul>
            <li><strong>Disponibilité 7j/7 & 24h/24 :</strong> Nous répondons à vos besoins de transport médical à toute heure (sur réservation).</li>
            <li><strong>Chauffeur expérimenté :</strong> Conduite souple et sécurisante pour un trajet en tout confort et en toute sécurité.</li>
            <li><strong>Service humain :</strong> Nous sommes à votre écoute et faisons preuve d'empathie et de professionnalisme à chaque instant.</li>
        </ul>
         <p>
            Pour toute demande de réservation ou d'information concernant votre transport médical à Dunkerque, un seul numéro : appelez-nous.
         </p>
      </div>
    </PageLayout>
  );
};

export default DunkerquePage;