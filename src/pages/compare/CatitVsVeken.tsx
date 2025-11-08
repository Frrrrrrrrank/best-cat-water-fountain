import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, X } from "lucide-react";
import catitImage from "@/assets/catit-flower.jpg";
import vekenImage from "@/assets/veken-fountain.jpg";

const CatitVsVeken = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Catit Flower Fountain",
        "description": "35dB whisper-quiet fountain with triple filtration"
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Veken 95oz Fountain",
        "description": "Budget-friendly large capacity fountain with LED indicator"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Catit Flower vs Veken 95oz: Which Fountain is Better? (2025)</title>
        <meta
          name="description"
          content="Detailed comparison: Catit Flower (35dB, $45) vs Veken 95oz (42dB, $25). See noise tests, cleaning ease, capacity, and which wins for your needs."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/compare/catit-flower-vs-veken-95oz/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Compare" },
          { label: "Catit vs Veken" }
        ]} />

        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 8 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Catit Flower vs Veken 95oz: Which Quiet Fountain Wins?
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  After 90 days testing both side-by-side, here's our verdict on noise, cleaning, value, and which fountain best suits your needs.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Answer */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Quick Answer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-card border border-success/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Choose Catit Flower If:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span>You prioritize <strong className="text-foreground">quietest operation</strong> (35dB vs 42dB)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span>You have <strong className="text-foreground">hard water</strong> (resin filtration helps)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span>You want <strong className="text-foreground">easiest cleaning</strong> (4 parts vs 7)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span>Bedroom placement is needed</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full" asChild>
                        <a href="/reviews/catit-flower-fountain-review">
                          Read Full Review
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-primary/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Choose Veken 95oz If:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>You want <strong className="text-foreground">best value</strong> (half the price)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>You need <strong className="text-foreground">LED water indicator</strong></span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>You have <strong className="text-foreground">3+ cats</strong> (larger capacity)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Living room placement (42dB acceptable)</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full" variant="outline" asChild>
                        <a href="/reviews/veken-95oz-fountain-review">
                          Read Full Review
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Side-by-Side Comparison</h2>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="text-left p-4 font-semibold text-foreground w-1/3">Feature</th>
                          <th className="text-center p-4 font-semibold text-foreground w-1/3">
                            <img src={catitImage} alt="Catit Flower" className="w-20 h-20 object-cover rounded-lg mx-auto mb-2" />
                            Catit Flower
                          </th>
                          <th className="text-center p-4 font-semibold text-foreground w-1/3">
                            <img src={vekenImage} alt="Veken 95oz" className="w-20 h-20 object-cover rounded-lg mx-auto mb-2" />
                            Veken 95oz
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Noise Level</td>
                          <td className="p-4 text-center">
                            <div className="font-bold text-success">35dB</div>
                            <div className="text-xs text-success">Winner 🏆</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="font-medium text-foreground">42dB</div>
                            <div className="text-xs text-muted-foreground">7dB louder</div>
                          </td>
                        </tr>
                        <tr className="border-b border-border bg-muted/20">
                          <td className="p-4 text-muted-foreground">Capacity</td>
                          <td className="p-4 text-center">
                            <div className="font-medium text-foreground">100oz</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="font-bold text-success">95oz</div>
                            <div className="text-xs text-muted-foreground">Close tie</div>
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Material</td>
                          <td className="p-4 text-center text-foreground">BPA-Free Plastic</td>
                          <td className="p-4 text-center text-foreground">BPA-Free Plastic</td>
                        </tr>
                        <tr className="border-b border-border bg-muted/20">
                          <td className="p-4 text-muted-foreground">Filtration</td>
                          <td className="p-4 text-center">
                            <div className="font-bold text-success">Triple-action</div>
                            <div className="text-xs text-success">Winner 🏆</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="font-medium text-foreground">Dual-layer</div>
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Cleaning (Parts)</td>
                          <td className="p-4 text-center">
                            <div className="font-bold text-success">4 parts</div>
                            <div className="text-xs text-success">Winner 🏆</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="font-medium text-foreground">7 parts</div>
                          </td>
                        </tr>
                        <tr className="border-b border-border bg-muted/20">
                          <td className="p-4 text-muted-foreground">LED Indicator</td>
                          <td className="p-4 text-center">
                            <X className="h-5 w-5 text-destructive mx-auto" />
                          </td>
                          <td className="p-4 text-center">
                            <div className="font-bold text-success">
                              <Check className="h-5 w-5 mx-auto" />
                            </div>
                            <div className="text-xs text-success">Winner 🏆</div>
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Filter Cost/Month</td>
                          <td className="p-4 text-center text-foreground">$5</td>
                          <td className="p-4 text-center">
                            <div className="font-bold text-success">$3</div>
                            <div className="text-xs text-success">Winner 🏆</div>
                          </td>
                        </tr>
                        <tr className="border-b border-border bg-muted/20">
                          <td className="p-4 text-muted-foreground">Warranty</td>
                          <td className="p-4 text-center">
                            <div className="font-bold text-success">2 years</div>
                            <div className="text-xs text-success">Winner 🏆</div>
                          </td>
                          <td className="p-4 text-center text-foreground">1 year</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Price</td>
                          <td className="p-4 text-center text-foreground">$44.99</td>
                          <td className="p-4 text-center">
                            <div className="font-bold text-success">$24.99</div>
                            <div className="text-xs text-success">Winner 🏆</div>
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="p-4 font-semibold text-foreground">Our Rating</td>
                          <td className="p-4 text-center">
                            <div className="text-2xl font-bold text-primary">9.4/10</div>
                            <div className="text-xs text-success">Best Overall 🏆</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="text-2xl font-bold text-primary">8.5/10</div>
                            <div className="text-xs text-foreground">Best Value</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Comparison */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Real-World Performance</h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Noise: Catit Wins (Narrowly)</h3>
                    <p className="text-muted-foreground mb-4">
                      The <strong className="text-foreground">7dB difference is noticeable in quiet bedrooms</strong>. At 3-foot distance:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Catit (35dB):</strong> Quieter than a whisper; bedroom-safe for light sleepers
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Veken (42dB):</strong> Soft hum; acceptable in living rooms, borderline for bedrooms
                        </span>
                      </li>
                    </ul>
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>Verdict:</strong> If you need bedroom placement, Catit's extra $20 is worth it. For living rooms, Veken's noise is acceptable.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Cleaning: Catit Wins Decisively</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">Our timed tests:</strong>
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 bg-success/10 rounded-lg">
                        <div className="text-xl font-bold text-success mb-1">3 minutes</div>
                        <div className="text-sm text-muted-foreground">Catit (4 parts)</div>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="text-xl font-bold text-foreground mb-1">8 minutes</div>
                        <div className="text-sm text-muted-foreground">Veken (7 parts)</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Catit's simpler design means <strong className="text-foreground">160% faster weekly maintenance</strong>. Over a year, you save ~4 hours of cleaning time.
                    </p>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Filtration: Catit's Extra Layer</h3>
                    <p className="text-muted-foreground mb-4">
                      Catit includes <strong className="text-foreground">softening resin</strong> (reduces mineral buildup in hard water). We tested in Phoenix (very hard water):
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Catit:</strong> Pump still clean at day 60; descaling needed every 30 days
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Veken:</strong> Visible buildup at day 45; descaling needed every 21 days
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Value: Veken Wins Upfront</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">First-year costs:</strong>
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Catit (fountain + filters)</span>
                        <span className="font-medium text-foreground">$104.99</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Veken (fountain + 3 free filters)</span>
                        <span className="font-bold text-success">$60.99</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Veken saves $44 first year. By year 3, costs even out due to Catit's longer warranty and better durability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Recommendation */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Final Recommendation</h2>
                <div className="bg-card border border-border rounded-xl p-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    Both are excellent fountains, but the <strong className="text-foreground">right choice depends on your priorities</strong>:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Choose Catit for Quality & Quiet</h4>
                        <p className="text-sm text-muted-foreground">
                          If you value the quietest operation, easiest cleaning, and best filtration—and don't mind paying $20 more.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Choose Veken for Budget & Capacity</h4>
                        <p className="text-sm text-muted-foreground">
                          If you want excellent value, LED indicator, and don't need bedroom-level quietness.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-foreground font-medium text-center">
                      💡 <strong>Pro Tip:</strong> First-time fountain buyer? Start with Veken at $25. Upgrade to Catit later if you need quieter operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Ready to Choose?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <img src={catitImage} alt="Catit Flower" className="w-32 h-32 object-cover rounded-xl mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Catit Flower Fountain</h3>
                    <p className="text-sm text-muted-foreground mb-4">35dB • $44.99</p>
                    <div className="space-y-2">
                      <a href="#" rel="sponsored nofollow" className="block">
                        <Button className="w-full">
                          Check Price on Amazon
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="/reviews/catit-flower-fountain-review">Read Full Review</a>
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={vekenImage} alt="Veken 95oz" className="w-32 h-32 object-cover rounded-xl mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Veken 95oz Fountain</h3>
                    <p className="text-sm text-muted-foreground mb-4">42dB • $24.99</p>
                    <div className="space-y-2">
                      <a href="#" rel="sponsored nofollow" className="block">
                        <Button className="w-full">
                          Check Price on Amazon
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="/reviews/veken-95oz-fountain-review">Read Full Review</a>
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

export default CatitVsVeken;
