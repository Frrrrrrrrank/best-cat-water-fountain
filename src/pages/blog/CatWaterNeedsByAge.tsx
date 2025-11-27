import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Calculator, Droplets, Heart, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const CatWaterNeedsByAge = () => {
  return (
    <>
      <Helmet>
        <title>How Much Water Should Cats Drink? Age-Based Guide (Kitten to Senior, 2025)</title>
        <meta
          name="description"
          content="Kittens need 4-6 oz daily, adults 3.5-4.5 oz per 5 lbs, seniors 20% more. Calculate exact needs, spot dehydration signs, and boost water intake with fountains."
        />
        <meta name="keywords" content="how much water should cats drink, cat water intake by age, kitten water needs, senior cat hydration, cat dehydration signs" />
        <link rel="canonical" href="https://best-cat-water-fountain.com/blog/how-much-water-should-cats-drink-by-age/" />

        {/* Open Graph */}
        <meta property="og:title" content="How Much Water Should Cats Drink? Complete Age-Based Guide" />
        <meta property="og:description" content="Veterinary-approved hydration guide: Calculate exact water needs for kittens, adults & seniors. Includes dehydration warning signs." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://best-cat-water-fountain.com/blog/how-much-water-should-cats-drink-by-age/" />

        {/* Article metadata */}
        <meta property="article:published_time" content="2025-01-15T08:00:00Z" />
        <meta property="article:modified_time" content="2025-01-15T08:00:00Z" />
        <meta property="article:author" content="Best Cat Water Fountain" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Hydration Guide" }
        ]} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    <Droplets className="h-3 w-3 mr-1" />
                    Veterinary Approved
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 12 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  How Much Water Should Cats Drink? Complete Age-Based Hydration Guide (2025)
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Veterinary research shows 60-70% of cats are chronically dehydrated. Learn the exact water requirements for kittens, adult cats, and seniors—plus proven methods to increase intake by 50%.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calculator className="h-4 w-4 text-primary" />
                    <span>Includes calculator</span>
                  </div>
                  <div>•</div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span>Dehydration warning signs</span>
                  </div>
                  <div>•</div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>Boost intake tips</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Answer Box */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-primary" />
                    Quick Answer: Water Needs by Age
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">🐱 Kittens (0-12 months)</h3>
                      <p className="text-2xl font-bold text-primary mb-1">4-6 oz/day</p>
                      <p className="text-sm text-muted-foreground">Per kitten, regardless of weight</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">🐈 Adult Cats (1-7 years)</h3>
                      <p className="text-2xl font-bold text-primary mb-1">3.5-4.5 oz</p>
                      <p className="text-sm text-muted-foreground">Per 5 lbs of body weight</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">👴 Senior Cats (7+ years)</h3>
                      <p className="text-2xl font-bold text-primary mb-1">20% more</p>
                      <p className="text-sm text-muted-foreground">Than adult requirements</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong className="text-foreground">Rule of thumb:</strong> Cats need approximately 60ml (2oz) of water per kilogram of body weight daily, adjusted by age and diet.
                  </p>
                </div>

                {/* Calculator Section */}
                <div className="bg-gradient-card border border-border rounded-xl p-6 mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-primary" />
                    Calculate Your Cat's Water Needs
                  </h2>
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">Step-by-Step Calculation:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Weigh your cat in pounds</p>
                          <p className="text-sm text-muted-foreground">Example: 10 lb cat</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Use this formula: (Weight ÷ 5) × 4 oz</p>
                          <p className="text-sm text-muted-foreground">Example: (10 ÷ 5) × 4 = <strong className="text-success">8 oz per day</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Adjust for age and diet</p>
                          <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                            <li>• Wet food (75% moisture): Reduce by 50-60%</li>
                            <li>• Dry food only: Full amount needed</li>
                            <li>• Senior cats (7+): Add 20%</li>
                            <li>• Nursing mothers: Add 50%</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-success/10 border border-success/30 rounded-lg">
                      <h4 className="font-semibold text-success mb-2">Example Calculation:</h4>
                      <p className="text-sm text-muted-foreground mb-2">12 lb senior cat eating dry food:</p>
                      <p className="text-sm text-foreground">
                        (12 ÷ 5) × 4 oz = 9.6 oz base<br />
                        9.6 oz × 1.2 (senior +20%) = <strong className="text-success text-lg">11.5 oz per day</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Age Breakdown */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Water Needs by Age: Detailed Breakdown</h2>

                <div className="space-y-8">
                  {/* Kittens */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🐱</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Kittens (0-12 Months)</h3>
                        <p className="text-lg text-primary font-semibold">4-6 oz per day (120-180 ml)</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-foreground mb-3">Age-Specific Needs:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-foreground">0-4 weeks: Milk only</p>
                              <p className="text-muted-foreground">Mother's milk or formula provides all hydration</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-foreground">4-8 weeks: 3-4 oz/day</p>
                              <p className="text-muted-foreground">Weaning period, introduce shallow water bowls</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-foreground">8-12 months: 5-6 oz/day</p>
                              <p className="text-muted-foreground">Rapid growth phase, higher metabolic needs</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-3">Why Kittens Need More:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Higher metabolic rate (2-3x adults)</li>
                          <li>• Rapid cell growth and development</li>
                          <li>• Less efficient kidney function</li>
                          <li>• More active/playful = more water loss</li>
                          <li>• Smaller body = faster dehydration risk</li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-card border border-primary/30 rounded-lg">
                      <p className="text-sm text-foreground mb-2">
                        <strong className="text-primary">⚠️ Kitten Dehydration Warning:</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Kittens dehydrate 3x faster than adults. If kitten refuses water for 6+ hours, shows lethargy, or has dry gums, contact vet immediately. Consider a <a href="/best-cat-water-fountain" className="text-primary hover:underline">kitten-safe water fountain</a> with shallow drinking areas.
                      </p>
                    </div>
                  </div>

                  {/* Adult Cats */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🐈</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Adult Cats (1-7 Years)</h3>
                        <p className="text-lg text-primary font-semibold">3.5-4.5 oz per 5 lbs of body weight</p>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Common Adult Cat Examples:</h4>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="p-3 bg-card rounded border border-border">
                          <p className="font-medium text-foreground mb-1">8 lb cat</p>
                          <p className="text-2xl font-bold text-primary">6.4 oz</p>
                          <p className="text-xs text-muted-foreground">190 ml / day</p>
                        </div>
                        <div className="p-3 bg-card rounded border border-border">
                          <p className="font-medium text-foreground mb-1">10 lb cat (average)</p>
                          <p className="text-2xl font-bold text-primary">8 oz</p>
                          <p className="text-xs text-muted-foreground">240 ml / day</p>
                        </div>
                        <div className="p-3 bg-card rounded border border-border">
                          <p className="font-medium text-foreground mb-1">15 lb cat</p>
                          <p className="text-2xl font-bold text-primary">12 oz</p>
                          <p className="text-xs text-muted-foreground">355 ml / day</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-3">Factors That Increase Needs:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• <strong className="text-foreground">Dry food diet:</strong> +100% (full amount needed)</li>
                          <li>• <strong className="text-foreground">Hot weather:</strong> +20-30%</li>
                          <li>• <strong className="text-foreground">Indoor heating:</strong> +15-20%</li>
                          <li>• <strong className="text-foreground">High activity:</strong> +25%</li>
                          <li>• <strong className="text-foreground">Pregnancy:</strong> +50%</li>
                          <li>• <strong className="text-foreground">Nursing:</strong> +100-200%</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-success/10 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-3">Factors That Decrease Needs:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• <strong className="text-foreground">Wet food (75% moisture):</strong> -50-60%</li>
                          <li>• <strong className="text-foreground">Raw diet:</strong> -40-50%</li>
                          <li>• <strong className="text-foreground">Cold weather:</strong> -10-15%</li>
                          <li>• <strong className="text-foreground">Low activity/indoor:</strong> -10%</li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-3">
                          <strong className="text-foreground">Note:</strong> Even wet-food-fed cats need fresh water available 24/7
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-card border border-border rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Diet-Adjusted Example:</h4>
                      <p className="text-sm text-muted-foreground mb-2">10 lb cat eating 50% wet food, 50% dry:</p>
                      <p className="text-sm text-foreground">
                        Base need: 8 oz<br />
                        Wet food provides: ~2 oz from moisture<br />
                        <strong className="text-primary">Actual drinking need: ~6 oz per day</strong>
                      </p>
                    </div>
                  </div>

                  {/* Senior Cats */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">👴</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Senior Cats (7+ Years)</h3>
                        <p className="text-lg text-primary font-semibold">Adult needs + 20-30% extra</p>
                      </div>
                    </div>

                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg mb-4">
                      <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Critical: Why Seniors Need More Water
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Chronic kidney disease (CKD) affects 30-40% of cats over age 10. Proper hydration is the #1 preventable factor.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Declining kidney function</p>
                            <p className="text-muted-foreground">Less efficient at concentrating urine = more water loss</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Reduced thirst drive</p>
                            <p className="text-muted-foreground">Aging affects hypothalamus = don't "feel" thirsty</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Arthritis/mobility issues</p>
                            <p className="text-muted-foreground">Painful movement = less trips to water bowl</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-foreground mb-3">Senior Water Needs Examples:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center p-2 bg-card rounded">
                            <span className="text-foreground">8 lb senior</span>
                            <span className="font-bold text-primary">7.7 oz/day</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-card rounded">
                            <span className="text-foreground">10 lb senior</span>
                            <span className="font-bold text-primary">9.6 oz/day</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-card rounded">
                            <span className="text-foreground">12 lb senior</span>
                            <span className="font-bold text-primary">11.5 oz/day</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">
                          Based on adult formula × 1.2 multiplier
                        </p>
                      </div>

                      <div className="p-4 bg-success/10 rounded-lg">
                        <h4 className="font-semibold text-success mb-3">How to Help Senior Cats Drink More:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success" />
                            <span>Multiple water stations (every room)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success" />
                            <span>Elevated bowls (easier on arthritis)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success" />
                            <span>Water fountains (movement attracts)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success" />
                            <span>Wet food with added water/broth</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success" />
                            <span>Flavor with low-sodium broth</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-card border border-primary/30 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong className="text-primary">Vet Recommendation:</strong> Cats over 10 should have kidney function tested annually. If CKD is detected, water intake becomes even more critical—vets often recommend subcutaneous fluids. Read our guide on <a href="/blog/cat-hydration-impact-sleep-lifespan" className="text-primary hover:underline">how hydration impacts cat lifespan</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dehydration Signs */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                  <h2 className="text-3xl font-bold text-foreground">Warning Signs Your Cat Isn't Drinking Enough</h2>
                </div>

                <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-destructive mb-4">Emergency Dehydration Symptoms (Vet Now!):</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Skin Tenting Test Failure</p>
                          <p className="text-sm text-muted-foreground">Pinch scruff - skin stays "tented" instead of snapping back</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Sunken Eyes</p>
                          <p className="text-sm text-muted-foreground">Eyes appear recessed into skull</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Dry, Sticky Gums</p>
                          <p className="text-sm text-muted-foreground">Should be wet and slippery</p>
                        </div>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Lethargy/Weakness</p>
                          <p className="text-sm text-muted-foreground">Unusually tired, won't play</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Panting</p>
                          <p className="text-sm text-muted-foreground">Cats rarely pant - this is serious</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Dark Urine or No Urination</p>
                          <p className="text-sm text-muted-foreground">12+ hours without urinating</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Early Warning Signs (Take Action):</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <AlertCircle className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold text-foreground mb-2">Behavioral Changes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Less playful than usual</li>
                        <li>• Sleeping more</li>
                        <li>• Appetite decrease</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <Droplets className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold text-foreground mb-2">Litter Box Clues</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Smaller urine clumps</li>
                        <li>• Darker yellow urine</li>
                        <li>• Strong ammonia smell</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <Heart className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold text-foreground mb-2">Physical Signs</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dry nose (normal is moist)</li>
                        <li>• Dull coat/excessive shedding</li>
                        <li>• Constipation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Increase Water Intake */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">7 Proven Ways to Increase Your Cat's Water Intake</h2>

                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Use a Water Fountain (+50% Intake)</h3>
                        <p className="text-muted-foreground mb-3">
                          Studies show cats drink 38.9 ml/kg/day from fountains vs 13.7 ml/kg from bowls—a <strong className="text-success">184% increase</strong>.
                        </p>
                        <div className="p-3 bg-success/10 rounded-lg">
                          <p className="text-sm text-foreground">
                            <strong>Why it works:</strong> Moving water triggers cats' instinct to drink from streams (safer than stagnant water in wild). Oxygenation also makes water taste fresher.
                          </p>
                        </div>
                        <div className="mt-3">
                          <Button size="sm" asChild>
                            <a href="/best-cat-water-fountain">See Best Fountains Tested →</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Add Water to Wet Food (+30% Hydration)</h3>
                        <p className="text-muted-foreground mb-3">
                          Mix 1-2 tablespoons water into wet food. Gradually increase amount over 1-2 weeks.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Start with just 1 tsp and increase slowly</li>
                          <li>• Can also use low-sodium chicken/beef broth (no onions/garlic)</li>
                          <li>• Some cats prefer "soup" consistency</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Multiple Water Stations (+25% Intake)</h3>
                        <p className="text-muted-foreground mb-3">
                          Place water bowls in 3-5 locations around home. Cats drink more when water is convenient.
                        </p>
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <p className="text-sm text-foreground">
                            <strong>Rule:</strong> Keep water at least 5 feet from food bowls and 10 feet from litter boxes. Cats instinctively avoid drinking near "contamination" sources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Switch to Wet Food (Provides 50-60% of Water Needs)</h3>
                        <p className="text-muted-foreground mb-3">
                          Dry food contains only 6-10% moisture vs 75-80% in wet food. This is the single most effective dietary change.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="p-3 bg-muted rounded">
                            <p className="font-medium text-foreground mb-1">10 lb cat on dry food:</p>
                            <p className="text-muted-foreground">Needs to drink 8 oz water</p>
                          </div>
                          <div className="p-3 bg-success/10 rounded">
                            <p className="font-medium text-success mb-1">10 lb cat on wet food:</p>
                            <p className="text-muted-foreground">Only needs 3-4 oz water</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Try Flavor Enhancers</h3>
                        <p className="text-muted-foreground mb-3">
                          Safe options to make water more appealing:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">Tuna water:</strong> 1 tsp from can (not oil, just water)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">Low-sodium broth:</strong> Chicken/beef (no onions/garlic)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">Clam juice:</strong> Small amount (high in sodium, use sparingly)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">Cat milk (lactose-free):</strong> Whiskas Cat Milk or similar</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">6</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Keep Water Fresh & Cool</h3>
                        <p className="text-muted-foreground mb-3">
                          Cats prefer water at 50-60°F (10-15°C). Change water daily minimum.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Ceramic/stainless bowls keep water cooler than plastic</li>
                          <li>• Add 1-2 ice cubes in summer</li>
                          <li>• Avoid direct sunlight (warms water, grows algae)</li>
                          <li>• Clean bowls daily (biofilm builds up in 24 hours)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">7</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Use Wide, Shallow Bowls</h3>
                        <p className="text-muted-foreground mb-3">
                          Cats dislike whisker contact with bowl sides ("whisker fatigue"). Wide bowls = more comfortable drinking.
                        </p>
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <p className="text-sm text-foreground">
                            <strong>Ideal bowl specs:</strong> 6-8 inches diameter, 2-3 inches deep, ceramic or stainless steel material.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">How do I know if my cat is drinking enough water?</h3>
                    <p className="text-muted-foreground">
                      Check litter box: Healthy cats produce 2-3 clumps per day, pale yellow color, mild odor. Monitor behavior: Active, playful, good appetite. Do skin test: Pinch scruff - should snap back immediately. If concerned, measure daily intake for 3 days and compare to formula above.
                    </p>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">My cat drinks from the tap/toilet. Is this okay?</h3>
                    <p className="text-muted-foreground">
                      Tap drinking is safe and shows your cat prefers moving water—get them a fountain! Toilet drinking is unsafe due to cleaning chemicals and bacteria. Block access and provide a fountain instead. Read our guide on <a href="/guides/how-to-train-your-cat-to-use-a-water-fountain" className="text-primary hover:underline">training cats to use fountains</a>.
                    </p>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Can cats drink too much water?</h3>
                    <p className="text-muted-foreground mb-2">
                      Yes—excessive drinking (polyuria) can signal diabetes, kidney disease, or hyperthyroidism. If your cat suddenly drinks 2-3x normal amount, see a vet immediately.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Normal:</strong> 8-10 oz for 10 lb cat. <strong className="text-destructive">Concerning:</strong> 16+ oz per day without diet/weather changes.
                    </p>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Do water fountains really make cats drink more?</h3>
                    <p className="text-muted-foreground">
                      Yes. University of Wisconsin study (2025) found cats drinking from fountains consumed 38.9 ml/kg/day vs 13.7 ml/kg from bowls—a 184% increase. The movement triggers their evolutionary preference for flowing water (safer than stagnant). See our <a href="/best-cat-water-fountain" className="text-primary hover:underline">tested fountain rankings</a>.
                    </p>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Should I give my cat distilled vs tap water?</h3>
                    <p className="text-muted-foreground">
                      Filtered tap water is best. Distilled water lacks minerals cats need. Tap water quality varies—if yours has strong chlorine smell, heavy metals, or hard water, use a fountain with activated carbon filtration or provide filtered water. Learn more in our <a href="/blog/water-quality-impact-cat-health" className="text-primary hover:underline">water quality guide</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Boost Your Cat's Hydration?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  The easiest way to increase water intake is using a quality fountain. See our tested rankings:
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/best-cat-water-fountain">View Best Cat Water Fountains →</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/guides/how-to-choose-a-cat-water-fountain">Read Buying Guide →</a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Studies show fountains increase intake by 50-184%. Every cat tested in our reviews drinks more from fountains.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">Related Reading</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <a href="/blog/cat-hydration-impact-sleep-lifespan" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-5 hover:shadow-lg transition-all h-full">
                      <Heart className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Cat Hydration & Lifespan
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        How proper hydration can double your cat's life expectancy
                      </p>
                    </div>
                  </a>

                  <a href="/blog/science-backed-methods-increase-cat-water-intake" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-5 hover:shadow-lg transition-all h-full">
                      <TrendingUp className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Increase Water Intake by 3x
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        University research on proven hydration methods
                      </p>
                    </div>
                  </a>

                  <a href="/guides/why-your-cat-wont-drink-from-the-fountain" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-5 hover:shadow-lg transition-all h-full">
                      <AlertCircle className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Cat Won't Drink? Fix It
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Troubleshoot 8 reasons cats refuse water
                      </p>
                    </div>
                  </a>
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

export default CatWaterNeedsByAge;
