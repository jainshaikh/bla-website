import BlacklionApp from '@/components/BlacklionApp/BlacklionApp';
import EnterpriseAPIProtocol from '@/components/EnterpriseAPIProtocol/EnterpriseAPIProtocol';
import Footer from '@/components/Footer/Footer';
import ProductFeatureOverview from '@/components/ProductFeatureOverview/ProductFeatureOverview';
import TrustedBy from '@/components/TrustedBy/TrustedBy';
import WeInviteYou from '@/components/WeInviteYou/WeInviteYou';
import WorldFirstPlatf from '@/components/WorldFirstPlatf/WorldFirstPlatf';

export default function Home() {
  return (
    <div className="overflow-hidden scroll-smooth">
      <WorldFirstPlatf />
      <TrustedBy />
      <ProductFeatureOverview />
      <EnterpriseAPIProtocol />
      <BlacklionApp />
      <WeInviteYou />
      <Footer />
    </div>
  );
}
