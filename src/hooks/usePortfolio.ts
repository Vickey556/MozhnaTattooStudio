import { useState, useEffect } from 'react';
import type { PortfolioItem } from '../types';
import { tattooWorks, piercingWorks } from '../data/portfolio';

export const usePortfolio = () => {
  const [works, setWorks] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        // Combine tattoo and piercing works, or keep them separate based on needs
        const allWorks = [...tattooWorks, ...piercingWorks];
        setWorks(allWorks);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch portfolio works');
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const getTattooWorks = () => works.filter(w => tattooWorks.some(tw => tw.id === w.id));
  const getPiercingWorks = () => works.filter(w => piercingWorks.some(pw => pw.id === w.id));
  
  const getWorksByArtist = (artistName: string) => {
    const normalizeName = (name: string) => name.toLowerCase().split(' ').sort().join(' ');
    return works.filter(w => w.artist && normalizeName(w.artist.name) === normalizeName(artistName));
  };

  return { works, loading, error, getTattooWorks, getPiercingWorks, getWorksByArtist };
};
