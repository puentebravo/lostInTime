import React from "react";


function ContactCard() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto mt-8 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-yellow-400 rounded shadow-lg max-w-3xl min-w-min">
      <h1 className="text-xl text-center text-white pb-8">Follow our adventures!</h1>
      <table className="grid grid-cols-2 justify-center pb-4">
      <p className="text-white text-center"><i className="fa-brands fa-twitter fa-10x"></i></p>
      <p className="text-white text-center"><i className="fa-brands fa-instagram fa-10x"></i></p>
      </table>
      </section>
    </main>
  );
}

export default ContactCard;
