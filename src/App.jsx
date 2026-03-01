import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading.jsx";
import useAuthBootstrap from "./api/useAuthBootstrap.js";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Reservation from "./pages/Reservation.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Confirmed from "./pages/Confirmed.jsx";
import PromotionsPage from "./pages/PromotionsPage.jsx";
import UserReservation from "./pages/UserReservation.jsx";

const App = () => {
  const isLoading = useAuthBootstrap();

  return isLoading ? (
    <div></div>
  ) : (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/user-reservation" element={<UserReservation />} />
        <Route path="/confirmed" element={<Confirmed />} />
      </Routes>

      <Toaster position="top-center" />
    </Router>
  );
};

export default App;
