import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { name: 'Hoodies & Sweatshirt   →', image: '/Arrival1.png', link: '/' },
  { name: 'Coats & Parkas   →', image: '/Arrival2.png', link: '/' },
  { name: 'Tees & T-Shirt   →', image: '/Arrival3.png', link: '/' },
];

const NewArrivals = () => {
  return (
    <section className="ml-16 p-10">
      <h2 className="text-4xl font-extrabold mb-6 ml-16">New Arrivals</h2>
      <div className="flex justify-around">
        {products.map((product, index) => (
          <Link href={product.link} key={index}>
            <div className="text-left transition transform hover:scale-105 duration-300">
              <Image src={product.image} alt={product.name} width={270} height={350} className="rounded-lg" />
              <p className="mt-4 text-lg font-semibold ">{product.name}</p>
              <span className="text-gray-500 text-sm ">Explore Now! </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
