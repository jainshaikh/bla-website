import React from 'react';
import ProductFeatureOverview from '@/components/ProductFeatureOverview/ProductFeatureOverview';
import EnterpriseAPIProtocol from '@/components/EnterpriseAPIProtocol/EnterpriseAPIProtocol';
import BlacklionApp from '@/components/BlacklionApp/BlacklionApp';
import WeInviteYou from '@/components/WeInviteYou/WeInviteYou';
import Footer from '@/components/Footer/Footer';
import TrustedBy from '@/components/TrustedBy/TrustedBy';
import WorldFirstPlatf from '@/components/WorldFirstPlatf/WorldFirstPlatf';

const ProductsPage = () => {
  return (
    <div className="overflow-hidden">
      <WorldFirstPlatf />
      <TrustedBy />
      <ProductFeatureOverview />
      <EnterpriseAPIProtocol />
      <BlacklionApp />
      <WeInviteYou />
      <Footer />
    </div>
  );
};

export default ProductsPage;