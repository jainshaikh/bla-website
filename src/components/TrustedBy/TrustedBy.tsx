import Image from 'next/image';

const TrustedBy = () => {
  const features = [
    { id: 1, text: 'Distributor', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'Record label', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'Publisher', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'Songfund', icon: '/assets/svgs/checkIcon.svg' },
    { id: 5, text: 'Management/Touring', icon: '/assets/svgs/checkIcon.svg' },
    { id: 6, text: 'Music Supervision', icon: '/assets/svgs/checkIcon.svg' },
  ];

  const companies = [
    {
      id: 1,
      name: 'Create Music Group',
      logo: '/assets/svgs/CreateLogo.svg',
    },
    {
      id: 2,
      name: 'Chartmetric',
      logo: '/assets/svgs/ChartmetricLogo.svg',
    },
    {
      id: 3,
      name: '11th and co.',
      logo: '/assets/svgs/EleventhgoLogo.svg',
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* Trusted By Heading */}
      <div className="w-full text-start mb-8 px-10">
        <h2 className="font-monument text-4xl text-white sm:text-xl">
          Trusted By
        </h2>
      </div>

      {/* Trusted By Logos */}
      <div className="w-full flex items-center justify-evenly flex-wrap sm:flex-col md:flex-col lg:flex-row">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex flex-col items-center justify-start lg:w-60 lg:min-h-[300px] mb-8 lg:mb-0"
          >
            <div className="flex items-center justify-center w-full h-full lg:w-48 lg:h-48">
              <Image
                src={company.logo}
                alt={`${company.name} Logo`}
                width={200}
                height={200}
                layout="intrinsic"
              />
            </div>
            <span className="font-monument text-white mt-4 flex-nowrap">
              {company.name}
            </span>
          </div>
        ))}
      </div>

      {/* Features and Claw Image Section */}
      <div className="w-full flex items-center justify-between mt-16 lg:flex-row flex-col-reverse sm:mt-8">
        {/* Features for Enterprises */}
        <div className="w-full lg:w-1/2 flex flex-col items-start px-4 mb-8 lg:mb-0">
          <h3 className="font-monument text-white text-4xl uppercase tracking-widest mb-6 sm:text-2xl">
            For Enterprises
          </h3>
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center mb-4 sm:mb-2">
              <Image
                src={feature.icon}
                alt={`${feature.text} Icon`}
                height={30}
                width={30}
              />
              <span className="font-monument text-2xl text-white ml-4 uppercase tracking-widest sm:text-base">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative Claw Image */}
        <div className="w-full lg:w-1/2 flex justify-end items-center mb-8 lg:mb-0 sm:px-0 sm:justify-end">
          <div className="w-40 h-40 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-end sm:-mt-16 lg:mt-0">
            <Image
              src="/assets/svgs/LeftClaw.svg"
              alt="Decorative Claw Image"
              height={500}
              width={500}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
