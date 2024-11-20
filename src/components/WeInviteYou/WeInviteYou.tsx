'use client';
import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
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
    <>
      {/*Top Bar*/}
      <div className="w-full overflow-hidden flex flex-col items-center mt-10">
        <Image
          src="/assets/svgs/unlockingValueStrip.svg"
          alt="Svg Logo"
          layout="responsive"
          width={100}
          height={50}
        />
      </div>
      {/* Top Section */}
      <div className="w-full h-screen flex 2xl:flex-row sm:flex-col">
        <div className="flex flex-col w-3/4 items-center justify-start ">
          <div className="w-full flex flex-col items-start">
            <Image
              src="/assets/svgs/crossIcon.svg"
              alt={''}
              width={200}
              height={200}
            />

            <span className="font-monument text-white text-2xl leading-normal ml-10">
              WE INVITE YOU TO
            </span>
          </div>

          <div className="w-full ml-20 mt-16">
            <span className="font-monument text-4xl font-normal text-white">
              JOIN THE
              <br /> <span className="text-colors-custom-red">ROAR</span>
              volution
            </span>
          </div>

          <div className="w-full flex flex-col items-start ml-20 mt-16">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-16"
              >
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
                          className="font-monument tracking-wider text-2xl uppercase bg-white h-16 rounded-2xl w-full"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="default"
                  className="font-monument tracking-wider text-2xl uppercase bg-colors-custom-red hover:bg-colors-custom-red h-16 rounded-2xl w-full"
                >
                  Get Updates
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="w-2/4">
          <Image
            src="/assets/svgs/LionOnTree.svg"
            alt={''}
            height={1103}
            width={1109}
          />
        </div>
      </div>
    </>
  );
};

export default WeInviteYou;
