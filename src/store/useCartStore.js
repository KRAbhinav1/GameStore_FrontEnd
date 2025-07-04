import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

export const useCartStore = create((set) => ({
  cart: [],

  addCart: async (id) => {
    try {
      const res = await axiosInstance.post(`/add/cart/${id}`);
      toast.success("Game added to cart");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  getCart: async () => {
    try {
      const res = await axiosInstance.get(`/get/games/cart`);
      set({ cart: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
