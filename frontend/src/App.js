import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import '@/App.css';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Industries from '@/pages/Industries';
import Admin from '@/pages/Admin';
import BookConsultation from '@/pages/BookConsultation';
import ELearning from '@/pages/services/ELearning';
import SoftwareDevelopment from '@/pages/services/SoftwareDevelopment';
import UXUIDesign from '@/pages/services/UXUIDesign';
import CreativeServices from '@/pages/services/CreativeServices';
import DigitalMarketing from '@/pages/services/DigitalMarketing';
import Consulting from '@/pages/services/Consulting';
import IndiaExpansion from '@/pages/services/IndiaExpansion';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import useAnalytics from '@/hooks/useAnalytics';

// Analytics tracker component that uses the location hook
function AnalyticsTracker() {
  useAnalytics();
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      <Routes>
        {/* Admin route without Layout */}
        <Route path="/admin" element={<Admin />} />
        
        {/* Main site routes with Layout */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consultation" element={<BookConsultation />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/services/elearning" element={<ELearning />} />
              <Route path="/services/software-development" element={<SoftwareDevelopment />} />
              <Route path="/services/ux-ui-design" element={<UXUIDesign />} />
              <Route path="/services/creative" element={<CreativeServices />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/consulting" element={<Consulting />} />
              <Route path="/services/india-expansion" element={<IndiaExpansion />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;