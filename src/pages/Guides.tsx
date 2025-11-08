import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Droplets, Wrench, ArrowRight } from "lucide-react";

const Guides = () => {
  const guides = [
    {
      title: "How to Choose a Cat Water Fountain: Complete Buying Guide",
      description: "Expert guide to choosing the perfect cat fountain. Compare materials, noise levels, capacity, and features. 7 key factors explained.",
      href: "/guides/how-to-choose-a-cat-water-fountain",
      category: "Buying Guide",
      readTime: "12 min read",
      icon: <BookOpen className="h-5 w-5" />,
      featured: true
    },
    {
      title: "How to Clean and Descale a Cat Water Fountain",
      description: "Complete cleaning schedule, descaling methods, and maintenance tips to keep your fountain quiet and hygienic.",
      href: "/guides/how-to-clean-and-descale-a-fountain",
      category: "Maintenance",
      readTime: "8 min read",
      icon: <Wrench className="h-5 w-5" />,
      featured: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cat Water Fountain Guides - Expert Buying & Maintenance Tips</title>
        <meta
          name="description"
          content="Expert guides on choosing, cleaning, and maintaining cat water fountains. From buying guides to troubleshooting tips, everything you need to know."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/guides/" />
        <meta property="og:title" content="Cat Water Fountain Guides - Expert Tips" />
        <meta property="og:description" content="Complete guides for choosing and maintaining cat water fountains. Expert advice from testing 50+ models." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Guides" }
        ]} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Expert Guides
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Cat Water Fountain Guides
                </h1>
                <p className="text-xl text-muted-foreground">
                  Everything you need to know about choosing, using, and maintaining cat water fountains. Expert advice based on testing 50+ models.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Guides */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Essential Guides</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {guides.map((guide, index) => (
                    <article key={index} className="bg-gradient-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <div className="text-white">{guide.icon}</div>
                          </div>
                          <div>
                            <Badge variant="outline" className="border-primary text-primary text-xs">
                              {guide.category}
                            </Badge>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                          <a href={guide.href}>{guide.title}</a>
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                          <Button variant="outline" size="sm" asChild>
                            <a href={guide.href}>
                              Read Guide
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Guide Categories */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Category</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Buying Guides</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn how to choose the right fountain for your cat's needs
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-choose-a-cat-water-fountain">View Guide →</a>
                    </Button>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Wrench className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Maintenance</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Keep your fountain clean, quiet, and working perfectly
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-clean-and-descale-a-fountain">View Guide →</a>
                    </Button>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Droplets className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Troubleshooting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Fix common issues like noise, leaks, and low water flow
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/blog">View Articles →</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Popular Resources</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <a href="/best-cat-water-fountain" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Best Cat Water Fountains 2025
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Our top-tested picks for every budget
                      </p>
                    </div>
                  </a>

                  <a href="/blog/why-cats-need-water-fountains" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Why Cats Need Water Fountains
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        7 health benefits explained by vets
                      </p>
                    </div>
                  </a>

                  <a href="/blog/how-often-change-cat-fountain-filter" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Filter Replacement Schedule
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        How often to change filters by brand
                      </p>
                    </div>
                  </a>

                  <a href="/best/best-quiet-cat-water-fountain" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Quietest Fountains Under 40dB
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Bedroom-safe models tested
                      </p>
                    </div>
                  </a>

                  <a href="/blog/plastic-vs-stainless-steel-vs-ceramic-cat-fountains" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Material Comparison Guide
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Plastic vs stainless vs ceramic
                      </p>
                    </div>
                  </a>

                  <a href="/faq" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Quick answers to common questions
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Choose the Perfect Fountain?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Browse our tested rankings to find the best fountain for your cat
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/best-cat-water-fountain">View Top Picks →</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/blog">Read Blog Articles →</a>
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

export default Guides;
