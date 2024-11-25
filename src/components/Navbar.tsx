/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (pathname: string) => currentPath === pathname;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="text-white py-4 relative z-50 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/svgs/BlacklionLogo.svg"
            alt="Blacklion Logo"
            width={150}
            height={55}
            style={{ width: '150px', height: '55px' }}
            sizes="150px"
          />
        </Link>

        {/* Menu Button for Small and Medium Screens */}
        <div className="lg:hidden mt-4">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Large Screen Links - only visible for lg: and above */}
        <ul className="hidden lg:flex lg:space-x-2 xl:space-x-2 items-center text-lg font-semibold font-monument">
          <li>
            <Link
              href="/"
              className={`block py-2 px-2 lg:px-3 xl:px-4 rounded ${
                isActive('/') ? 'text-red-500' : 'hover:text-red-500'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block py-2 px-2 lg:px-3 xl:px-4 rounded ${
                isActive('/about')
                  ? 'text-red-500 underline'
                  : 'hover:text-red-500'
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`block py-2 px-2 lg:px-3 xl:px-4 rounded ${
                isActive('/products')
                  ? 'text-red-500 underline'
                  : 'hover:text-red-500'
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`block py-2 px-2 lg:px-3 xl:px-4 rounded ${
                isActive('/blog')
                  ? 'text-red-500 underline'
                  : 'hover:text-red-500'
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className={`block py-2 px-2 lg:px-3 xl:px-4 rounded ${
                isActive('/news')
                  ? 'text-red-500 underline'
                  : 'hover:text-red-500'
              }`}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`block py-2 px-2 lg:px-3 xl:px-4 rounded ${
                isActive('/contact')
                  ? 'text-red-500 underline'
                  : 'hover:text-red-500'
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Slide-In Menu for Small and Medium Screens */}
      {menuOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-90 z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/assets/svgs/BlacklionLogo.svg"
              alt="Blacklion Logo"
              width={150}
              height={55}
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col items-center space-y-6 text-xl font-semibold">
            <li>
              <Link
                href="/"
                className={`block py-2 px-4 rounded ${
                  isActive('/')
                    ? 'text-red-500 underline'
                    : 'hover:text-red-500'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-4 rounded ${
                  isActive('/about')
                    ? 'text-red-500 underline'
                    : 'hover:text-red-500'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`block py-2 px-4 rounded ${
                  isActive('/products')
                    ? 'text-red-500 underline'
                    : 'hover:text-red-500'
                }`}
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block py-2 px-4 rounded ${
                  isActive('/blog')
                    ? 'text-red-500 underline'
                    : 'hover:text-red-500'
                }`}
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className={`block py-2 px-4 rounded ${
                  isActive('/news')
                    ? 'text-red-500 underline'
                    : 'hover:text-red-500'
                }`}
                onClick={closeMenu}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 px-4 rounded ${
                  isActive('/contact')
                    ? 'text-red-500 underline'
                    : 'hover:text-red-500'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
