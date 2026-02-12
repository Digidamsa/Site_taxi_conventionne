import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Anchor, Fish, Microscope } from 'lucide-react';

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

const BoulognePage = () => {
  return (
    <PageLayout
      title="Taxi Conventionné CPAM, VSL, Ambulance Boulogne-sur-Mer"
      description="Transport médical (Taxi, VSL, Ambulance) conventionné à Boulogne-sur-Mer. Déplacements vers le Centre Hospitalier, Côte d'Opale et autres centres."
      imageSrc="https://raw.githubusercontent.com/Digidamsa/Site_taxi_conventionne/refs/heads/main/images/Boulogne.jpg"
      imageAlt="Vue aérienne du Centre Hospitalier de Boulogne-sur-Mer"
      city="Boulogne-sur-Mer"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Votre taxi, VSL et ambulance conventionné à Boulogne-sur-Mer</h2>
        <p>
          Pour vos déplacements médicaux à Boulogne-sur-Mer, faites appel à un service professionnel et ponctuel. Notre service de transport médical (taxi, VSL, ambulance) conventionné CPAM vous transporte vers tous les établissements de santé de la ville et de la Côte d'Opale.
        </p>

        <div className="my-12 grid md:grid-cols-3 gap-8">
           <ServiceItem 
              icon={<Anchor size={24} />}
              title="Hôpitaux et Cliniques"
              description="Trajets assurés vers le Centre Hospitalier de Boulogne, la Clinique de la Côte d'Opale, et les cabinets médicaux."
            />
            <ServiceItem 
              icon={<Microscope size={24} />}
              title="Centres d'Imagerie & Labos"
              description="Nous vous conduisons pour vos scanners, IRM, ou analyses dans les centres spécialisés boulonnais."
            />
             <ServiceItem 
              icon={<Fish size={24} />}
              title="Service Local et Fiable"
              description="Un chauffeur local qui connaît la ville pour un service rapide, courtois et adapté à vos besoins (Taxi, VSL, Ambulance)."
            />
        </div>
        
        <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">Les avantages de notre transport médical</h3>
        <ul>
            <li><strong>Véhicule confortable :</strong> Voyagez dans un véhicule propre, climatisé et spacieux, adapté à votre état de santé.</li>
            <li><strong>Chauffeur attentionné :</strong> Une aide vous est apportée pour monter et descendre du véhicule si nécessaire.</li>
            <li><strong>Disponibilité 24/7 :</strong> Notre service est disponible 24h/24 et 7j/7 pour répondre à toutes vos demandes.</li>
        </ul>
         <p>
            Planifiez votre transport médicalisé à Boulogne-sur-Mer en nous contactant par téléphone. Simple, rapide et efficace.
         </p>
      </div>
    </PageLayout>
  );
};

export default BoulognePage;
