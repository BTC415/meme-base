"use client"
import Link from 'next/link';
import Image from 'next/image';

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
        <div className='lg:w-2/3 w-full h-full relative'>
          <Image
            src={'/logo-avatar.gif'}
            // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
            width={0}
            alt=''
            height={0}
            sizes="100vw"
            className='w-full h-full'
          />
        </div>
        <div className='py-6 -rotate-3'>
          <p className='font-title text-4xl font-extrabold'>
            the most based base baser on base
          </p>
          <img src="/logo.webp" alt="Logo" className='w-full' />
          <div className='flex flex-row gap-8 justify-center px-16 my-8 w-1/2 mx-auto -rotate-[8deg]'>
            <img src="/tg-dynamic.gif" alt='tg-dynamic' />
            <img src="/buy-now-dynamic.gif" alt='tg-dynamic' />
          </div>
        </div>
      </section>

      <div className='flex justify-end w-full h-full min-h-20'>
        <Image
          src="/down-arrow1.webp"
          // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
          width={0}
          alt=''
          height={0}
          sizes="100vw"
          className='w-auto'
        />
      </div>

      <section id="about" className='flex items-center justify-center lg:flex-row flex-col w-full'>
        <div className='lg:w-[45%] w-full h-full'>
          <Image
            src="/meme1.gif"
            // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
            width={0}
            alt=''
            height={0}
            sizes="100vw"
            className='w-auto'
          />
        </div>
        <div className='text-center font-title text-4xl leading-[3rem] w-full lg:w-[50%]'>
          <p>i am <span className='text-5xl text-blue-600'>bojak.</span></p>
          <p> y'know, like <span className='text-5xl text-red-600/85'>wojak.</span></p>
          <p>but <span className='text-5xl text-blue-600'>based.</span> neat, huh?</p>
          <p>and this token is meant</p>
          <p>to celebrate just that.</p>
          <p>let's all make it <span className='text-5xl text-yellow-400'>special!</span></p>
        </div>
      </section>
      <div className='flex flex-start w-full pl-40 min-h-20'>
        <Image
          src="/down-arrow2.webp"
          // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
          width={0}
          alt=''
          height={0}
          sizes="100vw"
          className='w-auto'
        />
      </div>
      <section className='text-center text-[#FF1C1C] font-bold font-title text-7xl py-3'>
        <p>get ready for</p>
        <p>a truly unique coin!</p>
      </section>

      <section className='flex flex-col lg:flex-row gap-10 items-center justify-center w-full h-full'>
        <div className='text-start font-title text-2xl w-full lg:w-[50%] py-20'>
          <p >it's about recognizing <span className='text-3xl text-[#FA39FF]'>differences.</span></p>
          <p>it's about respecting <span className='text-3xl text-[#43D11A]'>variety.</span></p>
          <p>it's about learning how to look at the</p>
          <p><span className='text-3xl text-[#FFB00F]'>brighter side of things</span>... always.</p>
          <p>it's about <span className='text-3xl text-[#FF1C1C]'>finding joy</span> in the most mundane.</p>
          <p>of circumstances.</p>
          <p>it's all about <span className='text-3xl text-[#43D11A]'>changing for the better.</span></p>
        </div>
        <div className='lg:w-[35%] w-full h-full'>
          <Image
            src="/meme2.gif"
            // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
            width={0}
            alt=''
            height={0}
            sizes="100vw"
            className='w-auto'
          />
        </div>
      </section>

      <div className='flex justify-end w-full pr-30 min-h-40'>
        <Image
          src="/down-arrow3.webp"
          // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
          width={0}
          alt=''
          height={0}
          sizes="100vw"
          className='w-auto'
        />
      </div>

      <section className='text-center font-title -mt-24 mr-24'>
        <p className='text-5xl text-[#FF1C1C]'>it's all about building a </p>
        <p className='text-8xl text-[#43D11A]'>new culture!</p>
        <div className='text-center text-3xl'>
          <p>one that is distinctly ours.</p>
          <p>one where no one gets left behind.</p>
          <p>one where all work for a common cause.</p>
          <p>one where we can all truly belong.</p>
          <p><span className='text-5xl text-[#FFB00F] font-bold'>becoz we are based AF!</span></p>
        </div>
      </section>

      <div className='flex justify-start w-full pr-30 min-h-40'>
        <Image
          src="/down-arrow4.webp"
          // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
          width={0}
          alt=''
          height={0}
          sizes="100vw"
          className='w-auto'
        />
      </div>
      
      
      <section id="tokenomics" className='w-full h-full'>
        <h1 className='text-center font-title text-5xl text-[#FA39FF]'>tokenomics</h1>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='lg:w-[45%] w-full h-full'>
            <Image
              src="/meme3.gif"
              // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
              width={0}
              alt=''
              height={0}
              sizes="100vw"
              className='w-auto'
            />
          </div>
          <div className='flex flex-row w-[55%] py-20'>
            <div className='w-[50%] h-full'>
              <Image
                src="/tokenomics-total-supply.webp"
                // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
                width={0}
                alt=''
                height={0}
                sizes="100vw"
                className='w-auto'
              />
            </div>
            <div className='w-[50%] -ml-[10%]'>
              <Image
                src="/tokenomics-buy-sell.webp"
                // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
                width={0}
                alt=''
                height={0}
                sizes="100vw"
                className='w-auto'
              />
            </div>
          </div>
        </div>
      </section>

      <div className='flex justify-end w-full pr-30 min-h-40'>
        <Image
          src="/down-arrow3.webp"
          width={0}
          alt=''
          height={0}
          sizes="100vw"
          className='w-auto'
        />
      </div>

      <p className='font-title text-6xl text-[#43D11A] py-4'>
        join us today!
      </p>
      <section id="buy" className='flex flex-col lg:flex-row gap-10 w-full h-full'>
        <div className='w-[50%] h-full'>
          <Image
            src="/logo-avatar.gif" 
            width={0}
            alt=''
            height={0}
            sizes="100vw"
            className='w-auto'
          />
        </div>
        <div className='py-6'>
          <div className='w-full min-h-40'>
            <Image
              src="/logo.webp" 
              width={0}
              alt=''
              height={0}
              sizes="100vw"
              className='w-auto'
            />
          </div>
          <div className='flex flex-row justify-center px-16'>
            <Link href="https://t.me/Bojakportal" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className='w-full'>
                <Image
                  src="/tg-static.webp" 
                  width={0}
                  alt=''
                  height={0}
                  sizes="100vw"
                  className='w-auto'
                />
              </div>
            </Link>
            <Link href="https://x.com/bojakcoin" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className='w-full'>
                <Image
                  src="/twitter-static.webp"
                  width={0}
                  alt=''
                  height={0}
                  sizes="100vw"
                  className='w-auto'
                />
              </div>
            </Link>
          </div>

          <div className='w-full h-full cursor-pointer' onClick={() => window.open("https://tracker.bubblebuybot.com/base/buy?url=https%3A%2F%2Fapp.uniswap.org%2F%23%2Fswap%3FoutputCurrency%3D0x891867D752186Fc7C3a228f33e24cb73eB4e959b%26inputCurrency%3D0x4200000000000000000000000000000000000006%26chain%3Dbase", "_blank")}>
            <Image
              src="/buy-now-static.webp"
              width={0}
              alt=''
              height={0}
              sizes="100vw"
              className='w-auto'
            />
          </div>
        </div>
      </section>
      <div className='flex flex-col items-center justify-center font-bold text-2xl py-6'>
        <p>$MARSWTF: 0x891867D752186Fc7C3a228f33e24cb73eB4e959b</p>
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
