"use client"
import { useEffect } from 'react';
import Image from 'next/image';

const HomePage = () => {
  useEffect(() => {
    const url = window.location.href;
    if (url.includes('#')) {
      const id = url.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-between max-w-[1200px] mx-auto pt-20">
      <section id="home" className='flex flex-col lg:flex-row items-center'>
        <img src="/logo-avatar.gif" alt="Logo-avatar" className='lg:w-5/12 w-full'/>
        <div className='py-6 -rotate-3'>
          <p className=' font-[title] text-4xl font-extrabold'>
            the most based base baser on base
          </p>
          <img src="/logo.webp" alt="Logo" className='w-full'/>
          <div className='flex flex-row justify-center px-16'>
            <Image src="/tg-dynamic.gif" alt='tg-dynamic' width="200" height="60" />
            <Image src="/buy-now-dynamic.gif" alt='tg-dynamic' width="200" height="60" />
          </div>
        </div>
      </section>
      <section id="about" className='my-64'>
        <h1>Section 2</h1>
        <p>This is the content of section 2.</p>
      </section >
      <section id="tokenomics" className='my-64'>
        <h1>Section 3</h1>
        <p>This is the content of section 3.</p>
      </section>
      <section id="buy" className='my-64'>
        <h1>Section 4</h1>
        <p>This is the content of section 3.</p>
      </section>
    </div>
  );
};

export default HomePage;
