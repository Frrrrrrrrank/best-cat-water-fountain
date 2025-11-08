import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AffiliateDisclosure = () => {
  return (
    <>
      <Helmet>
        <title>Affiliate Disclosure - Best Cat Water Fountain</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8">Affiliate Disclosure</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground font-medium">
                Last Updated: January 2025
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Our Commitment to Transparency</h2>
                <p>
                  Best Cat Water Fountain is a participant in various affiliate advertising programs, including the Amazon Services LLC Associates Program. These programs are designed to provide a means for sites like ours to earn advertising fees by advertising and linking to participating retailers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">What This Means</h2>
                <p>
                  When you click on certain links on our website and make a purchase, we may receive a commission at no additional cost to you. This helps support our work in testing products and maintaining this free resource for cat owners.
                </p>
                <p>
                  <strong className="text-foreground">Important:</strong> We only recommend products we have personally tested or thoroughly researched. Our affiliate relationships never influence our rankings, reviews, or recommendations. If we don't believe a product is worth your money, we won't recommend it—regardless of commission rates.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Amazon Associate Disclosure</h2>
                <p className="italic">
                  "As an Amazon Associate I earn from qualifying purchases."
                </p>
                <p>
                  This means that when you purchase a cat water fountain through an Amazon link on our site, Amazon pays us a small commission. You pay the same price whether you use our link or go directly to Amazon.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Other Affiliate Programs</h2>
                <p>
                  We also participate in affiliate programs with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chewy</li>
                  <li>Petco</li>
                  <li>PetSmart</li>
                  <li>Various pet product manufacturers</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Price Information</h2>
                <p>
                  Prices and availability of products we mention are subject to change. The prices displayed on our site are for reference only. Always verify the final price on the retailer's website before making a purchase.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Questions?</h2>
                <p>
                  If you have any questions about our affiliate relationships or how we review products, please don't hesitate to <a href="/contact" className="text-primary hover:underline">contact us</a>.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AffiliateDisclosure;
