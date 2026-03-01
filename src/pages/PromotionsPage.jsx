import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "../api/axiosInstance";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import HeroImg3 from "../assets/images/heroimg.jpg";
import HeroImg4 from "../assets/images/heroimg2.jpg";
import HeroImg5 from "../assets/images/heroimg3.jpg";
import formatDate from "../utils/formatDate";
import {
  FaStar,
  FaWandMagicSparkles,
  FaTag,
  FaCalendarDays,
} from "react-icons/fa6";

function PromotionsPage() {
  const [promotions, setPromotions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setIsLoading(true);
    try {
      const res = await axios.get("/promotions/active-promotions");
      setPromotions(res?.data?.promotions || []);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <Loading />;

  return (
    <div className="w-full min-h-[100dvh] flex flex-col bg-pink-50">
      <Header page={"PROMOTIONS"} />

      <main className="flex-1 overflow-y-auto">
        <section className="text-center px-4 pt-10 pb-6">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-red-950">
            Promotions
          </h1>
          <p className="mt-2 text-sm lg:text-base text-red-800 max-w-xl mx-auto">
            Take advantage of our limited-time beauty deals designed just for
            you.
          </p>
        </section>

        <section className="px-4 pb-12 w-full">
          {promotions.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
              {promotions.map((p) => (
                <div
                  key={p._id}
                  className="
    relative
    w-full 
    sm:w-[340px] 
    lg:w-[360px]
    bg-white 
    rounded-2xl 
    shadow-md 
    hover:shadow-[0_15px_40px_rgba(120,0,40,0.25)]
    hover:-translate-y-1
    transition-all
    duration-300 
    flex 
    flex-col 
    overflow-hidden
  "
                >
                  <div className="absolute -top-4 -right-4 bg-pink-200 p-3 rounded-full shadow-md">
                    <FaWandMagicSparkles className="text-red-900 text-lg" />
                  </div>

                  <div className="bg-gradient-to-r from-red-900 to-red-800 px-5 py-5 text-center relative">
                    <div className="flex justify-center items-center gap-2 mb-2">
                      <FaStar className="text-pink-300 text-sm" />
                      <span className="text-xs uppercase tracking-widest text-pink-200">
                        Limited Offer
                      </span>
                      <FaStar className="text-pink-300 text-sm" />
                    </div>

                    <h3 className="text-lg font-bold text-white">{p.name}</h3>

                    <div className="mt-2 inline-flex items-center gap-1 bg-pink-100 text-red-900 text-xs px-3 py-1 rounded-full font-semibold">
                      <FaTag />
                      {p.category}
                    </div>
                  </div>

                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                      {p.description}
                    </p>

                    <div className="mt-5 pt-4 border-t flex items-center gap-2 text-sm font-semibold text-red-900">
                      <FaCalendarDays className="text-red-700" />
                      <span>
                        Valid until{" "}
                        <span className="text-red-700">
                          {formatDate(p.expiration)}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex gap-3 mb-6 flex-wrap justify-center">
                <img
                  src={HeroImg3}
                  className="w-[90px] h-[120px] lg:w-[180px] lg:h-[220px] rounded-xl object-cover hover:scale-105 transition"
                />
                <img
                  src={HeroImg4}
                  className="w-[90px] h-[120px] lg:w-[180px] lg:h-[220px] rounded-xl object-cover hover:scale-105 transition"
                />
                <img
                  src={HeroImg5}
                  className="w-[90px] h-[120px] lg:w-[180px] lg:h-[220px] rounded-xl object-cover hover:scale-105 transition"
                />
              </div>

              <div className="bg-white border border-red-200 rounded-xl px-6 py-4 shadow-sm max-w-md text-center">
                <p className="text-sm lg:text-lg text-red-900">
                  No promotions available at the moment.
                  <br />
                  Please check back soon for exciting offers!
                </p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PromotionsPage;
