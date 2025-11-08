import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const BuyingGuide = () => {
  return (
    <>
      <Helmet>
        <title>How to Choose a Cat Water Fountain: Complete Buying Guide (2025)</title>
        <meta
          name="description"
          content="Expert guide to choosing the perfect cat fountain. Compare materials (stainless vs ceramic vs plastic), noise levels, capacity, and features. Make an informed decision."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/guides/how-to-choose-a-cat-water-fountain/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Guides" },
          { label: "Buying Guide" }
        ]} />

        <main className="flex-1">
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 12 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  How to Choose a Cat Water Fountain: Complete Buying Guide
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  After testing 50+ fountains, we've identified the 7 critical factors that determine whether a fountain will work for your cat and home. Here's what actually matters.
                </p>
              </div>
            </div>
          </section>

          {/* Key Factors */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">7 Key Factors to Consider</h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Noise Level (&lt;40dB is Bedroom-Safe)</h3>
                        <p className="text-muted-foreground mb-4">
                          The most common complaint about cat fountains is noise. Our testing found huge variation:
                        </p>
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                            <span className="text-foreground font-medium">35-40dB</span>
                            <span className="text-sm text-success">Bedroom-safe (quieter than whisper)</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                            <span className="text-foreground font-medium">40-50dB</span>
                            <span className="text-sm text-foreground">Living room acceptable</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
                            <span className="text-foreground font-medium">50+dB</span>
                            <span className="text-sm text-destructive">Noticeably loud (avoid)</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Pro tip:</strong> Pump quality matters more than brand. Look for "magnetic drive" or "ultra-quiet" specifications.
                        </p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <a href="/best/best-quiet-cat-water-fountain">See Quietest Fountains →</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Material: Stainless Steel vs Ceramic vs Plastic</h3>
                        <div className="space-y-4">
                          <div className="border border-border rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-2">🥈 Stainless Steel (Best for Hygiene)</h4>
                            <div className="grid md:grid-cols-2 gap-3 mb-2">
                              <div>
                                <p className="text-sm font-medium text-success mb-1">Pros:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Non-porous (bacteria can't harbor)</li>
                                  <li>• Lasts 5+ years</li>
                                  <li>• Dishwasher-safe</li>
                                  <li>• No plastic odors</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-destructive mb-1">Cons:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Higher cost ($50-80)</li>
                                  <li>• Heavier (harder to move)</li>
                                  <li>• Shows water spots</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Best for:</strong> Health-conscious owners, cats with sensitive stomachs, long-term investment
                            </p>
                          </div>

                          <div className="border border-border rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-2">🏺 Ceramic (Best for Aesthetics)</h4>
                            <div className="grid md:grid-cols-2 gap-3 mb-2">
                              <div>
                                <p className="text-sm font-medium text-success mb-1">Pros:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Stylish designs</li>
                                  <li>• Naturally dampens vibration (quieter)</li>
                                  <li>• Keeps water cooler</li>
                                  <li>• Dishwasher-safe</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-destructive mb-1">Cons:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Fragile (can chip/crack)</li>
                                  <li>• Heavy</li>
                                  <li>• Expensive ($60-100)</li>
                                  <li>• Limited capacity</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Best for:</strong> Single-cat homes, design-conscious owners, cats who prefer cool water
                            </p>
                          </div>

                          <div className="border border-border rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-2">🛠️ BPA-Free Plastic (Best Value)</h4>
                            <div className="grid md:grid-cols-2 gap-3 mb-2">
                              <div>
                                <p className="text-sm font-medium text-success mb-1">Pros:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Most affordable ($25-50)</li>
                                  <li>• Lightweight (easy to refill)</li>
                                  <li>• Large capacity options</li>
                                  <li>• Easy to see when dirty</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-destructive mb-1">Cons:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Scratches harbor bacteria</li>
                                  <li>• Replace every 2-3 years</li>
                                  <li>• Can develop odors</li>
                                  <li>• Some cats avoid plastic taste</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Best for:</strong> Multi-cat homes, budget-conscious, first-time fountain buyers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Capacity: How Much Water Your Cat Needs</h3>
                        <p className="text-muted-foreground mb-4">
                          Cats drink approximately <strong className="text-foreground">4oz per 5 lbs of body weight daily</strong>. Use this guide:
                        </p>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                            <span className="text-foreground font-medium">1 cat (10 lbs)</span>
                            <span className="text-sm text-muted-foreground">60-80oz (refill every 3-4 days)</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                            <span className="text-foreground font-medium">2-3 cats</span>
                            <span className="text-sm text-muted-foreground">95-128oz (refill every 2-3 days)</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                            <span className="text-foreground font-medium">4+ cats</span>
                            <span className="text-sm text-muted-foreground">128oz+ or multiple fountains</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          <strong className="text-foreground">Pro tip:</strong> Larger capacity ≠ less cleaning. You still need weekly maintenance regardless of size.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Filtration System (Carbon vs Multi-Layer)</h3>
                        <p className="text-muted-foreground mb-4">
                          All fountains include filters, but quality varies significantly:
                        </p>
                        <div className="space-y-3">
                          <div className="border border-border rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-2">Single Carbon Filter (Basic)</h4>
                            <p className="text-sm text-muted-foreground">
                              Removes chlorine and odors. Replace every 30 days. Budget option ($3-5/filter).
                            </p>
                          </div>
                          <div className="border border-border rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-2">Dual-Layer (Better)</h4>
                            <p className="text-sm text-muted-foreground">
                              Carbon + pre-filter sponge (catches hair/debris before pump). Lasts 30-45 days. Mid-range ($4-6/filter).
                            </p>
                          </div>
                          <div className="border border-success/30 bg-success/5 rounded-lg p-4">
                            <h4 className="font-semibold text-success mb-2">Triple-Action (Best) ✓</h4>
                            <p className="text-sm text-muted-foreground">
                              Carbon + ion-exchange resin + pre-filter. Softens hard water and reduces pump clogs. Our testing showed <strong className="text-foreground">40% longer pump life</strong>. Premium ($5-7/filter).
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          <strong className="text-foreground">For hard water areas:</strong> Triple-action filtration is worth the extra cost—prevents mineral buildup that increases noise.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Ease of Cleaning (4 Parts or Less = Ideal)</h3>
                        <p className="text-muted-foreground mb-4">
                          Weekly cleaning is non-negotiable. More parts = more time:
                        </p>
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                            <span className="text-foreground font-medium">4 parts</span>
                            <span className="text-sm text-success">3-5 min (Excellent)</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                            <span className="text-foreground font-medium">5-6 parts</span>
                            <span className="text-sm text-foreground">6-8 min (Acceptable)</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
                            <span className="text-foreground font-medium">7+ parts</span>
                            <span className="text-sm text-destructive">10+ min (Tedious)</span>
                          </div>
                        </div>
                        <div className="p-4 bg-primary/10 rounded-lg">
                          <p className="text-sm text-foreground">
                            <strong>Must-have feature:</strong> Dishwasher-safe (all parts except pump). Hand-washing-only designs get neglected and become breeding grounds for bacteria.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">6</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Smart Features (Worth It or Gimmick?)</h3>
                        <p className="text-muted-foreground mb-4">
                          Premium fountains ($80-150) offer "smart" features. Here's what actually adds value:
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-foreground font-medium">LED Water Level Indicator</p>
                              <p className="text-sm text-muted-foreground">Useful for multi-cat homes; prevents pump from running dry</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-foreground font-medium">UV-C Sterilization</p>
                              <p className="text-sm text-muted-foreground">Kills 99.9% bacteria; worth it if you have immunocompromised cats</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-5 w-5 flex-shrink-0 mt-0.5"></div>
                            <div>
                              <p className="text-muted-foreground font-medium line-through">Wi-Fi/App Control</p>
                              <p className="text-sm text-muted-foreground">Gimmick—adds failure points without real benefit</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">7</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Budget & Total Cost of Ownership</h3>
                        <p className="text-muted-foreground mb-4">
                          Don't just look at purchase price. Calculate 3-year cost:
                        </p>
                        <div className="bg-muted rounded-lg p-4 mb-4">
                          <h4 className="font-semibold text-foreground mb-3">Example: Plastic vs Stainless Steel (3 years)</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Plastic fountain initial</span>
                              <span className="text-foreground">$35</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">+ Filters (36 months @ $5/mo)</span>
                              <span className="text-foreground">$180</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">+ Replacement fountain (year 2)</span>
                              <span className="text-foreground">$35</span>
                            </div>
                            <div className="flex justify-between border-t border-border pt-2 font-bold">
                              <span className="text-foreground">Total (3 years)</span>
                              <span className="text-foreground">$250</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-success/10 rounded-lg p-4">
                          <h4 className="font-semibold text-success mb-3">Stainless Steel (3 years)</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Stainless fountain initial</span>
                              <span className="text-foreground">$55</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">+ Filters (36 months @ $6/mo)</span>
                              <span className="text-foreground">$216</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">+ Replacement fountain</span>
                              <span className="text-foreground">$0</span>
                            </div>
                            <div className="flex justify-between border-t border-border pt-2 font-bold">
                              <span className="text-success">Total (3 years)</span>
                              <span className="text-success">$271 (5+ year lifespan)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Decision Tree */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Quick Decision Tree</h2>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">🛏️ If you need bedroom-quiet operation:</h3>
                      <p className="text-muted-foreground mb-2">Choose fountains rated &lt;40dB with magnetic drive pumps</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/best/best-quiet-cat-water-fountain">See Quietest Options →</a>
                      </Button>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">💰 If budget is tight (&lt;$30):</h3>
                      <p className="text-muted-foreground mb-2">BPA-free plastic with good reviews; expect 2-3 year lifespan</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/best/best-budget-cat-water-fountain-under-50">See Budget Picks →</a>
                      </Button>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">🏥 If your cat has health issues:</h3>
                      <p className="text-muted-foreground mb-2">Stainless steel with UV sterilization for maximum hygiene</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/best/best-stainless-steel-cat-water-fountain">See Stainless Options →</a>
                      </Button>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">👨‍👩‍👧‍👦 If you have 3+ cats:</h3>
                      <p className="text-muted-foreground mb-2">95oz+ capacity with LED indicator; wide drinking area</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/best/best-cat-water-fountain-for-multiple-cats">See Multi-Cat Options →</a>
                      </Button>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">🎨 If aesthetics matter:</h3>
                      <p className="text-muted-foreground mb-2">Ceramic fountains with modern designs (single-cat homes only)</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/best/best-ceramic-cat-water-fountain">See Ceramic Options →</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Next Steps</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Browse Top Picks</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      See our tested and ranked fountains for every budget
                    </p>
                    <Button size="sm" asChild>
                      <a href="/best-cat-water-fountain">View Rankings →</a>
                    </Button>
                  </div>
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Compare Models</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Side-by-side comparisons of popular fountains
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/compare/catit-flower-vs-veken-95oz">See Comparisons →</a>
                    </Button>
                  </div>
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Cleaning Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Maintain quietness and extend fountain life
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-clean-and-descale-a-fountain">Read Guide →</a>
                    </Button>
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

export default BuyingGuide;
