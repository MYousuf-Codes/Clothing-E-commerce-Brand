import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex items-center bg-background/50 backdrop-blur-lg justify-between p-5  bg-white">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={140} height={70} className="ml-16" />
      </Link>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/catalogue" className="font-semibold">
              CATALOGUE
            </Link>
          </li>
          <li>
            <Link href="/fashion" className="font-semibold">
              FASHION
            </Link>
          </li>
          <li>
            <Link href="/favourite" className="font-semibold">
              FAVORITES
            </Link>
          </li>
          <li>
            <Link href="/lifestyle" className="font-semibold">
              LIFESTYLE
            </Link>
          </li>
          <li>
            <Link href="/signup" className="px-4 py-3 text-white font-semibold rounded-lg hover:bg-gray-700 bg-black">
              SIGN UP
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;