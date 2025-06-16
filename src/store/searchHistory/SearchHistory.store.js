import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = [];

export const useSearchHistory = create(
  persist(
    (set) => ({
      history: initialState,
      addSearchTerm: (term) =>
        set((state) => {
          const lowerCaseTerm = term.toLowerCase();
          const isAlreadyInHistory = state.history.some(
            (item) => item.toLowerCase() === lowerCaseTerm
          );

          if (isAlreadyInHistory) {
            return state;
          }

          return { history: [term, ...state.history] };
        }),
    }),
    { name: "search-history" }
  )
);
