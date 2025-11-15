import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const PageLayout = ({
  title,
  description,
  imageSrc,
  imageAlt,
  city,
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              <span className="text-sky-500">Taxi VSL Ambulance</span> à {city}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Votre transport médical assis (Taxi, VSL) ou allongé (Ambulance), ponctuel et confortable à {city} et ses environs. Nous assurons vos trajets vers les hôpitaux, cliniques et centres de soins.
            </p>
            <div className="mt-8 bg-sky-50 dark:bg-sky-900/20 border-l-4 border-sky-500 p-4 rounded-r-lg">
               <p className="font-semibold text-gray-800 dark:text-gray-100">Prise de rendez-vous 7j/7 et 24h/24 :</p>
               <p className="text-sm text-gray-600 dark:text-gray-400">Contactez-nous directement par téléphone pour réserver votre trajet.</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg">
                <a href="tel:0759654473">
                  <Phone className="mr-3 h-6 w-6" />
                  Appeler le 07.59.65.44.73
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-sky-400 to-cyan-600 rounded-lg blur-xl opacity-50"></div>
            <img
              className="relative w-full h-auto rounded-lg shadow-2xl"
              alt={imageAlt}
             src={imageSrc} />
          </motion.div>
        </div>

        <div className="mt-20 md:mt-28">{children}</div>
      </motion.div>
    </>
  );
};

export default PageLayout;