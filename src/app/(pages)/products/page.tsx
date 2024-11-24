import React from 'react';
import dynamic from 'next/dynamic';
import ProductFeatureOverview from '@/components/ProductFeatureOverview/ProductFeatureOverview';
import EnterpriseAPIProtocol from '@/components/EnterpriseAPIProtocol/EnterpriseAPIProtocol';
import Footer from '@/components/Footer/Footer';
import TrustedBy from '@/components/TrustedBy/TrustedBy';
import Products from '@/components/Products/Products';

// Lazy load BlacklionApp for better performance
const BlacklionApp = dynamic(
  () => import('@/components/BlacklionApp/BlacklionApp'),
  {
    ssr: false,
  }
);

const ProductsPage = () => {
  return (
    <main className="overflow-hidden">
      {/* Products Section */}
      <section id="products" className="">
        <Products />
      </section>

      {/* Trusted By Section */}
      <section id="trusted-by" className="pt-16 pb-8 ">
        <TrustedBy />
      </section>

      {/* Product Features Section */}
      <section id="product-features" className="pt-16 pb-8">
        <ProductFeatureOverview />
      </section>

      {/* Enterprise API Protocol Section */}
      <section id="enterprise-api" className="pt-16 pb-8 ">
        <EnterpriseAPIProtocol />
      </section>

      {/* Blacklion App Section */}
      <section id="blacklion-app" className="pt-16 pb-8">
        <BlacklionApp />
      </section>

      {/* Footer Section */}
      <footer id="footer" className=" pt-16 pb-8">
        <Footer />
      </footer>
    </main>
  );
};

export default ProductsPage;
