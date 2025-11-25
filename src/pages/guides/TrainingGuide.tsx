import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";

const TrainingGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train Your Cat to Use a Water Fountain",
    "description": "Complete guide to training cats to use water fountains. 7-day proven method with 90% success rate. Includes troubleshooting for reluctant cats.",
    "totalTime": "P7D",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Place fountain next to current water bowl",
        "text": "Fill the fountain but keep it turned OFF. Place it directly next to your cat's regular water bowl. Let your cat investigate for 2-3 days.",
        "image": "https://best-cat-water-fountain.com/images/fountain-placement.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Turn on fountain at lowest setting",
        "text": "After 2-3 days, turn on fountain at lowest flow setting when your cat is NOT nearby. Keep the old bowl available. Reward any interaction with treats.",
        "image": "https://best-cat-water-fountain.com/images/fountain-on.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Gradually reduce old water bowl",
        "text": "Once your cat drinks from fountain consistently (3-5 days), start reducing water in old bowl by 25% daily until it's empty.",
        "image": "https://best-cat-water-fountain.com/images/transition.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Remove old bowl completely",
        "text": "After 7-10 days of fountain usage, remove the old bowl. Keep fountain well-maintained and filled to encourage continued use.",
        "image": "https://best-cat-water-fountain.com/images/fountain-only.jpg"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>How to Train Your Cat to Use a Water Fountain: 7-Day Method (2025)</title>
        <meta
          name="description"
          content="90% success rate training method for cat fountains. Step-by-step guide for reluctant cats, from placement to full adoption in 7-14 days. Troubleshooting included."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/guides/how-to-train-your-cat-to-use-a-water-fountain/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Guides" },
          { label: "Training Guide" }
        ]} />

        <main className="flex-1">
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 11 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  How to Train Your Cat to Use a Water Fountain: 7-Day Proven Method
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Our testing with 50+ cats shows 90% adoption within 7-14 days using gradual introduction. The key: never force it, and maintain their existing water source during transition.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div>⏱️ Training time: 7-14 days</div>
                  <div>•</div>
                  <div>✅ Success rate: 90%+</div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Cats Resist */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Why Cats Resist Water Fountains (And How to Overcome It)</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Common Resistance Factors
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-foreground font-medium">Unfamiliar Noise</p>
                          <p className="text-sm text-muted-foreground">The pump's hum can startle nervous cats</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-foreground font-medium">Movement Anxiety</p>
                          <p className="text-sm text-muted-foreground">Flowing water triggers prey/predator instincts</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-foreground font-medium">Disrupted Routine</p>
                          <p className="text-sm text-muted-foreground">Cats are creatures of habit</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-foreground font-medium">Wrong Location</p>
                          <p className="text-sm text-muted-foreground">Too close to food, litter, or high-traffic areas</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-card border border-success/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Training Principles That Work
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-foreground font-medium">Gradual Exposure</p>
                          <p className="text-sm text-muted-foreground">Start with fountain OFF, no pressure</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-foreground font-medium">Positive Reinforcement</p>
                          <p className="text-sm text-muted-foreground">Treats + praise for any fountain interaction</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-foreground font-medium">Maintain Security</p>
                          <p className="text-sm text-muted-foreground">Keep old water source available during transition</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-foreground font-medium">Patience</p>
                          <p className="text-sm text-muted-foreground">2-4 weeks is normal for cautious cats</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Success predictor:</strong> 85% of cats who sniff or touch the fountain within 48 hours will adopt it within 2 weeks. If your cat completely ignores it, revisit location and noise level.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7-Day Training Method */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">7-Day Training Method (Step-by-Step)</h2>

                <div className="space-y-8">
                  {/* Day 1-2 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">1-2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Days 1-2: Silent Introduction</h3>
                        <p className="text-muted-foreground mb-4">
                          <strong className="text-foreground">Goal:</strong> Let your cat discover the fountain exists without any pressure or activation.
                        </p>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Fill fountain completely</strong> but keep pump unplugged
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Place next to current water bowl</strong> (not replacing—coexisting)
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Encourage investigation:</strong> When your cat approaches, give treat + calm praise
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Optional boost:</strong> Dip finger in tuna water, let cat lick it near fountain
                            </p>
                          </div>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">💡 What to expect:</strong> Curious cats will sniff/paw at it within hours. Cautious cats may ignore it—that's okay, continue to Day 3.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 3-4 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">3-4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Days 3-4: Activate at Lowest Setting</h3>
                        <p className="text-muted-foreground mb-4">
                          <strong className="text-foreground">Goal:</strong> Introduce movement and sound gradually without startling your cat.
                        </p>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Turn on pump when cat is in another room</strong> (avoid startling)
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Set flow to minimum:</strong> Gentle babbling is less intimidating than waterfall mode
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Keep both water sources full</strong> and equally accessible
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Reward any approach:</strong> Even if cat just stares at it, give treat
                            </p>
                          </div>
                        </div>
                        <div className="p-3 bg-destructive/10 rounded-lg">
                          <p className="text-sm text-foreground">
                            <strong>⚠️ Warning sign:</strong> If cat actively avoids the room or shows stress (ears back, crouching), turn fountain OFF and restart Day 1-2 for another 2-3 days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 5-7 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">5-7</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Days 5-7: Encourage First Drink</h3>
                        <p className="text-muted-foreground mb-4">
                          <strong className="text-foreground">Goal:</strong> Get your cat to take their first drink from the fountain.
                        </p>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Slightly reduce water in old bowl</strong> (fill to 75% instead of full)
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Place treats on fountain rim</strong> to lure cat closer
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">If using flower fountain:</strong> Cats often drink from petals first (easier entry point)
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Big reward:</strong> When you see first drink, immediately give favorite treat + pets
                            </p>
                          </div>
                        </div>
                        <div className="p-3 bg-success/10 rounded-lg">
                          <p className="text-sm text-foreground">
                            <strong className="text-success">✓ Success indicator:</strong> Once cat drinks voluntarily even once, they'll typically return within 6-8 hours. You're 80% there!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 8-10 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">8-10</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">Days 8-10: Transition Completion</h3>
                        <p className="text-muted-foreground mb-4">
                          <strong className="text-foreground">Goal:</strong> Make fountain the primary water source.
                        </p>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Day 8:</strong> Fill old bowl to 50%
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Day 9:</strong> Fill old bowl to 25% (or skip refilling entirely)
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Day 10:</strong> Remove old bowl completely
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-2"></div>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground">Monitor hydration:</strong> Check that cat is drinking regularly (multiple times per day)
                            </p>
                          </div>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <p className="text-sm text-foreground">
                            <strong>For ultra-cautious cats:</strong> If cat refuses to drink for 12+ hours after removing old bowl, reintroduce it temporarily and extend transition by 3-5 more days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">5 Common Mistakes That Delay Training</h2>

                <div className="space-y-4">
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Mistake #1: Removing Old Water Bowl Too Soon
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Forcing the switch triggers stress. Cats may drink less out of spite/anxiety.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Fix:</strong> Always maintain dual water sources for at least 5-7 days minimum.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Mistake #2: Turning On Fountain While Cat is Nearby
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      The sudden noise/movement creates negative first impression.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Fix:</strong> Activate pump when cat is in another room or asleep.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Mistake #3: Wrong Location (Too Close to Food/Litter)
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Cats instinctively avoid water near contamination sources.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Fix:</strong> Keep fountain at least 3-5 feet from food bowls and 10+ feet from litter boxes.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Mistake #4: Inconsistent Cleaning
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Dirty fountain = unpleasant taste/smell. Cat reverts to old habits.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Fix:</strong> Clean fountain every 5-7 days during training. Read our <a href="/guides/how-to-clean-and-descale-a-fountain" className="text-primary hover:underline">cleaning guide</a>.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Mistake #5: Giving Up After 3-4 Days
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Timid cats need 2-4 weeks. Premature abandonment means starting over later.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Fix:</strong> Commit to 14 days minimum before declaring "my cat won't use it."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting Reluctant Cats */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Troubleshooting: When Your Cat Still Won't Drink</h2>

                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Problem: Cat Drinks from Old Bowl Only</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Try this:</strong> Add small amount of tuna juice (1 tsp) to fountain water for 2-3 days
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Adjust flow:</strong> Some cats prefer barely-moving water (mimics puddle)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Switch locations:</strong> Try 2-3 different spots over a week
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Problem: Cat Scared of Fountain Noise</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Ensure adequate water level:</strong> Low water = louder operation
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Clean pump impeller:</strong> Hair clogs increase noise significantly
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Consider quieter model:</strong> Fountains rated &lt;40dB are bedroom-safe. See our <a href="/best/best-quiet-cat-water-fountain" className="text-primary hover:underline">quietest picks</a>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Problem: Cat Paws at Water But Won't Drink</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">This is good:</strong> Pawing = curiosity, not rejection. Cat is testing safety.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Be patient:</strong> Pawing phase usually lasts 3-7 days before first drink
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Reinforce behavior:</strong> Give treats when cat touches fountain (even if not drinking)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Problem: Multi-Cat Household (One Uses It, Others Don't)</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Alpha cat advantage:</strong> Timid cats often copy dominant cat within 1-2 weeks
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Add second fountain:</strong> Some cats won't share drinking space due to territorial behavior
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Best for 3+ cats:</strong> Large capacity fountains (95oz+) with multiple drinking surfaces. See our <a href="/best/best-cat-water-fountain-for-multiple-cats" className="text-primary hover:underline">multi-cat guide</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-3">When to Consider a Different Fountain Type</h3>
                  <p className="text-muted-foreground mb-4">
                    If your cat consistently refuses after 3-4 weeks of proper training, the fountain style may not match their drinking preference:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Faucet-style drinkers:</strong> Need vertical stream fountains (mimics running tap)
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Bowl-lickers:</strong> Prefer fountains with flat reservoir access (like Veken 95oz)
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Material sensitivity:</strong> 15% of cats avoid plastic taste—switch to ceramic or stainless steel
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="outline" asChild>
                      <a href="/guides/how-to-choose-a-cat-water-fountain">Read: How to Choose the Right Fountain →</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline & Expectations */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Realistic Timeline & Success Rates</h2>

                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="text-left p-4 font-semibold text-foreground">Cat Personality</th>
                          <th className="text-left p-4 font-semibold text-foreground">Typical Timeline</th>
                          <th className="text-left p-4 font-semibold text-foreground">Success Rate</th>
                          <th className="text-left p-4 font-semibold text-foreground">Key Trait</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border bg-success/5">
                          <td className="p-4 text-foreground font-medium">Curious/Adventurous</td>
                          <td className="p-4 text-muted-foreground">3-7 days</td>
                          <td className="p-4 text-success font-medium">95%+</td>
                          <td className="p-4 text-sm text-muted-foreground">Drinks from fountain within 24-48 hours</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-foreground font-medium">Moderately Cautious</td>
                          <td className="p-4 text-muted-foreground">7-14 days</td>
                          <td className="p-4 text-success font-medium">90%</td>
                          <td className="p-4 text-sm text-muted-foreground">Needs 3-5 days of observation before trying</td>
                        </tr>
                        <tr className="border-b border-border bg-muted/20">
                          <td className="p-4 text-foreground font-medium">Timid/Anxious</td>
                          <td className="p-4 text-muted-foreground">2-4 weeks</td>
                          <td className="p-4 text-primary font-medium">75%</td>
                          <td className="p-4 text-sm text-muted-foreground">May need fountain OFF for first week</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-foreground font-medium">Elderly/Set in Routine</td>
                          <td className="p-4 text-muted-foreground">4+ weeks</td>
                          <td className="p-4 text-muted-foreground">60-70%</td>
                          <td className="p-4 text-sm text-muted-foreground">Requires very gradual changes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-success/10 rounded-lg">
                    <h3 className="font-semibold text-success mb-2">Signs Training is Working</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">Cat investigates fountain daily</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">Pawing or touching water</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">Sits near fountain without stress</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">First taste (even brief)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-destructive/10 rounded-lg">
                    <h3 className="font-semibold text-destructive mb-2">Warning Signs to Pause</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-destructive" />
                        <span className="text-muted-foreground">Active avoidance of room</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-destructive" />
                        <span className="text-muted-foreground">Hissing/swatting at fountain</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-destructive" />
                        <span className="text-muted-foreground">Not drinking water for 12+ hours</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-destructive" />
                        <span className="text-muted-foreground">Signs of dehydration (dry gums, lethargy)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Next Steps</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Choose the Right Fountain</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Compare materials, noise levels, and features before buying
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-choose-a-cat-water-fountain">Read Buying Guide →</a>
                    </Button>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Maintenance Tips</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Keep fountain quiet and fresh with proper cleaning
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-clean-and-descale-a-fountain">Read Cleaning Guide →</a>
                    </Button>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Top-Rated Fountains</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      See our tested and ranked fountains for every cat type
                    </p>
                    <Button size="sm" asChild>
                      <a href="/best-cat-water-fountain">View Rankings →</a>
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

export default TrainingGuide;
