"use client"
import { useEffect } from 'react';
import Link from 'next/link';
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
        <img src="/logo-avatar.gif" alt="Logo-avatar" className='lg:w-5/12 w-full' />
        <div className='py-6 -rotate-3'>
          <p className='font-[title] text-4xl font-extrabold'>
            the most based base baser on base
          </p>
          <img src="/logo.webp" alt="Logo" className='w-full' />
          <div className='flex flex-row gap-8 justify-center px-16 my-8 w-1/2 mx-auto -rotate-[8deg]'>
            <img src="/tg-dynamic.gif" alt='tg-dynamic' />
            <img src="/buy-now-dynamic.gif" alt='tg-dynamic' />
          </div>
        </div>
      </section>
      <div className='flex justify-end w-full'>
        <img src="/down-arrow1.webp" alt="arrow1" />
      </div>

      <section id="about" className='-mt-[50px] flex items-center justify-center lg:flex-row flex-col w-full'>
        <img src="/meme1.gif" alt="alt" className='lg:w-[45%] w-full' />
        <div className='text-center font-[title] text-4xl leading-[3rem] w-full lg:w-[50%]'>
          <p>i am <span className='text-5xl text-blue-600'>bojak.</span></p>
          <p> y'know, like <span className='text-5xl text-red-600/85'>wojak.</span></p>
          <p>but <span className='text-5xl text-blue-600'>based.</span> neat, huh?</p>
          <p>and this token is meant</p>
          <p>to celebrate just that.</p>
          <p>let's all make it <span className='text-5xl text-yellow-400'>special!</span></p>
        </div>
      </section>
      <section >
        <img src="/down-arrow2.webp" alt="down-arrow2" className='-mt-8 ml-36' />
        <div className='-mt-16 text-center text-[#FF1C1C] font-bold font-[title] text-7xl py-3'>
          <p>get ready for</p>
          <p>a truly unique coin!</p>
        </div>
        <div className='flex items-center justify-center lg:flex-row flex-col w-full'>
          <div className='flex flex-col lg:flex-row gap-10 items-center justify-center'>
            <div className='text-start font-[title] text-2xl w-full lg:w-[50%]'>
              <p >it's about recognizing <span className='text-3xl text-[#FA39FF]'>differences.</span></p>
              <p>it's about respecting <span className='text-3xl text-[#43D11A]'>variety.</span></p>
              <p>it's about learning how to look at the</p>
              <p><span className='text-3xl text-[#FFB00F]'>brighter side of things</span>... always.</p>
              <p>it's about <span className='text-3xl text-[#FF1C1C]'>finding joy</span> in the most mundane.</p>
              <p>of circumstances.</p>
              <p>it's all about <span className='text-3xl text-[#43D11A]'>changing for the better.</span></p>
            </div>
            <img src="/meme2.gif" alt="alt" className='lg:w-[35%] w-full' />
          </div>

        </div>
        <div className='flex justify-end w-full pr-24'>
          <img src="/down-arrow3.webp" alt="arrow1" />
        </div>
        <div className='text-center font-[title] -mt-24 mr-24'>
          <p className='text-5xl text-[#FF1C1C]'>it's all about building a </p>
          <p className='text-8xl text-[#43D11A]'>new culture!</p>
          <div className='text-center text-3xl'>
            <p>one that is distinctly ours.</p>
            <p>one where no one gets left behind.</p>
            <p>one where all work for a common cause.</p>
            <p>one where we can all truly belong.</p>
            <p><span className='text-5xl text-[#FFB00F] font-bold'>becoz we are based AF!</span></p>
          </div>
        </div>
        <img src="/down-arrow4.webp" alt="down-arrow4" className='ml-36' />
      </section >
      <section id="tokenomics" className=''>
        <h1 className='text-center font-[title] text-5xl text-[#FA39FF]'>tokenomics</h1>
        <div className='flex flex-col lg:flex-row items-center'>
          <img src="/meme3.gif" alt="Meme3" className='w-[45%]' />
          <div className='flex flex-row w-[55%]'>
            <img src="/tokenomics-total-supply.webp" alt="total-supply" className='w-[50%]' />
            <img src="/tokenomics-buy-sell.webp" alt="total-supply" className='w-[50%] -ml-[10%]' />
          </div>
        </div>
      </section>
      <div className='-mt-28 flex flex-row gap-10 items-baseline justify-end w-full mr-32'>
        <p className='font-[title] text-6xl text-[#43D11A] py-4'>
          join us today!
        </p>
        <img src="/down-arrow3.webp" alt="down-arrow3" />
      </div>
      <section id="buy" className='flex flex-col lg:flex-row gap-10'>
        <img src="/logo-avatar.gif" alt="Logo-avatar" />
        <div className='py-6'>
          <img src="/logo.webp" alt="Logo" />
          <div className='flex flex-row justify-center px-16'>
            <Link href="https://t.me/Bojakportal" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/tg-static.webp" alt='tg-dynamic' />
            </Link>
            <Link href="https://x.com/bojakcoin" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/twitter-static.webp" alt='twitter-static' />
            </Link>
          </div>

          <Link href="https://tracker.bubblebuybot.com/base/buy?url=https%3A%2F%2Fapp.uniswap.org%2F%23%2Fswap%3FoutputCurrency%3D0x891867D752186Fc7C3a228f33e24cb73eB4e959b%26inputCurrency%3D0x4200000000000000000000000000000000000006%26chain%3Dbase" target="_blank" rel="noopener noreferrer" className="inline-block mx-auto">
            <img src="/buy-now-static.webp" alt='buy-now-static' className='mx-auto'/>
          </Link>
        </div>
      </section>
      <div className='flex flex-col items-center justify-center font-bold text-2xl py-6'>
        <p>$BOJAK: 0x891867D752186Fc7C3a228f33e24cb73eB4e959b</p>
        <div className='flex flex-row justify-center items-center gap-10 py-5'>
          <Link href="https://www.dextools.io/app/en/base/pair-explorer/0x9421103043c1716211614a06ede9ce493b8eeed8?t=1710963579943" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img src="/dex-tools.webp" alt="dex-tools" />
          </Link>
          <Link href="https://dexscreener.com/base/0x891867D752186Fc7C3a228f33e24cb73eB4e959b" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img src="/dex-screener.webp" alt="dex-screener" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
