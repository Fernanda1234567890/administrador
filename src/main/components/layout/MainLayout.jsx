
import React from 'react';
import Header from './Header';
import Footer from './Footer';
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col   min-h-screen bg-white dark:bg-gray-300">
      <Header />

      <main className="">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;