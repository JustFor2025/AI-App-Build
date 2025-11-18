
import React, { useState } from 'react';
import { Page, Tour } from '../types';
import Button from '../components/Button';

interface TourDetailPageProps {
  tour: Tour;
  navigateTo: (page: Page) => void;
}

const TourDetailPage: React.FC<TourDetailPageProps> = ({ tour, navigateTo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tour.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + tour.images.length) % tour.images.length);
  };
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission logic here
    console.log("Form submitted");
    setFormSubmitted(true);
  };


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end text-white p-8">
        <img src={tour.heroImage} alt={tour.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold">{tour.title}</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{tour.description}</p>
            </div>
            
            {/* Itinerary */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Itinerary</h2>
              <div className="space-y-6 border-l-2 border-brand-primary pl-6">
                {tour.itinerary.map((item) => (
                  <div key={item.day} className="relative">
                     <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-brand-primary border-4 border-white"></div>
                    <h3 className="font-bold text-lg text-brand-dark">Day {item.day}: {item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

             {/* Image Carousel */}
            <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Gallery</h2>
                <div className="relative">
                    <img src={tour.images[currentImageIndex]} alt={`Tour image ${currentImageIndex + 1}`} className="w-full h-96 object-cover rounded-lg shadow-lg"/>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-brand-dark p-2 rounded-full focus:outline-none">
                        &larr;
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-brand-dark p-2 rounded-full focus:outline-none">
                        &rarr;
                    </button>
                </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
                {/* Tour Details Card */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-md border">
                    <h3 className="text-2xl font-bold text-brand-dark mb-6">Tour Details</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center"><strong className="w-24 font-semibold">Duration:</strong> {tour.duration}</li>
                        <li className="flex items-center"><strong className="w-24 font-semibold">Price:</strong> {tour.price}</li>
                        <li className="flex items-start"><strong className="w-24 font-semibold shrink-0">Includes:</strong> <span>{tour.includes.join(', ')}</span></li>
                        <li className="flex items-start"><strong className="w-24 font-semibold shrink-0">Excludes:</strong> <span>{tour.excludes.join(', ')}</span></li>
                    </ul>
                </div>
                {/* Contact to Book Card */}
                <div className="bg-brand-secondary p-6 rounded-xl shadow-md border">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Contact to Book</h3>
                    {formSubmitted ? (
                         <div className="text-center p-4 bg-teal-100 text-teal-800 rounded-lg">
                            <h4 className="font-bold">Thank you!</h4>
                            <p>Your inquiry has been sent. We'll get back to you shortly.</p>
                         </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" placeholder="Name" required className="w-full px-4 py-2 border rounded-lg"/>
                            <input type="email" placeholder="Email" required className="w-full px-4 py-2 border rounded-lg"/>
                            <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border rounded-lg"/>
                            <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 border rounded-lg"></textarea>
                            <Button type="submit" onClick={() => {}} className="w-full">Submit Inquiry</Button>
                        </form>
                    )}
                </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
