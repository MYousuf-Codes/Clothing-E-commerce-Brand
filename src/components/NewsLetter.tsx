"use client"
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <main>
      <div className="bg-yellow-500 py-10 px-5 h-96 text-center ">
        <h2 className="text-white font-extrabold text-2xl md:text-4xl mt-20 mb-2">
          JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
        </h2>
        <p className="text-white text-sm md:text-base mb-5">
          Type your email down below and be young wild generation
        </p>
        <form className="flex justify-center items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add your email here"
            className="px-2 py-4 text-gray-700 rounded-l-md border-none focus:ring-2 focus:ring-yellow-700 w-1/2 md:w-1/3"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-4 -ml-16 rounded-r-md font-bold hover:bg-gray-800 transition duration-300"
          >
            SEND
          </button>
        </form>
      </div>
    </main>
  );
};

export default Newsletter;
