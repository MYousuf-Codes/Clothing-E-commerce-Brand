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
    <section className="p-6 sm:p-8">
      <h2 className="text-3xl font-extrabold mb-6 text-center">Young’s Favourite</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
        {favorites.map(({ title, img, href }, index) => (
          <Link
            key={index}
            href={href}
            className="text-left transition transform hover:scale-105 flex flex-col items-center"
          >
            <Image 
              src={img} 
              alt={title} 
              width={600} 
              height={700} 
              className="w-full sm:w-72 h-auto rounded-lg shadow-md" 
            />
            <h3 className="mt-4 text-xl font-semibold text-center">{title}</h3>
            <p className="text-gray-500">Explore Now</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FavoritesSection;
