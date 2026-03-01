import React from "react";

function Confirmed() {
  return (
    <div className="h-[100dvh] flex items-center justify-center rounded-lg">
      <div className="bg-red-950 text-center p-10 rounded-lg">
        <h3 className="text-green-300 text-2xl font-bold">
          Reservation Confirmed!
        </h3>
        <p className="text-white">
          Thank you for confirming, we'll get back to you sooner!
        </p>
      </div>
    </div>
  );
}

export default Confirmed;
