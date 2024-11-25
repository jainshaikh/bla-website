import Footer from '@/components/Footer/Footer';
import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <main className="overflow-hidden scroll-smooth">
      {/* Top Header Section */}
      <section className="w-full items-center justify-between flex flex-col text-white">
        <header className="flex flex-col items-center w-full px-10 sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
          <h2 className="font-monument text-2xl font-bold ">About</h2>
        </header>
        <div className="w-full mt-10">
          <Image
            src="/assets/svgs/IntroTopSvg.svg"
            alt="Introduction Top Graphic"
            height={1983}
            width={2731}
          />
        </div>
      </section>

      {/* Blacklion Message Section */}
      <section className="w-full items-center justify-center flex flex-col text-white mt-16 px-10">
        <p className="font-monument text-2xl text-center mb-10">
          Black Lion is the world’s first AI-powered fintech platform and
          marketplace designed for the music and entertainment industry. We
          provide real-time data insights and innovative private equity-style
          valuation tools, empowering artists, songwriters, producers,
          engineers, investors, managers, and labels to understand and unlock
          the true financial value of music.
        </p>
        <div className="w-full flex items-center justify-center mb-10">
          <Image
            src="/assets/svgs/LionImg.svg"
            alt="Lion Image"
            height={690}
            width={691}
          />
        </div>
        <p className="font-monument text-2xl text-center">
          By breaking down barriers to capital and automating financial
          processes, we’re revolutionising how the music industry operates,
          giving creators full control of their careers and enterprises their
          time back!
        </p>
      </section>

      {/* Executive Team Section */}
      <section className="w-full items-center justify-center flex flex-col text-white gap-8">
        <header className="w-full text-center">
          <h2 className="font-monument text-4xl">Executive Team</h2>
        </header>

        {/* {Executive Team Section} */}
        <div className="w-full flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="sm:w-[60%] md:w-[45%] lg:w-[40%]">
            <article className="uppercase p-4 bg-colors-custom-red-picture-bg rounded-3xl font-monument">
              <Image
                src="/assets/images/JunaidImg.png"
                alt={`Junaid Khan Picture`}
                width={440}
                height={440}
                className="object-contain w-full h-auto rounded-lg"
              />
              <h3 className="text-2xl font-medium uppercase text-center mt-4 xl:text-4xl">
                Junaid Khan
              </h3>
              <p className="text-lg text-center mt-2 font-thin xl:text-2xl">
                CEO & Founder
              </p>
              <div className="flex items-center gap-4 mt-6 w-full justify-center">
                <Image
                  src={'/assets/logos/TwitterIcon.svg'}
                  alt={'TwitterIcon'}
                  height={40}
                  width={40}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/MessageIcon.svg'}
                  alt={'Message Icon'}
                  height={40}
                  width={40}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/LinkedinIcon.svg'}
                  alt={'LinkedinIcon'}
                  height={40}
                  width={40}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/InstaIcon.svg'}
                  alt={'InstaIcon.svg'}
                  height={40}
                  width={40}
                  className="object-cover"
                />
              </div>
            </article>
          </div>

          <div className="sm:w-[60%] md:w-[45%] lg:w-[40%]">
            <article className="uppercase p-4 bg-colors-custom-red-picture-bg rounded-3xl font-monument">
              <Image
                src="/assets/images/DaniyalImg.png"
                alt={`Daniyal Khan Picture`}
                width={440}
                height={440}
                className="object-contain w-full h-auto rounded-lg"
              />
              <h3 className="text-2xl font-medium uppercase text-center mt-4 xl:text-4xl">
                Daniyal Khan
              </h3>
              <p className="text-lg text-center mt-2 font-thin xl:text-2xl">
                COO & Founder
              </p>
              <div className="flex items-center gap-4 mt-6 w-full justify-center">
                <Image
                  src={'/assets/logos/TwitterIcon.svg'}
                  alt={'TwitterIcon'}
                  height={40}
                  width={40}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/MessageIcon.svg'}
                  alt={'Message Icon'}
                  height={40}
                  width={40}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/LinkedinIcon.svg'}
                  alt={'LinkedinIcon'}
                  height={40}
                  width={40}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/InstaIcon.svg'}
                  alt={'InstaIcon.svg'}
                  height={40}
                  width={40}
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </div>

        {/* {Other Team Members} */}
        <div className="w-full flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="sm:w-[45%] md:w-[35%] lg:w-[35%]">
            <article className="uppercase p-4 bg-colors-custom-secondary-bg-color rounded-3xl font-monument border-4 border-solid border-white">
              <Image
                src="/assets/images/MannyToroImg.jpg"
                alt={`Alisha Outridge Picture`}
                width={440}
                height={440}
                className="object-contain w-full h-auto rounded-lg"
              />
              <h3 className="text-xs font-medium uppercase text-center mt-4 xl:text-2xl">
                Manny Toro
              </h3>
              <p className="text-[8px] text-center mt-2 font-thin xl:text-xs">
                Chief Marketing Officer
              </p>
              <div className="flex items-center gap-4 mt-6 w-full justify-center">
                <Image
                  src={'/assets/logos/TwitterIcon.svg'}
                  alt={'TwitterIcon'}
                  height={30}
                  width={30}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/MessageIcon.svg'}
                  alt={'Message Icon'}
                  height={30}
                  width={30}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/LinkedinIcon.svg'}
                  alt={'LinkedinIcon'}
                  height={30}
                  width={30}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/InstaIcon.svg'}
                  alt={'InstaIcon.svg'}
                  height={30}
                  width={30}
                  className="object-cover"
                />
              </div>
            </article>
          </div>

          <div className="sm:w-[45%] md:w-[35%] lg:w-[35%]">
            <article className="uppercase p-4 bg-colors-custom-secondary-bg-color rounded-3xl font-monument border-4 border-solid border-white">
              <Image
                src="/assets/images/AlishaOutridgeImg.jpg"
                alt={`Alisha Outridge Picture`}
                width={440}
                height={440}
                className="object-contain w-full h-auto rounded-lg"
              />
              <h3 className="text-xs font-medium uppercase text-center mt-4 xl:text-2xl">
                Alisha Outridge
              </h3>
              <p className="text-[8px] text-center mt-2 font-thin xl:text-xs">
                Chief Technology Officer
              </p>
              <div className="flex items-center gap-4 mt-6 w-full justify-center">
                <Image
                  src={'/assets/logos/TwitterIcon.svg'}
                  alt={'TwitterIcon'}
                  height={30}
                  width={30}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/MessageIcon.svg'}
                  alt={'Message Icon'}
                  height={30}
                  width={30}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/LinkedinIcon.svg'}
                  alt={'LinkedinIcon'}
                  height={30}
                  width={30}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/InstaIcon.svg'}
                  alt={'InstaIcon.svg'}
                  height={30}
                  width={30}
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Decorative Image Section */}
      <section className="w-full flex justify-start items-start">
        <div className="sm:w-3/6 sm:-mt-24">
          <Image
            src="/assets/svgs/ClawonLeft.svg"
            alt="Decorative Claw Image"
            height={837}
            width={813}
          />
        </div>
      </section>

      {/* {Board Advisors} */}
      <section
        className="w-full flex items-center justify-center flex-col text-white
      sm:-mt-36 lg:-mt-48 2xl:-mt-72"
      >
        <div className="w-full flex items-center justify-center flex-row px-10">
          <h1 className="font-monument lg:text-4xl sm:text-2xl">
            Board Advisors
          </h1>
          <Image
            src={'/assets/svgs/crossIcon.svg'}
            alt={''}
            height={150}
            width={150}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8 w-full px-10">
          <div>
            <article className="uppercase p-4 bg-colors-custom-secondary-bg-color rounded-3xl font-monument border-4 border-solid border-white">
              <Image
                src="/assets/images/EbonieImg.jpg"
                alt={`Alisha Outridge Picture`}
                width={440}
                height={440}
                className="object-contain w-full h-auto rounded-lg"
              />
              <h3 className="text-xs font-medium uppercase text-center mt-4 xl:text-xl	">
                Ebonie Ward
              </h3>
              <p className="text-[8px] text-center mt-2 font-thin xl:text-xs tracking-widest">
                CEO of 11th and Co.
              </p>
              <div className="flex items-center gap-4 mt-6 w-full justify-center">
                <Image
                  src={'/assets/logos/TwitterIconRed.svg'}
                  alt={'TwitterIcon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/MessageIconRed.svg'}
                  alt={'Message Icon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/LinkedinIconRed.svg'}
                  alt={'LinkedinIcon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/InstaIconRed.svg'}
                  alt={'InstaIcon.svg'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
              </div>
            </article>
          </div>

          <div>
            <article className="uppercase p-4 bg-colors-custom-secondary-bg-color rounded-3xl font-monument border-4 border-solid border-white">
              <Image
                src="/assets/images/WayneImg.jpg"
                alt={`Wayne Hampton Picture`}
                width={440}
                height={440}
                className="object-contain w-full h-auto rounded-lg"
              />
              <h3 className="text-xs font-medium uppercase text-center mt-4 xl:text-xl	">
                Wayne Hampton
              </h3>
              <p className="text-[8px] text-center mt-2 font-thin xl:text-xs tracking-widest">
                Chief Business Development Officer & Co-Founder - Create Music
                Group.
              </p>
              <div className="flex items-center gap-4 mt-6 w-full justify-center">
                <Image
                  src={'/assets/logos/TwitterIconRed.svg'}
                  alt={'TwitterIcon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/MessageIconRed.svg'}
                  alt={'Message Icon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/LinkedinIconRed.svg'}
                  alt={'LinkedinIcon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/InstaIconRed.svg'}
                  alt={'InstaIcon.svg'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
              </div>
            </article>
          </div>

          <div>
            <article className="uppercase p-4 bg-colors-custom-secondary-bg-color rounded-3xl font-monument border-4 border-solid border-white">
              <Image
                src="/assets/images/LukeImg.jpg"
                alt={`Luke Cooper Picture`}
                width={440}
                height={440}
                className="object-contain w-full h-auto rounded-lg"
              />
              <h3 className="text-xs font-medium uppercase text-center mt-4 xl:text-xl	">
                Luke Cooper
              </h3>
              <p className="text-[8px] text-center mt-2 font-thin xl:text-xs tracking-widest">
                General Partner of Latimer ventures
              </p>
              <div className="flex items-center gap-4 mt-6 w-full justify-center">
                <Image
                  src={'/assets/logos/TwitterIconRed.svg'}
                  alt={'TwitterIcon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/MessageIconRed.svg'}
                  alt={'Message Icon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/LinkedinIconRed.svg'}
                  alt={'LinkedinIcon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/InstaIconRed.svg'}
                  alt={'InstaIcon.svg'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
              </div>
            </article>
          </div>

          <div>
            <article className="uppercase p-4 bg-colors-custom-secondary-bg-color rounded-3xl font-monument border-4 border-solid border-white">
              <Image
                src="/assets/images/ChePopeImg.jpg"
                alt={`Che Pope Picture`}
                width={440}
                height={440}
                className="object-contain w-full h-auto rounded-lg"
              />
              <h3 className="text-xs font-medium uppercase text-center mt-4 xl:text-xl	">
                Che Pope
              </h3>
              <p className="text-[8px] text-center mt-2 font-thin xl:text-xs tracking-widest">
                COO of Yeezy / Wrkshp
              </p>
              <div className="flex items-center gap-4 mt-6 w-full justify-center">
                <Image
                  src={'/assets/logos/TwitterIconRed.svg'}
                  alt={'TwitterIcon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/MessageIconRed.svg'}
                  alt={'Message Icon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/LinkedinIconRed.svg'}
                  alt={'LinkedinIcon'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
                <Image
                  src={'/assets/logos/InstaIconRed.svg'}
                  alt={'InstaIcon.svg'}
                  height={25}
                  width={25}
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer id="footer" className="pt-8">
        <Footer />
      </footer>
    </main>
  );
};

export default AboutPage;
