import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";

import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const nav = useNavigate();

  return (
    <div className="w-full h-[100dvh] flex flex-col">
      <Header page={"SERVICES"} />

      <div className="w-full flex flex-col items-center flex-1 overflow-y-auto">
        <section
          id="head"
          className="text-center w-[100%] flex flex-col items-center py-8 px-4"
        >
          <h1 className="text-2xl lg:text-3xl mb-2 mt-5 lg:mb-5 lg:mt-6 font-bold text-red-950">
            DISCOVER YOUR BEST LOOK WITH US
          </h1>

          <p className="text-sm mb-5  p-2 rounded-lg w-[90%] md:w-[65%] lg:w-[50%] lg:text-lg shadow-[1px_1px_1px_black]">
            Step into a space where skill meets elegance. Our stylists know
            their craft and treat every client like they matter. We listen, we
            create, we deliver.
          </p>

          <div className="flex gap-2 justify-center w-full text-sm lg:text-lg">
            <button className="bg-red-950 text-white py-1.5 px-2.5 rounded-md hover:bg-red-700 hover:shadow-[1px_1px_1px_black]">
              <a href="#services">View our Services</a>
            </button>
            <button
              className="border border-black bg-pink-100 rounded-md px-2 hover:bg-pink-500 hover:text-white hover:shadow-[1px_1px_1px_black]"
              onClick={() => nav("/reservation")}
            >
              Book Reservation
            </button>
          </div>
        </section>

        <section id="services" className="w-full">
          <Services />

          <div className="px-4 py-6 text-center flex flex-col gap-2 items-center">
            <p className="text-sm lg:text-lg">
              Contact us for more questions. Book now and experience our out of
              this world services!
            </p>

            <button
              className="text-sm lg:text-lg bg-white text-red-950 px-4 py-1.5 rounded-full hover:bg-red-700 hover:shadow-[1px_1px_1px_black] hover:text-white border border-red-950"
              onClick={() => nav("/contact")}
            >
              Contact Us
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
