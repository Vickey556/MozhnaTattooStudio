import { useState, useEffect } from 'react';
import type { Artist } from '../types';
import { masters } from '../data/artists';

export const useArtists = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In the future, this is where the Supabase fetch will go.
    // For now, we simulate an async fetch of the static data.
    const fetchArtists = async () => {
      try {
        setLoading(true);
        // Simulate network delay if needed, or just set data directly
        setArtists(masters);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch artists');
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  const getArtistById = (id: string): Artist | undefined => {
    return artists.find(artist => artist.id === id);
  };

  return { artists, loading, error, getArtistById };
};
