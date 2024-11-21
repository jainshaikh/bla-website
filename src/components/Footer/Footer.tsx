import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-4 border-solid border-white pt-10">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-row items-center justify-between w-full">
          {/* Footer Lion Image */}
          <div className="w-1/5 sm:w-3/5">
            <Image
              src="/assets/svgs/FooterLionImg.svg"
              alt="Footer Lion"
              height={1073}
              width={1098}
            />
          </div>

          {/* Links and Logo Container */}
          <div className="flex flex-col w-3/5 px-20 sm:px-0 sm:w-3/5">
            {/* Black Lion Logo */}
            <Image
              src="/assets/svgs/BlacklionLogoWithValue.svg"
              alt="Black Lion Logo"
              width={297}
              height={110}
              className="hidden sm:block" // Show the logo on smaller screens if necessary
            />

            {/* Links Section */}
            <nav className="w-full mt-16 sm:mt-0">
              <ul
                className="flex flex-row justify-center mt-6 space-x-8 text-sm tracking-wider text-white font-monument 
              sm:flex-col sm:space-x-0 sm:text-base sm:font-bold sm:leading-10 "
              >
                {[
                  { href: '/faqs', text: 'FAQs' },
                  { href: '/terms-of-services', text: 'Terms of Services' },
                  { href: '/disclaimer-policy', text: 'Disclaimer Policy' },
                  { href: '/privacy-policy', text: 'Privacy Policy' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-gray-400">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
