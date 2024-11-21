import Image from 'next/image';

const TrustedBy = () => {
  const features = [
    { id: 1, text: 'Distributor', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'Record label', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'publisher', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'songfund', icon: '/assets/svgs/checkIcon.svg' },
    { id: 5, text: 'management/touring', icon: '/assets/svgs/checkIcon.svg' },
    { id: 6, text: 'music supervision', icon: '/assets/svgs/checkIcon.svg' },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center border-4 border-solid border-white">
        <div className="w-full">
          <span
            className="font-monument text-4xl text-white
          sm:text-base sm:ml-10"
          >
            Trusted By
          </span>
        </div>

        <div
          className="w-full items-center justify-evenly flex 2xl:flex-row
        sm:flex-col"
        >
          <div className="flex h-full flex-col items-center justify-between">
            <Image
              src={'/assets/svgs/CreateLogo.svg'}
              alt={''}
              width={253}
              height={188}
            />
            <span className="font-monument text-white text-nowrap">
              Create Music Group
            </span>
          </div>

          <div className="flex h-full flex-col items-center justify-between">
            <Image
              src={'/assets/svgs/ChartmetricLogo.svg'}
              alt={''}
              width={253}
              height={188}
            />
            <span className="font-monument text-white text-nowrap">
              Create Music Group
            </span>
          </div>

          <div className="flex h-full flex-col items-center justify-between">
            <Image
              src={'/assets/svgs/EleventhgoLogo.svg'}
              alt={''}
              width={253}
              height={188}
            />
            <span className="font-monument text-white text-nowrap">
              Create Music Group
            </span>
          </div>
        </div>

        <div
          className="w-full items-center justify-between flex 2xl:flex-row mt-10
        sm:flex-col-reverse sm:items-end"
        >
          {/* Features */}
          <div className="w-full flex flex-col items-start justify-start ">
            <span
              className="font-monument text-white text-4xl uppercase tracking-widest
            sm:text-2xl	sm:ml-10 sm:mb-5"
            >
              For Enterprises
            </span>
            {features.map((feature) => (
              <div
                key={feature.id}
                className="w-full flex justify-start flex-row items-center sm:ml-10"
              >
                <Image src={feature.icon} alt="" height={50} width={60} />
                <span
                  className="font-monument text-2xl text-white text-center uppercase tracking-widest	
                sm:text-base	"
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex 
          sm:w-3/6 sm:justify-end sm:items-end "
          >
            <Image
              src={'/assets/svgs/LeftClaw.svg'}
              alt={''}
              height={1019}
              width={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedBy;
