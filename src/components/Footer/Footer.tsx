import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      {/* Footer Lion Image */}
      <div className="w-2/4 lg:w-2/5 flex justify-start lg:justify-start">
        <Image
          src="/assets/svgs/FooterLionImg.svg"
          alt="Footer Lion"
          className="w-[100px] sm:w-[300px] md:w-[350px] lg:w-[300px] 2xl:w-[600px]"
          width={300}
          height={300}
          loading="lazy" // Use lazy loading to improve page performance
        />
      </div>

      {/* Links and Logo Container */}
      <div className="w-2/4 lg:w-3/5 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
        {/* Black Lion Logo */}
        <div className="mb-4 lg:mb-4">
          <Image
            src="/assets/svgs/BlacklionLogoWithValue.svg"
            alt="Black Lion Logo"
            className="w-[180px] sm:w-[150px] md:w-[180px] lg:w-[297px]"
            width={297}
            height={110}
            loading="lazy" // Use lazy loading to improve page performance
          />
        </div>

        {/* Links Section */}
        <nav aria-label="Footer Navigation Links">
          <ul
            className="flex flex-col items-center lg:items-start gap-4 lg:gap-4 text-sm tracking-wider font-monument font-bold text-nowrap flex-wrap
          sm:flex-col lg:flex-row
          sm:text-xs md:text-base lg:text-[12px] xl:text-[16px] 2xl:text-base"
          >
            {[
              { href: '/faqs', text: 'FAQs' },
              { href: '/terms-of-services', text: 'Terms of Services' },
              { href: '/disclaimer-policy', text: 'Disclaimer Policy' },
              { href: '/privacy-policy', text: 'Privacy Policy' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-gray-400 transition-colors duration-200 text-white"
                  aria-label={`Navigate to ${link.text}`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
