
import React from 'react';
import { Tour, Destination, TeamMember } from './types';

export const CompassIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.485-7.485l-1.414 1.414M6.929 17.071L5.515 18.485m12.97-1.414l-1.414-1.414M5.515 5.515l1.414 1.414" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l4 4-1 3-3-1-4-4 1-3 3 1z" />
  </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const PriceTagIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13h10l-5 8-5-8z" />
    </svg>
);

export const SupportIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0zM12 18.75V12m0-3.75h.008v.008H12V9z" />
  </svg>
);

export const CONTINENTS = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania", "Antarctica"];

export const TOURS: Tour[] = [
  {
    id: 1,
    title: "Paris Highlights Tour",
    destination: "Paris",
    continent: "Europe",
    excerpt: "Explore the iconic landmarks of the City of Light.",
    description: "Immerse yourself in the romantic atmosphere of Paris. This tour covers the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and a scenic cruise on the Seine River. Perfect for first-time visitors.",
    price: "$1,200",
    duration: "5 Days",
    includes: ["4-star hotel", "Breakfast daily", "Guided tours", "Museum tickets"],
    excludes: ["Flights", "Lunch & Dinner", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Paris", description: "Check into your hotel and enjoy a welcome dinner." },
      { day: 2, title: "Eiffel Tower & Seine Cruise", description: "Ascend the Eiffel Tower and enjoy a relaxing river cruise." },
      { day: 3, title: "Louvre & Montmartre", description: "Explore art at the Louvre and the charming streets of Montmartre." },
      { day: 4, title: "Versailles Palace", description: "A day trip to the magnificent Palace of Versailles and its gardens." },
      { day: 5, title: "Departure", description: "Enjoy a final Parisian breakfast before heading home." },
    ],
    heroImage: "https://picsum.photos/seed/paris_hero/1920/1080",
    images: ["https://picsum.photos/seed/paris1/800/600", "https://picsum.photos/seed/paris2/800/600", "https://picsum.photos/seed/paris3/800/600", "https://picsum.photos/seed/paris4/800/600"],
    tags: ["paris", "france", "europe", "city", "romance", "art"]
  },
  {
    id: 2,
    title: "Bali Tropical Escape",
    destination: "Bali",
    continent: "Asia",
    excerpt: "Discover the spiritual heart of Indonesia's paradise island.",
    description: "From serene temples to lush rice paddies and volcanic mountains, this tour showcases the best of Bali. Relax on beautiful beaches, experience the unique culture of Ubud, and witness stunning sunsets.",
    price: "$1,500",
    duration: "7 Days",
    includes: ["Boutique resort stay", "Daily yoga sessions", "Cooking class", "Temple entrance fees"],
    excludes: ["Flights", "Some meals", "Optional activities"],
    itinerary: [
        { day: 1, title: "Arrival in Denpasar", description: "Transfer to your resort in Seminyak." },
        { day: 2, title: "Beach Relaxation", description: "Enjoy the beaches of Seminyak and a sunset dinner." },
        { day: 3, title: "Ubud's Cultural Heart", description: "Travel to Ubud, visit the Monkey Forest and local markets." },
        { day: 4, title: "Rice Paddies & Temples", description: "Trek through the Tegalalang Rice Terraces and visit Tirta Empul temple." },
        { day: 5, title: "Volcano Sunrise", description: "Early morning hike to Mount Batur for a spectacular sunrise." },
        { day: 6, title: "Water Sports in Nusa Dua", description: "Enjoy a day of sun and sea with various water activities." },
        { day: 7, title: "Departure", description: "Last chance for souvenir shopping before your flight." },
    ],
    heroImage: "https://picsum.photos/seed/bali_hero/1920/1080",
    images: ["https://picsum.photos/seed/bali1/800/600", "https://picsum.photos/seed/bali2/800/600", "https://picsum.photos/seed/bali3/800/600", "https://picsum.photos/seed/bali4/800/600"],
    tags: ["bali", "indonesia", "asia", "beach", "tropical", "spiritual"]
  },
  {
    id: 3,
    title: "Iceland Northern Lights",
    destination: "Reykjavik",
    continent: "Europe",
    excerpt: "Chase the magical Aurora Borealis across Iceland's winter landscape.",
    description: "This adventure takes you through Iceland's Golden Circle, to majestic waterfalls, and into the heart of the wilderness to hunt for the Northern Lights. A truly unforgettable winter experience.",
    price: "$2,800",
    duration: "6 Days",
    includes: ["Guided Northern Lights hunts", "Golden Circle tour", "Glacier hiking", "Accommodation"],
    excludes: ["Flights", "Most meals", "Winter clothing rental"],
    itinerary: [
      { day: 1, title: "Arrival in Reykjavik", description: "Settle in and explore the world's northernmost capital." },
      { day: 2, title: "The Golden Circle", description: "Visit Þingvellir National Park, Gullfoss waterfall, and the Geysir geothermal area." },
      { day: 3, title: "South Coast Adventure", description: "Discover the Seljalandsfoss and Skógafoss waterfalls and the black sand beaches of Reynisfjara." },
      { day: 4, title: "Glacier Hiking", description: "Hike on the Sólheimajökull glacier with a certified guide." },
      { day: 5, title: "Blue Lagoon & Departure", description: "Relax in the famous Blue Lagoon before heading to the airport." },
      { day: 6, title: "Departure", description: "Fly home with memories of the dancing lights." },
    ],
    heroImage: "https://picsum.photos/seed/iceland_hero/1920/1080",
    images: ["https://picsum.photos/seed/iceland1/800/600", "https://picsum.photos/seed/iceland2/800/600", "https://picsum.photos/seed/iceland3/800/600", "https://picsum.photos/seed/iceland4/800/600"],
    tags: ["iceland", "europe", "winter", "northern lights", "aurora", "adventure"]
  },
  {
    id: 4,
    title: "Dubai Luxury Desert Safari",
    destination: "Dubai",
    continent: "Asia",
    excerpt: "Experience the opulence and adventure of the Arabian desert.",
    description: "A blend of modern luxury and ancient traditions. This tour includes a thrilling 4x4 dune bashing experience, a traditional Bedouin camp dinner under the stars, and breathtaking views of the Dubai skyline.",
    price: "$950",
    duration: "4 Days",
    includes: ["5-star hotel", "Desert safari with dinner", "City tour", "Airport transfers"],
    excludes: ["Flights", "Visa fees", "Lunches"],
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Check in to your luxury hotel and enjoy the city's amenities." },
      { day: 2, title: "City of Wonders", description: "Tour of Burj Khalifa, Dubai Mall, and the historic Al Fahidi district." },
      { day: 3, title: "Desert Adventure", description: "Afternoon dune bashing, camel riding, and a Bedouin-style dinner and show." },
      { day: 4, title: "Departure", description: "Enjoy a final breakfast overlooking the city before your flight." },
    ],
    heroImage: "https://picsum.photos/seed/dubai_hero/1920/1080",
    images: ["https://picsum.photos/seed/dubai1/800/600", "https://picsum.photos/seed/dubai2/800/600", "https://picsum.photos/seed/dubai3/800/600", "https://picsum.photos/seed/dubai4/800/600"],
    tags: ["dubai", "uae", "asia", "desert", "luxury", "city"]
  },
  {
    id: 5,
    title: "Grand Canyon Explorer",
    destination: "Arizona",
    continent: "North America",
    excerpt: "Witness the awe-inspiring scale of one of the world's natural wonders.",
    description: "Explore the vast and majestic Grand Canyon from its most scenic viewpoints. This tour includes hikes along the South Rim, a visit to the Grand Canyon Village, and an optional helicopter tour for a bird's-eye view.",
    price: "$1,100",
    duration: "4 Days",
    includes: ["Lodge accommodation near the rim", "Guided hikes", "Park entrance fees", "Transportation"],
    excludes: ["Flights to Arizona", "Meals", "Optional helicopter tour"],
     itinerary: [
      { day: 1, title: "Arrival in Flagstaff", description: "Travel to the Grand Canyon and check into your lodge." },
      { day: 2, title: "South Rim Exploration", description: "Hike along the Rim Trail and visit Mather Point and Yavapai Geology Museum." },
      { day: 3, title: "Canyon Views", description: "Enjoy sunrise at the canyon, visit Desert View Watchtower, and explore Grand Canyon Village." },
      { day: 4, title: "Departure", description: "One last look at the canyon before departing." },
    ],
    heroImage: "https://picsum.photos/seed/canyon_hero/1920/1080",
    images: ["https://picsum.photos/seed/canyon1/800/600", "https://picsum.photos/seed/canyon2/800/600", "https://picsum.photos/seed/canyon3/800/600", "https://picsum.photos/seed/canyon4/800/600"],
    tags: ["grand canyon", "arizona", "usa", "north america", "nature", "hiking", "national park"]
  },
  {
    id: 6,
    title: "Tokyo Culture Tour",
    destination: "Tokyo",
    continent: "Asia",
    excerpt: "Dive into the vibrant contrast of ancient tradition and futuristic technology.",
    description: "Experience the dynamic energy of Tokyo. Visit ancient temples, wander through bustling markets, witness the Shibuya Crossing, and indulge in world-class cuisine. A journey through the heart of modern Japan.",
    price: "$2,200",
    duration: "7 Days",
    includes: ["Centrally located hotel", "Sushi making class", "Public transport pass", "Guided city tours"],
    excludes: ["Flights", "Most meals", "Personal expenses"],
    itinerary: [
        { day: 1, title: "Arrival in Tokyo", description: "Navigate the neon streets of Shinjuku." },
        { day: 2, title: "Tradition in Asakusa", description: "Visit Senso-ji Temple and the Nakamise-dori market." },
        { day: 3, title: "Modern Marvels", description: "Explore Shibuya Crossing, Harajuku's fashion streets, and the Meiji Shrine." },
        { day: 4, title: "Culinary Delights", description: "Morning visit to Tsukiji Outer Market followed by a sushi making class." },
        { day: 5, title: "Day Trip to Hakone", description: "Enjoy views of Mt. Fuji and a cruise on Lake Ashi." },
        { day: 6, title: "Imperial Palace & Ginza", description: "Visit the Imperial Palace East Garden and explore the upscale Ginza district." },
        { day: 7, title: "Departure", description: "Enjoy a final Japanese breakfast before your flight." },
    ],
    heroImage: "https://picsum.photos/seed/tokyo_hero/1920/1080",
    images: ["https://picsum.photos/seed/tokyo1/800/600", "https://picsum.photos/seed/tokyo2/800/600", "https://picsum.photos/seed/tokyo3/800/600", "https://picsum.photos/seed/tokyo4/800/600"],
    tags: ["tokyo", "japan", "asia", "city", "culture", "food"]
  },
    {
    id: 7,
    title: "New York Essentials",
    destination: "New York",
    continent: "North America",
    excerpt: "Experience the energy and landmarks of the city that never sleeps.",
    description: "From the Statue of Liberty to the top of the Empire State Building, this tour covers all the must-see sights of New York City. Explore Central Park, catch a Broadway show, and feel the pulse of Times Square.",
    price: "$1,800",
    duration: "5 Days",
    includes: ["Manhattan hotel", "Metro pass", "Ferry to Statue of Liberty", "Empire State Building ticket"],
    excludes: ["Flights", "Meals", "Broadway show tickets"],
     itinerary: [
      { day: 1, title: "Arrival & Times Square", description: "Check into your hotel and get dazzled by the lights of Times Square." },
      { day: 2, title: "Downtown Landmarks", description: "Visit the Statue of Liberty, Ellis Island, and the 9/11 Memorial." },
      { day: 3, title: "Midtown Marvels", description: "Ascend the Empire State Building, visit Grand Central, and explore Rockefeller Center." },
      { day: 4, title: "Art & Nature", description: "Stroll through Central Park and visit the Metropolitan Museum of Art." },
      { day: 5, title: "Departure", description: "Last chance for a New York bagel before you fly out." },
    ],
    heroImage: "https://picsum.photos/seed/ny_hero/1920/1080",
    images: ["https://picsum.photos/seed/ny1/800/600", "https://picsum.photos/seed/ny2/800/600", "https://picsum.photos/seed/ny3/800/600", "https://picsum.photos/seed/ny4/800/600"],
    tags: ["new york", "nyc", "usa", "north america", "city", "landmarks"]
  },
  {
    id: 8,
    title: "London Royal Experience",
    destination: "London",
    continent: "Europe",
    excerpt: "Step into the world of British royalty and history.",
    description: "Explore the historic heart of London with visits to the Tower of London, Buckingham Palace, and Westminster Abbey. Enjoy a traditional afternoon tea and a ride on the London Eye for panoramic city views.",
    price: "$1,600",
    duration: "5 Days",
    includes: ["4-star hotel", "Oyster card for transport", "Tower of London tickets", "Afternoon tea"],
    excludes: ["Flights", "Lunches & dinners", "Theater tickets"],
     itinerary: [
      { day: 1, title: "Arrival in London", description: "Check in and take an evening stroll along the South Bank." },
      { day: 2, title: "Royal London", description: "Witness the Changing of the Guard at Buckingham Palace and tour Westminster Abbey." },
      { day: 3, title: "Historic Tower", description: "Explore the Tower of London to see the Crown Jewels and learn its history." },
      { day: 4, title: "Museums & Views", description: "Visit a museum of your choice (e.g., British Museum) and ride the London Eye." },
      { day: 5, title: "Departure", description: "Enjoy a final English breakfast before your departure." },
    ],
    heroImage: "https://picsum.photos/seed/london_hero/1920/1080",
    images: ["https://picsum.photos/seed/london1/800/600", "https://picsum.photos/seed/london2/800/600", "https://picsum.photos/seed/london3/800/600", "https://picsum.photos/seed/london4/800/600"],
    tags: ["london", "uk", "england", "europe", "city", "history", "royal"]
  },
];

