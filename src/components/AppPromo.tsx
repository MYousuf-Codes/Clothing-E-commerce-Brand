import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AppPromo: React.FC = () => {
  return (
    <section className="flex justify-between items-center p-10 bg-yellow-50">
      <div>
        <h2 className="text-4xl font-extrabold ml-24">
          DOWNLOAD APP & 
          GET THE VOUCHER!
        </h2>
        <p className="mt-4 text-gray-700 ml-24">
          Get 30% off for first transaction using <br />
          Rondovision mobile app for now.
        </p>
        <div className="mt-6 flex ml-24 space-x-4">
          <Link href="/playstore">
            <Image src="/download.png" alt="Google Play Store" width={300} height={150} />
          </Link>
        </div>
      </div>
      <div className='flex items-center '>
        <Image src="/App.png" alt="App Promotion" width={900} height={1500} className="rounded-lg mr-32" />
      </div>
    </section>
  );
};

export default AppPromo;
