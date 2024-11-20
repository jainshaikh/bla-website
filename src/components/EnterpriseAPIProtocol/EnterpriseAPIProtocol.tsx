import Image from 'next/image';

const EnterpriseAPIProtocol = () => {
  const datapoints = [
    { id: 1, text: 'STREAMING', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'FINANCE REVENUE', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'SOCIAL', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'CONTRACTING', icon: '/assets/svgs/checkIcon.svg' },
  ];

  const datapoints2 = [
    { id: 1, text: 'Artist', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'Producer', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'Songwriter', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'music enterprises', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'live venue', icon: '/assets/svgs/checkIcon.svg' },
  ];

  // Pricing data
  const pricingData = [
    {
      monthlyPrice: '$2000',
      annualPrice: '',
      annually: '',
      title: 'Monthly',
      features: ['Monthly API access for 30 days', 'For 7 requests per second'],
    },
    {
      monthlyPrice: '$20,000',
      annualPrice: '',
      annually: '',
      title: 'Annually',
      features: [
        'Annual API access for 12 months',
        'For 7 requests per second',
      ],
    },
  ];

  // Pricing card component
  const renderPricingCard = (card: (typeof pricingData)[0], index: number) => (
    <div
      key={index}
      className="bg-colors-custom-bg-color hover:bg-red-500 rounded-lg p-5 relative group"
      style={{ width: '370px', height: '507px' }}
    >
      <div className="flex items-start flex-col justify-start h-full">
        {/* Price Section */}
        <div className="group flex items-center gap-3">
          <span className="font-sans text-5xl font-bold text-colors-custom-red group-hover:text-white transition-colors">
            {card.monthlyPrice}
          </span>
        </div>

        {/* Title */}
        <div className="m-3 mt-3">
          <span className="text-white font-sans font-extrabold text-2xl">
            {card.title}
          </span>
        </div>

        {/* Separator */}
        <div className="w-full">
          <hr className="border-t-2 border-[#CE4641] group-hover:border-white transition-colors duration-300" />
        </div>

        {/* Annual Price */}
        <div className="flex items-center gap-3 mt-5">
          <span className="text-white font-sans font-extrabold text-2xl">
            {card.annualPrice}
          </span>
          <span className="text-white font-sans font-medium text-sm">
            {card.annually}
          </span>
        </div>

        {/* Features */}
        {card.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="flex flex-row items-center gap-2 mt-5"
          >
            <Image
              src="/assets/svgs/PointSvg.svg"
              alt=""
              height={28}
              width={28}
            />
            <span className="text-white text-xl font-sans font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Hover Image */}
      <div className="absolute -top-8 -right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 group-hover:z-50">
        <Image
          src="/assets/svgs/CardHoverImg.svg"
          alt="Hover Image"
          width={150}
          height={150}
        />
      </div>
    </div>
  );

  return (
    <>
      {/*Top Bar*/}
      <div className="w-full overflow-hidden flex flex-col items-center">
        <Image
          src="/assets/svgs/unlockingValueStrip.svg"
          alt="Svg Logo"
          layout="responsive"
          width={100}
          height={50}
        />
      </div>

      {/* Top Section */}
      <div className="w-full flex 2xl:flex-row sm:flex-col">
        <div className="flex flex-col w-3/4 ">
          <span className="font-monument text-2xl font-normal ml-20 mt-20 text-white">
            Integrate With Ease through our...
          </span>

          <div className=" ml-10 ">
            <div className="flex flex-row items-center">
              <div className="">
                <Image
                  src="/assets/svgs/crossIcon.svg"
                  alt={''}
                  width={200}
                  height={200}
                />
              </div>

              <span className="font-monument text-white text-4xl mr-40 leading-normal">
                Enterprise API Protocol
              </span>
            </div>
          </div>

          <span className="font-monument text-2xl font-normal ml-20 mt-10 mr-20 text-white">
            Unlock real-time financial revenue based scalable insights into
            artist, producer, songwriter and composer performance depicting the
            360 view of a media asset with Black Lions Enterprise API Protocol.
          </span>
          <br />
          <span className="font-monument text-2xl font-normal ml-20 mr-20 text-white">
            Designed to seamlessly integrate comprehensive data from streaming
            and social media platforms, enabling dynamic analytics, estimations,
            valuations and integration while minimising API limitations.
          </span>
        </div>
        <div className="w-2/4">
          <Image
            src="/assets/svgs/LionwithBachground.svg"
            alt={''}
            height={1103}
            width={1109}
          />
        </div>
      </div>

      {/* Data Points Section */}
      <div className="w-full flex flex-col items-center justify-center px-10">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/svgs/Watch.svg"
              alt={''}
              height={611}
              width={611}
            />
          </div>

          <div className="w-full flex flex-col items-center justify-start">
            <span className="font-monument text-white text-4xl mb-10">
              Data Points
            </span>
            <div className="flex flex-row gap-2">
              <div>
                {datapoints.map((datapoint) => (
                  <div
                    key={datapoint.id}
                    className="w-full flex justify-start flex-row items-start"
                  >
                    <Image src={datapoint.icon} alt="" height={80} width={80} />
                    <span className="font-monument 2xl:text-2xl text-white text-start sm:text-base">
                      {datapoint.text}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                {datapoints2.map((datapoint) => (
                  <div
                    key={datapoint.id}
                    className="w-full flex justify-start flex-row items-center"
                  >
                    <Image src={datapoint.icon} alt="" height={80} width={80} />
                    <span className="font-monument 2xl:text-2xl text-white text-start sm:text-base">
                      {datapoint.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Chartmetric Section */}
      <div className="w-full flex flex-row items-center justify-between px-20 mt-10">
        <div className="w-full flex items-center justify-center">
          <span className="font-monument text-white text-4xl mb-10">
            In Partnership with Chartmetric Inc.
          </span>
        </div>

        <div className="w-full flex  items-center justify-center">
          <Image
            src="/assets/svgs/ChartmetricLogo.svg"
            alt={''}
            height={332}
            width={445}
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <span className="font-monument text-white text-4xl">Pricing</span>
        <div
          className="flex items-center justify-center gap-10 mt-10
          2xl:flex-row 
          sm:flex-col"
        >
          {pricingData.map(renderPricingCard)}
        </div>
      </div>
    </>
  );
};

export default EnterpriseAPIProtocol;
