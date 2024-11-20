import Footer from '@/components/Footer/Footer';
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Top Header */}
      <div className="w-full items-center justify-between flex flex-col">
        <div className="w-full flex items-start justify-start ml-10 mt-16 ">
          <div className="w-2/4 flex items-center">
            <span className="font-monument text-white uppercase tracking-widest	">
              the Worlds first AI
              <br /> fintech platform and
              <br /> marketplace for music
            </span>
          </div>
        </div>
        <div className="w-full -mt-56">
          <Image
            src={'/assets/svgs/IntroTopSvg.svg'}
            alt={''}
            height={1983}
            width={2731}
            layout="responsive"
          />
        </div>
      </div>

      {/* Blacklion Message */}
      <div className="w-full items-center justify-center flex flex-col -mt-56">
        <div className="w-2/4">
          <span className="flex text-center font-monument text-white text-2xl	">
            Black Lion is the world’s first Ai-powered fintech platform and
            marketplace designed for the music and entertainment industry. We
            provide real-time data insights and innovative private equity-style
            valuation tools, empowering artists, songwriters, producers,
            engineers, investors, managers and labels to understand and unlock
            the true financial value of music
          </span>
        </div>

        <div className="w-full flex items-center justify-center">
          <Image
            src={'/assets/svgs/LionImg.svg'}
            alt={''}
            height={690}
            width={691}
          />
        </div>

        <div className="w-2/4">
          <span className="flex text-center font-monument text-white text-2xl	">
            By breaking down barriers to capital and automating financial
            processes, we’re revolutionising how the music industry operates,
            giving creators full control of their careers and enterprises their
            time back!
          </span>
        </div>
      </div>

      {/* Executive Team */}
      <div className="mt-10">
        <div className="w-full items-center justify-center flex">
          <div className="flex-row w-full items-center justify-center flex gap-10 flex-wrap lg:gap-16">
            {/* Junaid's Profile */}
            <div className="w-full lg:w-1/4 h-auto lg:h-[590px] bg-colors-custom-red p-2 items-center justify-start rounded-2xl flex flex-col">
              <Image
                src={'/assets/images/JunaidImg.png'}
                alt={''}
                width={460}
                height={440}
                className="object-cover w-full h-full max-h-[400px] lg:max-h-[440px]"
              />
              <span className="font-monument text-white text-xl mt-2">
                Junaid Khan
              </span>
              <span className="font-monument text-white text-sm mt-1">
                CEO & Founder
              </span>

              <div className="flex flex-row items-center justify-center gap-5 mt-5 mb-3">
                <Image
                  src={'/assets/logos/MessageIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/Xicon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/LinkedinIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/InstaIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
              </div>
            </div>

            {/* Daniya's Profile */}
            <div className="w-full lg:w-1/4 h-auto lg:h-[590px] bg-colors-custom-red p-2 items-center justify-start rounded-2xl flex flex-col">
              <Image
                src={'/assets/images/DaniyalImg.png'}
                alt={''}
                width={460}
                height={440}
                className="object-cover w-full h-full max-h-[400px] lg:max-h-[440px]"
              />
              <span className="font-monument text-white text-xl mt-2">
                Daniya Khan
              </span>
              <span className="font-monument text-white text-sm mt-1">
                COO & Founder
              </span>

              <div className="flex flex-row items-center justify-center gap-5 mt-5 mb-3">
                <Image
                  src={'/assets/logos/MessageIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/Xicon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/LinkedinIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/InstaIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alisha and Toro */}
        <div className="w-full items-center justify-center flex mt-10">
          <div className="flex-row w-full items-center justify-center flex gap-10 flex-wrap lg:gap-16">
            {/* Manny Toro's Profile */}
            <div className="w-full lg:w-1/6 h-auto border-4 border-white p-2 items-center justify-start rounded-2xl flex flex-col">
              <Image
                src={'/assets/images/MannyToroImg.jpg'}
                alt={''}
                width={460}
                height={440}
                className="object-cover w-full h-full max-h-[400px] lg:max-h-[440px] border-4 border-solid border-white rounded-2xl"
              />
              <span className="font-monument text-white text-sm mt-2 text-nowrap">
                Manny Toro
              </span>
              <span className="font-monument text-white text-[10px] mt-1 text-nowrap">
                Chief Marketing Officer
              </span>

              <div className="flex flex-row items-center justify-center gap-5 mt-5 mb-3">
                <Image
                  src={'/assets/logos/MessageIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/Xicon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/LinkedinIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/InstaIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
              </div>
            </div>

            {/* Alisha's Profile */}
            <div className="w-full lg:w-1/6 h-auto border-4 border-white p-2 items-center justify-start rounded-2xl flex flex-col">
              <Image
                src={'/assets/images/AlishaOutridgeImg.jpg'}
                alt={''}
                width={460}
                height={400}
                className="object-cover w-full h-full max-h-[400px] lg:max-h-[440px] border-4 border-solid border-white rounded-2xl"
              />
              <span className="font-monument text-white text-sm mt-2 text-nowrap">
                Alisha Outridge
              </span>
              <span className="font-monument text-white text-[10px] mt-1 text-nowrap">
                Chief Technology Officer
              </span>

              <div className="flex flex-row items-center justify-center gap-5 mt-5 mb-3">
                <Image
                  src={'/assets/logos/MessageIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/Xicon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/LinkedinIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
                <Image
                  src={'/assets/logos/InstaIcon.svg'}
                  alt={''}
                  height={20}
                  width={20}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Board Advisors */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        {/* Board Advisor Heading */}
        <div className="w-full items-center justify-center flex flex-row gap-4">
          <span className="font-monument text-white text-4xl">
            Board Advisor
          </span>
          <Image
            src="/assets/svgs/crossIcon.svg"
            alt={''}
            width={200}
            height={200}
          />
        </div>

        {/* Left Image and Profile Containers */}
        <div className="w-full flex flex-col items-center justify-center mt-10">
          {/* Board Advisor Heading */}

          {/* Main container for Left Image and Profile Cards */}
          <div className="w-full flex flex-col items-center justify-center mt-10">
            {/* Main container for Left Image and Profile Cards */}
            <div className="w-full flex items-start justify-center flex-row flex-wrap lg:flex-nowrap gap-2 mt-5">
              {/* Left Image - Clawon */}
              <div className="flex-shrink-0 w-full lg:w-1/5 flex items-center justify-center">
                <Image
                  src={'/assets/svgs/ClawonLeft.svg'}
                  alt={''}
                  height={837}
                  width={813}
                  className="object-contain max-h-[300px] lg:max-h-[800px]"
                />
              </div>

              {/* Profile Cards Container */}
              <div className="w-full lg:w-4/5 flex items-center justify-between flex-row gap-2 flex-wrap">
                {/* Profile Card 1 - Ebonie */}
                <div className="flex-shrink-0 w-full lg:w-[22.5%] h-[500px] border-4 border-white border-solid p-2 items-center justify-between rounded-2xl flex flex-col">
                  <Image
                    src={'/assets/images/EbonieImg.jpg'}
                    alt={''}
                    width={440}
                    height={380}
                    className="object-cover w-full h-4/6 rounded-2xl"
                  />
                  <span className="font-monument text-white text-base text-nowrap text-center uppercase">
                    Ebonie Ward
                  </span>
                  <span className="font-monument text-white text-[10px] text-center uppercase px-5">
                    CEO of 11th and Co.
                  </span>
                  <div className="flex flex-row items-center justify-center gap-5">
                    <Image
                      src={'/assets/logos/MessageIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/Xicon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/LinkedinIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/InstaIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                  </div>
                </div>

                {/* Profile Card 2 - Wayne */}
                <div className="flex-shrink-0 w-full lg:w-[22.5%] h-[500px] border-4 border-white border-solid p-2 items-center justify-between rounded-2xl flex flex-col">
                  <Image
                    src={'/assets/images/WayneImg.jpg'}
                    alt={''}
                    width={440}
                    height={380}
                    className="object-cover w-full h-4/6 rounded-2xl"
                  />
                  <span className="font-monument text-white text-base text-nowrap text-center uppercase">
                    Wayne Hampton
                  </span>
                  <span className="font-monument text-white text-[10px] text-center uppercase px-5">
                    Chief Business Development Officer & Co-Founder - Create
                    Music Group.
                  </span>
                  <div className="flex flex-row items-center justify-center gap-5">
                    <Image
                      src={'/assets/logos/MessageIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/Xicon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/LinkedinIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/InstaIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                  </div>
                </div>

                {/* Profile Card 3 - Luke */}
                <div className="flex-shrink-0 w-full lg:w-[22.5%] h-[500px] border-4 border-white border-solid p-2 items-center justify-between rounded-2xl flex flex-col">
                  <Image
                    src={'/assets/images/LukeImg.jpg'}
                    alt={''}
                    width={440}
                    height={380}
                    className="object-cover w-full h-4/6 rounded-2xl"
                  />
                  <span className="font-monument text-white text-base text-nowrap text-center uppercase">
                    Luke Cooper
                  </span>
                  <span className="font-monument text-white text-[10px] text-center uppercase px-5">
                    General Partner of Latimer ventures
                  </span>
                  <div className="flex flex-row items-center justify-center gap-5">
                    <Image
                      src={'/assets/logos/MessageIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/Xicon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/LinkedinIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/InstaIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                  </div>
                </div>

                {/* Profile Card 4 - Che (Add `mr-10` for right margin) */}
                <div className="flex-shrink-0 w-full lg:w-[22.5%] h-[500px] border-4 border-white border-solid p-2 items-center justify-between rounded-2xl flex flex-col mr-10">
                  <Image
                    src={'/assets/images/ChePopeImg.jpg'}
                    alt={''}
                    width={440}
                    height={380}
                    className="object-cover w-full h-4/6 rounded-2xl"
                  />
                  <span className="font-monument text-white text-base text-nowrap text-center uppercase">
                    Che Pope
                  </span>
                  <span className="font-monument text-white text-[10px] text-center uppercase px-5">
                    COO of Yeezy / Wrkshp
                  </span>
                  <div className="flex flex-row items-center justify-center gap-5">
                    <Image
                      src={'/assets/logos/MessageIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/Xicon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/LinkedinIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                    <Image
                      src={'/assets/logos/InstaIcon.svg'}
                      alt={''}
                      height={20}
                      width={20}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
