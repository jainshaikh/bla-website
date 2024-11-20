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
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="w-full px-10">
          <span className="font-monument text-4xl text-white">Trusted By</span>
        </div>

        <div className="w-full h-60	 items-center justify-evenly flex flex-row">
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

        <div className="w-full items-center justify-between flex flex-row mt-10 pl-10 -mt-10">
          {/* Features */}
          <div className="w-full flex flex-col items-start justify-start ">
            <span className="font-monument text-white text-4xl mb-10 uppercase tracking-widest	">
              For Enterprises
            </span>
            {features.map((feature) => (
              <div
                key={feature.id}
                className="w-full flex justify-start flex-row items-start"
              >
                <Image src={feature.icon} alt="" height={50} width={60} />
                <span className="font-monument text-2xl text-white text-center uppercase tracking-widest	">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div>
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
