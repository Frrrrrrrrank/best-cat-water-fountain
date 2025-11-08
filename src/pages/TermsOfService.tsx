import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Best Cat Water Fountain</title>
        <meta
          name="description"
          content="Terms of service for best-cat-water-fountain.com. Read our website usage terms and conditions."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/terms-of-service/" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" }
        ]} />

        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
              <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2025</p>

              <div className="prose prose-gray max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using best-cat-water-fountain.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Website Purpose</h2>
                  <p className="text-muted-foreground">
                    Best Cat Water Fountain provides informational content, product reviews, buying guides, and comparisons related to cat water fountains. Our content is for educational and informational purposes only.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Affiliate Disclosure</h2>
                  <p className="text-muted-foreground mb-3">
                    This website contains affiliate links. When you click on product links and make purchases, we may earn a commission at no additional cost to you:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>We are a participant in the Amazon Services LLC Associates Program</li>
                    <li>We may participate in other affiliate programs</li>
                    <li>Commissions help support this website and keep content free</li>
                    <li>Our recommendations are based on research and testing, not commission rates</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Content Accuracy</h2>
                  <p className="text-muted-foreground mb-3">
                    We strive to provide accurate and up-to-date information, however:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Product specifications, prices, and availability may change</li>
                    <li>We are not responsible for errors or omissions</li>
                    <li>Content is based on research and personal testing when possible</li>
                    <li>Always verify current information with manufacturers or retailers</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Product Recommendations</h2>
                  <p className="text-muted-foreground">
                    Our product recommendations and reviews are opinions based on available information and testing. Individual results may vary. We recommend researching products thoroughly before purchase.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. External Links</h2>
                  <p className="text-muted-foreground">
                    Our website contains links to third-party websites (including retailers and manufacturers). We are not responsible for the content, privacy policies, or practices of external sites.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                  <p className="text-muted-foreground mb-3">
                    All content on this website, including text, images, graphics, and design, is owned by or licensed to Best Cat Water Fountain:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Content may not be copied or reproduced without permission</li>
                    <li>Product images may be sourced from manufacturers or retailers</li>
                    <li>Trademarks belong to their respective owners</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Best Cat Water Fountain and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on its content.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. User Conduct</h2>
                  <p className="text-muted-foreground mb-3">
                    When using our website, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Transmit malware, viruses, or harmful code</li>
                    <li>Scrape or copy content without permission</li>
                    <li>Use the website for any illegal purposes</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of the website constitutes acceptance of modified terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms of Service are governed by applicable laws. Any disputes shall be resolved in accordance with these laws.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have questions about these Terms of Service, please contact us through our website.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
