import React from "react";
import aboutImg from "../assets/about.jpg";

function AboutCard() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto mt-8 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-black rounded-xl shadow-lg max-w-3xl min-w-min">
        <div className="flex justify-center">
          <img
            src={aboutImg}
            width="300px"
            height="300px"
            alt="Charlie and Maya"
            className="rounded-full border-2 mt-3 drop-shadow-xl"
          />
        </div>
        <h1 className="text-lg text-center text-white">Who are we?</h1>
        <p className="text-white pt-4 pb-4 px-4">
          We're Maya and Charlie, a pair of lifelong wanderers who love nothing
          more than finding out what's over the next horizon. Through our
          journeys, we realized we'd gravitated to places in danger of
          disappearing. From the sinking city of Venice to the isles of the
          Galapagos, we love seeing most the places that may soon vanish. So
          whether we're journeying throughout the wide world ourselves, or
          experiencing new cultures through food, thanks for joining us for the ride!
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
