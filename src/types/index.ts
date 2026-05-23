export interface Artist {
  id: string;
  name: string;
  specs: string;
  image: string;
  experience: string;
  price: string;
  inst: string;
  instLink: string;
}

export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
  artist?: {
    name: string;
    description: string;
    image: string;
  };
}

export interface ServicePrice {
  label: string;
  value: string;
}

export interface Service {
  id: number;
  title: string;
  image: string;
  prices: ServicePrice[];
  desc: string;
  link: string | null;
}

export interface JewelryItem {
  name: string;
  price: string;
  img: string;
}

export interface StatItem {
  img: string;
  text: string;
}
