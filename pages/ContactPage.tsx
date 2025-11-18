
import React, { useState } from 'react';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission logic here
    console.log("Form submitted");
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white text-center bg-brand-dark">
        <img src="https://picsum.photos/seed/contact_hero/1920/1280" alt="Postcards and a compass on a map" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Get In Touch</h1>
          <p className="text-lg md:text-xl mt-2">We'd love to hear from you. Let's plan your next adventure.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-lg">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
              {formSubmitted ? (
                <div className="flex items-center justify-center h-full bg-teal-50 rounded-lg p-8">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-teal-800">Thank You!</h3>
                        <p className="text-teal-700 mt-2">Your message has been received. We will get back to you within 24 hours.</p>
                    </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" id="name" placeholder="Your Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" id="email" placeholder="Your Email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"/>
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input type="tel" id="phone" placeholder="Your Phone (Optional)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" rows={5} placeholder="Your Message" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"></textarea>
                  </div>
                  <div>
                    <Button type="submit" onClick={() => {}} className="w-full">Submit Inquiry</Button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
               <h2 className="text-2xl font-bold text-brand-dark mb-6">Contact Information</h2>
               <div className="space-y-4 text-gray-600">
                    <p><strong>Address:</strong> 123 Travel Lane, Wanderlust City, 98765</p>
                    <p><strong>Email:</strong> contact@wanderlust.tours</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
               </div>
               <div>
                <img src="https://picsum.photos/seed/map_placeholder/800/600" alt="Map placeholder" className="w-full h-64 rounded-lg object-cover shadow-md" />
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
