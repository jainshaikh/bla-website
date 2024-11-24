import Image from 'next/image';

const WorldFirstPlatf = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Hero Text Section */}
      <div className="flex justify-center items-center w-full lg:px-4 sm:px-0 text-center lg:items-start lg:justify-start lg:text-start">
        <h1 className="font-monument text-white uppercase tracking-widest lg:text-3xl sm:text-base">
          The World&apos;s First AI
          <br /> Fintech Platform and
          <br /> Marketplace for Music
        </h1>
      </div>

      {/* First Image */}
      <div className="w-full sm:-mt-10 md:-mt-10 lg:-mt-10 xl:-mt-12 2xl:-mt-14">
        <Image
          src="/assets/svgs/IntroTopSvg.svg"
          alt="Intro Top Visual"
          height={1983}
          width={2731}
          priority
        />
      </div>

      {/* Second Image */}
      <div className="w-full mt-8 sm:-mt-32 md:-mt-36 lg:-mt-48 xl:-mt-60 2xl:-mt-72">
        <Image
          src="/assets/svgs/IntroducingValuationEngineAI.svg"
          alt="Introducing Valuation Engine AI"
          height={1103}
          width={2272}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default WorldFirstPlatf;
