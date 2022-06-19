import React from "react";
import leadImg from "../assets/leadImg.jpg";

function LeadCard() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto mt-8 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-black rounded-xl shadow-lg max-w-3xl min-w-min drop-shadow-2xl">
        <img
          src={leadImg}
          width="300px"
          height="300px"
          alt="A sea lion basking on a Galapagos beach"
          className="mx-auto rounded-lg border-2 drop-shadow-xl shadow-xl mt-8"
        />
        <p className="text-white pt-4 pb-4 px-4">
        While touring throughout the US and Europe as a singer, song-writer, and musician, I came to view things from outside of the (shoe) box that we live in. There’s a world beyond square footage. Life doesn’t have limitations, or does it?

        As we explore the planet together, we’ll catch a glimpse of the most amazing places on earth before they disappear.
        </p>
      </div>
    </div>
  );
}

export default LeadCard;
