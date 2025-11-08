import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, AlertCircle } from "lucide-react";

const HowOftenChangeFilter = () => {
  return (
    <>
      <Helmet>
        <title>How Often to Change Cat Fountain Filter? Complete Guide (2025)</title>
        <meta
          name="description"
          content="Learn exactly when to change your cat fountain filter. Signs of a dirty filter, replacement schedules by brand, and how to extend filter life."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/blog/how-often-change-cat-fountain-filter/" />
        <meta property="og:title" content="How Often to Change Cat Fountain Filter? Complete Guide" />
        <meta property="og:description" content="Replace filters every 2-4 weeks depending on usage. Learn the signs and get brand-specific schedules." />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How Often to Change Filter" }
        ]} />

        <main className="flex-1">
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    <Calendar className="h-3 w-3 mr-1" />
                    Maintenance Guide
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 6 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  How Often Should You Change Your Cat Fountain Filter?
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Most filters should be changed every 2-4 weeks. Here's how to know exactly when yours needs replacing, plus tricks to extend filter life.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Answer */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <p className="text-foreground"><strong>Standard schedule:</strong> Every 2-4 weeks (most brands)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <p className="text-foreground"><strong>Multiple cats:</strong> Every 2-3 weeks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <p className="text-foreground"><strong>Hard water areas:</strong> Every 2 weeks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <p className="text-foreground"><strong>Single cat + soft water:</strong> Up to 4-6 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Signs to Replace */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">5 Signs Your Filter Needs Replacing Now</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">1. Visible Debris or Slime</h3>
                        <p className="text-muted-foreground">
                          If you can see hair, food particles, or slimy buildup on the filter surface, it's saturated and can't filter effectively anymore.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">2. Reduced Water Flow</h3>
                        <p className="text-muted-foreground">
                          Clogged filters restrict pump flow. If your fountain's stream is weaker than usual, check the filter first.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">3. Strange Smell</h3>
                        <p className="text-muted-foreground">
                          A musty or stale odor means bacteria are growing in the saturated filter media. Time for immediate replacement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">4. Water Tastes/Looks Different</h3>
                        <p className="text-muted-foreground">
                          Cats have sensitive taste. If your cat suddenly stops drinking or the water looks cloudy, the filter isn't working.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">5. Pump Gets Louder</h3>
                        <p className="text-muted-foreground">
                          A dirty filter makes the pump work harder, increasing noise. If your once-quiet fountain is getting loud, check the filter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Replacement Schedule by Brand */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Replacement Schedule by Brand</h2>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 text-foreground font-semibold">Brand/Model</th>
                        <th className="text-left p-4 text-foreground font-semibold">Official Recommendation</th>
                        <th className="text-left p-4 text-foreground font-semibold">Real-World Experience</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4 text-foreground">Catit Flower</td>
                        <td className="p-4 text-muted-foreground">Every 30 days</td>
                        <td className="p-4 text-muted-foreground">2-4 weeks (depends on cats)</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-foreground">PetSafe Drinkwell</td>
                        <td className="p-4 text-muted-foreground">Every 2-4 weeks</td>
                        <td className="p-4 text-muted-foreground">2-3 weeks typical</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-foreground">Pioneer Pet Raindrop</td>
                        <td className="p-4 text-muted-foreground">Every 1 month</td>
                        <td className="p-4 text-muted-foreground">3-4 weeks</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-foreground">Veken 95oz</td>
                        <td className="p-4 text-muted-foreground">Every 2 weeks</td>
                        <td className="p-4 text-muted-foreground">2-3 weeks</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-foreground">Stainless Steel Models</td>
                        <td className="p-4 text-muted-foreground">Every 30 days</td>
                        <td className="p-4 text-muted-foreground">3-4 weeks (cleaner water)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* How to Extend Filter Life */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">How to Extend Filter Life (Safely)</h2>
                <div className="space-y-4">
                  <div className="bg-success/10 border border-success/30 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">✓ Weekly Rinse</h3>
                    <p className="text-muted-foreground">
                      Rinse the filter under running water weekly to remove hair and debris. This can extend life by 1-2 weeks.
                    </p>
                  </div>

                  <div className="bg-success/10 border border-success/30 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">✓ Use Filtered/Distilled Water</h3>
                    <p className="text-muted-foreground">
                      Tap water minerals clog filters faster. Using pre-filtered water can double filter life in hard water areas.
                    </p>
                  </div>

                  <div className="bg-success/10 border border-success/30 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">✓ Add Pre-Filter Sponge</h3>
                    <p className="text-muted-foreground">
                      Some fountains support pre-filter sponges that catch hair before it reaches the main filter. Wash the sponge weekly, replace the carbon filter less often.
                    </p>
                  </div>

                  <div className="bg-success/10 border border-success/30 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">✓ Keep Fountain Away from Food</h3>
                    <p className="text-muted-foreground">
                      Food particles in water clog filters. Place fountain at least 3 feet from food bowls.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">✗ Don't Try This</h3>
                    <p className="text-muted-foreground">
                      <strong>Never</strong> use soap on activated carbon filters—it destroys the carbon's effectiveness. <strong>Never</strong> let filters dry out completely between uses (kills beneficial bacteria in some multi-layer filters).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Comparison */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Annual Filter Costs (Real Numbers)</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Budget Scenario</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Single cat, soft water</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Change every 4 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">13 filters/year @ $3</span>
                        <span className="text-foreground font-bold">$39/year</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Typical Scenario</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">2-3 cats, hard water</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Change every 2 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">26 filters/year @ $4</span>
                        <span className="text-foreground font-bold">$104/year</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Money-saving tip:</strong> Buy filters in bulk (6-12 packs). Most brands offer 20-30% discounts on multi-packs, bringing annual costs down to $70-80.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Cleaning Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete maintenance schedule with descaling tips
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-clean-and-descale-a-fountain">Read Guide →</a>
                    </Button>
                  </div>
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Best Fountains</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Find models with long-lasting filters
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/best-cat-water-fountain">View Rankings →</a>
                    </Button>
                  </div>
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Buying Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Choose the right fountain for your needs
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-choose-a-cat-water-fountain">Read Guide →</a>
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

export default HowOftenChangeFilter;
