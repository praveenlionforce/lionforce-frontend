import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import ChatBot from './ChatBot';

function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <ChatBot />
      </div>
    </>
  );
}

export default Layout;