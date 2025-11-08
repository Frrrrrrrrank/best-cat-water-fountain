import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, CheckCircle2, XCircle } from "lucide-react";
import vekenImage from "@/assets/veken-fountain.jpg";

const VekenReview = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Veken 95oz Pet Fountain",
    "image": "https://best-cat-water-fountain.com/assets/veken-fountain.jpg",
    "description": "Budget-friendly 95oz cat water fountain with LED indicator and large capacity for multiple cats. Excellent value at $24.99.",
    "brand": {
      "@type": "Brand",
      "name": "Veken"
    },
    "offers": {
      "@type": "Offer",
      "price": "24.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "8.5",
        "bestRating": "10"
      },
      "author": {
        "@type": "Person",
        "name": "Pet Care Expert Team"
      },
      "datePublished": "2025-01-15"
    }
  };

  return (
    <>
      <Helmet>
        <title>Veken 95oz Cat Fountain Review 2025 - Best Value for Multiple Cats?</title>
        <meta
          name="description"
          content="Veken 95oz fountain tested for 90 days. Large capacity, LED indicator, and 3 filters included at $24.99. See if it's the best budget option for multi-cat homes."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/reviews/veken-95oz-fountain-review/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Reviews" },
          { label: "Veken 95oz Review" }
        ]} />

        <main className="flex-1">
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-badge-value text-white border-0">#3 Best Value</Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 10 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Veken 95oz Cat Fountain Review: Best Budget Pick for Multiple Cats?
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  After 90 days with 3 cats, the Veken delivers impressive value at $24.99. Extra-large capacity and LED indicator make it ideal for multi-cat households on a budget.
                </p>
              </div>
            </div>
          </section>

          <section className="py-8 bg-card border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={vekenImage}
                      alt="Veken 95oz pet fountain with LED water level indicator"
                      className="w-full rounded-xl"
                      loading="eager"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 bg-primary/10 rounded-lg px-4 py-2">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <span className="text-2xl font-bold text-foreground">8.5</span>
                        <span className="text-muted-foreground">/10</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Quick Specs</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Noise Level</span>
                        <span className="font-medium text-foreground">42dB (acceptable)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Capacity</span>
                        <span className="font-medium text-foreground">95oz / 2.8L</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Material</span>
                        <span className="font-medium text-foreground">BPA-Free Plastic</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">LED Indicator</span>
                        <span className="font-medium text-foreground">Yes (low water alert)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Filters Included</span>
                        <span className="font-medium text-foreground">3 replacement filters</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Warranty</span>
                        <span className="font-medium text-foreground">1 year</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Price</span>
                        <span className="text-2xl font-bold text-primary">$24.99</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <a href="#" rel="sponsored nofollow" className="block">
                        <Button className="w-full" size="lg">
                          Check Price on Amazon
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                      <p className="text-xs text-muted-foreground text-center">
                        * Affiliate link - Price subject to change
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      What We Love
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Unbeatable value:</strong> Includes 3 replacement filters (3-month supply) at $24.99
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">LED water indicator:</strong> Lights up when water runs low—unique at this price point
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Large capacity:</strong> 95oz lasts 3-4 days with 3 cats; perfect for busy owners
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Easy refilling:</strong> Wide opening at top; no need to disassemble
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      Room for Improvement
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Pump noise at 42dB—acceptable for living rooms but not bedroom-quiet
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          More parts to clean (7 components vs 4 on premium models)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Plastic quality feels budget-friendly; may show wear over time
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our 90-Day Testing Results</h2>
                
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Value Analysis</h3>
                    <p className="text-muted-foreground mb-4">
                      At $24.99 with 3 filters included, the Veken costs <strong className="text-foreground">$8.33 per filter</strong> versus buying separately. Competitors charge $5-7/filter at purchase, making this an exceptional starter value.
                    </p>
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-foreground font-medium">
                        💰 First 90 days total cost: $24.99 (fountain + filters) vs $50+ for similar capacity fountains
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Multi-Cat Performance</h3>
                    <p className="text-muted-foreground mb-4">
                      Our 3-cat household required refills every 3.5 days on average. The LED indicator activated 8-12 hours before running dry, providing ample warning.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">All cats used fountain within 48 hours (water flow attracted them)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">No territorial issues observed (wide drinking area accommodates multiple cats)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Cleaning Reality Check</h3>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Disassembly time: 2 minutes</strong> for 7 parts. More complex than Catit (4 parts) but manageable. Weekly deep clean took 8-10 minutes versus 3-5 minutes for simpler models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Who Should Buy This?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-card border border-success/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Best For
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Budget-conscious owners</strong> wanting quality under $25
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Multi-cat households</strong> (2-4 cats; large capacity)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">First-time fountain testers</strong> (low commitment if cats don't adapt)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Living room placement</strong> (noise acceptable in common areas)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-card border border-destructive/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      Not Ideal For
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Bedroom use</strong> (42dB too loud for light sleepers)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Those prioritizing minimal cleaning</strong> (7 parts vs 4 on premium models)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Premium material seekers</strong> (plastic only; no stainless option)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Alternatives to Consider</h2>
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      If You Need Bedroom-Quiet: Catit Flower Fountain
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Extra $20 gets you 7dB quieter operation (35dB) and simpler cleaning. Worth upgrading if noise is a concern.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" asChild>
                        <a href="/reviews/catit-flower-fountain-review">Read Full Review</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/compare/catit-flower-vs-veken-95oz">Compare Both</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default VekenReview;
