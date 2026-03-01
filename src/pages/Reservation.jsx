import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading.jsx";

import reservationImg from "../assets/images/reservationImage.png";

import useUserStore from "../store/useUserStore.js";
import axios from "../api/axiosInstance.js";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Reservation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserStore();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !number || !email || !address || !date || !time || !service) {
      setIsLoading(false);
      toast.error("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("/reservations", {
        clientName: name,
        phone: number,
        email,
        address,
        date,
        time,
        service,
        note,
      });

      toast.success(
        "Reservation booked successfully!\nPlease wait for our response."
      );
      setName("");
      setNumber("");
      setEmail("");
      setAddress("");
      setDate("");
      setTime("");
      setService("");
      setNote("");
      console.log(res.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-[100%] h-[100dvh]">
      {isLoading && <Loading />}
      <Header page={"RESERVATION"} />

      <div className="flex-1 flex flex-col w-full overflow-y-auto">
        <section
          id="reservation"
          className="
    w-full
    max-w-[1400px]
    mx-auto
    flex flex-col lg:flex-row
    px-4 md:px-8 lg:px-12
    py-6
    gap-6
  "
        >
          <div
            className="flex flex-col items-center text-center
  w-full lg:w-[45%]
  p-4 md:p-6 lg:p-8
  bg-[url('src/assets/images/desktopBG.jpg')]
  bg-no-repeat bg-cover bg-center
  rounded-xl lg:rounded-2xl"
          >
            <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-red-950 mb-2 lg:mt-5">
              MBeautyQueen Salon Booking Form
            </h1>

            <img
              src={reservationImg}
              alt="Storyset Generated Salon Image"
              className="h-[150px] w-[80%] md:w-[55%] md:h-[250px] lg:h-[250px] lg:w-[65%] object-cover"
            />

            <p className="hidden lg:flex text-lg text-center bg-pink-300/50 p-3 rounded-lg w-[85%] mt-3">
              After booking a reservation, please wait for an email or chat
              response from us. If the reservation remains pending for 24 hours
              without a reply from our team, it will be automatically canceled.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[55%] bg-[#ffffff] shadow-lg rounded-2xl p-8 border border-red-200"
          >
            <h2 className="text-2xl font-bold text-red-800 text-center mb-6 tracking-wide">
              Reservation Form
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-red-800 font-semibold mb-2">
                  Personal Information
                </p>
                <div className="h-[2px] bg-red-300 w-full rounded-full mb-4"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Maricar Dumon"
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Contact No
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 09372639263"
                      id="contactNo"
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Ex: mbeautyqueen@gmail.com"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Brgy. Mahabang Parang, Angono, Rizal"
                      id="address"
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-red-800 font-semibold mb-2">
                  Reservation Details
                </p>
                <div className="h-[2px] bg-red-300 w-full rounded-full mb-4"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Time
                    </label>
                    <select
                      name="time"
                      id="time"
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Time
                      </option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Service/s
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Manicure, Pedicure..."
                      id="serviceAvailed"
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Extra Note
                    </label>
                    <input
                      type="text"
                      id="extraNote"
                      placeholder="Ex: Blue color for hair..."
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {user ? (
              <button className="w-full mt-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl shadow-md transition-all">
                BOOK RESERVATION
              </button>
            ) : (
              <div
                onClick={() => nav("/signup")}
                className="w-full mt-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md cursor-pointer text-center"
              >
                Sign In First
              </div>
            )}
          </form>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Reservation;
