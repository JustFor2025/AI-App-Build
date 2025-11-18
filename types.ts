
export interface Tour {
  id: number;
  title: string;
  destination: string;
  continent: string;
  excerpt: string;
  description: string;
  price: string;
  duration: string;
  includes: string[];
  excludes: string[];
  itinerary: { day: number; title: string; description: string }[];
  heroImage: string;
  images: string[];
  tags: string[];
}

export interface Destination {
  id: number;
  name: string;
  continent: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export enum Page {
  Home,
  Destinations,
  Packages,
  About,
  Contact,
  TourDetail
}
