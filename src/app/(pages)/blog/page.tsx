import Footer from '@/components/Footer/Footer';
import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <div className="w-full items-center justify-center flex flex-col ">
        <div className="w-full items-center justify-center flex mt-10 flex-col">
          <span className="font-monument text-white text-4xl uppercase">
            News
          </span>
          <Image
            src={'/assets/svgs/LionImg.svg'}
            alt={''}
            height={848}
            width={849}
          />
          <span className="font-monument text-white text-4xl uppercase">
            STAY INFORMED ON OUR PAWGRESS...
          </span>
        </div>

        <div className="w-full items-center justify-center flex mt-10 flex-row gap-4">
          <div className="w-5/12 items-start justify-start flex flex-col border-4 border-solid border-white h-[714px] rounded-2xl	">
            {/* <Image src={'/assets/svgs/'} alt={''} /> */}
          </div>

          <div className="w-5/12 items-center justify-center flex flex-col border-4 border-solid border-white h-[714px] rounded-2xl	">
            zain
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
