import Image from 'next/image';

const EnterpriseAPIProtocol = () => {
  const datapoints = [
    { id: 1, text: 'Streaming', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'Finance Revenue', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'Social', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'Contracting', icon: '/assets/svgs/checkIcon.svg' },
  ];

  const datapoints2 = [
    { id: 1, text: 'Artist', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'Producer', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'Songwriter', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'Music Enterprises', icon: '/assets/svgs/checkIcon.svg' },
    { id: 5, text: 'Live Venue', icon: '/assets/svgs/checkIcon.svg' },
  ];

  // Pricing data
  const pricingData = [
    {
      monthlyPrice: '$2000',
      title: 'Monthly',
      features: ['Monthly API access for 30 days', 'For 7 requests per second'],
    },
    {
      monthlyPrice: '$20,000',
      title: 'Annually',
      features: [
        'Annual API access for 12 months',
        'For 7 requests per second',
      ],
    },
  ];

  // Pricing card component
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
      <div className="w-full overflow-hidden flex flex-col items-center">
        <Image
          src="/assets/svgs/unlockingValueStrip.svg"
          alt="Unlocking Value Strip"
          width={100}
          height={50}
        />
      </div>

      {/* Top Section */}
      <section className="w-full flex flex-col items-center mt-10">
        {/* Header for small screens */}
        <header className="w-full text-start mb-8 sm:pr-56 block lg:hidden">
          <h2 className="font-monument text-2xl text-white ml-10 sm:text-sm uppercase">
            Integrate With Ease through our...
          </h2>
          <div className="flex items-center justify-center mt-6">
            <Image
              src="/assets/svgs/crossIcon.svg"
              alt="Cross Icon"
              width={100}
              height={100}
            />
            <h3 className="font-monument text-white text-4xl text-center uppercase sm:text-2xl">
              Enterprise API Protocol
            </h3>
          </div>
        </header>

        {/* Content Section */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:gap-0 xl:-mt-28 2xl:-mt-28">
          {/* Content Text */}
          <div className="flex flex-col w-full uppercase lg:w-1/2 sm:pl-10 sm:pr-10">
            <div className="w-full text-start hidden lg:block ">
              <h2 className="font-monument text-2xl text-white text-nowrap sm:text-sm uppercase">
                Integrate With Ease through our...
              </h2>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/svgs/crossIcon.svg"
                  alt="Cross Icon"
                  width={100}
                  height={100}
                />
                <h3 className="font-monument text-white text-4xl text-center uppercase sm:text-2xl">
                  Enterprise API Protocol
                </h3>
              </div>
            </div>
            <p className="font-monument text-2xl text-white leading-relaxed sm:text-base">
              Unlock real-time financial revenue-based scalable insights into
              artist, producer, songwriter, and composer performance depicting
              the 360 view of a media asset with Black Lion&apos;s Enterprise
              API Protocol.
            </p>

            <p className="font-monument text-2xl text-white leading-relaxed mt-6 sm:text-base">
              Designed to seamlessly integrate comprehensive data from streaming
              and social media platforms, enabling dynamic analytics,
              estimations, valuations, and integration while minimizing API
              limitations.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-end lg:relative lg:justify-end">
            <Image
              src="/assets/svgs/LionwithBachground.svg"
              alt="Lion Background Image"
              width={550}
              height={550}
              className="w-full h-auto
                sm:w-[700px] sm:h-[700px] sm:-mr-36 sm:-mt-28
                lg:w-[800px] lg:h-[800px] lg:-mr-0 lg:-mt-0
                xl:w-[850px] xl:h-[850px] 
                2xl:w-[900px] 2xl:h-[900px]"
            />
          </div>
        </div>
      </section>

      {/* Data Points Section */}
      <section className="w-full flex flex-col items-center px-10">
        <div className="w-full flex flex-col lg:flex-row items-center gap-10">
          {/* Watch Image Section */}
          <div className="w-full lg:w-2/4 flex justify-center">
            <Image
              src={'/assets/svgs/Watch.svg'}
              alt={'Watch Icon'}
              height={610}
              width={610}
              className="w-[300px] h-auto sm:w-[400px] md:w-[500px] lg:w-[400px] xl:w-[610px] 2xl:w-[800px]"
            />
          </div>

          {/* Data Points Section */}
          <div className="w-full lg:w-2/4 flex flex-col items-center lg:items-start">
            <h3 className="font-monument text-white text-4xl sm:text-2xl mb-6 text-center lg:text-left">
              Data Points
            </h3>

            <div className="w-full flex flex-col md:flex-row gap-3">
              {/* Data Points Column 1 */}
              <div className="w-full md:w-1/2 flex flex-col items-start gap-1">
                {datapoints.map((datapoint) => (
                  <div key={datapoint.id} className="flex items-center gap-1">
                    <Image
                      src={datapoint.icon}
                      alt={`${datapoint.text} Icon`}
                      height={50}
                      width={50}
                    />
                    <span className="font-monument text-2xl text-white sm:text-base">
                      {datapoint.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Data Points Column 2 */}
              <div className="w-full md:w-1/2 flex flex-col items-start gap-1">
                {datapoints2.map((datapoint) => (
                  <div key={datapoint.id} className="flex items-center gap-1">
                    <Image
                      src={datapoint.icon}
                      alt={`${datapoint.text} Icon`}
                      height={50}
                      width={50}
                    />
                    <span className="font-monument text-2xl text-white sm:text-base">
                      {datapoint.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-center mt-10 px-10 text-center lg:text-left">
        <h3 className="font-monument text-white text-4xl sm:text-2xl mb-8 lg:mb-0 lg:mr-8 w-full lg:w-1/2 flex justify-center items-center">
          In Partnership with Chartmetric Inc.
        </h3>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src="/assets/svgs/ChartmetricLogo.svg"
            alt="Chartmetric Logo"
            height={150}
            width={200}
            className="mb-8 lg:mb-0"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full flex flex-col items-center mt-16 px-10">
        <h3 className="font-monument text-white text-4xl mb-10 sm:text-2xl">
          Pricing
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-4xl">
          {pricingData.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default EnterpriseAPIProtocol;
