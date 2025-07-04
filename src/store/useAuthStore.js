import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { jwtDecode } from "jwt-decode";

// zustand //
export const useAuthStore = create((set) => ({
  authUser: null,
  loading: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/check");
      set({ authUser: res.data });
    } catch (error) {
      set({ authUser: null });
    }
  },

  signup: async (user) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/register", user);
      set({ authUser: res.data, loading: false });
      toast.success("Account Created");
    } catch (err) {
      toast.error(err.response.data.message);
      set({ loading: false, authUser: null });
    }
  },

  login: async (user) => {
    set({ loading: true });
    try {
      const response = await axiosInstance.post("/login", user);
      set({ authUser: response.data, loading: false });
      toast.success("Login Successfully");
    } catch (err) {
      toast.error(err.response.data.message);
      set({ loading: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(err.response.data.message);
    }
  },

  //For google signin
  googleSignin: async (credentialResponse) => {
    const { credential } = credentialResponse;
    const { name, email } = jwtDecode(credential);
    try {
      const res = await axiosInstance.post("/google/signin", {
        name,
        email,
      });
      console.log(res);

      toast.success("login successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));

//axiosInstance is used to store the baseURL so that axiosInstance can be called upon if need otherwise.It should be called each time and the page would reload each time. Anyways other method is also mentioned
//const res = await axios.post('http://localhost:4000/register',user)
// await axiosInstance.post("/register", user);
