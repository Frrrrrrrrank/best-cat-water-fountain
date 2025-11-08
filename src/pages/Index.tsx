import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedPicks from "@/components/home/FeaturedPicks";
import TrustSection from "@/components/home/TrustSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Best Cat Water Fountain 2025 - Expert Reviews & Buying Guide</title>
        <meta
          name="description"
          content="Find the perfect cat water fountain. Expert reviews of 50+ models tested. Compare quiet, stainless steel, ceramic & smart fountains for your cat."
        />
        <meta property="og:title" content="Best Cat Water Fountain 2025 - Expert Reviews" />
        <meta
          property="og:description"
          content="Expert reviews of the best cat water fountains. Tested by real cat owners, updated for 2025."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://best-cat-water-fountain.com/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <FeaturedPicks />
          <TrustSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
