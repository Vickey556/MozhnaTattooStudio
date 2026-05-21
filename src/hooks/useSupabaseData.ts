import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Типи для наших даних
export interface Artist {
  id: string;
  name: string;
  role: string;
  description: string;
  image_url: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'tattoo' | 'piercing';
  image_url: string;
  artist_id?: string;
}

export interface ReviewItem {
  id: string;
  author_name: string;
  text: string;
  rating: number;
  date: string;
  type?: 'tattoo' | 'piercing';
}

export const useSupabaseData = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artistsRes, portfolioRes, reviewsRes] = await Promise.all([
          supabase.from('artists').select('*'),
          supabase.from('portfolio').select('*'),
          supabase.from('reviews').select('*').order('created_at', { ascending: false })
        ]);

        if (artistsRes.data) setArtists(artistsRes.data);
        if (portfolioRes.data) setPortfolio(portfolioRes.data);
        if (reviewsRes.data) setReviews(reviewsRes.data);
      } catch (error) {
        console.error('Помилка завантаження даних:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { artists, portfolio, reviews, loading };
};
