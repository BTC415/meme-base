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
    <div className="flex flex-col items-center justify-between p-24">
      <section id="home" className='flex flex-col lg:flex-row gap-10'>
        <Image src="/logo-avatar.gif" alt="Logo-avatar" width="400" height="400" unoptimized/>
        <div className='py-6'>
          <p>
            the most based base baser on base
          </p>
          <Image src="/logo.webp" alt="Logo" width="657" height="253"/>
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
