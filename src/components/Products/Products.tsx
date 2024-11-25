import Image from 'next/image';

// ProductItem component
type ProductItemProps = {
  title: string;
  imageSrc: string;
  altText: string;
  imageWidth: number;
  imageHeight: number;
};

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  imageSrc,
  altText,
  imageWidth,
  imageHeight,
}) => (
  <article className="w-full lg:w-2/5 flex items-center justify-center flex-col mb-8">
    {/* Header with Icon and Title */}
    <header className="w-full flex items-center justify-center gap-4 mb-6 px-4 lg:justify-center">
      <Image
        src="/assets/svgs/crossIcon.svg"
        alt={`${title} Icon`}
        height={50}
        width={50}
      />
      <h3 className="font-monument text-4xl text-white text-center sm:text-2xl">
        {title}
      </h3>
    </header>
    {/* Main Image */}
    <div className="w-full flex justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={altText}
        width={imageWidth}
        height={imageHeight}
        className="object-contain w-full h-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
      />
    </div>
  </article>
);

const Products: React.FC = () => {
  return (
    <section className=" text-white ">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Top Section */}
        <header className="w-full flex items-center justify-center flex-wrap mb-10 relative">
          {/* Wrapper for text and image */}
          <div className="w-full flex justify-center items-start relative">
            {/* Image container */}
            <div className="w-full flex justify-end lg:pr-0 md:pr-0">
              <Image
                src="/assets/svgs/ProductLionImg.svg"
                alt="Product Lion Image"
                height={1000}
                width={999}
                className="sm:w-full md:w-full lg:w-5/6 xl:w-5/6 2xl:w-5/6"
              />
            </div>
            {/* Heading positioned over image */}
            <div
              className="absolute top-0 w-full flex flex-col items-center mt-8
        lg:items-start lg:ml-20 lg:mt-40"
            >
              <h2 className="font-monument text-4xl text-white uppercase sm:text-2xl lg:text-3xl xl:text-4xl">
                Products
              </h2>
            </div>
          </div>
        </header>

        {/* {Products Section} */}
        <div className="w-full flex flex-wrap gap-8">
          {/* First Row - Two items for lg and above */}
          <div className="w-full flex flex-wrap lg:justify-between gap-8">
            <ProductItem
              title="Valuation Engine Ai"
              imageSrc="/assets/svgs/LaptopImg.svg"
              altText="Valuation Engine Ai Laptop Image"
              imageWidth={400}
              imageHeight={300}
            />
            <ProductItem
              title="BLACKLION APP"
              imageSrc="/assets/svgs/MobileImg.svg"
              altText="Blacklion App Mobile Image"
              imageWidth={300}
              imageHeight={350}
            />
          </div>

          {/* Second Row - Third item centered */}
          <div className="w-full flex justify-center">
            <ProductItem
              title="Enterprise API Protocol"
              imageSrc="/assets/svgs/Watch.svg"
              altText="Enterprise API Protocol Watch Image"
              imageWidth={250}
              imageHeight={250}
            />
          </div>
        </div>

        {/* Decorative Claw Image */}
        <div className="relative">
          {/* Centered Decorative Image */}
          <div className="w-full flex justify-center items-center mt-10">
            <Image
              src="/assets/svgs/ProductClawImg.svg"
              alt="Decorative Product Claw"
              height={2203}
              width={2256}
              priority
            />
          </div>

          {/* Absolute Positioned Content */}
          <div
            className="w-full absolute flex flex-row flex-wrap items-start justify-end
    right-0 sm:top-24 md:top-36 xl:top-48 2xl:top-52"
          >
            {/* Heading Section */}
            <div className="w-1/5 flex items-end justify-start">
              <h1
                className="font-monument uppercase text-center font-medium leading-tight
        sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                Introducing Valuation Engine AI
              </h1>
            </div>

            {/* Icon Section */}
            <div className="flex items-end justify-start">
              <Image
                src="/assets/svgs/crossIcon.svg"
                alt="Close Icon"
                height={60}
                width={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
