'use client';
import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .nonempty({ message: 'Email address is required.' }),
});

const WeInviteYou = () => {
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

  return (
    <section className="w-full">
      {/* Top Banner */}
      <div className="w-full flex justify-center mb-10">
        <Image
          src="/assets/svgs/unlockingValueStrip.svg"
          alt="Unlocking Value Strip"
          width={3000}
          height={50}
          priority
        />
      </div>

      {/* Invitation Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Form Section */}
        <div
          className="w-full lg:w-3/5 flex flex-col items-start mb-10 lg:mb-0 
        sm:px-10 
        sm:-mt-64 lg:-mt-20 "
        >
          <header className="flex flex-col items-start mb-6">
            <Image
              src="/assets/svgs/crossIcon.svg"
              alt="Cross Icon"
              width={80}
              height={80}
              loading="lazy" // Non-critical image, use lazy loading
            />
            <h2 className="font-monument text-white text-2xl leading-normal mt-4 sm:text-base">
              WE INVITE YOU TO
            </h2>
          </header>

          {/* Headline Section */}
          <div className="mb-8">
            <h3 className="font-monument text-4xl sm:text-3xl font-normal text-white">
              JOIN THE <br />
              <span className="text-colors-custom-red">ROAR</span>VOLUTION
            </h3>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-3/4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full"
              >
                {/* Email Input Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          {...field}
                          className="font-monument tracking-wider text-lg sm:text-base bg-white h-14 rounded-xl w-full px-4"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="default"
                  className="font-monument tracking-wider text-lg sm:text-base uppercase bg-colors-custom-red hover:bg-red-600 h-14 rounded-xl w-full"
                >
                  Get Updates
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex justify-end lg:mb-0">
          <Image
            src="/assets/svgs/LionOnTree.svg"
            alt="Lion On Tree Image"
            loading="lazy"
            width={400}
            height={400}
            className="sm:-mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default WeInviteYou;
