import { useState } from "react";
import toast from "react-hot-toast";

import formatDate from "../utils/formatDate.js";
import axios from "../api/axiosInstance.js";
import useUserStore from "../store/useUserStore.js";

import menuIcon from "../assets/images/dots.png";
import Loading from "./Loading.jsx";
const FeedbackCard = ({ fb, getFeedbacks, onEdit }) => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useUserStore((state) => state.user);

  const handleDelete = async () => {
    setShowMenu(false);

    try {
      const res = await axios.delete(`/feedbacks/${fb._id}`);
      await getFeedbacks();

      console.log(res?.data?.message);
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to delete feedback.");
    }
  };

  return (
    <div className="bg-pink-100 rounded-lg border border-black p-2 md:w-[80%] lg:w-[70%]">
      <div className="flex justify-between items-center relative">
        <div className="flex gap-2 items-center">
          <p className="text-sm italic">@{fb.username}</p>
          <p className="text-sm">| {fb.star} star</p>
        </div>

        {user !== null && user?.username === fb?.username && (
          <img
            src={menuIcon}
            alt="Feeback Menu Icon"
            className="w-[12px] h-[12px] cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}

        {showMenu && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(!showMenu)}
          ></div>
        )}

        {showMenu && (
          <div className="absolute bottom-full right-1 mb-2 text-sm z-50 flex flex-col bg-white text-red-950 p-2 rounded-md gap-1 shadow-lg border border-gray-200">
            <button
              className="hover:bg-red-950 hover:text-white rounded-sm cursor-pointer"
              onClick={() => {
                setShowMenu(false);
                onEdit(fb);
              }}
            >
              Edit
            </button>
            <button
              className="hover:bg-red-950 hover:text-white rounded-sm px-2 cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <p className="text-black">{fb.message}</p>
      <div className="mt-1 text-xs">
        <p>{formatDate(fb.createdAt)}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
