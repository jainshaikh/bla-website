import Image from 'next/image';

type ProductItemProps = {
  title: string;
  imageSrc: string;
  altText: string;
  imageHeight: number;
  imageWidth: number;
};

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  imageSrc,
  altText,
  imageHeight,
  imageWidth,
}) => (
  <article className="xl:w-2/4 sm:w-full flex items-center justify-center flex-col">
    <header className="w-full flex items-center justify-center gap-4 mb-6">
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
    <Image
      src={imageSrc}
      alt={altText}
      height={imageHeight}
      width={imageWidth}
    />
  </article>
);

const Products: React.FC = () => {
  return (
    <section className="pt-16 pb-10 text-white">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Top Section */}
        <header className="w-full flex items-center justify-between flex-wrap mb-10">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="font-monument text-4xl mb-2">Products</h2>
            <p className="font-monument text-2xl">
              Blacklion featured products
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <Image
              src="/assets/svgs/ProductLionImg.svg"
              alt="Product Lion Image"
              height={1000}
              width={999}
            />
          </div>
        </header>

        {/* {Products Section} */}
        <div className="w-full items-center justify-center sm:w-4/4 flex-wrap flex">
          <ProductItem
            title="Valuation Engine Ai"
            imageSrc="/assets/svgs/LaptopImg.svg"
            altText="Valuation Engine Ai Laptop Image"
            imageHeight={300}
            imageWidth={400}
          />
          <ProductItem
            title="BLACKLION APP"
            imageSrc="/assets/svgs/MobileImg.svg"
            altText="Blacklion App Mobile Image"
            imageHeight={350}
            imageWidth={300}
          />
          <ProductItem
            title="Enterprise API Protocol"
            imageSrc="/assets/svgs/Watch.svg"
            altText="Enterprise API Protocol Watch Image"
            imageHeight={250}
            imageWidth={250}
          />
        </div>

        {/* Decorative Claw Image */}
        <div className="w-full flex justify-center items-center mt-10">
          <Image
            src="/assets/svgs/ProductClawImg.svg"
            alt="Decorative Product Claw Image"
            height={2203}
            width={2256}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
