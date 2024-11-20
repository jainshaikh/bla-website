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
    { id: 1, text: 'CREDIT SCORE', icon: '/assets/svgs/checkIcon.svg' },
    { id: 2, text: 'REAL TIME DATA', icon: '/assets/svgs/checkIcon.svg' },
    { id: 3, text: 'DIGITAL ESCROW', icon: '/assets/svgs/checkIcon.svg' },
    { id: 4, text: 'LEAD GENERATION', icon: '/assets/svgs/checkIcon.svg' },
    { id: 5, text: 'PAYMENT PROCESSING', icon: '/assets/svgs/checkIcon.svg' },
    { id: 6, text: 'AUDIO FINGERPRINTING', icon: '/assets/svgs/checkIcon.svg' },
    {
      id: 7,
      text: 'CONTRACT CREATION & PROCESSING',
      icon: '/assets/svgs/checkIcon.svg',
    },
    {
      id: 8,
      text: 'FINANCIAL MODELLING & FORECASTING',
      icon: '/assets/svgs/checkIcon.svg',
    },
  ];

  // Pricing data
  const pricingData = [
    {
      monthlyPrice: '$3k',
      annualPrice: '$36K',
      annually: 'Annually',
      title: 'BASIC',
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
        'Access to our AI Engine for financial analysis, contracting , storage and creation',
      ],
    },
    {
      monthlyPrice: '$10k',
      annualPrice: '$100K',
      annually: 'Annually',
      title: 'BASIC',
      features: [
        'Access to our AI Engine for financial analysis, contracting, payments and all new features',
      ],
    },
    {
      monthlyPrice: '$3k',
      annualPrice: '',
      annually: '',
      title: 'Maintenance',
      features: ['maintenance for $50 per month'],
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
          <span className="text-white transition-colors font-sans text-sm">
            Per Month
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

  //Testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Savannah Nguyen',
      role: 'Customer',
      rating: 5,
      text: `"As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve."`,
      cardImage: '/assets/images/TestimonialsImg1.png',
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'CEO',
      rating: 4,
      text: `"The platform provides outstanding features for our business. It simplifies our workflow and enhances productivity across the board. Their customer service is also fantastic. Highly recommended!"`,
      cardImage: '/assets/images/TestimonialsImg1.png',
    },
    {
      id: 3,
      name: 'Jane Smith',
      role: 'Manager',
      rating: 5,
      text: `"We have been using this service for over a year, and it has transformed how we operate. The platform is intuitive, and the updates ensure that it remains competitive."`,
      cardImage: '/assets/images/TestimonialsImg1.png',
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      {/* Top Section */}
      <div className="w-full overflow-hidden flex flex-col items-center">
        <Image
          src="/assets/svgs/unlockingValueStrip.svg"
          alt="Svg Logo"
          layout="responsive"
          width={100}
          height={50}
        />
        <div className="overflow-hidden">
          <Image
            src="/assets/svgs/twoClaws.svg"
            alt="Svg Logo"
            width={668}
            height={667}
            style={{
              marginTop: '-60px',
            }}
          />
        </div>
      </div>

      {/* About Section */}
      <div
        className="w-full flex flex-col items-center
       2xl:mt-[-550px] 2xl:items-start 2xl:justify-center
       sm:-mt-28 sm:items-center "
      >
        <div className=" ml-10 ">
          <div className="flex 2xl:flex-col sm:flex-row items-center justify-center">
            <div className="">
              <Image
                src="/assets/svgs/crossIcon.svg"
                alt={''}
                width={200}
                height={200}
              />
            </div>

            <span className="font-monument text-white text-4xl">About</span>
          </div>
        </div>

        <div className="w-full items-center justify-center">
          <Image
            src="/assets/svgs/newGroup.svg"
            width={1920}
            height={600}
            layout="responsive"
            alt={''}
            className="2xl:-mt-28"
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <span className="font-monument text-white text-4xl mb-10">
          Features
        </span>
        {features.map((feature) => (
          <div
            key={feature.id}
            className="w-full flex justify-center flex-row items-center"
          >
            <Image src={feature.icon} alt="" height={100} width={120} />
            <span className="font-monument 2xl:text-2xl text-white text-center sm:text-base">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <span className="font-monument text-white text-4xl">Pricing</span>
        <div
          className="flex items-center justify-center gap-10 mt-10 flex-wrap xl:hidden
          2xl:flex-row 2xl:flex 
          xl:flex-row xl:flex-wrap
          lg:flex-row lg:flex-wrap
          md:flex-row md:flex-wrap
          sm:flex-col sm:flex-wrap"
        >
          {pricingData.map(renderPricingCard)}
        </div>
      </div>

      {/* What Our Clients say */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <div className="">
          <div className="flex 2xl:flex-col sm:flex-row items-center justify-center">
            <div className="">
              <Image
                src="/assets/svgs/crossIcon.svg"
                alt={''}
                width={200}
                height={200}
              />
            </div>

            <span className="font-monument text-white text-4xl">
              What Our Clients say
            </span>
          </div>
        </div>

        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-4">
                  <Card className="bg-colors-custom-red text-white rounded-lg">
                    <CardContent className="p-6 text-center">
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

                      {/* Name and Role */}
                      <span className="font-monument text-base font-normal">
                        {testimonial.name}
                      </span>
                      <br />
                      <span className="font-monument text-base font-normal">
                        {testimonial.role}
                      </span>

                      {/* Star Rating */}
                      <div className="flex justify-center gap-1 mt-2">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, idx) => (
                            <svg
                              key={idx}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="w-5 h-5 text-[#4FFCB7]"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568L24 9.432l-6 6.129 1.445 8.697L12 18.896l-7.445 5.362L6 15.561l-6-6.129 8.332-1.277z" />
                            </svg>
                          )
                        )}
                      </div>

                      {/* Quote Text */}
                      <p className="italic text-sm mt-4">
                        {/* <span className="text-green-400 text-6xl">“</span> */}
                        <span className="font-monument text-base	">
                          {testimonial.text}
                        </span>
                        {/* <span className="text-green-400 text-6xl">”</span> */}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Buttons */}
          <CarouselPrevious>
            <Image
              src="/assets/svgs/LeftArrow.svg"
              alt="Previous"
              width={40}
              height={40}
            />
          </CarouselPrevious>
          <CarouselNext>
            <Image
              src="/assets/svgs/RightArrow.svg"
              alt="Next"
              width={40}
              height={40}
            />
          </CarouselNext>
        </Carousel>
      </div>
    </>
  );
};

export default ProductFeatureOverview;
