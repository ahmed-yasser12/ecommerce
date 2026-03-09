import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWishList = create(
  persist(
    (set, get) => ({
      items: [],

      addToWishList: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      removeFromWishList: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      toggleWishList: (item) => {
        const exists = get().items.some((i) => i.id === item.id);

        if (exists) {
          set((state) => ({
            items: state.items.filter((i) => i.id !== item.id),
          }));
        } else {
          set((state) => ({
            items: [...state.items, item],
          }));
        }
      },

      isInWishList: (id) =>
        get().items.some((item) => item.id === id),
    }),
    {
      name: "wishlist-storage", // localStorage key
    }
  )
);

export default useWishList;