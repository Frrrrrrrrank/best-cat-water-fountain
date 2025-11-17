import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, AlertTriangle, Heart, Thermometer, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CatHydrationTips = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Cat Hydration Guide: 10 Essential Tips Every Owner Must Know",
    "description": "Learn how much water cats need daily, signs of dehydration, and why the best cat water fountain can increase hydration by 50%. Vet-approved tips to keep your cat healthy.",
    "author": {
      "@type": "Organization",
      "name": "Best Cat Water Fountain"
    },
    "datePublished": "2025-01-13",
    "dateModified": "2025-01-13",
    "image": "https://best-cat-water-fountain.com/assets/cute-cat-drinking.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Best Cat Water Fountain",
      "logo": {
        "@type": "ImageObject",
        "url": "https://best-cat-water-fountain.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://best-cat-water-fountain.com/blog/cat-hydration-tips-how-much-water"
    }
  };

  return (
    <>
      <Helmet>
        <title>Cat Hydration Guide: How Much Water Cats Need Daily (Vet Tips)</title>
        <meta
          name="description"
          content="Cats need 3.5-4.5 oz of water per 5 lbs daily. Learn signs of dehydration, why 60% of cats are chronically dehydrated, and how the best cat water fountain increases intake by 50%."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/blog/cat-hydration-tips-how-much-water" />
        <meta property="og:title" content="Cat Hydration Guide: How Much Water Cats Need Daily" />
        <meta property="og:description" content="Vet-approved tips: Cats need 3.5-4.5 oz per 5 lbs. Learn dehydration signs and why water fountains increase intake by 50%." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Cat Hydration Guide" }
        ]} />

        <main className="flex-1">
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    Vet-Reviewed
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 10 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Cat Hydration Guide: 10 Essential Tips Every Cat Owner Must Know
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  60-70% of cats are chronically dehydrated, leading to kidney disease and UTIs. Learn exactly how much water your cat needs, signs of dehydration, and why switching to the best cat water fountain can increase daily intake by 30-50%.
                </p>
              </div>
            </div>
          </section>

          {/* The Crisis */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">The Hidden Dehydration Crisis</h2>
                <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-semibold mb-3">Alarming Statistics (AVMA & Cornell University):</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong className="text-foreground">60-70% of cats are chronically dehydrated</strong> even with constant water access</li>
                        <li>• <strong className="text-foreground">1 in 3 cats will develop kidney disease</strong> in their lifetime</li>
                        <li>• <strong className="text-foreground">Dehydration is the #1 preventable cause</strong> of feline urinary issues</li>
                        <li>• <strong className="text-success">Cats drink 30-50% more from fountains</strong> vs traditional bowls</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Cats evolved from desert-dwelling ancestors and have a naturally low thirst drive. Unlike dogs who actively seek water, cats often don't drink enough—even when dehydrated. This silent problem accumulates over years, causing serious health issues.
                </p>
                <p className="text-muted-foreground">
                  This comprehensive guide covers everything you need to know about cat hydration, from daily water requirements to choosing the <Link to="/best-cat-water-fountain" className="text-primary hover:underline">best cat water fountain</Link> for your pet's health.
                </p>
              </div>
            </div>
          </section>

          {/* 10 Essential Tips */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">10 Essential Cat Hydration Tips</h2>

                <div className="space-y-6">
                  {/* Tip 1 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Droplets className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          1. Know the Exact Amount Your Cat Needs
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          The general rule: <strong className="text-foreground">cats need 3.5-4.5 ounces of water per 5 pounds of body weight daily</strong>. This includes water from food.
                        </p>
                        <div className="bg-primary/10 rounded-lg p-4 mb-4">
                          <p className="text-sm font-medium text-foreground mb-3">Quick Calculator:</p>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex justify-between">
                              <span>8 lb cat (dry food diet):</span>
                              <span className="text-foreground font-medium">6-7 oz water daily</span>
                            </div>
                            <div className="flex justify-between">
                              <span>10 lb cat (dry food diet):</span>
                              <span className="text-foreground font-medium">7-9 oz water daily</span>
                            </div>
                            <div className="flex justify-between">
                              <span>12 lb cat (dry food diet):</span>
                              <span className="text-foreground font-medium">8.5-11 oz water daily</span>
                            </div>
                            <div className="flex justify-between">
                              <span>15 lb cat (dry food diet):</span>
                              <span className="text-foreground font-medium">10.5-13.5 oz water daily</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Important:</strong> Wet food cats need less drinking water (wet food is ~75% water). Dry food cats must drink significantly more to compensate.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tip 2 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          2. Recognize Early Dehydration Signs
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Don't wait for severe symptoms. <strong className="text-foreground">Chronic mild dehydration</strong> is the real danger—it's subtle but accumulates over years.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                            <p className="text-sm font-medium text-foreground mb-3">Early Warning Signs:</p>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              <li>• Dry, sticky gums (should be wet/slippery)</li>
                              <li>• Decreased skin elasticity (skin tent test)</li>
                              <li>• Sunken eyes or dull appearance</li>
                              <li>• Lethargy or reduced activity</li>
                              <li>• Dark yellow/concentrated urine</li>
                              <li>• Infrequent urination (&lt;2x daily)</li>
                            </ul>
                          </div>
                          <div className="bg-success/10 border border-success/30 rounded-lg p-4">
                            <p className="text-sm font-medium text-foreground mb-3">Skin Tent Test:</p>
                            <ol className="text-xs text-muted-foreground space-y-1">
                              <li>1. Gently pinch skin between shoulder blades</li>
                              <li>2. Pull up slightly and release</li>
                              <li>3. <strong className="text-success">Well-hydrated:</strong> Snaps back instantly</li>
                              <li>4. <strong className="text-destructive">Dehydrated:</strong> Takes 2+ seconds to flatten</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 3 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <Droplets className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          3. Use a Water Fountain Instead of Bowls
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          This is the single most effective change you can make. <strong className="text-foreground">Studies show cats drink 30-50% more from fountains</strong> than still bowls.
                        </p>
                        <div className="bg-success/10 rounded-lg p-4 mb-4">
                          <p className="text-sm text-foreground mb-2"><strong>Why fountains work:</strong></p>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>• <strong className="text-foreground">Instinct:</strong> Moving water = fresh/safe in the wild (still water = stagnant/dangerous)</li>
                            <li>• <strong className="text-foreground">Oxygenation:</strong> Flowing water tastes better to cats' sensitive palates</li>
                            <li>• <strong className="text-foreground">Visibility:</strong> Cats struggle to see still water depth; movement solves this</li>
                            <li>• <strong className="text-foreground">Temperature:</strong> Circulation keeps water cooler, which cats prefer</li>
                          </ul>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Not all fountains are equal. Material matters: <Link to="/blog/why-ceramic-cat-water-fountains-are-best" className="text-primary hover:underline">ceramic fountains reduce bacteria by 94%</Link> vs plastic. Browse our <Link to="/best-cat-water-fountain" className="text-primary hover:underline">tested top picks</Link> for the best cat water fountain options.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tip 4 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          4. Choose the Right Material for Health
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Bowl/fountain material directly impacts water quality and your cat's health. <strong className="text-foreground">Plastic develops scratches that harbor bacteria</strong>—even with daily cleaning.
                        </p>
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-border bg-muted/50">
                                  <th className="text-left p-3 font-semibold text-foreground">Material</th>
                                  <th className="text-center p-3 font-semibold text-foreground">Bacteria</th>
                                  <th className="text-center p-3 font-semibold text-foreground">Recommendation</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-border">
                                  <td className="p-3 text-muted-foreground">Ceramic</td>
                                  <td className="p-3 text-center font-bold text-success">94% less</td>
                                  <td className="p-3 text-center text-success text-xs">✓ Best for hygiene + aesthetics</td>
                                </tr>
                                <tr className="border-b border-border bg-muted/20">
                                  <td className="p-3 text-muted-foreground">Stainless Steel</td>
                                  <td className="p-3 text-center font-bold text-success">99.7% less</td>
                                  <td className="p-3 text-center text-success text-xs">✓ Best for maximum durability</td>
                                </tr>
                                <tr>
                                  <td className="p-3 text-muted-foreground">Plastic (BPA-free)</td>
                                  <td className="p-3 text-center font-bold text-destructive">Baseline (high)</td>
                                  <td className="p-3 text-center text-destructive text-xs">✗ Scratches harbor bacteria</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          Learn more: <Link to="/best/best-ceramic-cat-water-fountain" className="text-primary hover:underline">Best ceramic fountains</Link> or <Link to="/best/best-stainless-steel-cat-water-fountain" className="text-primary hover:underline">stainless steel options</Link>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tip 5 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          5. Clean Water Sources Daily (Yes, Daily!)
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          <strong className="text-foreground">Biofilm develops in as little as 24 hours</strong>—that slimy coating you feel on bowl edges. It's bacteria + algae, and cats can smell/taste it.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <span className="text-success text-lg">✓</span>
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Daily rinse:</strong> Empty, rinse with hot water, refill (minimum requirement)
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-success text-lg">✓</span>
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Weekly deep clean:</strong> Disassemble fountain, wash all parts with dish soap
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-success text-lg">✓</span>
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Dishwasher advantage:</strong> Ceramic/stainless fountains can be dishwashed weekly (high-temp kills 99.9% bacteria)
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          Complete cleaning guide: <Link to="/guides/how-to-clean-and-descale-a-fountain" className="text-primary hover:underline">How to clean cat fountains properly</Link>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tip 6 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Thermometer className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          6. Maintain Ideal Water Temperature
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Cats prefer <strong className="text-foreground">cool but not ice-cold water (60-70°F / 15-21°C)</strong>. Room temperature or slightly cooler is ideal.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-destructive/10 rounded-lg p-4">
                            <p className="text-sm font-medium text-foreground mb-2">❌ Avoid:</p>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              <li>• Ice water (shocks system, cats refuse it)</li>
                              <li>• Warm/stagnant water (tastes stale)</li>
                              <li>• Direct sunlight placement (heats water)</li>
                            </ul>
                          </div>
                          <div className="bg-success/10 rounded-lg p-4">
                            <p className="text-sm font-medium text-foreground mb-2">✓ Best Practices:</p>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              <li>• Cool spot away from heat sources</li>
                              <li>• Fountain circulation naturally cools water</li>
                              <li>• Refresh water 1-2x daily if using bowl</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 7 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          7. Place Water Sources Strategically
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Location matters more than you think. <strong className="text-foreground">Cats won't drink from poorly placed water</strong>, even when thirsty.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-success/10 rounded-lg p-4">
                            <p className="text-sm font-medium text-foreground mb-2">✓ Ideal Placement:</p>
                            <ul className="text-sm text-muted-foreground space-y-2">
                              <li>• <strong className="text-foreground">Away from food bowls</strong> (cats instinctively avoid water near "prey" to prevent contamination)</li>
                              <li>• <strong className="text-foreground">Quiet, low-traffic area</strong> (cats feel vulnerable while drinking)</li>
                              <li>• <strong className="text-foreground">Multiple locations</strong> (especially in multi-level homes)</li>
                              <li>• <strong className="text-foreground">Not near litter box</strong> (obvious hygiene reasons)</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          <strong className="text-foreground">Pro tip:</strong> Multi-cat households should have <strong className="text-foreground">one water source per cat + 1 extra</strong>. If you have 2 cats, provide 3 water stations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tip 8 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Droplets className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          8. Use Filtered Water When Possible
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          <strong className="text-foreground">Tap water quality varies dramatically</strong> by location. Chlorine, heavy metals, and hard minerals affect taste and health.
                        </p>
                        <div className="bg-primary/10 rounded-lg p-4">
                          <p className="text-sm font-medium text-foreground mb-3">Water Quality Solutions:</p>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span><strong className="text-foreground">Best:</strong> Cat fountain with built-in charcoal filter (removes chlorine, odors, metals)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span><strong className="text-foreground">Good:</strong> Pitcher water filter (Brita, PUR) before filling fountain</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span><strong className="text-foreground">Acceptable:</strong> Let tap water sit 30 minutes to allow chlorine to evaporate</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          <strong className="text-foreground">Filter replacement:</strong> Change fountain filters every 2-4 weeks depending on water quality and usage. See <Link to="/blog/how-often-change-cat-fountain-filter" className="text-primary hover:underline">our filter replacement guide</Link>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tip 9 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          9. Adjust for Special Circumstances
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Certain cats need <strong className="text-foreground">significantly more water</strong> than the standard 3.5-4.5 oz per 5 lbs.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-card border border-border rounded-lg p-4">
                            <p className="text-sm font-semibold text-foreground mb-2">🩺 Cats with Kidney Disease (CKD):</p>
                            <p className="text-sm text-muted-foreground">Need 1.5-2x normal intake. Consult vet for exact amounts. Consider <Link to="/blog/why-cats-need-water-fountains" className="text-primary hover:underline">fountains that increase hydration by 50%</Link>.</p>
                          </div>
                          <div className="bg-card border border-border rounded-lg p-4">
                            <p className="text-sm font-semibold text-foreground mb-2">🔥 Summer/Hot Weather:</p>
                            <p className="text-sm text-muted-foreground">Increase by 20-30%. Monitor for panting or excessive grooming (cooling behaviors).</p>
                          </div>
                          <div className="bg-card border border-border rounded-lg p-4">
                            <p className="text-sm font-semibold text-foreground mb-2">🤰 Pregnant/Nursing Cats:</p>
                            <p className="text-sm text-muted-foreground">Need 2-3x normal water for milk production. Provide multiple water stations near nursing area.</p>
                          </div>
                          <div className="bg-card border border-border rounded-lg p-4">
                            <p className="text-sm font-semibold text-foreground mb-2">💊 Medications:</p>
                            <p className="text-sm text-muted-foreground">Some meds (diuretics, steroids) increase thirst. Follow vet's hydration recommendations.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 10 */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          10. Choose Quiet Fountains for Maximum Use
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          <strong className="text-foreground">Noisy fountains discourage drinking</strong>. Cats have sensitive hearing—pumps over 45dB can stress anxious cats or deter use entirely.
                        </p>
                        <div className="bg-muted/30 rounded-lg p-4 mb-4">
                          <p className="text-sm font-medium text-foreground mb-3">Noise Level Guide:</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Under 35dB:</span>
                              <span className="text-success font-medium">✓ Excellent (bedroom-safe)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">35-40dB:</span>
                              <span className="text-success font-medium">✓ Good (living room OK)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">40-50dB:</span>
                              <span className="text-primary font-medium">⚠ Acceptable (may disturb light sleepers)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">50+ dB:</span>
                              <span className="text-destructive font-medium">✗ Too loud (avoid)</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Browse our tested picks: <Link to="/best/best-quiet-cat-water-fountain" className="text-primary hover:underline">Best quiet cat water fountains under 40dB</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Cat Hydration FAQ</h2>

                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">How can I tell if my cat is drinking enough water?</h3>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Monitor litter box:</strong> A well-hydrated cat urinates 2-4 times daily with light yellow urine. Dark/concentrated urine or infrequent urination indicates dehydration. Also check gum moisture (should be wet/slippery, not dry/sticky) and skin elasticity (pinch test).
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">My cat refuses to drink from their fountain. What should I do?</h3>
                    <p className="text-muted-foreground">
                      Try these solutions: (1) <strong className="text-foreground">Move the fountain</strong>—cats won't drink near food or in high-traffic areas. (2) <strong className="text-foreground">Clean thoroughly</strong>—plastic odors or biofilm may be the issue. (3) <strong className="text-foreground">Adjust flow rate</strong> if your fountain has settings. (4) Consider switching to <Link to="/best/best-ceramic-cat-water-fountain" className="text-primary hover:underline">ceramic material</Link> which has 92% cat acceptance vs 78% for plastic.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Is distilled or purified water better than tap water for cats?</h3>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Filtered tap water is ideal.</strong> Distilled water lacks minerals cats need. Purified/reverse osmosis water is fine but unnecessary. Standard tap water filtered through a cat fountain's charcoal filter removes chlorine, odors, and contaminants while preserving beneficial minerals. If your tap water is very hard or has strong chlorine taste, use a pitcher filter (Brita/PUR) before adding to fountain.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Can I add flavor to encourage my cat to drink more?</h3>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Only vet-approved options:</strong> Low-sodium chicken/beef broth (no onion/garlic) diluted 1:4 with water, or cat-specific water additives. Never add dairy, juice, or human beverages. However, <strong className="text-foreground">switching to a fountain is far more effective</strong>—cats naturally drink 30-50% more from flowing water without any additives. See our <Link to="/best-cat-water-fountain" className="text-primary hover:underline">top-tested fountains</Link>.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Should I be concerned if my cat drinks a lot of water?</h3>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Yes, if it's sudden or excessive.</strong> While increased drinking from switching to a fountain is normal/healthy, <strong className="text-destructive">excessive thirst (polydipsia)</strong> can indicate diabetes, kidney disease, or hyperthyroidism. If your cat suddenly drinks significantly more than their normal 3.5-4.5 oz per 5 lbs, consult a vet immediately. Track daily intake for a week before the vet visit to provide accurate data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion CTA */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12 text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Ready to Improve Your Cat's Hydration?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    The easiest way to increase your cat's water intake by 30-50% is switching to a quality fountain. Browse our lab-tested recommendations for the best cat water fountain.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/best-cat-water-fountain">
                        View Top-Rated Fountains
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/guides/how-to-choose-a-cat-water-fountain">
                        Read Buying Guide
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">On a budget?</strong> Check our <Link to="/best/best-budget-cat-water-fountain-under-50" className="text-primary hover:underline">best fountains under $50</Link> that don't compromise on quality or safety.
                    </p>
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

export default CatHydrationTips;
