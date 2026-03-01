import { IoPersonSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

import axios from "../api/axiosInstance.js";
import { handleGoogleLogin } from "../api/handleGoogleLogin.js";
import Loading from "../components/Loading";
import useUserStore from "../store/useUserStore.js";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useUserStore();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        "/auth/login",
        { email, password },
        {
          headers: {
            "x-api-key": import.meta.env.VITE_WEB_API_KEY,
          },
        }
      );

      setIsLoading(false);
      toast.success(res.data.message);
      setUser(res.data.user);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response?.data?.message || "Error occured");
    }
  }

  return (
    <div className="flex flex-col items-center w-[100vw] h-[100dvh]">
      {isLoading && <Loading />}
      <div className="flex flex-col items-center mt-16 w-full">
        <h1 className="text-2xl red-color mb-4 md:text-3xl">LOGIN</h1>

        <form onSubmit={handleSubmit} className="w-[80%] sm:w-[55%] md:w-[50%]">
          <div className="flex flex-col items-center gap-3">
            <div className="auth-input md:w-[70%] md:text-lg lg:w-[60%] lg:text-xl">
              <IoPersonSharp />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="outline-none w-full"
              />
            </div>

            <div className="auth-input md:w-[70%] md:text-lg lg:w-[60%] lg:text-xl">
              <IoIosLock />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="outline-none w-full"
              />
            </div>

            <button
              type="submit"
              className="red-bg w-[100%] rounded-md py-1.5 my-3 hover:bg-red-400 md:w-[70%] md:text-lg lg:w-[60%] lg:text-xl lg:py-2"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mb-3 red-color text-sm lg:text-lg">OR</p>

        <div
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 bg-red-200 py-1.5 w-[80%] rounded-md shadow-md hover:bg-red-100 cursor-pointer sm:w-[55%] md:w-[35%] md:text-lg lg:w-[30%] lg:text-xl"
        >
          <FcGoogle />
          Log in with Google
        </div>

        <p className="mt-10 text-sm md:text-lg lg:text-xl">
          Don't have an account?{" "}
          <Link to="/signup" className="red-color font-bold">
            Sign up
          </Link>
          .
        </p>
      </div>
      <footer className="text-xs mt-16 text-gray-400 md:text-sm lg:text-lg">
        © 2025 MBeautyQueen Brows and Lashes.
      </footer>
    </div>
  );
};

export default LoginPage;
