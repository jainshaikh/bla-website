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

const page = () => {
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

  const renderPricingCard = (card: (typeof selectPlan)[0], index: number) => (
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

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full ml-20 mt-20">
          <span className="font-monument text-white text-2xl">Contact</span>
        </div>

        <Image
          src={'/assets/svgs/ContactsTopSvg.svg'}
          alt={''}
          width={2526}
          height={979}
          className="mt-10"
        />

        <div className="w-full ml-20 -mt-96">
          <div className="w-full flex flex-col items-start">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-3/3 space-y-16"
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
                          type="fullName"
                          {...field}
                          className="font-monument tracking-wider text-white text-2xl capitalize bg-transparent h-14 rounded-2xl w-2/3"
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
                          className="font-monument tracking-wider text-white text-2xl lowercase bg-transparent h-14 rounded-2xl w-2/3"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="w-full flex flex-col items-start mt-10">
                  <div className="w-full flex mb-8">
                    <span className="font-monument text-white text-2xl">
                      Choose Our Product
                    </span>
                  </div>

                  <Tabs
                    defaultValue="mobileApplication"
                    className="w-full flex items-start justify-center flex-col"
                  >
                    <TabsList>
                      <TabsTrigger value="aiValuationEngine">
                        Ai Valuation Engine
                      </TabsTrigger>
                      <TabsTrigger value="apiProtocol">
                        API Protocol
                      </TabsTrigger>
                      <TabsTrigger value="mobileApplication">
                        Mobile Application
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="aiValuationEngine">
                      Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="apiProtocol">
                      Change your password here.
                    </TabsContent>
                    <TabsContent value="mobileApplication">
                      <div className="w-full flex flex-col items-start ">
                        <span className="font-monument text-white text-2xl capitalize mt-10">
                          select Type
                        </span>

                        <div className="flex items-center mt-10 gap-10">
                          <div className="flex items-center gap-3">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-white tracking-widest	 font-monument text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Artists
                            </label>
                          </div>

                          <div className="flex items-center gap-3">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-white tracking-widest	 font-monument text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Engineers
                            </label>
                          </div>

                          <div className="flex items-center gap-3">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-white tracking-widest	 font-monument text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Producers
                            </label>
                          </div>

                          <div className="flex items-center gap-3">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-white tracking-widest	 font-monument text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Songwriters
                            </label>
                          </div>
                        </div>

                        {/* Select Plan Section */}
                        <div className='"w-full flex flex-col items-center justify-center'>
                          <div className="w-full flex flex-row items-center justify-between ">
                            <div className="w-3/6 flex flex-col items-start justify-center ">
                              <span className="font-monument text-white text-2xl">
                                Select Plan
                              </span>
                              <div
                                className="flex items-center justify-center gap-10 mt-10
          2xl:flex-row 
          sm:flex-col"
                              >
                                {selectPlan.map(renderPricingCard)}
                              </div>
                            </div>

                            <div className="w-3/6 flex flex-col items-start justify-start">
                              <Image
                                src={'/assets/svgs/MobileViewImg.svg'}
                                alt={''}
                                height={836}
                                width={949}
                                className="h-full w-full"
                              />
                            </div>
                          </div>
                        </div>

                        <span className="font-monument text-white text-2xl mt-10 capitalize 2xl:-mt-20">
                          Checkout VIA
                        </span>

                        <div className="flex items-center mt-10 gap-10">
                          <RadioGroup
                            defaultValue="option-one"
                            className="flex gap-6"
                          >
                            <div className="flex items-center gap-2 ">
                              <RadioGroupItem value="stripe" id="stripe" />
                              <Image
                                src="/assets/logos/StripeIcon.svg"
                                alt="Paypal"
                                height={24}
                                width={24}
                              />

                              <Label
                                htmlFor="stripe"
                                className="font-monument text-white text-base	tracking-widest	"
                              >
                                Stripe
                              </Label>
                            </div>

                            <div className="flex items-center gap-2 ">
                              <RadioGroupItem value="paypal" id="paypal" />
                              <Image
                                src="/assets/logos/PaypalIcon.svg"
                                alt="Paypal"
                                height={24}
                                width={24}
                              />

                              <Label
                                htmlFor="paypal"
                                className="font-monument text-white text-base	tracking-widest	"
                              >
                                PayPal
                              </Label>
                            </div>

                            <div className="flex items-center gap-2 ">
                              <RadioGroupItem value="bank" id="bank" />
                              <Label
                                htmlFor="bank"
                                className="font-monument text-white text-base	tracking-widest	"
                              >
                                BANK
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  className="w-2/3 font-monument tracking-wider text-colors-custom-secondary-btn-text-color text-2xl uppercase bg-colors-custom-secondary-btn-bg-color hover:bg-colors-custom-red h-14 rounded-2xl"
                >
                  CHECKOUT
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
