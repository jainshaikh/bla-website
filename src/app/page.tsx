import BlacklionApp from '@/components/BlacklionApp/BlacklionApp';
import EnterpriseAPIProtocol from '@/components/EnterpriseAPIProtocol/EnterpriseAPIProtocol';
import Footer from '@/components/Footer/Footer';
import ProductFeatureOverview from '@/components/ProductFeatureOverview/ProductFeatureOverview';
import TrustedBy from '@/components/TrustedBy/TrustedBy';
import WeInviteYou from '@/components/WeInviteYou/WeInviteYou';
import WorldFirstPlatf from '@/components/WorldFirstPlatf/WorldFirstPlatf';

export default function Home() {
  return (
    <main className="scroll-smooth overflow-hidden">
      {/* Hero Section */}
      <section id="world-first-platform" className="">
        <WorldFirstPlatf />
      </section>

      {/* Trusted By Section */}
      <section id="trusted-by" className="pt-8">
        <TrustedBy />
      </section>

      {/* Product Features Overview */}
      <section id="product-feature-overview" className="pt-8">
        <ProductFeatureOverview />
      </section>

      {/* Enterprise API Protocol */}
      <section id="enterprise-api-protocol" className="pt-8">
        <EnterpriseAPIProtocol />
      </section>

      {/* Blacklion App Section */}
      <section id="blacklion-app" className=" pt-8">
        <BlacklionApp />
      </section>

      {/* Invitation Section */}
      <section id="we-invite-you" className=" pt-8">
        <WeInviteYou />
      </section>

      {/* Footer */}
      <footer id="footer" className="pt-8">
        <Footer />
      </footer>
    </main>
  );
}
