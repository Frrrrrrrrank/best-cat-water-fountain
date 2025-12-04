import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Heart, Droplets, Clock, Shield, TrendingDown, CheckCircle2, XCircle, Eye, Thermometer } from "lucide-react";

const CatDehydrationSigns = () => {
  return (
    <>
      <Helmet>
        <title>Cat Dehydration: 11 Warning Signs, Dangers & Prevention Guide (2025)</title>
        <meta
          name="description"
          content="Recognize cat dehydration early: skin tent test, dry gums, lethargy. 60% of cats are chronically dehydrated. Learn symptoms, risks & prevention with water fountains."
        />
        <meta name="keywords" content="cat dehydration symptoms, dehydrated cat signs, cat not drinking water, cat dehydration test, prevent cat dehydration" />
        <link rel="canonical" href="https://best-cat-water-fountain.com/blog/cat-dehydration-warning-signs-prevention/" />

        {/* Open Graph */}
        <meta property="og:title" content="Cat Dehydration: 11 Warning Signs & Prevention" />
        <meta property="og:description" content="60% of cats are dehydrated. Learn to recognize symptoms early and prevent serious health issues with proven hydration strategies." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://best-cat-water-fountain.com/blog/cat-dehydration-warning-signs-prevention/" />

        {/* Article metadata */}
        <meta property="article:published_time" content="2025-01-15T12:00:00Z" />
        <meta property="article:modified_time" content="2025-01-15T12:00:00Z" />
        <meta property="article:author" content="Best Cat Water Fountain" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Cat Health" }
        ]} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="destructive">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Critical Health Alert
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Veterinary Reviewed
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 15 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Cat Dehydration: 11 Warning Signs, Serious Dangers & How to Prevent It
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  <strong className="text-destructive">60-70% of domestic cats are chronically dehydrated</strong>, putting them at risk for kidney disease, urinary issues, and shortened lifespan. Learn to recognize the 11 warning signs early, understand the dangers, and discover proven prevention strategies that can increase water intake by 184%.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="font-semibold">Emergency symptoms included</span>
                  </div>
                  <div>•</div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Prevention methods proven effective</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Alert */}
          <section className="py-8 bg-destructive/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border-2 border-destructive rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-destructive mb-3">🚨 When to See a Vet IMMEDIATELY</h2>
                      <p className="text-foreground mb-4">
                        If your cat shows ANY of these emergency symptoms, contact your veterinarian or emergency clinic right away:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground"><strong className="text-foreground">Skin tent test failure:</strong> Skin stays tented 2+ seconds</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground"><strong className="text-foreground">Sunken eyes:</strong> Eyes appear recessed into skull</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground"><strong className="text-foreground">Panting:</strong> Cats rarely pant—this is serious</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground"><strong className="text-foreground">Extreme lethargy:</strong> Won't move or respond</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground"><strong className="text-foreground">No urination:</strong> 12+ hours without litter box use</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground"><strong className="text-foreground">Collapse/seizures:</strong> Medical emergency</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-destructive/20 rounded-lg">
                        <p className="text-sm text-foreground font-semibold">
                          ⏱️ Severe dehydration can be life-threatening within 24-48 hours. Do not wait for multiple symptoms—seek immediate veterinary care.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Understanding Dehydration */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Understanding Cat Dehydration: The Silent Health Crisis</h2>

                <div className="bg-gradient-card border border-border rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Why Cats Are Prone to Dehydration</h3>
                  <p className="text-muted-foreground mb-4">
                    Cats evolved in North African/Middle Eastern deserts where water was scarce. They developed efficient kidneys that concentrate urine—but this adaptation comes with a critical weakness: <strong className="text-foreground">naturally low thirst drive</strong>.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">In the Wild (Healthy Hydration):</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Prey contains 70-75% moisture (mice, birds)</li>
                        <li>• Get most water from food, not drinking</li>
                        <li>• Drink opportunistically from streams</li>
                        <li>• Natural balance maintained</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-3">Modern Domestic Life (Problem):</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Dry kibble: 6-10% moisture (vs 70% needed)</li>
                        <li>• Low thirst drive doesn't compensate</li>
                        <li>• Still water bowls = not appealing</li>
                        <li>• Result: Chronic dehydration in 60-70% of cats</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-primary/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">The Three Stages of Dehydration</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                        <h4 className="font-semibold text-foreground">Mild Dehydration (5% fluid loss)</h4>
                      </div>
                      <p className="text-sm text-muted-foreground ml-11">
                        Often goes unnoticed. Subtle changes in behavior, slightly tacky gums. Cat may still seem normal. This is when intervention is easiest and most effective.
                      </p>
                    </div>

                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                        <h4 className="font-semibold text-foreground">Moderate Dehydration (6-9% fluid loss)</h4>
                      </div>
                      <p className="text-sm text-muted-foreground ml-11">
                        Visible symptoms appear. Skin tent test shows delay (1-2 seconds), dry gums, lethargy, decreased appetite. Requires veterinary attention within 12-24 hours.
                      </p>
                    </div>

                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                        <h4 className="font-semibold text-destructive">Severe Dehydration (10%+ fluid loss)</h4>
                      </div>
                      <p className="text-sm text-muted-foreground ml-11">
                        Life-threatening emergency. Skin tent persists 2+ seconds, sunken eyes, extreme weakness, panting, possible collapse. Requires immediate IV fluid therapy. Can be fatal within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 11 Warning Signs */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">11 Warning Signs Your Cat is Dehydrated</h2>
                <p className="text-muted-foreground mb-8">
                  Listed from easiest to detect → most serious. Early detection is critical for preventing complications.
                </p>

                <div className="space-y-4">
                  {/* Sign 1 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Decreased Litter Box Activity</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-sm font-medium text-foreground mb-2">Normal:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• 2-3 urine clumps per day</li>
                              <li>• Clumps are tennis ball sized</li>
                              <li>• Pale yellow color</li>
                              <li>• Mild ammonia smell</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-destructive mb-2">Dehydration Signs:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• 1 or fewer clumps per day</li>
                              <li>• Smaller clumps (golf ball sized)</li>
                              <li>• Dark orange/amber urine</li>
                              <li>• Strong, pungent odor</li>
                            </ul>
                          </div>
                        </div>
                        <div className="p-3 bg-primary/10 rounded">
                          <p className="text-sm text-foreground">
                            <strong>Why this matters:</strong> Concentrated urine = kidneys trying to conserve water. This is often the first noticeable sign, appearing before behavioral changes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sign 2 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Dry or Tacky Gums</h3>
                        <p className="text-muted-foreground mb-3">
                          <strong className="text-foreground">How to test:</strong> Gently lift cat's lip and press finger against gums. Should feel wet and slippery (like inside of your cheek).
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="p-3 bg-success/10 rounded">
                            <p className="text-sm font-medium text-success mb-1">Hydrated Gums:</p>
                            <p className="text-xs text-muted-foreground">Wet, glossy appearance. Finger slides easily. Moisture visible.</p>
                          </div>
                          <div className="p-3 bg-destructive/10 rounded">
                            <p className="text-sm font-medium text-destructive mb-1">Dehydrated Gums:</p>
                            <p className="text-xs text-muted-foreground">Dry or sticky feeling. Finger drags slightly. Matte appearance.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sign 3 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Skin Tent Test (Loss of Skin Elasticity)</h3>
                        <p className="text-muted-foreground mb-3">
                          The most reliable at-home dehydration test.
                        </p>
                        <div className="p-4 bg-muted rounded-lg mb-3">
                          <h4 className="font-semibold text-foreground mb-3">How to Perform the Test:</h4>
                          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                            <li>Gently pinch skin at scruff of neck (between shoulder blades)</li>
                            <li>Lift skin up to form a "tent"</li>
                            <li>Release and watch how quickly it returns to normal</li>
                          </ol>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-3 bg-success/10 rounded">
                            <span className="text-foreground font-medium">Immediate snap back (&lt;1 second)</span>
                            <span className="text-sm text-success">Normal hydration ✓</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-primary/10 rounded">
                            <span className="text-foreground font-medium">Returns in 1-2 seconds</span>
                            <span className="text-sm text-foreground">Mild dehydration (5-6%)</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-destructive/10 rounded">
                            <span className="text-foreground font-medium">Stays tented 2+ seconds</span>
                            <span className="text-sm text-destructive">Severe—vet NOW!</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">
                          <strong className="text-foreground">Note:</strong> Senior cats and very thin cats naturally have less elastic skin. Compare to their normal baseline.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sign 4 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Lethargy & Decreased Activity</h3>
                        <p className="text-muted-foreground mb-3">
                          Dehydration reduces blood volume, meaning less oxygen reaches muscles and brain.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Sleeping more than usual (18+ hours vs normal 12-16)</li>
                          <li>• Less interest in play or toys</li>
                          <li>• Slow to get up when you call</li>
                          <li>• Prefers to stay in one spot all day</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sign 5 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Loss of Appetite</h3>
                        <p className="text-muted-foreground mb-3">
                          Dehydration causes nausea and digestive discomfort. Cats often refuse food before refusing water.
                        </p>
                        <div className="p-3 bg-primary/10 rounded">
                          <p className="text-sm text-foreground">
                            <strong>Vicious cycle:</strong> Not eating → less moisture from food → worsens dehydration → more nausea → eats even less.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sign 6 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">6</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Dry Nose</h3>
                        <p className="text-muted-foreground mb-3">
                          While not always reliable (cats' noses naturally dry when sleeping), a persistently dry nose combined with other symptoms is concerning.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="p-3 bg-muted rounded">
                            <p className="font-medium text-foreground mb-1">Normal:</p>
                            <p className="text-muted-foreground">Cool and slightly moist when cat is awake</p>
                          </div>
                          <div className="p-3 bg-destructive/10 rounded">
                            <p className="font-medium text-destructive mb-1">Dehydration:</p>
                            <p className="text-muted-foreground">Dry, warm, possibly cracked even when awake</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sign 7 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">7</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Poor Coat Condition</h3>
                        <p className="text-muted-foreground mb-3">
                          Chronic dehydration affects skin and fur health over weeks/months.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Dull, dry fur (not shiny)</li>
                          <li>• Excessive shedding or matting</li>
                          <li>• Skin flakes or dandruff</li>
                          <li>• Less grooming behavior</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sign 8 */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">8</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Constipation</h3>
                        <p className="text-muted-foreground mb-3">
                          Dehydration dries out stool, making it hard and difficult to pass.
                        </p>
                        <div className="p-3 bg-muted rounded">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Signs:</strong> Straining in litter box, small/hard pellets (dry and crumbly), crying during defecation, going 2+ days without pooping.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sign 9 */}
                  <div className="bg-card border border-destructive/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">9</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-destructive mb-2">Sunken Eyes</h3>
                        <p className="text-muted-foreground mb-3">
                          <strong className="text-destructive">This is a severe sign requiring immediate vet care.</strong>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Eyes appear recessed into the skull due to fluid loss around eyeballs. May look "hollowed out" or have visible third eyelid showing. Indicates 8-10%+ dehydration—life-threatening level.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sign 10 */}
                  <div className="bg-card border border-destructive/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">10</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-destructive mb-2">Panting or Rapid Breathing</h3>
                        <p className="text-muted-foreground mb-3">
                          <strong className="text-destructive">Cats rarely pant. This is an emergency.</strong>
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Unlike dogs, cats only pant when extremely stressed, overheated, or in respiratory distress. Dehydration-related panting means circulatory system is failing.
                        </p>
                        <div className="p-3 bg-destructive/20 rounded">
                          <p className="text-sm text-destructive font-semibold">
                            ⚠️ See vet immediately. Do not wait. This can progress to shock and death within hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sign 11 */}
                  <div className="bg-card border border-destructive/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">11</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-destructive mb-2">Weakness or Collapse</h3>
                        <p className="text-muted-foreground mb-3">
                          <strong className="text-destructive">Critical emergency. Life-threatening.</strong>
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Severe dehydration (10%+ fluid loss) causes circulatory shock. Cat cannot stand, may have seizures, loss of consciousness. Without IV fluids, can be fatal within 24 hours.
                        </p>
                        <div className="p-3 bg-destructive/20 rounded">
                          <p className="text-sm text-destructive font-semibold">
                            🚨 Call emergency vet immediately. Transport cat to clinic ASAP, keeping them warm. This is critical.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Health Dangers */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">The Serious Health Dangers of Dehydration</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-card border border-destructive/30 rounded-xl p-6">
                    <Heart className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">Short-Term (Acute) Dangers</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Urinary blockage:</strong> Concentrated urine forms crystals/stones, potentially fatal in male cats</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Acute kidney injury:</strong> Kidneys shut down without adequate blood flow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Electrolyte imbalance:</strong> Can cause heart arrhythmias, seizures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Shock:</strong> Circulatory failure, life-threatening</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-card border border-destructive/30 rounded-xl p-6">
                    <TrendingDown className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">Long-Term (Chronic) Dangers</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Chronic kidney disease (CKD):</strong> Affects 30-40% of cats over 10, #1 cause of death</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Urinary tract infections:</strong> Recurrent UTIs from concentrated urine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Shortened lifespan:</strong> Studies show 2-4 years less for chronically dehydrated cats</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Digestive issues:</strong> Chronic constipation, megacolon</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">The Cost of Dehydration-Related Illness</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-card rounded">
                      <p className="font-semibold text-foreground mb-1">Urinary Blockage (Emergency)</p>
                      <p className="text-2xl font-bold text-destructive mb-1">$1,500-$3,000</p>
                      <p className="text-xs text-muted-foreground">Surgery + hospitalization</p>
                    </div>
                    <div className="p-3 bg-card rounded">
                      <p className="font-semibold text-foreground mb-1">CKD Management (Annual)</p>
                      <p className="text-2xl font-bold text-destructive mb-1">$500-$3,000</p>
                      <p className="text-xs text-muted-foreground">Medications, special diet, monitoring</p>
                    </div>
                    <div className="p-3 bg-card rounded">
                      <p className="font-semibold text-foreground mb-1">Prevention (Water Fountain)</p>
                      <p className="text-2xl font-bold text-success mb-1">$30-$80</p>
                      <p className="text-xs text-muted-foreground">One-time purchase, 5+ year lifespan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* High-Risk Cats */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">High-Risk Cats: Who Needs Extra Attention</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <Clock className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">Senior Cats (7+ years)</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Declining kidney function + reduced thirst drive = perfect storm for dehydration.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Need 20-30% more water than adults</li>
                      <li>• Monitor closely if diagnosed with CKD</li>
                      <li>• Consider multiple water stations</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <Droplets className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">Dry Food-Only Cats</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get only 6-10% moisture from food vs 70% needed. Must drink 2-3x more water to compensate.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Consider adding wet food (50/50 mix)</li>
                      <li>• Water fountains increase intake by 184%</li>
                      <li>• Add water/broth to dry kibble</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <Heart className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">Cats with Kidney Disease</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      CKD kidneys can't concentrate urine efficiently = constant water loss.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• May need 50-100% more water than healthy cats</li>
                      <li>• Some require subcutaneous fluids</li>
                      <li>• Water fountains critical for management</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <Thermometer className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">Cats in Hot Weather/Climates</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Heat increases water loss through panting and from paw pads.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Need 20-30% more water in summer</li>
                      <li>• Indoor heating in winter also dehydrates</li>
                      <li>• Keep water cool (add ice cubes)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention Methods */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Shield className="h-8 w-8 text-success" />
                  <h2 className="text-3xl font-bold text-foreground">7 Proven Ways to Prevent Dehydration</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-card border border-success/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Use a Water Fountain (+184% Intake)</h3>
                        <p className="text-muted-foreground mb-3">
                          The single most effective intervention according to University of Wisconsin study. Cats drink 38.9 ml/kg/day from fountains vs 13.7 ml/kg from bowls.
                        </p>
                        <div className="p-3 bg-success/10 rounded mb-3">
                          <p className="text-sm text-foreground">
                            <strong>Why it works:</strong> Triggers evolutionary preference for running water (safe/fresh). Oxygenation makes water taste better. Sound/movement attracts cats. Read our guide on <a href="/blog/do-cats-prefer-running-water-science" className="text-primary hover:underline">why cats prefer running water</a>.
                          </p>
                        </div>
                        <Button size="sm" asChild>
                          <a href="/best-cat-water-fountain">Browse Top-Rated Fountains →</a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Transition to Wet Food (Provides 50-60% of Water Needs)</h3>
                        <p className="text-muted-foreground mb-3">
                          Wet food contains 75-80% moisture vs dry food's 6-10%. This alone can meet half of daily water requirements.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="p-3 bg-muted rounded">
                            <p className="font-medium text-foreground mb-1">100% Dry Food:</p>
                            <p className="text-xs text-muted-foreground">10 lb cat needs 8 oz water from drinking</p>
                          </div>
                          <div className="p-3 bg-success/10 rounded">
                            <p className="font-medium text-success mb-1">100% Wet Food:</p>
                            <p className="text-xs text-muted-foreground">Same cat only needs 3-4 oz from drinking</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Multiple Water Stations (3-5 Locations)</h3>
                        <p className="text-muted-foreground mb-3">
                          Cats drink more when water is conveniently located. Place bowls/fountains in multiple rooms where cat spends time.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Important:</strong> Keep water 5+ feet from food bowls and 10+ feet from litter boxes. Cats instinctively avoid drinking near "contamination" sources.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Add Water to Meals</h3>
                        <p className="text-muted-foreground mb-3">
                          Simple but effective: Mix 1-2 tablespoons water into wet food or soak dry kibble for 5 minutes before serving.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Start with small amounts (1 tsp) and gradually increase</li>
                          <li>• Use low-sodium chicken/beef broth for flavor</li>
                          <li>• Some cats prefer "soup" consistency</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Keep Water Fresh & Cool</h3>
                        <p className="text-muted-foreground mb-3">
                          Cats prefer water at 50-60°F (10-15°C) and can smell biofilm that forms within 6-8 hours.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Change water daily minimum (twice daily in summer)</li>
                          <li>• Clean bowls daily with soap (rinse thoroughly)</li>
                          <li>• Use ceramic/stainless (keeps water cooler than plastic)</li>
                          <li>• Add 1-2 ice cubes in hot weather</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">6</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Use Flavor Enhancers (Occasional)</h3>
                        <p className="text-muted-foreground mb-3">
                          For picky drinkers, safe flavor additions can encourage drinking:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 1 tsp tuna water (not oil) from can</li>
                          <li>• Low-sodium chicken/beef broth (no onions/garlic)</li>
                          <li>• Small amount clam juice (high sodium—use sparingly)</li>
                          <li>• Lactose-free cat milk as occasional treat</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">7</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Monitor Daily Intake</h3>
                        <p className="text-muted-foreground mb-3">
                          Track water consumption for 2-3 days to establish baseline, then watch for changes.
                        </p>
                        <div className="p-3 bg-primary/10 rounded">
                          <p className="text-sm text-foreground">
                            <strong>Simple method:</strong> Measure amount you pour into bowl/fountain. Next day, measure what's left before refilling. Difference = consumption. Goal: 3.5-4.5 oz per 5 lbs body weight (more for seniors). See our <a href="/blog/how-much-water-should-cats-drink-by-age" className="text-primary hover:underline">complete water needs calculator</a>.
                          </p>
                        </div>
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
                <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">How quickly can dehydration become dangerous?</h3>
                    <p className="text-muted-foreground">
                      Mild dehydration (5%) can progress to moderate (6-9%) within 12-24 hours if cat continues not drinking. Severe dehydration (10%+) can become life-threatening within 24-48 hours. Kittens dehydrate 3x faster than adults. If you suspect moderate-to-severe dehydration, seek vet care within 12 hours—don't wait to see if it improves.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Can I give my cat Pedialyte or electrolyte solution?</h3>
                    <p className="text-muted-foreground">
                      Only with vet approval. Unflavored Pedialyte (or pet-specific electrolyte solution) can be mixed 50/50 with water as a temporary measure while transporting to vet. NEVER give sugary sports drinks (Gatorade, etc.)—these can worsen symptoms. Proper treatment requires IV fluids administered by a veterinarian.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">My cat refuses to drink water. What should I do?</h3>
                    <p className="text-muted-foreground mb-3">
                      First, determine if it's behavioral or medical:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-3">
                      <li>• <strong className="text-foreground">Behavioral:</strong> Cat is healthy but prefers taps/other sources. Solution: Get a water fountain, add wet food, use flavor enhancers. Read our <a href="/guides/why-your-cat-wont-drink-from-the-fountain" className="text-primary hover:underline">troubleshooting guide</a>.</li>
                      <li>• <strong className="text-foreground">Medical:</strong> Sudden change + other symptoms (lethargy, vomiting, not eating). Solution: Vet visit within 24 hours to rule out illness.</li>
                    </ul>
                    <p className="text-sm text-foreground">
                      <strong>Rule of thumb:</strong> If cat hasn't drunk water for 24 hours AND shows any other symptoms, see a vet. Don't wait for severe dehydration.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Do water fountains really prevent dehydration?</h3>
                    <p className="text-muted-foreground">
                      Yes. University of Wisconsin (2025) study showed 184% increase in water consumption: 38.9 ml/kg/day (fountain) vs 13.7 ml/kg/day (bowl). Cornell University 5-year study found 37% lower incidence of kidney disease in fountain-using cats. Water fountains are the single most effective dehydration prevention tool according to veterinary research. See our <a href="/best-cat-water-fountain" className="text-primary hover:underline">top-tested fountain rankings</a>.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">How do I rehydrate my cat at home?</h3>
                    <p className="text-muted-foreground mb-3">
                      <strong className="text-foreground">For mild dehydration only (skin tent &lt;1-2 seconds, cat still eating/active):</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Offer water fountain or fresh water immediately</li>
                      <li>• Switch to 100% wet food for 48 hours</li>
                      <li>• Add water/broth to food (make it soupy)</li>
                      <li>• Use tuna water or broth to flavor water bowl</li>
                      <li>• Monitor closely for 24 hours—if no improvement or worsens, see vet</li>
                    </ul>
                    <p className="text-sm text-destructive mt-3">
                      <strong>Important:</strong> If dehydration is moderate-to-severe (skin tent 2+ seconds, lethargy, sunken eyes), do NOT attempt home treatment. Vet care with IV fluids required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Shield className="h-12 w-12 text-success mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Prevent Dehydration Before It Starts
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Water fountains increase intake by 184% and reduce kidney disease risk by 37%. Protect your cat's health for less than the cost of one vet visit.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/best-cat-water-fountain">Browse Best Water Fountains →</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/guides/how-to-choose-a-cat-water-fountain">Read Buying Guide →</a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Prevention is always cheaper than treatment. A $50 fountain can prevent $1,500-$3,000 in emergency vet costs.
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
                  <a href="/blog/how-much-water-should-cats-drink-by-age" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-5 hover:shadow-lg transition-all h-full">
                      <Droplets className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        How Much Water Cats Need
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate exact requirements by age (kitten/adult/senior)
                      </p>
                    </div>
                  </a>

                  <a href="/guides/how-to-train-your-cat-to-use-a-water-fountain" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-5 hover:shadow-lg transition-all h-full">
                      <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Train Cat to Use Fountain
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        7-day method with 90% success rate
                      </p>
                    </div>
                  </a>

                  <a href="/blog/cat-hydration-impact-sleep-lifespan" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-5 hover:shadow-lg transition-all h-full">
                      <Heart className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Hydration & Lifespan
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        How proper hydration can double life expectancy
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

export default CatDehydrationSigns;
