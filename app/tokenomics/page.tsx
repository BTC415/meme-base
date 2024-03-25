"use client"
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const HoldersChart = dynamic(() => import("@/components/holdersChart"), { ssr: false });

interface IHolder {
  contributor: string,
  amount: number,
  cnt: number
}

const data = [
  "0xec240a8949422bb9e41c7de6fe247540655f5b2f",
  "0xf8686f2ae1e27f2a27ebf9f9561c55df6e5b7a23",
  "0x975ccbb6e81078063f579bf587c8bbd750b088bd",
  "0xec240a8949422bb9e41c7de6fe247540655f5b2f",
  "0xbd49829aa9ceb5269444d4778ff2188f5ca338e2",
  "0xec240a8949422bb9e41c7de6fe247540655f5b2f",
  "0xec240a8949422bb9e41c7de6fe247540655f5b2f",
  "0xbd49829aa9ceb5269444d4778ff2188f5ca338e2",
  "0xdd5e3a4793231fdc3a56059167f9f723131e3840",
  "0xdd5e3a4793231fdc3a56059167f9f723131e3840",
  "0xbd49829aa9ceb5269444d4778ff2188f5ca338e2",
  "0xdd5e3a4793231fdc3a56059167f9f723131e3840",
]

const HomePage = () => {
  React.useEffect(() => {
    axios.get(`https://roost-api.from-me.click/contributors`).then(({data}) => {
      setHolders (data);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  const [holders, setHolders] = React.useState<IHolder[]>([]);

  const _renderHolder = ({ num, address, price }: { num: number, address: string, price: string }) => (
    <div key={num} className='bg-white flex mt-3 w-full px-10 py-3 border-2 rounded-full border-black' style={{ boxShadow: '-5px 5px 0px black' }}>
      <div className='title w-1/5 text-2xl text-center'>{num}.</div>
      <div className='title w-3/5 text-2xl overflow-hidden text-ellipsis'>{address}</div>
      <div className='title w-1/5 text-2xl'>{price} ETH</div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-between pt-20">
      <section id="home" className='flex flex-col lg:flex-row items-center max-w-[1200px] mx-auto'>
        <img src="/logo-avatar.gif" alt="Logo-avatar" className='lg:w-5/12 w-full' />
        <div className='py-6 -rotate-3'>
          <p className=' title text-4xl font-extrabold'>
            the most based base baser on base
          </p>
          <img src="/logo.webp" alt="Logo" className='w-full' />
        </div>
      </section>
      <section className='relative mt-[70px] text-center w-full bg-[#A6C2FA] flex-cols pt-10'>
        <h2 className='title text-[55px] font-bold [text-shadow:-4px_6px_0px_#000000]'>TOKENOMICS</h2>
        <img className='w-full !z-[1000]' src='/tokenomics.png'/>
      </section>

      <section className='p-10 mt-10 w-full items-center border-2 border-black border-l-[5px] border-b-[5px] grid lg:grid-cols-2 rounded-2xl max-w-[1200px] mx-auto'>
        <div className='relative'>
          <HoldersChart />
          <img className='absolute w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src='/logo.png'/>
        </div>
        <div className='px-5 text-center'>
          <div className='mb-5 text-left'>
            <h2 className='title text-[45px] font-bold [text-shadow:-4px_6px_0px_#000000]'>TOP 10</h2>
            <h2 className='title text-[45px] font-bold [text-shadow:-4px_6px_0px_#000000]'>CONTRIBUTORS</h2>
          </div>

          {
            holders.slice(0, 10).map((item: IHolder, index: number) => (
              <div key={index} className='flex w-full items-center gap-2'>
                <span className='w-5 h-5 aspect-square rounded-full bg-orange-300'></span>
                <p className='font-[text] text-2xl overflow-hidden text-ellipsis'>{item.contributor}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section className='mt-10 w-full bg-[#A6C2FA] flex justify-center py-10'>
        <div className='w-full items-center max-w-[1200px] bg-[#A6C2FA]'>
          <h2 className='title text-[45px] font-bold [text-shadow:-4px_6px_0px_#000000]'>TOP 100 CONTRIBUTORS</h2>
          {

            holders.slice(0,100).map((_holder: IHolder, index: number) => _renderHolder({ num: index + 1, address: _holder.contributor, price: '10' }))
          }

        </div>
      </section>


    </div>
  );
};

export default HomePage;
