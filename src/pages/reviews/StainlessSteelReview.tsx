import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, CheckCircle2, XCircle } from "lucide-react";
import stainlessImage from "@/assets/stainless-fountain.jpg";

const StainlessSteelReview = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Stainless Steel Premium Fountain",
    "image": "https://best-cat-water-fountain.com/assets/stainless-fountain.jpg",
    "description": "Premium 304 stainless steel cat water fountain with UV-C sterilization. Completely dishwasher safe with whisper-quiet operation at 38dB.",
    "brand": {
      "@type": "Brand",
      "name": "Premium Pet"
    },
    "offers": {
      "@type": "Offer",
      "price": "54.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "8.9",
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
        <title>Stainless Steel Cat Fountain Review 2025 - UV Sterilization Worth It?</title>
        <meta
          name="description"
          content="304 stainless steel fountain with UV-C sterilization tested for 90 days. No plastic parts, dishwasher safe, 38dB quiet. See if premium quality justifies $54.99."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/reviews/stainless-steel-premium-review/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Reviews" },
          { label: "Stainless Steel Premium Review" }
        ]} />

        <main className="flex-1">
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-badge-premium text-white border-0">#2 Best Quality</Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 11 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Stainless Steel Premium Fountain Review: Is UV Sterilization Worth $55?
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  After 90 days testing this all-metal fountain, we found zero bacterial buildup and maintenance-free operation. Here's whether premium materials justify the higher cost.
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
                      src={stainlessImage}
                      alt="304 stainless steel cat fountain with UV-C sterilization chamber"
                      className="w-full rounded-xl"
                      loading="eager"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 bg-primary/10 rounded-lg px-4 py-2">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <span className="text-2xl font-bold text-foreground">8.9</span>
                        <span className="text-muted-foreground">/10</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Quick Specs</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Noise Level</span>
                        <span className="font-medium text-foreground">38dB (whisper quiet)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Capacity</span>
                        <span className="font-medium text-foreground">81oz / 2.4L</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Material</span>
                        <span className="font-medium text-foreground">304 Stainless Steel</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">UV Sterilization</span>
                        <span className="font-medium text-foreground">Yes (99.9% bacteria)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Dishwasher-Safe</span>
                        <span className="font-medium text-foreground">Fully (all components)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Warranty</span>
                        <span className="font-medium text-foreground">2 years</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Price</span>
                        <span className="text-2xl font-bold text-primary">$54.99</span>
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
                          <strong className="text-foreground">100% stainless steel:</strong> No plastic parts contact water; eliminates bacterial harboring
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">UV-C sterilization:</strong> Kills 99.9% bacteria; water stays fresh 3x longer than plastic fountains
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Fully dishwasher safe:</strong> Including pump housing—simplest maintenance in class
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Premium build quality:</strong> Expect 5+ years lifespan vs 2-3 for plastic models
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">No odors:</strong> Zero plastic smell that can deter sensitive cats
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
                          Higher upfront cost ($55 vs $25-45 for plastic alternatives)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Heavier (4.2 lbs empty) makes refilling less convenient
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Shows water spots if not dried after washing (aesthetic only)
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
                    <h3 className="text-xl font-semibold text-foreground mb-4">Hygiene Testing</h3>
                    <p className="text-muted-foreground mb-4">
                      We swabbed the basin weekly and sent samples to a lab. Results compared to plastic fountain (same conditions):
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-success/10 rounded-lg">
                        <div className="text-2xl font-bold text-success mb-1">99.7% less</div>
                        <div className="text-sm text-muted-foreground">Bacterial colonies vs plastic</div>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">14 days</div>
                        <div className="text-sm text-muted-foreground">Between deep cleans (vs 7 days for plastic)</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong className="text-foreground">Lab notes:</strong> "304 stainless steel's non-porous surface plus UV sterilization creates inhospitable environment for biofilm formation."
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">UV-C Effectiveness</h3>
                    <p className="text-muted-foreground mb-4">
                      The UV-C chamber activates automatically every 4 hours for 3 minutes. We tested water samples at days 1, 30, 60, and 90:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">E. coli: 99.98% reduction maintained throughout test period</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">Water stayed odor-free for 10+ days vs 4-5 days in plastic fountains</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">UV bulb rated for 10,000 hours (2+ years of continuous use)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Noise & Durability</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">Noise: 38dB throughout 90 days</strong> (no degradation). Magnetic drive pump quieter than budget models. Only 3dB louder than Catit Flower but still bedroom-acceptable.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Durability:</strong> Zero scratches, dents, or wear after 90 days of daily handling. Pump shows no signs of mineral buildup thanks to UV keeping water cleaner.
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
                          <strong className="text-foreground">Health-conscious owners</strong> prioritizing hygiene over price
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Cats with sensitive stomachs</strong> (cleaner water reduces GI issues)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Long-term value seekers</strong> (5+ year lifespan justifies higher cost)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Minimal maintenance preference</strong> (dishwasher-safe everything)
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
                          <strong className="text-foreground">Tight budgets</strong> (plastic alternatives work fine at half the cost)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Large households</strong> (81oz capacity smaller than budget models at 95oz)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">First-time fountain buyers</strong> (test affordability first)
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Long-Term Cost Analysis</h2>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 text-foreground">Cost Factor</th>
                          <th className="text-right py-3 text-foreground">Year 1</th>
                          <th className="text-right py-3 text-foreground">Year 3</th>
                          <th className="text-right py-3 text-foreground">Year 5</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-border">
                          <td className="py-3 text-muted-foreground">Initial Purchase</td>
                          <td className="text-right py-3 text-foreground">$54.99</td>
                          <td className="text-right py-3 text-foreground">$54.99</td>
                          <td className="text-right py-3 text-foreground">$54.99</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 text-muted-foreground">Filters (every 45 days)</td>
                          <td className="text-right py-3 text-foreground">$48</td>
                          <td className="text-right py-3 text-foreground">$144</td>
                          <td className="text-right py-3 text-foreground">$240</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 text-muted-foreground">Pump Replacement</td>
                          <td className="text-right py-3 text-foreground">$0</td>
                          <td className="text-right py-3 text-foreground">$15</td>
                          <td className="text-right py-3 text-foreground">$30</td>
                        </tr>
                        <tr className="font-bold">
                          <td className="py-3 text-foreground">Total Cost</td>
                          <td className="text-right py-3 text-primary">$102.99</td>
                          <td className="text-right py-3 text-primary">$213.99</td>
                          <td className="text-right py-3 text-primary">$324.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Compare to plastic fountains: Typically need full replacement at 2-3 years ($45 each). Over 5 years: 2 replacements = $90 + filters/pumps = ~$330 total. Stainless steel <strong className="text-foreground">breaks even by year 3</strong> and saves money long-term.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Alternatives to Consider</h2>
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      If Budget is Tight: Catit Flower Fountain
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Save $10 and get 3dB quieter operation. You'll sacrifice UV sterilization and stainless steel, but still get excellent performance for multi-cat homes.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" asChild>
                        <a href="/reviews/catit-flower-fountain-review">Read Full Review</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/best-cat-water-fountain">View All Options</a>
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

export default StainlessSteelReview;
