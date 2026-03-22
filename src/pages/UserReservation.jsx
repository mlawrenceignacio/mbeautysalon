import axios from "../api/axiosInstance";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

import formatDate from "../utils/formatDate";

import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClipboardList,
  FaInfoCircle,
  FaClipboardCheck,
  FaStar,
  FaCircleExclamation,
} from "react-icons/fa";

function UserReservation() {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isPendingReservation = (reservation) => {
    return reservation.status === "Pending";
  };

  const getReservations = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/reservations/me");
      setReservations(res?.data?.reservations || []);
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  async function handleConfirm(id) {
    try {
      setIsLoading(true);

      await axios.patch(`/reservations/${id}/confirm-own-reservation`);

      setReservations((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status: "UserConfirmed" } : r)),
      );
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCancel(id) {
    try {
      setIsLoading(true);

      await axios.patch(`/reservations/${id}/status-own-reservation`);

      setReservations((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status: "Cancelled" } : r)),
      );
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getReservations();
  }, []);

  const getStatusClasses = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-yellow-900";
      case "UserConfirmed":
        return "bg-blue-200 text-blue-900";
      case "Confirmed":
        return "bg-green-200 text-green-900";
      case "Done":
        return "bg-emerald-200 text-emerald-900";
      case "Declined":
      case "Cancelled":
        return "bg-red-200 text-red-900";
      default:
        return "bg-gray-200 text-gray-900";
    }
  };

  const getStatusMessage = (status) => {
    switch (status) {
      case "Pending":
        return "This reservation is waiting for your confirmation. Please confirm or cancel it below.";
      case "UserConfirmed":
        return "You already confirmed this reservation. Please wait for the salon's final approval.";
      case "Confirmed":
        return "Your reservation has been approved by the salon.";
      case "Cancelled":
        return "This reservation has been cancelled.";
      case "Declined":
        return "This reservation was declined by the salon.";
      case "Done":
        return "This reservation has been marked as completed.";
      default:
        return "";
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-[100dvh] flex flex-col">
      <Header page={"USER RESERVATION"} />

      <div className="flex-1 overflow-y-auto bg-pink-50">
        <section className="relative w-full py-4 px-4 bg-[url('/src/assets/images/desktopBG.jpg')] bg-cover bg-center">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-pink-100/60 backdrop-blur-md border border-red-200 rounded-3xl shadow-lg px-6 py-8 text-center flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-red-900">
                <FaClipboardCheck className="text-3xl" />
                <h1 className="text-2xl lg:text-4xl font-bold">
                  My Appointments
                </h1>
              </div>

              <div className="flex items-center gap-2 text-red-800 text-sm lg:text-base">
                <FaStar className="text-pink-600" />
                <p>Track your salon bookings, status updates, and schedules</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1000px] mx-auto px-4 md:px-8 py-6">
          {reservations.length === 0 ? (
            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-md border border-red-200">
              <FaInfoCircle className="text-4xl text-red-700 mb-3" />
              <h2 className="text-xl font-semibold text-red-900 mb-2">
                No Reservations Yet
              </h2>
              <p className="text-red-800">
                Your future reservations will appear here. Book now and let us
                take care of you!
              </p>
            </div>
          ) : (
            <div
              className={`grid gap-6 grid-cols-1 ${
                reservations.length === 1
                  ? "md:grid-cols-1 place-items-center items-center"
                  : "md:grid-cols-2 place-items-center items-center"
              }`}
            >
              {reservations.map((r) => (
                <div
                  key={r._id}
                  className="bg-white rounded-2xl shadow-lg border border-red-200 p-6 flex flex-col gap-4 w-full max-w-[520px]"
                >
                  <div className="flex justify-between items-start gap-3 flex-wrap">
                    <h3 className="text-lg font-bold text-red-900 flex items-center gap-2">
                      <FaClipboardList />
                      Reservation Details
                    </h3>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClasses(
                        r.status,
                      )}`}
                    >
                      {r.status}
                    </span>
                  </div>

                  {getStatusMessage(r.status) && (
                    <div
                      className={`rounded-xl p-3 text-sm flex items-start gap-2 ${
                        r.status === "Pending"
                          ? "bg-yellow-100 border border-yellow-300 text-yellow-900"
                          : r.status === "UserConfirmed"
                            ? "bg-blue-100 border border-blue-300 text-blue-900"
                            : r.status === "Confirmed"
                              ? "bg-green-100 border border-green-300 text-green-900"
                              : "bg-red-100 border border-red-300 text-red-900"
                      }`}
                    >
                      <FaCircleExclamation className="mt-0.5" />
                      <p>{getStatusMessage(r.status)}</p>
                    </div>
                  )}

                  {isPendingReservation(r) && (
                    <div className="flex gap-2 flex-wrap">
                      <button
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
                        onClick={() => handleConfirm(r._id)}
                      >
                        Confirm
                      </button>

                      <button
                        className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition font-semibold"
                        onClick={() => handleCancel(r._id)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 text-red-800">
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {formatDate(r.date).split(" |")[0]}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaClock />
                      {r.time}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-red-900">
                    <p className="flex items-center gap-2">
                      <FaUser /> {r.clientName}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaEnvelope /> {r.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaPhone /> {r.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaClipboardList /> {r.service}
                    </p>
                  </div>

                  <div className="text-xs text-red-700 border-t pt-3">
                    Placed on: {formatDate(r.createdAt)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default UserReservation;