export const DESTINATIONS: Destination[] = [
  { id: 1, name: "Paris", continent: "Europe", description: "The city of love, art, and fine dining.", image: "https://picsum.photos/seed/dest_paris/600/800" },
  { id: 2, name: "London", continent: "Europe", description: "A hub of history, culture, and iconic landmarks.", image: "https://picsum.photos/seed/dest_london/600/800" },
  { id: 3, name: "Tokyo", continent: "Asia", description: "A dazzling megacity of tradition and innovation.", image: "https://picsum.photos/seed/dest_tokyo/600/800" },
  { id: 4, name: "Dubai", continent: "Asia", description: "Luxurious metropolis rising from the desert.", image: "https://picsum.photos/seed/dest_dubai/600/800" },
  { id: 5, name: "Bali", continent: "Asia", description: "An island paradise of spirituality and nature.", image: "https://picsum.photos/seed/dest_bali/600/800" },
  { id: 6, name: "Cape Town", continent: "Africa", description: "Stunning coastlines and a vibrant cultural scene.", image: "https://picsum.photos/seed/dest_capetown/600/800" },
  { id: 7, name: "New York", continent: "North America", description: "The iconic city that never sleeps.", image: "https://picsum.photos/seed/dest_ny/600/800" },
  { id: 8, name: "Sydney", continent: "Oceania", description: "Famous for its harbourfront opera house and bridge.", image: "https://picsum.photos/seed/dest_sydney/600/800" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: "Olivia Chen", role: "Founder & CEO", image: "https://picsum.photos/seed/team1/400/400" },
  { id: 2, name: "Benjamin Carter", role: "Head of Tours", image: "https://picsum.photos/seed/team2/400/400" },
  { id: 3, name: "Sophia Rodriguez", role: "Lead Travel Specialist", image: "https://picsum.photos/seed/team3/400/400" },
  { id: 4, name: "Liam Goldberg", role: "Customer Experience Manager", image: "https://picsum.photos/seed/team4/400/400" },
];
