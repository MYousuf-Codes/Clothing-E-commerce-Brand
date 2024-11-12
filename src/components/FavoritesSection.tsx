import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Favorite = {
  title: string;
  img: string;
  href: string;
};

const favorites: Favorite[] = [
  { title: 'Trending on Instagram', img: '/young2.png', href: '/' },
  { title: 'All Under $40', img: '/young1.png', href: '/' },
];

const FavoritesSection: React.FC = () => {
  return (
    <section className="p-6 md:p-8 lg:p-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center sm:text-left">{`Young’s Favourite`}</h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {favorites.map(({ title, img, href }, index) => (
          <Link
            key={index}
            href={href}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-left transition transform hover:scale-105 flex flex-col items-center"
          >
            <Image
              src={img}
              alt={title}
              width={600}
              height={700}
              className="mx-auto w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="text-gray-500">Explore Now</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FavoritesSection;
