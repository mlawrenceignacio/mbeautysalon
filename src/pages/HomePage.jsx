import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

import HeroImg from "../assets/images/home.jpeg";
import HeroImg2 from "../assets/images/home.jpg";
import InteriorImg from "../assets/images/interior.png";
import InteriorImg2 from "../assets/images/interior2.png";
import Logo2 from "../assets/images/logo2.png";

import HeroImg3 from "../assets/images/heroimg.jpg";
import HeroImg4 from "../assets/images/heroimg2.jpg";
import HeroImg5 from "../assets/images/heroimg3.jpg";

import { FaStar, FaWandMagicSparkles, FaHeart } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();

  return (
    <div className="w-[100vw] h-[100dvh] flex flex-col ">
      <div className="border-b-2 border-black">
        <Header page="HOME" />
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col items-center">
        <section
          id="hero"
          className="w-full md:bg-[url('/src/assets/images/desktopBG4.jpeg')] bg-[url('/src/assets/images/desktopBG.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div
            className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center
      px-6 lg:px-12 py-5 lg:py-5 gap-10"
          >
            <div className="w-[300px] h-[200px] sm:w-[60%] sm:h-[250px]  md:hidden rounded-lg border border-black">
              <img
                src={HeroImg}
                alt="Home hero image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div
              className="
         flex flex-col gap-6 text-center lg:text-center items-center lg:items-center
    bg-pink-100/40 backdrop-blur-md rounded-2xl p-6 lg:p-8 hadow-lg
    lg:max-w-[60%]
    border-0 lg:border lg:border-red-950/20
      "
            >
              <div className="hidden lg:flex gap-4 text-red-900 text-4xl">
                <FaStar />
                <FaWandMagicSparkles />
                <FaHeart />
              </div>

              <div className="flex justify-center gap-4 w-full">
                <img
                  src={HeroImg3}
                  alt="Hero Small 1"
                  className="object-cover w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px]
            rounded-xl transition-transform duration-300 hover:scale-[105%] shadow-md"
                />
                <img
                  src={HeroImg4}
                  alt="Hero Small 2"
                  className="object-cover w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px]
            rounded-xl transition-transform duration-300 hover:scale-[105%] shadow-md"
                />
                <img
                  src={HeroImg5}
                  alt="Hero Small 3"
                  className="object-cover w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px]
            rounded-xl transition-transform duration-300 hover:scale-[105%] shadow-md"
                />
              </div>

              <h1 className="text-xl lg:text-4xl text-red-950 font-semibold leading-tight lg:leading-snug">
                “Your beauty, defined and refined — only at MBeautyQueen”
              </h1>

              <div
                className="bg-red-950 text-pink-100 text-lg py-2 px-8 rounded-full shadow-md
          transition-all duration-300 hover:bg-red-800 hover:shadow-[1px_1px_0px_black] cursor-pointer"
                onClick={() => nav("/contact")}
              >
                MESSAGE US
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full">
          <div className="flex w-[100%] justify-evenly md:justify-center md:gap-4 lg:gap-8 py-6 md:py-8 bg-red-950">
            <img
              src={InteriorImg}
              alt="Interior Image"
              className="gallery1 md:w-[210px] md:h-[200px]"
            />
            <img
              src={Logo2}
              alt="MBeautyQueen Logo 2"
              className="gallery1 md:w-[210px] md:h-[200px]"
            />
            <img
              src={InteriorImg2}
              alt="Interior Image"
              className="gallery1 md:w-[210px] md:h-[200px]"
            />
          </div>

          <div className="w-[100%] bg-pink-100">
            <Carousel />
          </div>
        </section>

        <section id="feedbacks" className="w-full">
          <Feedback />
        </section>

        <footer className="w-full ">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
