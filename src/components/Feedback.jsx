import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import useUserStore from "../store/useUserStore.js";
import axios from "../api/axiosInstance.js";
import FeedbackCard from "./FeedbackCard.jsx";
import Loading from "../components/Loading";
import Modal from "./Modal.jsx";

import star from "../assets/images/star.png";
import emptyStar from "../assets/images/emptyStar.png";
import sendButton from "../assets/images/send.png";
import Delete from "../assets/images/delete.png";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [editingFeedbackId, setEditingFeedbackId] = useState(null);
  const { user } = useUserStore();

  const inputRef = useRef(null);

  const nav = useNavigate();

  const averageRating =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((acc, fb) => acc + fb.star, 0) / feedbacks.length
        ).toFixed(1)
      : 1;
  const filteredFeedbacks = feedbacks.filter((fb) => {
    if (sortOption === "") return true;
    return fb.star === Number(sortOption);
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const finalRating = rating === 0 ? 1 : rating;

      console.log({ star: finalRating, message: comment, email: user.email });

      if (!rating || !finalRating) {
        setIsLoading(false);
        toast.error("Star rating is required.");
        return;
      }

      if (editingFeedbackId) {
        const res = await axios.put(`/feedbacks/${editingFeedbackId}`, {
          star: finalRating,
          message: comment,
          email: user.email,
        });
        toast.success(res.data.message);
      } else {
        const res = await axios.post("/feedbacks", {
          star: finalRating,
          message: comment,
          email: user.email,
        });
        toast.success(res.data.message);
      }

      await getFeedbacks();
      setComment("");
      setRating(0);
      setHover(0);
      setEditingFeedbackId(null);
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to post comment.");
    }

    setIsLoading(false);
  }

  const getFeedbacks = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get("/feedbacks");
      setFeedbacks(res.data.feedbacks);
    } catch (error) {
      setFeedbacks(null);
      console.error(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="flex flex-col items-center text-red-100 bg-pink-950 p-5 gap-3 overflow-hidden ">
      {isLoading && <Loading />}

      {showModal && (
        <Modal
          message="Please sign in to access this feature."
          function1={() => setShowModal(false)}
          function2={() => nav("/signup")}
          f1Text="Cancel"
          f2Text="Sign In"
        />
      )}

      <h2 className="text-xl mt-2">CLIENT FEEDBACKS</h2>

      <div
        className="flex-1 flex flex-col w-[95%] md:w-[85%] lg:w-[60%] bg-white px-2 rounded-lg gap-1 
            max-h-[320px] overflow-y-auto min-h-[300px]"
      >
        <div className="flex w-full justify-between px-3 sticky top-0 bg-white py-2 z-30">
          <div className="flex gap-2 items-center bg-red-950 rounded-2xl py-0.5 px-2">
            <img src={star} alt="Star Icon" className="star" />
            {averageRating} | ({feedbacks.length})
          </div>

          <div className="flex gap-1 items-center bg-red-900 rounded-2xl py-0.5 px-1.5">
            <label htmlFor="starSort">
              <img src={star} alt="Star Icon" className="star" />
            </label>

            <select
              name="starSort"
              id="starSort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="text-white py-0.5 px-0.5 bg-red-900 rounded-xl outline-none"
            >
              <option value="">Most Recent</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:items-center text-red-950 p-2 gap-2 ">
          {filteredFeedbacks.length === 0 ? (
            <p className="text-center text-sm italic text-gray-500 pb-3">
              No feedback found with this star rating.
            </p>
          ) : (
            filteredFeedbacks.map((feedback, i) => (
              <FeedbackCard
                key={i}
                fb={feedback}
                getFeedbacks={getFeedbacks}
                onEdit={(fb) => {
                  setComment(fb.message);
                  setRating(fb.star);
                  setEditingFeedbackId(fb._id);

                  inputRef.current.focus();
                }}
              />
            ))
          )}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-white w-[95%] md:w-[85%] lg:w-[60%] rounded-lg p-3"
      >
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((num, i) => (
            <img
              key={i}
              src={(hover || rating) >= num ? star : emptyStar}
              onMouseEnter={() => setHover(num)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(num)}
              className="starInput"
            />
          ))}
        </div>

        <div className="flex w-full gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="pl-2 flex-1 outline-none bg-red-200 text-black shadow-md rounded-lg text-md placeholder:text-gray-500 placeholder:text-sm md:py-2 md:text-lg md:placeholder:text-lg w-[75%] py-1"
          />

          {user ? (
            <div className="flex flex-col items-center justify-center gap-2">
              {editingFeedbackId && (
                <img
                  className="w-7 object-cover cursor-pointer"
                  src={Delete}
                  alt="Delete Icon"
                  onClick={() => {
                    setEditingFeedbackId(null);
                    setComment("");
                    setRating(0);
                  }}
                />
              )}
              <button type="submit">
                <img src={sendButton} alt="Send Icon" className="feedbackBtn" />
              </button>
            </div>
          ) : (
            <div
              className="bg-green-600 text-white px-2 py-1 rounded-lg text-xs sm:text-sm md:text-lg flex items-center justify-center text-center w-[25%] md:w-[15%] cursor-pointer hover:bg-green-700 hover:shadow-[2px_2px_1px_black]"
              onClick={() => setShowModal(true)}
            >
              Sign In
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Feedback;
