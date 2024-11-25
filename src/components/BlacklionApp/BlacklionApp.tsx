import Image from 'next/image';

const BlacklionApp = () => {
  const madeFor = [
    { id: 1, text: 'Artist', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'Producer', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'Songwriter', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'Engineers', icon: '/assets/svgs/checkIcon.svg' },
    { id: 5, text: 'Managers', icon: '/assets/svgs/checkIcon.svg' },
    { id: 6, text: 'Label', icon: '/assets/svgs/checkIcon.svg' },
    { id: 7, text: 'Investor', icon: '/assets/svgs/checkIcon.svg' },
    { id: 8, text: 'Content Creator', icon: '/assets/svgs/checkIcon.svg' },
  ];

  const features = [
    { id: 1, text: 'Digital Escrow', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'Creative Networking', icon: '/assets/svgs/checkIcon.svg' },
    {
      id: 3,
      text: 'Video & Audio Streaming',
      icon: '/assets/svgs/checkIcon.svg',
    },
    {
      id: 4,
      text: 'Marketplace for Music & Service',
      icon: '/assets/svgs/checkIcon.svg',
    },
  ];

  const pricingData = [
    {
      monthlyPrice: '$20',
      title: 'Monthly',
      features: ['30 days access to Pro services and features'],
    },
    {
      monthlyPrice: '$200',
      title: 'Annually',
      features: ['12 months access to Pro services and features'],
    },
  ];

  const PricingCard = ({ card }: { card: (typeof pricingData)[0] }) => (
    <div
      className="bg-colors-custom-bg-color hover:bg-red-500 rounded-lg p-5 relative group w-[370px] h-[507px] 
    sm:w-[280px] sm:h-[390px]
    md:w-[320px] md:h-[440px]
    lg:w-[350px] lg:h-[450px]
    xl:w-[370px] xl:h-[490px]
    2xl:w-[370px] 2xl:h-[490px] "
    >
      <div className="flex flex-col items-start justify-start h-full">
        {/* Price Section */}
        <div className="flex items-center gap-3">
          <h1
            className="font-sans text-5xl font-bold text-colors-custom-red group-hover:text-white transition-colors
          md:text-3xl lg:text-4xl xl:text-[2.5rem] sm:text-2xl"
          >
            {card.monthlyPrice}
          </h1>
        </div>

        {/* Title */}
        <h3
          className="mt-3 text-white font-sans font-extrabold text-2xl uppercase 
        sm:text-base 2xl:text-2xl xl:text-2xl lg:text-lg"
        >
          {card.title}
        </h3>

        {/* Separator */}
        <hr className="w-full mt-3 border-t-2 border-[#CE4641] group-hover:border-white transition-colors duration-300" />

        {/* Features */}
        <div className="mt-5 sm:mt-2">
          {card.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-1 mt-4">
              <Image
                src="/assets/svgs/PointSvg.svg"
                alt={`${feature} Icon`}
                height={28}
                width={28}
              />
              <p className="text-white font-sans font-medium text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl sm:font-light">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Image */}
      <div
        className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 group-hover:z-50
        -top-8 -right-12 sm:-top-6 sm:-right-6 hidden sm:block"
      >
        <Image
          src="/assets/svgs/CardHoverImg.svg"
          alt="Hover Image"
          width={150}
          height={150}
          className="sm:w-[90px] lg:w-[150px]"
        />
      </div>
    </div>
  );

  return (
    <section className="pt-10">
      {/* Top Banner */}
      <div className="w-full flex flex-col items-center">
        <Image
          src="/assets/svgs/unlockingValueStrip.svg"
          alt="Unlocking Value Strip"
          width={100}
          height={50}
        />
      </div>

      {/* Top Section */}
      {/* <section className="w-full flex flex-wrap items-center justify-around mt-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/svgs/LeftLion.svg"
            alt="Lion Image"
            height={808}
            width={610}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <header className="flex items-center gap-4">
            <Image
              src="/assets/svgs/crossIcon.svg"
              alt="Cross Icon"
              width={100}
              height={100}
            />
            <h2 className="font-monument text-white text-4xl lg:text-left">
              Blacklion App
            </h2>
          </header>
          <p className="font-monument text-2xl text-white text-center mt-4 uppercase sm:text-xl lg:text-left">
            Track your music earnings like a fitness app, grow your portfolio,
            connect with collaborators, sell services and your music - all one
            paw swipe!
          </p>
          <p className="font-monument text-2xl text-white text-center mt-2 uppercase sm:text-xl lg:text-left">
            Designed for one purpose, to put you in control!
          </p>
        </div>
      </section> */}

      <section className="w-full flex flex-col items-center relative">
        {/* Header for small screens */}
        <header className="w-full block lg:hidden -mt-6 ">
          <div className="flex items-center justify-between w-full">
            {/* Lion Image on the Left */}
            <div className="w-1/2 flex justify-start">
              <Image
                src="/assets/svgs/LeftLion.svg"
                alt="Lion Image"
                height={350}
                width={350}
                className="h-auto"
              />
            </div>

            {/* Cross Icon and Heading on the Right */}
            <div className="w-1/2 flex flex-col items-end justify-center text-right relative pr-12 -mt-28">
              {/* Heading */}
              <h3 className="font-monument text-white text-4xl uppercase sm:text-2xl mt-2">
                BLACKLION <br /> APP
              </h3>

              {/* Cross Icon positioned at the top right of heading */}
              <div className="absolute -top-20 -right-4 ">
                <Image
                  src="/assets/svgs/crossIcon.svg"
                  alt="Cross Icon"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div
          className="w-full flex flex-col lg:flex-row items-center 
        lg:-mt-16 xl:-mt-16 2xl:mt-0"
        >
          {/* Image Section (Visible on Large Screens and Up) */}
          <div className="hidden lg:flex w-full lg:w-1/2 lg:justify-start lg:relative">
            <Image
              src="/assets/svgs/LeftLion.svg"
              alt="Lion Image"
              height={808}
              width={610}
              className="w-full h-auto 
              lg:w-[800px] lg:h-[800px] lg:-ml-2
              xl:w-[850px] xl:h-[850px] xl:-ml-12
              2xl:w-[900px] 2xl:h-[900px] 2xl:-ml-20"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col sm:px-10 uppercase">
            {/* Cross Icon and Heading (Visible on Large Screens and Up) */}
            <div className="hidden lg:block w-full text-start">
              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/assets/svgs/crossIcon.svg"
                  alt="Cross Icon"
                  width={100}
                  height={100}
                />
                <h3 className="font-monument text-white text-4xl uppercase text-center sm:text-2xl">
                  BLACKLION APP
                </h3>
              </div>
            </div>

            {/* Content Paragraphs */}
            <p className="font-monument text-white text-2xl leading-relaxed sm:text-base mt-6 lg:mt-0">
              Track your music earnings like a fitness app, grow your portfolio,
              connect with collaborators, sell services and your music - all in
              one paw swipe!
            </p>

            <p className="font-monument text-white text-2xl leading-relaxed mt-6 sm:text-base">
              DESIGNED FOR ONE PURPOSE, TO PUT YOU IN CONTROL!
            </p>
          </div>
        </div>
      </section>

      {/* Made For Section */}
      <section className="w-full flex flex-col items-center justify-center px-10 mt-10">
        {/* Container for both Data Points and Image */}
        <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:gap-10">
          {/* Image Section */}
          <div className="w-full flex items-center justify-center mb-10 lg:mb-0 lg:w-1/2 lg:order-2">
            <div
              className=" h-auto
            sm:w-[400px]
            md:w-[500px]  
            lg:w-[700px]  
            xl:w-[900px]"
            >
              <Image
                src="/assets/images/MobilesImg.png"
                alt="Mobile graphic representation"
                width={735}
                height={656}
                priority={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Data Points Section (including Heading) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 lg:gap-4">
            <h3 className="font-monument text-white text-4xl uppercase sm:text-2xl w-full text-center lg:text-left mb-6">
              Made For
            </h3>

            {madeFor?.length > 0 ? (
              madeFor.map((datapoint) => (
                <div key={datapoint.id} className="flex items-center gap-4">
                  <Image
                    src={datapoint.icon}
                    alt={`${datapoint.text} Icon`}
                    height={50}
                    width={50}
                    priority
                  />
                  <span className="font-monument text-2xl text-white sm:text-base uppercase">
                    {datapoint.text}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-white text-lg">No data available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full flex flex-col items-center justify-center mt-16">
        {/* Heading */}
        <header className="text-center mb-6">
          <h3 className="font-monument text-white text-4xl uppercase sm:text-2xl w-full text-center lg:text-left mb-6">
            Features
          </h3>
        </header>

        {/* Features container */}
        <div className="flex flex-col items-center gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-4 text-center"
            >
              <Image
                src={feature.icon}
                alt={`${feature.text} Icon`}
                height={50}
                width={50}
              />
              <span className="font-monument text-2xl text-white sm:text-base uppercase">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-16 px-10 lg:gap-20">
        {/* Pricing Section */}
        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start mb-16 lg:mb-0">
          <h3 className="font-monument text-white text-4xl mb-10 sm:text-2xl lg:text-4xl">
            Pricing
          </h3>
          <div
            className="grid-cols-1 gap-2 w-full max-w-4xl items-start justify-start flex
            sm:items-center sm:justify-center
            md:grid-cols-2 md:items-center md:justify-center
            lg:items-start lg:justify-start
          "
          >
            {pricingData.map((card) => (
              <PricingCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        {/* Download App Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
          <h3
            className="font-monument text-white text-4xl mb-6 
          sm:text-2xl 
          lg:text-2xl
          xl:text-3xl
          2xl:text-4xl"
          >
            Download APP
          </h3>
          <div className="flex flex-col items-center lg:items-start gap-6">
            <Image
              src="/assets/svgs/DownloadGoogleBtn.svg"
              alt="Download from Google Play"
              height={90}
              width={440}
            />
            <Image
              src="/assets/svgs/DownloadAppleBtn.svg"
              alt="Download from Apple Store"
              height={90}
              width={440}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlacklionApp;
