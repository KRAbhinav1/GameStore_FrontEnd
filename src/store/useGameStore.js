import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

//sending data from frontend to backend
export const useGameStore = create((set) => ({
  games: [],
  pubGames: [],
  loading: false,

  addGames: async (game) => {
    set({ loading: true });
    try {
      await axiosInstance.post("/add/product", game, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });      
      toast.success("Game added successfully");
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      set({ loading: false });
    }
  },

  getGames: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/get/games");
      set({ games: res.data });
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      set({ loading: false });
    }
  },

  getPublisherGames: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/get/publisher/games");
      set({ pubGames: res.data });
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      set({ loading: false });
    }
  },

  editGames: async (id,game) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.put(`/games/edit/${id}`,game );
      set({ games: res.data });
      console.log(res);
      
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },

  deleteGames: async (id) => {
    set({ loading: true });
    try {
       await axiosInstance.delete(`/games/delete/${id}`);
      const res = await axiosInstance.get("/games");
      set({ games: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
}));
