
import Header from '@/components/Header';
import { WorkingProgress } from '@/components/WorkingProgress';
import Head from 'next/head';
import React from 'react';

const Home = () => {

  return (
    <main>
      <Head>
        <title>MoglyDev | Fullstack Dev</title>
      </Head>
      <Header />
      <WorkingProgress />
    </main>
  );
};

export default Home;
