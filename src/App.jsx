import React from 'react';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import { AnimatePresence } from 'framer-motion';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';
    import HomePage from '@/pages/HomePage';
    import LillePage from '@/pages/LillePage';
    import CalaisPage from '@/pages/CalaisPage';
    import BoulognePage from '@/pages/BoulognePage';
    import DunkerquePage from '@/pages/DunkerquePage';
    
    function App() {
      const location = useLocation();
    
      return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/taxi-conventionne-lille" element={<LillePage />} />
                <Route path="/taxi-conventionne-calais" element={<CalaisPage />} />
                <Route path="/taxi-conventionne-boulogne" element={<BoulognePage />} />
                <Route path="/taxi-conventionne-dunkerque" element={<DunkerquePage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      );
    }
    
    export default App;