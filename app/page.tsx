"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import config from '../tailwind.config';

const HomePage = () => {
  // useEffect(() => {
  //   const url = window.location.href;
  //   if (url.includes('#')) {
  //     const id = url.split('#')[1];
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, []);

  return (
    <div className="flex flex-col items-center justify-between max-w-[1200px] mx-auto pt-20">
      <section id="home" className='flex flex-col lg:flex-row items-center'>
        <img src="/logo-avatar.gif" alt="Logo-avatar" className='lg:w-5/12 w-full'/>
        <div className='py-6 -rotate-3'>
          <p className='font-[title] text-4xl font-extrabold'>
            the most based base baser on base
          </p>
          <img src="/logo.webp" alt="Logo" className='w-full'/>
          <div className='flex flex-row justify-center px-16'>
            <Image src="/tg-dynamic.gif" alt='tg-dynamic' width="200" height="60" />
            <Image src="/buy-now-dynamic.gif" alt='tg-dynamic' width="200" height="60" />
          </div>
        </div>
      </section>
      <div className='flex justify-end w-full'>
        <Image src="/down-arrow1.webp" alt="arrow1" width="200" height="370" />
      </div>

      <section id="about" className='-mt-[50px] flex items-center justify-center lg:flex-row flex-col w-full'>
          <img src="/meme1.gif" alt="alt" className='lg:w-[45%] w-full' />
          <div className='text-center font-[title] text-4xl leading-[3rem] w-full lg:w-[50%]'>
            <p>i am  bojak</p>
            <p> y'know, like wojak.</p>
            <p>but based. neat, huh?</p>
            <p>and this token is meant</p>
            <p>to celebrate just that.</p>
            <p>let's all make it special!</p>
          </div>
      </section>
      <section>
        <Image src="/down-arrow2.webp" alt="down-arrow2" width="200" height="370" />
        <div>
          <p>get ready for</p>
          <p>a truly unique coin!</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
          <div className='text-center'>
            <p className='font-[title] text-3xl'>it's about recognizing differences.</p>
            <p>it's about respecting variety.</p>
            <p>it's about learning how to look at the</p>
            <p>brighter side of things... always.</p>
            <p>it's about finding joy in the most mundane.</p>
            <p>of circumstances.</p>
            <p>it's all about changing for the better.</p>
          </div>
          <Image src="/meme2.gif" alt="alt" width="600" height="600" unoptimized />
        </div>
        <Image src="/down-arrow3.webp" alt="down-arrow3" width="200" height="370" />
        <div>
          <p>it's all about building a </p>
          <p>new culture!</p>
          <span className='text-center '>
            <div>one that is distinctly ours.</div>
            <div>one where no one gets left behind.</div>
            <div>one where all work for a common cause.</div>
            <div>one where we can all truly belong.</div>
            <div>becoz we are based AF!</div>
          </span>
        </div>
        <Image src="/down-arrow4.webp" alt="down-arrow4" width="200" height="370" unoptimized />
      </section >
      <section id="tokenomics" className='my-64'>
        <h1 className='text-center'>tokenomics</h1>
        <div className='flex flex-col lg:flex-row items-center'>
          <Image src="/meme3.gif" alt="Meme3" width='600' height="600" />
          <div className='flex flex-row'>
            <Image src="/tokenomics-total-supply.webp" alt="total-supply" width="300" height="300" />
            <Image src="/tokenomics-buy-sell.webp" alt="total-supply" width="300" height="300" />
          </div>
        </div>
      </section>
      <div className='flex flex-row gap-10 items-baseline'>
        <p>
          join us today!
        </p>
        <Image src="/down-arrow3.webp" alt="down-arrow3" width="200" height="370" />
      </div>
      <section id="buy" className='flex flex-col lg:flex-row gap-10'>
        <Image src="/logo-avatar.gif" alt="Logo-avatar" width="400" height="400" unoptimized />
        <div className='py-6'>
          <Image src="/logo.webp" alt="Logo" width="657" height="253" />
          <div className='flex flex-row justify-center px-16'>
            <Image src="/tg-static.webp" alt='tg-dynamic' width="200" height="60" />
            <Image src="/twitter-static.webp" alt='twitter-static' width="200" height="60" />
          </div>
          <Image src="/buy-now-static.webp" alt='buy-now-static' width="300" height="90" className='mx-auto' />
        </div>
      </section>
      <div className='flex flex-col items-center justify-center font-bold text-2xl py-6'>
        <p>$BOJAK: 0x891867D752186Fc7C3a228f33e24cb73eB4e959b</p>
        <div className='flex flex-row justify-center gap-10 py-5'>
          <Image src="/dex-tools.webp" alt="alt" width="260" height="50" />
          <Image src="/dex-screener.webp" alt="alt" width="260" height="50" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
