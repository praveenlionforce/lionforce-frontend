import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import { Helmet } from 'react-helmet';

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Lionforce - Empowering Minds, Transforming Solutions | Custom eLearning & Software Development</title>
        <meta name="description" content="Lionforce delivers custom eLearning solutions, software development, UX/UI design, and global workforce services (EOR, ODC, COE) to transform your business." />
        <meta name="keywords" content="custom elearning, software development, UX UI design, employer of record, offshore development center, center of excellence, India EOR, digital marketing" />
        <meta property="og:title" content="Lionforce - Custom eLearning & Software Development Services" />
        <meta property="og:description" content="Transform your business with innovative eLearning and software solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lionforce.net" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}

export default Layout;