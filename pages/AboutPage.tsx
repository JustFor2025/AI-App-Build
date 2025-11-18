
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import IconCard from '../components/IconCard';
import { CompassIcon, CalendarIcon, SupportIcon } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white text-center bg-brand-dark">
        <img src="https://picsum.photos/seed/about_hero/1920/1280" alt="Group of diverse travelers" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Wanderlust Tours</h1>
          <p className="text-lg md:text-xl mt-2">Crafting unforgettable journeys since 2010.</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To inspire a passion for travel by creating authentic, sustainable, and deeply personal experiences. We believe that travel connects us to the world and to each other, fostering understanding and creating memories that last a lifetime.
          </p>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="bg-brand-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <IconCard icon={<CompassIcon className="h-8 w-8"/>} title="Adventure" description="We encourage curiosity and the courage to explore the unknown." />
            <IconCard icon={<CalendarIcon className="h-8 w-8"/>} title="Authenticity" description="We provide genuine experiences that connect you with local cultures." />
            <IconCard icon={<SupportIcon className="h-8 w-8"/>} title="Responsibility" description="We are committed to sustainable tourism that respects people and the planet." />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map(member => (
              <div key={member.id} className="text-center">
                <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
                <p className="text-brand-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
