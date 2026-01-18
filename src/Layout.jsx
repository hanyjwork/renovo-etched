import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <style>{`
        :root {
          --color-sand: #C4A77D;
          --color-sand-dark: #B39A72;
          --color-charcoal: #2D3436;
          --color-off-white: #FAFAF8;
          --color-soft-grey: #F5F5F0;
          --color-sage: #8B9A7D;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        
        ::selection {
          background-color: #C4A77D;
          color: white;
        }
      `}</style>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}