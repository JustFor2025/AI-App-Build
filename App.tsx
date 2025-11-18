
import React, { useState, useEffect } from 'react';
import { Page, Tour } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import PackagesPage from './pages/PackagesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TourDetailPage from './pages/TourDetailPage';
import { TOURS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [activeTour, setActiveTour] = useState<Tour | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, activeTour]);
  
  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setActiveTour(null);
  };

  const viewTour = (tourId: number) => {
    const tour = TOURS.find(t => t.id === tourId);
    if (tour) {
      setActiveTour(tour);
      setCurrentPage(Page.TourDetail);
    }
  };

  const renderPage = () => {
    if (currentPage === Page.TourDetail && activeTour) {
      return <TourDetailPage tour={activeTour} navigateTo={navigateTo} />;
    }
    
    switch (currentPage) {
      case Page.Home:
        return <HomePage navigateTo={navigateTo} viewTour={viewTour}/>;
      case Page.Destinations:
        return <DestinationsPage navigateTo={navigateTo} />;
      case Page.Packages:
        return <PackagesPage viewTour={viewTour} />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} viewTour={viewTour} />;
    }
  };

  return (
    <div className="bg-brand-light min-h-screen flex flex-col font-sans text-brand-dark">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
