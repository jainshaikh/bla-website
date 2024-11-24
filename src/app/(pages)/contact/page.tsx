'use client';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'Full name must have at least 3 letters.' })
    .nonempty({ message: 'Full name is required.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .nonempty({ message: 'Email address is required.' }),
});

const Page = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Thank you for subscribing!',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const selectPlan = [
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

  // Reusable pricing card component
  const renderPricingCard = (card: (typeof selectPlan)[0], index: number) => (
    <div
      key={index}
      className="bg-colors-custom-bg-color hover:bg-red-500 rounded-lg p-5 relative group w-[370px] h-[507px]
      sm:w-[250px] sm:h-[350px]"
    >
      <div className="flex items-start flex-col justify-start h-full">
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
        <div className="mt-3">
          <span
            className="text-white font-sans font-extrabold text-2xl uppercase
          sm:text-base"
          >
            {card.title}
          </span>
        </div>
        <div className="w-full">
          <hr className="border-t-2 border-[#CE4641] group-hover:border-white transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-3 mt-5">
          <span className="text-white font-sans font-extrabold text-2xl sm:text-2xl">
            {card.annualPrice}
          </span>
          <span className="text-white font-sans font-medium text-sm sm:text-xs">
            {card.annually}
          </span>
        </div>

        {/* Features */}
        {card.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="flex flex-row items-center gap-2 mt-5 sm:mt-2 sm:gap-1"
          >
            <Image
              src="/assets/svgs/PointSvg.svg"
              alt="Feature Icon"
              height={28}
              width={28}
              className="hidden xl:flex"
            />
            <Image
              src="/assets/svgs/PointSvg.svg"
              alt="Feature Icon"
              height={28}
              width={28}
              className="hidden sm:flex"
            />
            <span className="text-white text-xl font-sans font-medium sm:text-base sm:font-light">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div
        className="absolute -top-8 -right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 group-hover:z-50
      sm:-top-6 sm:-right-6"
      >
        <Image
          src="/assets/svgs/CardHoverImg.svg"
          alt="Hover Image"
          width={150}
          height={150}
          className="hidden xl:flex"
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
    <>
      <main className="flex flex-col items-center justify-center w-full overflow-hidden">
        {/* Page Header */}
        <header className="w-full xl:flex ml-20 mt-20 sm:hidden">
          <h1 className="font-monument text-white text-2xl">Contact</h1>
        </header>

        <Image
          src="/assets/svgs/ContactsTopSvg.svg"
          alt="Contact Page Top Image"
          width={2526}
          height={979}
          className="mt-10"
        />

        <section className="w-full ml-20 xl:-mt-96 mt-16 px-10">
          {/* Form Section */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-16"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <Label
                      htmlFor="name"
                      className="font-monument text-white tracking-wider"
                    >
                      Full Name
                    </Label>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="font-monument tracking-wider text-white text-2xl capitalize bg-transparent h-14 rounded-2xl w-full md:w-2/3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label
                      htmlFor="email"
                      className="font-monument text-white tracking-wider"
                    >
                      Email Address
                    </Label>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="font-monument tracking-wider text-white text-2xl lowercase bg-transparent h-14 rounded-2xl w-full md:w-2/3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Product Tabs Section */}
              <section className="w-full mt-10">
                <h2 className="font-monument text-white text-2xl mb-8">
                  Choose Our Product
                </h2>
                <Tabs defaultValue="mobileApplication" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="aiValuationEngine">
                      Ai Valuation Engine
                    </TabsTrigger>
                    <TabsTrigger value="apiProtocol">API Protocol</TabsTrigger>
                    <TabsTrigger value="mobileApplication">
                      Mobile Application
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="mobileApplication">
                    <div className="w-full flex flex-col">
                      <span className="font-monument text-white text-2xl capitalize mb-6">
                        Select Type
                      </span>

                      {/* Checkbox Group */}
                      <div className="flex items-center mt-4 gap-10 flex-wrap">
                        {[
                          'Artists',
                          'Engineers',
                          'Producers',
                          'Songwriters',
                        ].map((type, index) => (
                          <div className="flex items-center gap-3" key={index}>
                            <Checkbox id={`terms-${index}`} />
                            <label
                              htmlFor={`terms-${index}`}
                              className="text-white tracking-widest font-monument xl:text-sm sm:text-[12px] font-medium"
                            >
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>

                      {/* Select Plan Section */}
                      <div className="w-full flex flex-col items-start justify-start mt-10">
                        <h3 className="font-monument text-white xl:text-2xl sm:text-base mb-4">
                          Select Plan
                        </h3>
                        <div className="flex items-center gap-4 mt-6 flex-wrap">
                          {selectPlan.map(renderPricingCard)}
                        </div>
                      </div>

                      {/* Checkout Via Section */}
                      <span className="font-monument text-white text-2xl mt-10 capitalize ">
                        Checkout VIA
                      </span>

                      <RadioGroup
                        defaultValue="option-one"
                        className="flex gap-6 mt-6"
                      >
                        {[
                          {
                            value: 'stripe',
                            label: 'Stripe',
                            icon: '/assets/logos/StripeIcon.svg',
                          },
                          {
                            value: 'paypal',
                            label: 'PayPal',
                            icon: '/assets/logos/PaypalIcon.svg',
                          },
                          { value: 'bank', label: 'BANK', icon: null },
                        ].map((option, index) => (
                          <div className="flex items-center gap-2" key={index}>
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                            />
                            {option.icon && (
                              <Image
                                src={option.icon}
                                alt={option.label}
                                height={24}
                                width={24}
                              />
                            )}
                            <Label
                              htmlFor={option.value}
                              className="font-monument text-white text-base tracking-widest"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              <Button
                type="submit"
                variant="default"
                className="w-full md:w-2/3 font-monument tracking-wider text-colors-custom-secondary-btn-text-color text-2xl uppercase bg-colors-custom-secondary-btn-bg-color hover:bg-colors-custom-red h-14 rounded-2xl mt-6"
              >
                CHECKOUT
              </Button>
            </form>
          </Form>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
