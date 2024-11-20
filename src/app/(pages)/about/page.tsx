import Footer from '@/components/Footer/Footer';
import React from 'react';
import Image from 'next/image';

// Reusable Component for Team Member with Highlight Support
const TeamMember = ({
  imageSrc,
  name,
  title,
  isAdvisor = false,
  isHighlighted = false,
  customIconColor = false,
}) => (
  <div
    className={`${
      isAdvisor
        ? 'w-1/5 h-[570px]'
        : isHighlighted
        ? 'w-1/4 h-[700px]'
        : 'w-1/5 h-[520px]'
    } border-4 border-white p-4 items-center justify-start rounded-2xl flex flex-col`}
  >
    <div
      className={`w-full ${
        isHighlighted ? 'h-[500px]' : 'h-[300px]'
      } flex items-center justify-center overflow-hidden rounded-xl`}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={500}
        height={500}
        className="object-cover w-full h-full" // Ensures images are of the same size and cover the container
      />
    </div>
    <div
      className={`flex flex-col items-center justify-center ${
        isHighlighted ? 'h-[120px]' : 'h-[100px]'
      } mt-4`}
    >
      <span
        className={`font-monument text-white text-center text-nowrap ${
          isHighlighted ? 'text-2xl' : 'text-lg'
        }`}
      >
        {name}
      </span>
      <span
        className={`font-monument text-white text-center leading-tight  ${
          isHighlighted ? 'text-base' : 'text-[10px]'
        } mt-1 px-2`}
      >
        {title}
      </span>
    </div>
    <div className="flex flex-row items-center justify-center gap-5 mt-auto mb-3">
      {['MessageIcon', 'Xicon', 'LinkedinIcon', 'InstaIcon'].map(
        (icon, index) => (
          <div
            key={index}
            className={customIconColor ? 'text-custom-red' : 'text-white'}
          >
            <Image
              src={`/assets/logos/${icon}.svg`}
              alt={`${name} ${icon}`}
              height={30}
              width={30}
            />
          </div>
        )
      )}
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Top Header */}
      <div className="w-full items-center justify-between flex flex-col">
        <div className="w-full flex items-start justify-start ml-10 mt-16 ">
          <div className="w-2/4 flex items-center">
            <span className="font-monument text-white uppercase tracking-widest">
              the World's first AI
              <br /> fintech platform and
              <br /> marketplace for music
            </span>
          </div>
        </div>
        <div className="w-full -mt-56">
          <Image
            src={'/assets/svgs/IntroTopSvg.svg'}
            alt={'Intro Top'}
            height={1983}
            width={2731}
            layout="responsive"
          />
        </div>
      </div>

      {/* Blacklion Message */}
      <div className="w-full items-center justify-center flex flex-col -mt-56">
        <div className="w-2/4">
          <span className="flex text-center font-monument text-white text-2xl">
            Black Lion is the world’s first AI-powered fintech platform and
            marketplace designed for the music and entertainment industry. We
            provide real-time data insights and innovative private equity-style
            valuation tools, empowering artists, songwriters, producers,
            engineers, investors, managers, and labels to understand and unlock
            the true financial value of music.
          </span>
        </div>

        <div className="w-full flex items-center justify-center">
          <Image
            src={'/assets/svgs/LionImg.svg'}
            alt={'Lion Image'}
            height={690}
            width={691}
          />
        </div>

        <div className="w-2/4">
          <span className="flex text-center font-monument text-white text-2xl">
            By breaking down barriers to capital and automating financial
            processes, we’re revolutionizing how the music industry operates,
            giving creators full control of their careers and enterprises their
            time back!
          </span>
        </div>
      </div>

      {/* Executive Team */}
      <div className="mt-10">
        <div className="w-full items-center justify-center flex">
          <div className="flex-row w-full items-center justify-center flex gap-10">
            {[
              {
                imageSrc: '/assets/images/JunaidImg.png',
                name: 'Junaid Khan',
                title: 'CEO & Founder',
                isHighlighted: true,
              },
              {
                imageSrc: '/assets/images/DaniyalImg.png',
                name: 'Daniya Khan',
                title: 'COO & Founder',
                isHighlighted: true,
              },
            ].map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        <div className="w-full items-center justify-center flex mt-10">
          <div className="flex-row w-full items-center justify-center flex gap-10">
            {[
              {
                imageSrc: '/assets/images/MannyToroImg.jpg',
                name: 'Manny Toro',
                title: 'Chief Marketing Officer',
                customIconColor: true,
              },
              {
                imageSrc: '/assets/images/AlishaOutridgeImg.jpg',
                name: 'Alisha Outridge',
                title: 'Chief Technology Officer',
                customIconColor: true,
              },
            ].map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      {/* Board Advisors */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <div className="w-full items-center justify-center flex flex-row">
          <span className="font-monument text-white text-4xl">
            Board Advisor
          </span>
          <Image
            src="/assets/svgs/crossIcon.svg"
            alt={'Cross Icon'}
            width={200}
            height={200}
          />
        </div>

        <div className="w-full items-center justify-between flex flex-row">
          <div className="w-1/6 items-center justify-center">
            <Image
              src={'/assets/svgs/ClawonLeft.svg'}
              alt={'Claw Left'}
              height={837}
              width={813}
            />
          </div>

          <div className="w-5/6 items-center justify-center flex flex-row gap-6 pr-10 flex-wrap">
            {[
              {
                imageSrc: '/assets/images/AlishaOutridgeImg.jpg',
                name: 'Ebonie Ward',
                title: 'CEO of 11th and co.',
                isAdvisor: true,
              },
              {
                imageSrc: '/assets/images/AlishaOutridgeImg.jpg',
                name: 'Wayne Hampton',
                title:
                  'Chief Business Development Officer & Co-Founder - Create Music Group.',
                isAdvisor: true,
              },
              {
                imageSrc: '/assets/images/AlishaOutridgeImg.jpg',
                name: 'Luke Cooper',
                title: 'General Partner of Latimer Ventures',
                isAdvisor: true,
              },
              {
                imageSrc: '/assets/images/AlishaOutridgeImg.jpg',
                name: 'Che Pope',
                title: 'COO of Yeezy / Wrkshp',
                isAdvisor: true,
              },
            ].map((advisor, index) => (
              <TeamMember key={index} {...advisor} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
