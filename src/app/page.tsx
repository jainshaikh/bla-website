import BlacklionApp from '@/components/BlacklionApp/BlacklionApp';
import EnterpriseAPIProtocol from '@/components/EnterpriseAPIProtocol/EnterpriseAPIProtocol';
import Footer from '@/components/Footer/Footer';
import ProductFeatureOverview from '@/components/ProductFeatureOverview/ProductFeatureOverview';
import TrustedBy from '@/components/TrustedBy/TrustedBy';
import WorldFirstPlatf from '@/components/WorldFirstPlatf/WorldFirstPlatf';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <WorldFirstPlatf />
      <TrustedBy />
      <ProductFeatureOverview />
      <EnterpriseAPIProtocol />
      <BlacklionApp />
      <Footer />
    </div>
  );
}
