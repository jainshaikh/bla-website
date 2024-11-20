import Image from 'next/image';

const WorldFirstPlatf = () => {
  return (
    <>
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

      <div className="w-[100%] overflow-hidden -mt-96 2xl:w-[100%]">
        <Image
          src={'/assets/svgs/IntroducingValuationEngineAI.svg'}
          alt={''}
          height={1103}
          width={2272}
        />
      </div>
    </>
  );
};

export default WorldFirstPlatf;
