import { useEffect, useState } from "react";
import axios from "../api/axiosInstance.js";
import useUserStore from "../store/useUserStore.js";

function useAuthBootstrap() {
  const { setUser, clearUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/user");
        setUser(res.data.user);
      } catch (err) {
        clearUser();
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return loading;
}

export default useAuthBootstrap;
