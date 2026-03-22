import useUserStore from "../store/useUserStore.js";
import axios from "../api/axiosInstance.js";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../components/Loading.jsx";

const EditUsername = ({ setShowEditUsername }) => {
  const [username, setUsername] = useState("");
  const { user, setUser } = useUserStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = async () => {
    setIsLoading(true);

    if (!username || !user?.email) {
      setIsLoading(false);
      toast.error("Please enter your username.");
      return;
    }

    try {
      const res = await axios.patch(`/user/${user?._id}`, {
        username,
        email: user?.email,
      });

      setUser(res.data.user);
      setIsLoading(false);
      setShowEditUsername(false);
      toast.success("Username edited successfully!");
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);

      const message = error?.response?.data?.message || "Something went wrong.";

      toast.error(message);
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/30 z-50">
      {isLoading && <Loading />}
      <div className="bg-pink-900 py-5 px-7 md:py-10 md:px-16 rounded-lg text-white flex flex-col items-center gap-3 md:gap-4">
        <h3 className="text-lg md:text-xl">EDIT USERNAME</h3>
        <input
          type="text"
          className="rounded outline-none mb-2 md:mb-1 px-2 py-1 text-center text-black md:text-lg"
          placeholder={user?.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="flex gap-3 md:text-lg">
          <button
            className="bg-red-700 px-3 py-1 rounded-lg hover:shadow-[1px_1px_1px_black] md:px-5 hover:bg-red-800"
            onClick={() => setShowEditUsername(false)}
          >
            Cancel
          </button>
          <button
            onClick={handleEdit}
            className="bg-green-600 hover:bg-green-800 px-3 py-1 rounded-lg hover:shadow-[1px_1px_1px_black] md:px-5"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUsername;
