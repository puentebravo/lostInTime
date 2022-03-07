import React from "react";


function ContactCard() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto mt-8 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-yellow-400 rounded shadow-lg max-w-3xl min-w-min">
      <h1 className="text-lg text-center text-white">Follow our adventures!</h1>
      <table className="grid grid-cols-2 justify-center">
      <p className="text-white text-center">Twitter</p>
      <p className="text-white text-center">Instagram</p>
      </table>
      </section>
    </main>
  );
}

export default ContactCard;
