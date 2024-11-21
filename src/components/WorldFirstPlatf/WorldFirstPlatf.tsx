import Image from 'next/image';

const WorldFirstPlatf = () => {
  return (
    <div className="border-4 border-solid border-white">
      <div className="w-full items-center justify-between flex flex-col ">
        <div className="w-full flex items-start justify-start ml-10 mt-16 ">
          <div
            className="sm:w-full sm:justify-center
           flex items-center"
          >
            <span
              className="font-monument text-white uppercase tracking-widest	
            sm:text-xl sm:text-center	"
            >
              the Worlds first AI
              <br /> fintech platform and
              <br /> marketplace for music
            </span>
          </div>
        </div>

        <div className="w-full 2xl:-mt-56">
          <Image
            src={'/assets/svgs/IntroTopSvg.svg'}
            alt={''}
            height={1983}
            width={2731}
            layout="responsive"
          />
        </div>
      </div>

      <div
        className="w-[100%] 2xl:-mt-96 2xl:w-[100%]
      sm:-mt-20
      "
      >
        <Image
          src={'/assets/svgs/IntroducingValuationEngineAI.svg'}
          alt={''}
          height={1103}
          width={2272}
        />
      </div>
    </div>
  );
};

export default WorldFirstPlatf;
