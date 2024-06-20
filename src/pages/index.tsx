
import Header from '@/components/Header';
import Head from 'next/head';
import React from 'react';

const Home = () => {

  return (
    <main>
      <Head>
        <title>MoglyDev | Fullstack Dev</title>
      </Head>
      <Header />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white shadow-md rounded-lg">
          <span className="text-9xl text-gray-700 font-bold blink2">Working in Progress!</span>
        </div>
      </div>

    </main>
  );
};

export default Home;
