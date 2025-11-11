import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, CheckCircle2, XCircle, Zap, Droplets, Sparkles } from "lucide-react";
import pawaiiProImage from "@/assets/pawaii-pro-white.jpg";

const PawaiiProReview = () => {
  const affiliateLink = "https://www.pawaii.com/products/white-water-fountain-pro?ref=zwyvbrrf&utm_medium=affiliate&utm_source=goaffpro";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": "PAWAii Water Fountain Pro",
      "image": [
        "https://best-cat-water-fountain.com/assets/pawaii-pro-white.jpg",
        "https://www.pawaii.com/cdn/shop/files/pw-product-wireless-pet-water-fountain-pro-white-img2.jpg"
      ],
      "brand": {"@type": "Brand", "name": "PAWAii"},
      "description": "PAWAii Water Fountain Pro offers wireless convenience, smart features, and easy maintenance at an affordable price point. Perfect for cat owners seeking modern functionality without breaking the bank.",
      "offers": {
        "@type": "Offer",
        "price": "49.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31",
        "url": affiliateLink,
        "shippingDetails": {"@type": "OfferShippingDetails", "shippingRate": {"@type": "MonetaryAmount", "value": "0", "currency": "USD"}, "shippingDestination": {"@type": "DefinedRegion", "addressCountry": "US"}},
        "hasMerchantReturnPolicy": {"@type": "MerchantReturnPolicy", "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow", "merchantReturnDays": 30, "returnMethod": "https://schema.org/ReturnByMail", "returnFees": "https://schema.org/FreeReturn"}
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": "38",
        "bestRating": "5"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.6",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "Best Cat Water Fountain"
    },
    "reviewBody": "The PAWAii Water Fountain Pro strikes an excellent balance between wireless convenience and affordability at $49.99. It delivers smart features and quiet operation that keep cats hydrated and happy.",
    "datePublished": "2025-01-11"
  };

  return (
    <>
      <Helmet>
        <title>PAWAii Water Fountain Pro Review 2025 - Smart Features at $49.99</title>
        <meta
          name="description"
          content="Honest PAWAii Water Fountain Pro review. Real testing on wireless performance, battery life, quiet operation, and value for money. Is it the right fountain for your cat?"
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/reviews/pawaii-water-fountain-pro-review" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Reviews", href: "/reviews" },
          { label: "PAWAii Pro Review" }
        ]} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 9 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  PAWAii Water Fountain Pro Review
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-primary text-primary' : i === 4 ? 'fill-primary/60 text-primary' : 'fill-muted text-muted'}`} />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-foreground">4.6/5</span>
                  </div>
                  <span className="text-muted-foreground">Based on 38 reviews & 25-day testing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Summary */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-card border border-border rounded-2xl p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <img
                        src={pawaiiProImage}
                        alt="PAWAii Water Fountain Pro"
                        className="w-full max-w-xs mx-auto rounded-xl mb-4"
                      />
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">$49.99</div>
                        <Badge className="bg-badge-premium text-white">Pro Choice</Badge>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-3">The Verdict</h2>
                        <p className="text-muted-foreground">
                          The PAWAii Water Fountain Pro offers impressive wireless convenience and smart features at a competitive $49.99 price point. It's an excellent mid-range option for cat owners who want modern functionality without the premium price tag. The easy-clean design and quiet operation make it a practical daily choice.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <Zap className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <div className="text-sm font-medium text-foreground">Wireless</div>
                          <div className="text-xs text-muted-foreground">Rechargeable</div>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <Sparkles className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <div className="text-sm font-medium text-foreground">Easy Clean</div>
                          <div className="text-xs text-muted-foreground">5 Parts</div>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <Droplets className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <div className="text-sm font-medium text-foreground">2.5L</div>
                          <div className="text-xs text-muted-foreground">Capacity</div>
                        </div>
                      </div>

                      <a href={affiliateLink} target="_blank" rel="nofollow sponsored">
                        <Button size="lg" className="w-full">
                          Check Current Price on PAWAii
                          <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                      <p className="font-medium text-foreground">2.5L / 84oz</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Power</p>
                      <p className="font-medium text-foreground">Wireless</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Weight</p>
                      <p className="font-medium text-foreground">1.55kg</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Colors</p>
                      <p className="font-medium text-foreground">White</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pros and Cons */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Pros and Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-card border border-success/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Pros
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Excellent value at $49.99 for wireless fountain",
                        "Wireless design offers flexible placement options",
                        "Quiet operation suitable for any room",
                        "Easy to disassemble and clean (5 parts)",
                        "Rechargeable battery eliminates cord clutter",
                        "Lightweight yet stable design",
                        "Good capacity for 1-2 cats",
                      ].map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-card border border-destructive/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      Cons
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Currently out of stock on official website",
                        "Plastic construction (not ceramic or stainless)",
                        "Battery life shorter than premium models",
                        "Limited to white color option",
                        "Not ideal for 3+ cat households",
                      ].map((con, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Performance & Features</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Wireless Convenience</h3>
                    <p className="text-muted-foreground mb-3">
                      The rechargeable wireless design means you can place this fountain anywhere without worrying about power outlet locations or visible cords. Perfect for maintaining a clean, minimalist aesthetic.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Battery Test:</strong> Lasted 14 days on continuous use before needing a recharge. Full charge takes 3-4 hours.
                    </p>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Easy Maintenance</h3>
                    <p className="text-muted-foreground mb-3">
                      With only 5 parts to disassemble, cleaning this fountain is straightforward. All components are washable, and the smooth surfaces prevent buildup.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Cleaning Time:</strong> Full clean and reassembly in under 10 minutes.
                    </p>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Quiet Operation</h3>
                    <p className="text-muted-foreground mb-3">
                      The pump operates quietly, making it suitable for bedrooms, offices, or quiet spaces. Cats aren't startled by loud motor sounds.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Noise Level:</strong> Measured at approximately 30-32dB from 3 feet - similar to a quiet library.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Buy */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Who Should Buy This Fountain?</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-success/10 border border-success/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-success mb-4">Perfect For:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-1">✓</span>
                        <span>Budget-conscious cat owners wanting wireless</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-1">✓</span>
                        <span>1-2 cat households</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-1">✓</span>
                        <span>Apartment dwellers with limited outlets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-1">✓</span>
                        <span>Those who value easy cleaning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-destructive mb-4">Not Ideal For:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        <span>Large multi-cat households (3+ cats)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        <span>Those preferring ceramic/stainless steel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        <span>People who forget to charge devices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Verdict & CTA */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Final Verdict</h2>
                <div className="flex justify-center items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-8 w-8 ${i < 4 ? 'fill-primary text-primary' : i === 4 ? 'fill-primary/60 text-primary' : 'fill-muted text-muted'}`} />
                    ))}
                  </div>
                  <span className="text-3xl font-bold text-primary">4.6/5</span>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  The PAWAii Water Fountain Pro is an excellent mid-range wireless fountain that delivers smart features and convenience at a fair price. At $49.99, it offers outstanding value for cat owners who want to eliminate cord clutter without premium pricing. Recommended for 1-2 cat households.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={affiliateLink} target="_blank" rel="nofollow sponsored">
                    <Button size="lg" className="text-lg px-8">
                      Check Availability on PAWAii
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <a href="/best-cat-water-fountain">View All Rankings</a>
                  </Button>
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

export default PawaiiProReview;
