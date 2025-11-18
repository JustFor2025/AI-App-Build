import React, { useState, useMemo } from 'react';
import { Page } from '../types';
import TourCard from '../components/TourCard';
import DestinationCard from '../components/DestinationCard';
import IconCard from '../components/IconCard';
import Button from '../components/Button';
import { TOURS, DESTINATIONS, CONTINENTS, CompassIcon, CalendarIcon, PriceTagIcon, SupportIcon } from '../constants';

interface HomePageProps {
  navigateTo: (page: Page) => void;
  viewTour: (tourId: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, viewTour }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');

  const filteredTours = useMemo(() => {
    return TOURS.filter(tour => {
      const matchesQuery = searchQuery.length < 2 || 
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesContinent = selectedContinent === '' || tour.continent === selectedContinent;

      return matchesQuery && matchesContinent;
    });
  }, [searchQuery, selectedContinent]);

  const handleSearch = () => {
    // In a real app, this might navigate to a search results page
    // For now, it just filters the list below
    console.log("Searching for:", searchQuery, "in", selectedContinent);
  };
  
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center">
        <img src="https://picsum.photos/seed/bali_hero/1920/1080" alt="Beautiful tropical destination in Bali with lush greenery and serene temples" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">Find Your Perfect Tour</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Discover curated travel experiences across every continent.</p>
        </div>
      </section>

      {/* AJAX Search Bar */}
      <section className="-mt-32 relative z-20 container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                  <div className="lg:col-span-1">
                      <label htmlFor="tour-search" className="block text-sm font-medium text-gray-700 mb-2">Search Tours</label>
                      <input 
                          type="text"
                          id="tour-search"
                          placeholder="e.g., 'Paris', 'beach', 'adventure'"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                      />
                  </div>
                   <div className="lg:col-span-1">
                      <label htmlFor="continent-select" className="block text-sm font-medium text-gray-700 mb-2">Search by Continent</label>
                      <select
                        id="continent-select"
                        value={selectedContinent}
                        onChange={(e) => setSelectedContinent(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary bg-white"
                      >
                        <option value="">All Continents</option>
                        {CONTINENTS.map(continent => (
                          <option key={continent} value={continent}>{continent}</option>
                        ))}
                      </select>
                   </div>
                  <div className="lg:col-span-1">
                    <Button onClick={handleSearch} className="w-full">Search</Button>
                  </div>
              </div>
               {/* Search Results */}
              {(searchQuery.length > 1 || selectedContinent !== '') && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">{filteredTours.length} Tours Found</h3>
                  {filteredTours.length > 0 ? (
                    <div className="max-h-64 overflow-y-auto pr-2">
                        <ul className="divide-y divide-gray-200">
                          {filteredTours.slice(0, 5).map(tour => (
                            <li key={tour.id} className="py-3 px-2 rounded-md hover:bg-brand-secondary cursor-pointer" onClick={() => viewTour(tour.id)}>
                              <p className="font-semibold text-brand-dark">{tour.title}</p>
                              <p className="text-sm text-gray-500">{tour.destination}, {tour.continent}</p>
                            </li>
                          ))}
                        </ul>
                    </div>
                  ) : (
                    <p className="text-gray-500">No tours match your criteria.</p>
                  )}
                </div>
              )}
          </div>
      </section>

      {/* Featured Tours Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.slice(0, 3).map(tour => (
            <TourCard key={tour.id} tour={tour} viewTour={viewTour} />
          ))}
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.slice(0, 4).map(dest => (
            <DestinationCard key={dest.id} destination={dest} onClick={() => navigateTo(Page.Destinations)} />
          ))}
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-brand-secondary py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <IconCard icon={<CompassIcon className="h-8 w-8"/>} title="Expert Guides" description="Our guides are local experts passionate about sharing their home with you." />
            <IconCard icon={<CalendarIcon className="h-8 w-8"/>} title="Flexible Booking" description="Change of plans? We offer flexible booking options for your peace of mind." />
            <IconCard icon={<PriceTagIcon className="h-8 w-8"/>} title="Affordable Packages" description="Experience the best destinations without breaking the bank." />
            <IconCard icon={<SupportIcon className="h-8 w-8"/>} title="24/7 Support" description="We're here for you every step of the way, anytime you need us." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl text-white text-center p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Next Adventure Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Let us help you create unforgettable memories. Explore our range of tour packages now.</p>
          <Button onClick={() => navigateTo(Page.Packages)} className="bg-brand-accent text-white hover:bg-orange-600 shadow-lg hover:shadow-xl">
            Explore Packages
          </Button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;