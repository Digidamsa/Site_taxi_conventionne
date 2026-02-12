import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Hotel as Hospital, ShieldCheck, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 h-full">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 dark:bg-sky-900 mb-4">
      {React.cloneElement(icon, { className: 'h-6 w-6 text-sky-500' })}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{children}</p>
  </div>
);

const TestimonialCard = ({ quote, author, delay }) => (
    <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
    >
        <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
        </div>
        <p className="text-gray-600 dark:text-gray-300 italic mb-4 flex-grow">« {quote} »</p>
        <p className="font-semibold text-gray-800 dark:text-white text-right">- {author}</p>
    </motion.div>
);


const HomePage = () => {
  const cities = [
    { name: 'Lille', path: '/taxi-conventionne-lille' },
    { name: 'Calais', path: '/taxi-conventionne-calais' },
    { name: 'Boulogne', path: '/taxi-conventionne-boulogne' },
    { name: 'Dunkerque', path: '/taxi-conventionne-dunkerque' },
  ];
  
  const testimonials = [
    { quote: "Je fais appel à lui plusieurs fois par mois pour mes rendez-vous médicaux sur Lille. Toujours à l’heure, très gentil, j’ai été opéré de la hanche et je suis malvoyant, il m’accompagne jusqu’au secrétariat et fait mes papiers pour moi. Son véhicule sent très bon et il est très confortable.", author: "Didier C." },
    { quote: "Rare de trouver un taxi aussi humain ! Il prend le temps, explique, aide à entrer et sortir du véhicule. Son véhicule dispose de la place pour mon fauteuil roulant. C’est bien plus qu’un simple chauffeur. J’ai même eu le droit à une boite de chocolat pour mon anniversaire. Merci encore pour ta bienveillance.", author: "Karine A." },
    { quote: "Chauffeur professionnel, discret, bienveillant et très humain. Service de grande qualité, je recommande sans hésiter à tous ceux qui cherchent un taxi CPAM fiable.", author: "Stéphane B." },
    { quote: "Enfin un taxi conventionné fiable à Dunkerque ! Il se déplace même jusqu’à Boulogne ou Calais sans souci. Très bon service.", author: "Christiane H." },
  ];

  return (
    <>
      <Helmet>
        <title>Taxi Conventionné CPAM, VSL, Ambulance - Lille, Calais, Boulogne, Dunkerque</title>
        <meta name="description" content="Service de taxi conventionné CPAM, VSL et Ambulance pour vos transports médicaux à Lille, Calais, Boulogne, et Dunkerque. Disponible 7j/7 24h/24." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="relative bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-900 pt-20 pb-20">
           <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                     <motion.h1 
                      className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      Votre <span className="text-sky-500">Transport Médical</span><br/>Taxi, VSL, Ambulance
                    </motion.h1>
                    <motion.p 
                      className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                    >
                      Nous assurons vos déplacements médicaux en toute sérénité à Lille, Calais, Boulogne, Dunkerque. Disponible 7j/7 et 24h/24.
                    </motion.p>
                    <motion.div 
                      className="mt-10"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                    >
                       <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg text-lg px-8 py-6">
                          <a href="tel:0759654473">
                             <Phone className="mr-3 h-6 w-6" />
                             Réservez : 07.59.65.44.73
                          </a>
                       </Button>
                       <p className="mt-3 text-sm text-gray-500">Prise de rendez-vous uniquement par téléphone.</p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <img class="w-full h-auto rounded-lg shadow-2xl" alt="Formulaire de prescription médicale de transport" src="https://github.com/Digidamsa/Site_taxi_conventionne/blob/main/images/prescription.jpg" />
                </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800/50">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img class="w-full h-auto rounded-lg shadow-2xl" alt="Bannière Taxi Conventionné CPAM, VSL, Ambulance" src="https://github.com/Digidamsa/Site_taxi_conventionne/blob/main/images/Photo%20accueil.jpeg" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Votre confort, notre priorité</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                        Voyagez en toute tranquillité à bord de nos véhicules confortables et adaptés. Que ce soit pour un rendez-vous médical ou tout autre déplacement conventionné, nous vous garantissons un trajet agréable et sécurisé.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Notre chauffeur est à votre écoute et s'adapte à vos besoins spécifiques pour vous offrir le meilleur service possible.
                    </p>
                </motion.div>
              </div>
           </div>
        </section>


        <section className="py-20 bg-white dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Un service complet pour vos besoins médicaux</h2>
               <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Nous nous engageons à vous offrir une expérience de transport irréprochable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon={<ShieldCheck />}>
                Conventionné CPAM
                <br />
                Aucune avance de frais selon vos droits avec un bon de transport.
              </FeatureCard>
              <FeatureCard icon={<Hospital />}>
                Tous Transports
                <br />
                Taxi, VSL ou Ambulance selon vos besoins et la prescription médicale.
              </FeatureCard>
               <FeatureCard icon={<Users />}>
                Service Humain
                <br />
                Accompagnement, aide administrative et bienveillance à chaque trajet.
              </FeatureCard>
              <FeatureCard icon={<Clock />}>
                Disponibilité 24/7
                <br />
                Nous sommes à votre service à toute heure, 7 jours sur 7.
              </FeatureCard>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Nos clients témoignent</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">La satisfaction de nos passagers est notre plus grande fierté.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800/50">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Nos zones d'intervention principales</h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Cliquez sur une ville pour en savoir plus sur nos services locaux.</p>
              </div>
               <div className="flex flex-wrap justify-center gap-4">
                  {cities.map((city, index) => (
                     <motion.div
                       key={city.name}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.5, delay: index * 0.1 }}
                       whileHover={{ scale: 1.05 }}
                     >
                        <Button asChild variant="outline" size="lg" className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300">
                           <NavLink to={city.path}>
                             {city.name}
                           </NavLink>
                        </Button>
                     </motion.div>
                  ))}
               </div>
           </div>
        </section>
      </motion.div>
    </>
  );
};

export default HomePage;
