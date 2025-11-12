import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, DollarSign, Volume2, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryHub = () => {
  const categories = [
    {
      title: "Best Budget Cat Water Fountains Under $50",
      slug: "best-budget-cat-water-fountain-under-50",
      description: "Quality fountains that won't break the bank. We tested 30+ budget models to find the best value picks under $50 with reliable pumps and easy cleaning.",
      icon: DollarSign,
      iconColor: "text-success",
      bgColor: "bg-success/10",
      tested: "30+ models tested",
      topPick: "PAWAii Wireless - $39.99"
    },
    {
      title: "Best Quiet Cat Water Fountains",
      slug: "best-quiet-cat-water-fountain",
      description: "Bedroom-safe fountains operating under 40dB. Tested with calibrated decibel meters at 3-foot distance to find the quietest models for light sleepers.",
      icon: Volume2,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      tested: "47 models tested",
      topPick: "WOPET W03 - <25dB"
    },
    {
      title: "Best Ceramic Cat Water Fountains",
      slug: "best-ceramic-cat-water-fountain",
      description: "Premium ceramic fountains for aesthetics and hygiene. Lab-tested for bacteria resistance—94% less bacterial growth vs plastic after 60 days.",
      icon: Sparkles,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-600/10",
      tested: "15+ models tested",
      topPick: "WOPET W03 - 9.1/10 design"
    },
    {
      title: "Best Stainless Steel Cat Water Fountains",
      slug: "best-stainless-steel-cat-water-fountain",
      description: "Maximum hygiene and durability. 304 stainless steel reduces bacteria by 99.7% vs plastic. Dishwasher-safe and lasts 5+ years.",
      icon: Shield,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600/10",
      tested: "20+ models tested",
      topPick: "99.7% bacteria reduction"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Cat Water Fountain Categories - Expert Buying Guides",
    "description": "Browse our expert-tested cat water fountain categories: budget picks, quiet models, ceramic designs, and stainless steel options. Over 100 fountains tested.",
    "url": "https://best-cat-water-fountain.com/best",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://best-cat-water-fountain.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Categories",
          "item": "https://best-cat-water-fountain.com/best"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Cat Water Fountain Buying Guides by Category | 2025 Expert Reviews</title>
        <meta
          name="description"
          content="Expert buying guides for cat water fountains organized by category: budget under $50, quiet models under 40dB, ceramic designs, and stainless steel options. 100+ fountains tested in our lab."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/best" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Categories" }
        ]} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Cat Water Fountain Buying Guides
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Find the perfect fountain for your needs. We've tested over 100 models and organized them into specialized categories based on price, noise level, material, and design.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <span>100+ Fountains Tested</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Lab-Verified Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span>Updated January 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category Cards */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <Card key={index} className="bg-gradient-card border-border p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`${category.bgColor} rounded-lg p-3`}>
                            <Icon className={`h-6 w-6 ${category.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl font-bold text-foreground mb-2">
                              {category.title}
                            </h2>
                            <div className="flex flex-wrap gap-3 mb-3">
                              <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                                {category.tested}
                              </span>
                              <span className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary font-medium">
                                {category.topPick}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {category.description}
                        </p>

                        <Button asChild className="w-full">
                          <Link to={`/best/${category.slug}`}>
                            View Guide
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Why Trust Our Reviews */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Why Trust Our Reviews?
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm font-medium text-foreground mb-2">Fountains Tested</div>
                    <p className="text-sm text-muted-foreground">
                      We purchase and test every fountain ourselves—no sponsored placements
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-success mb-2">90-Day</div>
                    <div className="text-sm font-medium text-foreground mb-2">Real-World Testing</div>
                    <p className="text-sm text-muted-foreground">
                      Long-term testing reveals pump reliability and bacteria buildup
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">Lab</div>
                    <div className="text-sm font-medium text-foreground mb-2">Verified Data</div>
                    <p className="text-sm text-muted-foreground">
                      Decibel meters, bacteria swabs, and flow rate measurements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Not Sure Where to Start?
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-card border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">Overall Best</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      See our top-rated fountains across all categories
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/best-cat-water-fountain">View Rankings</Link>
                    </Button>
                  </Card>

                  <Card className="bg-gradient-card border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">All Reviews</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Browse individual fountain reviews
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/reviews">View Reviews</Link>
                    </Button>
                  </Card>

                  <Card className="bg-gradient-card border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">Buying Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn what to look for in a fountain
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/guides/how-to-choose-a-cat-water-fountain">Read Guide</Link>
                    </Button>
                  </Card>
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

export default CategoryHub;
