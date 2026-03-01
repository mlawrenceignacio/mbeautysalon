import React from "react";

const Modal = ({ message, function1, function2, f1Text, f2Text }) => {
  return (
    <div className="w-full">
      <div className="bg-black/50 backdrop-blur-10 fixed inset-0 z-40"></div>

      <div
        className="bg-red-950 border border-black px-5 py-10 rounded-lg text-center 
            z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]  md:w-[50%] lg:w-[40%] md:text-lg md:py-8 lg:py-10"
      >
        <p className="mb-5 md:text-xl">{message}</p>

        <div className="flex justify-center gap-5">
          <button
            onClick={function1}
            className="bg-red-800 px-5 py-2 md:py-0.5 rounded-lg hover:bg-red-900 hover:shadow-[1px_1px_1px_black] md:text-xl"
          >
            {f1Text}
          </button>
          <button
            onClick={function2}
            className="bg-green-600 px-5 py-2 rounded-lg md:py-0.5 hover:bg-green-900 hover:shadow-[1px_1px_1px_black] md:text-xl lg:py-3"
          >
            {f2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
