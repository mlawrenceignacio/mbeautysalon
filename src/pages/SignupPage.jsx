import { IoPersonSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

import axios from "../api/axiosInstance.js";
import { handleGoogleLogin } from "../api/handleGoogleLogin.js";
import Loading from "../components/Loading.jsx";
import useUserStore from "../store/useUserStore.js";

import SignUpImage from "../assets/images/reservationImage.png";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

const SignupPage = () => {
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
        "/auth/signup",
        { email, password },
        {
          headers: {
            "x-api-key": import.meta.env.VITE_WEB_API_KEY,
          },
        },
      );

      setIsLoading(false);
      toast.success(res.data.message);
      setUser(res.data.user);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response?.data?.message || "Error occured");
    }
  }

  return (
    <div className="flex flex-col items-center h-[100dvh] w-[100vw] overflow-hidden lg:flex-row lg:justify-center ">
      {isLoading && <Loading />}
      <div className="w-[270px] h-[200px] mb-2 lg:w-[40%] lg:h-[70%]">
        <img
          src={SignUpImage}
          alt="Salon Logo"
          className="rounded-xl w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col items-center w-full lg:flex-none lg:w-[50%] lg:h-[100%] pink-bg lg:py-[20px] lg:justify-center">
        <h1 className="font-bold red-color text-2xl mb-2 lg:text-2xl lg:mb-[25px]">
          Create an Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-[90%] flex flex-col items-center"
        >
          <div className="w-[90%] sm:w-[60%] lg:w-[80%] p-2 flex flex-col gap-3 items-center">
            <div className="auth-input md:w-[60%] md:text-lg lg:bg-white lg:text-xl lg:w-[85%] lg:p-[5px]">
              <IoPersonSharp color="darkred" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="outline-none w-ful"
              />
            </div>

            <div className="auth-input md:w-[60%] md:text-lg lg:bg-white lg:text-xl lg:w-[85%] lg:p-[5px]">
              <IoIosLock color="darkred" />
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
              className="red-bg w-full p-2 rounded-lg hover:bg-red-500 mt-1 md:w-[60%] md:text-lg lg:w-[85%] "
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-sm my-2">OR</p>

        <div
          onClick={handleGoogleLogin}
          className="flex items-center justify-center py-1.5 rounded-md gap-2 bg-red-200 w-[76%] sm:w-[51%] red-color text-md hover:bg-red-100 md:w-[45%] md:text-lg lg:bg-white lg:w-[58%] lg:shadow-md lg:py-2 cursor-pointer"
        >
          <FcGoogle /> Sign Up with Google
        </div>

        <p className="mt-7 text-sm red-color md:text-lg">
          Already have an account?{" "}
          <Link to={"/login"} className="font-bold">
            Log in.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
