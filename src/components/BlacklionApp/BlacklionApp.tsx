import Image from 'next/image';

const BlacklionApp = () => {
  const madeFor = [
    { id: 1, text: 'artist', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'producer', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'songwriter', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'engineers', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'managers', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'label', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'investor', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'content creator', icon: '/assets/svgs/checkIcon.svg' },
  ];

  const features = [
    { id: 1, text: 'Digital escrow', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'creative networking', icon: '/assets/svgs/checkIcon.svg' },
    {
      id: 3,
      text: 'video & audio streaming',
      icon: '/assets/svgs/checkIcon.svg',
    },
    {
      id: 4,
      text: 'marketplace for music & service',
      icon: '/assets/svgs/checkIcon.svg',
    },
  ];

  const pricingData = [
    {
      monthlyPrice: '$20',
      annualPrice: '',
      annually: '',
      title: 'Monthly',
      features: ['30 days access to Pro services and features'],
    },
    {
      monthlyPrice: '$200',
      annualPrice: '',
      annually: '',
      title: 'Annually',
      features: ['12 month access to Pro services and features'],
    },
  ];

  const renderPricingCard = (card: (typeof pricingData)[0], index: number) => (
    <div
      key={index}
      className="bg-colors-custom-bg-color hover:bg-red-500 rounded-lg p-5 relative group w-[370px] h-[507px]
      sm:w-[280px] sm:h-[450px]"
    >
      <div className="flex items-start flex-col justify-start h-full">
        {/* Price Section */}
        <div className="group flex items-center gap-3">
          <span
            className="font-sans text-5xl font-bold text-colors-custom-red group-hover:text-white transition-colors
          sm:text-2xl"
          >
            {card.monthlyPrice}
          </span>
          <span
            className="text-white transition-colors font-sans text-sm uppercase
          sm:text-xs"
          >
            Per Month
          </span>
        </div>

        {/* Title */}
        <div className="mt-3">
          <span
            className="text-white font-sans font-extrabold text-2xl uppercase
          sm:text-base"
          >
            {card.title}
          </span>
        </div>

        {/* Separator */}
        <div className="w-full">
          <hr className="border-t-2 border-[#CE4641] group-hover:border-white transition-colors duration-300" />
        </div>

        {/* Annual Price */}
        <div className="flex items-center gap-3 mt-5">
          <span
            className="text-white font-sans font-extrabold text-2xl
          sm:text-2xl"
          >
            {card.annualPrice}
          </span>
          <span
            className="text-white font-sans font-medium text-sm
          sm:text-xs"
          >
            {card.annually}
          </span>
        </div>

        {/* Features */}
        {card.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="flex flex-row items-center gap-2 mt-5
            sm:mt-2 sm:gap-1"
          >
            <Image
              src="/assets/svgs/PointSvg.svg"
              alt=""
              height={28}
              width={28}
              className="hidden 2xl:flex"
            />
            <Image
              src="/assets/svgs/PointSvg.svg"
              alt=""
              height={28}
              width={28}
              className="hidden sm:flex"
            />
            <span
              className="text-white text-xl font-sans font-medium
            sm:text-base sm:font-light"
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Hover Image */}
      <div
        className="absolute -top-8 -right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 group-hover:z-50
      sm:-top-6 sm:-right-6"
      >
        <Image
          src="/assets/svgs/CardHoverImg.svg"
          alt="Hover Image"
          width={150}
          height={150}
          className="hidden 2xl:flex"
        />
        <Image
          src="/assets/svgs/CardHoverImg.svg"
          alt="Hover Image"
          width={90}
          height={90}
          className="hidden sm:flex"
        />
      </div>
    </div>
  );

  return (
    <div className="border-4 border-solid border-white">
      {/*Top Bar*/}
      <div className="w-full flex flex-col items-center mt-10">
        <Image
          src="/assets/svgs/unlockingValueStrip.svg"
          alt="Svg Logo"
          layout="responsive"
          width={100}
          height={50}
        />
      </div>

      {/* Top Section */}
      <div
        className="w-full flex 
        2xl:flex-row 
        sm:flex-col"
      >
        <div className="w-2/4">
          <Image
            src="/assets/svgs/LeftLion.svg"
            alt={''}
            height={808}
            width={610}
          />
        </div>

        <div
          className="flex flex-col w-3/4 
        sm:w-full"
        >
          <div
            className="w-full items-center justify-center flex mt-20
          sm:mt-0"
          >
            <div className="flex flex-row items-center sm:hidden">
              <div className="">
                <Image
                  src="/assets/svgs/crossIcon.svg"
                  alt={''}
                  width={200}
                  height={200}
                />
              </div>

              <span className="font-monument text-white text-4xl leading-normal">
                Blacklion App
              </span>
            </div>
          </div>

          <span
            className="font-monument text-2xl font-normal mt-0 mx-20  text-white text-center uppercase
          sm:mx-0 sm:px-16 sm:text-xl	"
          >
            Track your music earnings like a fitness app, grow your portfolio,
            connect with collaborators, sell services and your music - all one
            paw swipe!
          </span>
          <br />
          <span
            className="font-monument text-2xl font-normal mt-2 mx-20  text-white text-center
              sm:mx-0 sm:px-16 sm:text-xl	"
          >
            DESIGNED FOR ONE PURPOSE, TO PUT YOU IN CONTROL!
          </span>
        </div>
      </div>

      {/* Made For Section */}
      <div className="w-full flex flex-col items-center justify-center px-10">
        <div
          className="w-full h-max flex flex-row items-start justify-between
        sm:flex-col-reverse"
        >
          <div className="w-full h-full flex flex-col items-start justify-start">
            <span
              className="font-monument text-white text-4xl mb-10 ml-10 uppercase
            sm:ml-0 sm:text-2xl"
            >
              Made For
            </span>
            <div
              className="flex flex-row ml-10
            sm:ml-0"
            >
              <div>
                {madeFor.map((datapoint) => (
                  <div
                    key={datapoint.id}
                    className="w-full flex justify-start flex-row items-center"
                  >
                    <Image src={datapoint.icon} alt="" height={80} width={80} />
                    <span
                      className="font-monument 2xl:text-2xl text-white text-start sm:text-base uppercase
                    sm:text-base"
                    >
                      {datapoint.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="w-full h-full flex items-start justify-start 
          sm:items-center sm:justify-center"
          >
            <div className="h-full 2xl:-mt-56 ">
              <Image
                src="/assets/svgs/MobileViewImg.svg"
                alt={''}
                height={1672}
                width={2161}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <span
          className="font-monument text-white text-4xl mb-10
        sm:text-2xl"
        >
          Features
        </span>
        {features.map((feature) => (
          <div
            key={feature.id}
            className="w-full flex justify-center flex-row items-center"
          >
            <Image src={feature.icon} alt="" height={100} width={60} />
            <span
              className="font-monument text-white text-center 
              2xl:text-2xl
              sm:text-base"
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className='"w-full flex flex-col items-center justify-center mt-10'>
        <div
          className="w-full flex flex-row items-center justify-between
        sm:flex-col"
        >
          <div className="w-full flex flex-col items-start justify-center ml-10">
            <span
              className="font-monument text-white text-4xl
            sm:text-2xl"
            >
              Pricing
            </span>
            <div
              className="flex items-center justify-center gap-10 mt-10 flex-wrap 
          xl:flex-row xl:justify-start 
          sm:grid sm:grid-cols-2 sm:gap-4 "
            >
              {pricingData.map(renderPricingCard)}
            </div>
          </div>

          <div
            className="w-full flex flex-col items-center justify-center
          sm:mt-10"
          >
            <span className="font-monument text-white text-4xl">
              Download APP
            </span>

            <div>
              <div className="mt-10">
                <Image
                  src={'/assets/svgs/DownloadGoogleBtn.svg'}
                  alt={''}
                  height={90}
                  width={440}
                />
              </div>
              <div className="mt-5">
                <Image
                  src={'/assets/svgs/DownloadAppleBtn.svg'}
                  alt={''}
                  height={90}
                  width={440}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlacklionApp;
