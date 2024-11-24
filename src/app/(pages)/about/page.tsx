import Footer from '@/components/Footer/Footer';
import React from 'react';
import Image from 'next/image';

// Types for ProfileCard props
type ProfileCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  socialMedia: { iconSrc: string; url: string }[];
  size: 'large' | 'medium'; // Different sizes for different roles
  background: 'red' | 'transparent'; // Different background colors
};

// ProfileCard Component
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  imageSrc,
  socialMedia,
  size,
  background,
}) => {
  // Dynamically set card styles based on size and background props
  const cardClasses = `
    flex-shrink-0 p-4 items-center justify-between rounded-2xl flex flex-col
    ${
      size === 'large'
        ? 'w-full lg:w-[30%] h-[600px]'
        : 'w-full lg:w-[22.5%] h-[500px]'
    }
    ${
      background === 'red'
        ? 'bg-colors-custom-red'
        : 'bg-transparent border-4 border-white'
    }
  `;

  return (
    <article className={cardClasses}>
      <Image
        src={imageSrc}
        alt={`${name} Profile Picture`}
        width={440}
        height={size === 'large' ? 440 : 380}
        className="object-cover w-full h-4/6 rounded-2xl"
      />
      <h3 className="font-monument text-white text-base text-nowrap text-center uppercase mt-2">
        {name}
      </h3>
      <p className="font-monument text-white text-[10px] text-center uppercase px-5 mt-1">
        {role}
      </p>
      <div className="flex flex-row items-center justify-center gap-5 mt-5 mb-3">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${name}'s social media`}
          >
            <Image
              src={social.iconSrc}
              alt={`${name} Social Media Icon`}
              height={20}
              width={20}
            />
          </a>
        ))}
      </div>
    </article>
  );
};

// Social media links for reuse
const socialMediaIcons = [
  {
    iconSrc: '/assets/logos/MessageIcon.svg',
    url: 'https://twitter.com/username',
  },
  { iconSrc: '/assets/logos/Xicon.svg', url: 'mailto:example@example.com' },
  {
    iconSrc: '/assets/logos/LinkedinIcon.svg',
    url: 'https://linkedin.com/in/username',
  },
  {
    iconSrc: '/assets/logos/InstaIcon.svg',
    url: 'https://instagram.com/username',
  },
];

const AboutPage: React.FC = () => {
  return (
    <main className="overflow-hidden scroll-smooth">
      {/* Top Header Section */}
      <section className="w-full items-center justify-between flex flex-col text-white">
        <header className="flex flex-col items-start w-full mt-16 px-10">
          <h2 className="font-monument text-2xl font-bold hidden sm:flex">
            About
          </h2>
          <h1 className="font-monument uppercase tracking-widest text-4xl sm:text-2xl mt-4">
            The world&apos;s first AI fintech platform and marketplace for music
          </h1>
        </header>
        <div className="w-full mt-10">
          <Image
            src="/assets/svgs/IntroTopSvg.svg"
            alt="Introduction Top Graphic"
            height={1983}
            width={2731}
            layout="responsive"
          />
        </div>
      </section>

      {/* Blacklion Message Section */}
      <section className="w-full items-center justify-center flex flex-col text-white mt-16 px-10">
        <p className="font-monument text-2xl text-center mb-10">
          Black Lion is the world’s first AI-powered fintech platform and
          marketplace designed for the music and entertainment industry. We
          provide real-time data insights and innovative private equity-style
          valuation tools, empowering artists, songwriters, producers,
          engineers, investors, managers, and labels to understand and unlock
          the true financial value of music.
        </p>
        <div className="w-full flex items-center justify-center mb-10">
          <Image
            src="/assets/svgs/LionImg.svg"
            alt="Lion Image"
            height={690}
            width={691}
          />
        </div>
        <p className="font-monument text-2xl text-center">
          By breaking down barriers to capital and automating financial
          processes, we’re revolutionising how the music industry operates,
          giving creators full control of their careers and enterprises their
          time back!
        </p>
      </section>

      {/* Executive Team Section */}
      <section className="pt-16 w-full items-center justify-center flex flex-col text-white">
        <header className="w-full text-center mb-8">
          <h2 className="font-monument text-4xl">Executive Team</h2>
        </header>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <ProfileCard
            name="Junaid Khan"
            role="CEO & Founder"
            imageSrc="/assets/images/JunaidImg.png"
            socialMedia={socialMediaIcons}
            size="large"
            background="red"
          />
          <ProfileCard
            name="Daniya Khan"
            role="COO & Founder"
            imageSrc="/assets/images/DaniyalImg.png"
            socialMedia={socialMediaIcons}
            size="large"
            background="red"
          />
        </div>
      </section>

      {/* Additional Team Section */}
      <section className="pt-16 w-full items-center justify-center flex flex-col text-white mt-10">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <ProfileCard
            name="Manny Toro"
            role="Chief Marketing Officer"
            imageSrc="/assets/images/MannyToroImg.jpg"
            socialMedia={socialMediaIcons}
            size="medium"
            background="transparent"
          />
          <ProfileCard
            name="Alisha Outridge"
            role="Chief Technology Officer"
            imageSrc="/assets/images/AlishaOutridgeImg.jpg"
            socialMedia={socialMediaIcons}
            size="medium"
            background="transparent"
          />
        </div>
      </section>

      {/* Board Advisors Section */}
      <section className="pt-16 w-full items-center justify-center flex flex-col text-white mt-16">
        <header className="w-full flex justify-center items-center gap-4 mb-8">
          <h2 className="font-monument text-4xl">Board Advisors</h2>
          <Image
            src="/assets/svgs/crossIcon.svg"
            alt="Decorative Cross Icon"
            width={100}
            height={100}
          />
        </header>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <ProfileCard
            name="Ebonie Ward"
            role="CEO of 11th and Co."
            imageSrc="/assets/images/EbonieImg.jpg"
            socialMedia={socialMediaIcons}
            size="medium"
            background="transparent"
          />
          <ProfileCard
            name="Wayne Hampton"
            role="Chief Business Development Officer & Co-Founder - Create Music Group"
            imageSrc="/assets/images/WayneImg.jpg"
            socialMedia={socialMediaIcons}
            size="medium"
            background="transparent"
          />
          <ProfileCard
            name="Luke Cooper"
            role="General Partner of Latimer Ventures"
            imageSrc="/assets/images/LukeImg.jpg"
            socialMedia={socialMediaIcons}
            size="medium"
            background="transparent"
          />
          <ProfileCard
            name="Che Pope"
            role="COO of Yeezy / Wrkshp"
            imageSrc="/assets/images/ChePopeImg.jpg"
            socialMedia={socialMediaIcons}
            size="medium"
            background="transparent"
          />
        </div>
      </section>

      {/* Decorative Image Section */}
      <section className="w-full flex justify-center items-center mt-16">
        <Image
          src="/assets/svgs/ClawonLeft.svg"
          alt="Decorative Claw Image"
          height={837}
          width={813}
        />
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default AboutPage;
