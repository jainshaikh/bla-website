import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="w-full items-center justify-center flex flex-col mt-10">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="w-1/5">
            <Image
              src={'/assets/svgs/FooterLionImg.svg'}
              alt={''}
              height={1073}
              width={1098}
              layout="responsive"
            />
          </div>
          <div className="w-4/5 px-20">
            <Image
              src={'/assets/svgs/BlacklionLogoWithValue.svg'}
              alt={''}
              width={297}
              height={110}
            />

            <div className="w-full flex mt-16">
              <div className="flex flex-row justify-center space-x-8 mt-6 text-sm font-monument text-white tracking-wider">
                <a href="/faqs" className="hover:text-gray-400">
                  FAQs
                </a>
                <a href="/terms-of-services" className="hover:text-gray-400">
                  Terms of Services
                </a>
                <a href="/disclaimer-policy" className="hover:text-gray-400">
                  Disclaimer Policy
                </a>
                <a href="/privacy-policy" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
