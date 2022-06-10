import React from "react";

function ContactCard() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto mt-10 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-black rounded-xl shadow-lg max-w-3xl min-w-min">
        <h1 className="text-xl text-center text-white mb-8 mt-4 pb-4 border-b-2 border-double">
          Follow our adventures!
        </h1>
        <div className="grid grid-cols-2 justify-center pb-4">
          <a
            href="https://twitter.com/puentebravo"
            className="text-white text-center transition duration-300 ease-in-out hover:text-blue-400"
            title="twitter.com/puentebravo"
          >
            <i className="fa-brands fa-twitter fa-10x"></i>
          </a>
          <a  href="..." className="text-white text-center transition duration-300 ease-in-out hover:text-pink-500" title="Instagram link">
            <i className="fa-brands fa-instagram fa-10x"></i>
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactCard;
