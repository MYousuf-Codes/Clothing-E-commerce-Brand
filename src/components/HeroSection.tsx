import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center ml-16 mr-16 mb-24 rounded-2xl bg-gray-100">
      <div className="max-w-md">
        <h1 className="text-6xl font-extrabold text-left ml-16">
          <p className='bg-white text-black font-sans mt-10'>LET'S</p> EXPLORE <br/>
          <p className='bg-yellow-200 font-sans'>UNIQUE</p> CLOTHES.
        </h1>
        <p className="ml-16 mt-5 font-arial font-semibold">Live for influential and innovative fashion!</p>
        <button className=" ml-16 mt-5 mb-10 py-2 px-4 bg-black text-white rounded-lg transition duration-300 hover:bg-gray-800">
          Shop Now
        </button>
      </div>
      <Image src="/HeroImage.png" width={300} height={250} alt="Hero Image" className="mt-4 md:mt-0 lg:mr-20 w-48 sm:w-60 lg:w-96 h-auto" />
    </section>
  );
};

export default HeroSection;
