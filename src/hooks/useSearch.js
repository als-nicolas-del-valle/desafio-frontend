import { useState, useEffect } from "react";
import { searchBookByNameAuthorIsbn } from "../services";

export function useSearch(searchTerm) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    setLoading(true);

    const delayDebounce = setTimeout(async () => {
      try {
        const data = await searchBookByNameAuthorIsbn(searchTerm);
        setResults(data);
      } catch (error) {
        console.error("Error en búsqueda:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return { results, loading };
}
