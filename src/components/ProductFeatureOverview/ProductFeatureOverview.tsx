import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const ProductFeatureOverview = () => {
  // Feature data
  const features = [
    { id: 1, text: 'Credit Score', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'Real Time Data', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'Digital Escrow', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'Lead Generation', icon: '/assets/svgs/checkIcon.svg' },
    { id: 5, text: 'Payment Processing', icon: '/assets/svgs/checkIcon.svg' },
    { id: 6, text: 'Audio Fingerprinting', icon: '/assets/svgs/checkIcon.svg' },
    {
      id: 7,
      text: 'Contract Creation & Processing',
      icon: '/assets/svgs/checkIcon.svg',
    },
    {
      id: 8,
      text: 'Financial Modelling & Forecasting',
      icon: '/assets/svgs/checkIcon.svg',
    },
  ];

  // Pricing data
  const pricingData = [
    {
      monthlyPrice: '$3k',
      annualPrice: '$36K',
      annually: 'Annually',
      title: 'Basic',
      features: [
        'Includes 1 user license',
        'Access to our AI Engine for predictive financial and data',
      ],
    },
    {
      monthlyPrice: '$5k',
      annualPrice: '$60K',
      annually: 'Annually',
      title: 'Professional',
      features: [
        'Includes 3 user licenses',
        'Access to our AI Engine for financial analysis, contracting, storage, and creation',
      ],
    },
    {
      monthlyPrice: '$10k',
      annualPrice: '$100K',
      annually: 'Annually',
      title: 'Advanced',
      features: [
        'Access to our AI Engine for financial analysis, contracting, payments, and all new features',
      ],
    },
    {
      monthlyPrice: '$3k',
      annualPrice: '',
      annually: '',
      title: 'Maintenance',
      features: ['Maintenance for $50 per month'],
    },
  ];

  // Pricing card component
  const PricingCard = ({ card }: { card: (typeof pricingData)[0] }) => (
    <div
      key={card.title}
      className="bg-colors-custom-bg-color hover:bg-red-500 rounded-lg p-5 relative group w-[370px] h-[507px] sm:w-[280px] sm:h-[450px]"
    >
      <div className="flex items-start flex-col justify-start h-full">
        <div className="group flex items-center gap-3">
          <span className="font-sans text-5xl font-bold text-colors-custom-red group-hover:text-white transition-colors sm:text-2xl">
            {card.monthlyPrice}
          </span>
          <span className="text-white transition-colors font-sans text-sm uppercase sm:text-xs">
            Per Month
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-white font-sans font-extrabold text-2xl uppercase sm:text-base">
            {card.title}
          </h3>
        </div>
        <div className="w-full mt-3">
          <hr className="border-t-2 border-[#CE4641] group-hover:border-white transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-3 mt-5">
          {card.annualPrice && (
            <>
              <span className="text-white font-sans font-extrabold text-2xl sm:text-xl">
                {card.annualPrice}
              </span>
              <span className="text-white font-sans font-medium text-sm sm:text-xs">
                {card.annually}
              </span>
            </>
          )}
        </div>
        {card.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="flex items-center gap-2 mt-5 sm:mt-2 sm:gap-1"
          >
            <Image
              src="/assets/svgs/PointSvg.svg"
              alt={`${feature} Icon`}
              height={28}
              width={28}
            />
            <span className="text-white text-xl font-sans font-medium sm:text-base sm:font-light">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const testimonials = [
    {
      id: 1,
      name: 'Savannah Nguyen',
      role: 'Customer',
      rating: 5,
      text: 'As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.',
      cardImage: '/assets/images/TestimonialsImg1.png',
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'CEO',
      rating: 4,
      text: 'The platform provides outstanding features for our business. It simplifies our workflow and enhances productivity across the board. Their customer service is also fantastic. Highly recommended!',
      cardImage: '/assets/images/TestimonialsImg1.png',
    },
    {
      id: 3,
      name: 'Jane Smith',
      role: 'Manager',
      rating: 5,
      text: 'We have been using this service for over a year, and it has transformed how we operate. The platform is intuitive, and the updates ensure that it remains competitive.',
      cardImage: '/assets/images/TestimonialsImg1.png',
    },
  ];

  return (
    <section className="pt-10">
      {/* Top Section */}
      <div className="w-full overflow-hidden flex flex-col items-center z-10">
        <Image
          src="/assets/svgs/unlockingValueStrip.svg"
          alt="Unlocking Value Strip"
          layout="responsive"
          width={100}
          height={50}
          className="overflow-hidden"
        />
        <div className="w-full flex justify-center -z-10 relative">
          <div
            className="
              w-3/4 sm:w-4/5 md:w-4/5 lg:w-3/6 xl:w-3/6 2xl:w-3/6
              -mt-32 sm:-mt-12 md:-mt-14 lg:-mt-12 xl:-mt-14 2xl:-mt-16
              overflow-hidden"
          >
            <Image
              src="/assets/svgs/twoClaws.svg"
              alt="Two Claws Decoration"
              width={668}
              height={667}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full flex flex-col items-center mt-16 lg:-mt-72 lg:pl-0 lg:items-start xl:-mt-80 2xl:-mt-96">
        <header className="flex items-center sm:-mt-32 lg:relative lg:-mt-10 lg:top-0 lg:left-0">
          <Image
            src="/assets/svgs/crossIcon.svg"
            alt="Cross Icon"
            width={150}
            height={150}
            className="lg:w-20 lg:h-20"
          />
          <h2 className="font-monument text-white text-4xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            About
          </h2>
        </header>

        {/* Group Illustration Section */}
        <div className="w-full flex items-center justify-center lg:justify-start mb-10 lg:pl-0">
          {/* Mobile and Medium Screens (sm, md) */}
          <div className="block lg:hidden w-full">
            <Image
              src="/assets/svgs/newGroupForMbl.svg"
              width={618}
              height={592}
              layout="responsive"
              alt="Group Illustration Mobile"
              className="w-full h-auto"
            />
          </div>

          {/* Large Screens (lg, xl, 2xl) */}
          <div className="hidden lg:block w-full">
            <Image
              src="/assets/svgs/newGroup.svg"
              width={1920}
              height={600}
              layout="responsive"
              alt="Group Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full flex flex-col items-center mt-10">
        <h2
          className="font-monument text-white text-4xl mb-10 
        sm:text-2xl lg:text-2xl	xl:text-3xl 2xl:text-4xl"
        >
          Features
        </h2>
        <div className="flex flex-col items-center gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center ">
              <Image
                src={feature.icon}
                alt={`${feature.text} Icon`}
                height={50}
                width={60}
              />
              <span
                className="font-monument text-2xl text-white ml-4 text-center
              sm:text-base lg:text-lg xl:text-2xl"
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full flex flex-col items-center mt-10 px-5">
        <h2 className="font-monument text-white text-4xl">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 w-full max-w-screen-xl mx-auto justify-items-center">
          {pricingData.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full flex flex-col items-center mt-10 px-5">
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-6">
          <Image
            src="/assets/svgs/crossIcon.svg"
            alt="Cross Icon"
            width={200}
            height={200}
          />
          <h2 className="font-monument text-white text-4xl text-center sm:text-2xl">
            What Our Clients Say
          </h2>
        </header>

        {/* Carousel */}
        <Carousel className="w-full max-w-2xl mx-auto sm:w-3/4">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="bg-colors-custom-red text-white rounded-lg h-[400px] sm:h-[350px] lg:h-[400px]">
                  <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                    {/* Profile Picture */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16">
                        <Image
                          src={testimonial.cardImage}
                          alt={`${testimonial.name}'s testimonial`}
                          width={200}
                          height={150}
                          className="rounded-md"
                        />
                      </div>
                    </div>

                    {/* Name, Role, and Rating */}
                    <span className="font-monument text-base font-bold sm:text-xs">
                      {testimonial.name}
                    </span>
                    <span className="font-monument text-base font-normal sm:text-xs">
                      {testimonial.role}
                    </span>
                    <div className="flex justify-center gap-1 mt-2">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, idx) => (
                          <svg
                            key={idx}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-5 h-5 text-[#4FFCB7] sm:w-4 sm:h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.432l-6 6.129 1.445 8.697L12 18.896l-7.445 5.362L6 15.561l-6-6.129 8.332-1.277z" />
                          </svg>
                        )
                      )}
                    </div>

                    {/* Testimonial Text with Line Clamp */}
                    <p className="italic text-sm mt-4 font-monument sm:text-xs line-clamp-4">
                      {testimonial.text}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation */}
          <div className="w-full flex flex-wrap justify-center gap-4 mt-4 lg:mt-0 lg:flex-row lg:justify-between">
            <div className="order-2 lg:order-none">
              <CarouselPrevious />
            </div>
            <div className="order-3 lg:order-none">
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </section>
    </section>
  );
};

export default ProductFeatureOverview;
