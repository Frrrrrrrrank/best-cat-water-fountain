import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Heart, Calendar, Sparkles, AlertTriangle, FlaskConical, MapPin } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "How Cat Hydration Impacts Sleep Quality & Lifespan: 2025 Research",
      description: "Veterinary research proves proper hydration can double cat lifespan. Learn how water fountains prevent kidney disease and improve sleep quality.",
      href: "/blog/cat-hydration-impact-sleep-lifespan",
      category: "Health & Longevity",
      readTime: "10 min read",
      icon: <Heart className="h-5 w-5" />,
      featured: true
    },
    {
      title: "Where to Place Your Cat Water Fountain: 7 Science-Backed Rules (2025)",
      description: "2025 research proves cats drink 30% more water when fountains are placed correctly. Learn the 7 science-backed placement rules for optimal hydration.",
      href: "/blog/where-to-place-cat-water-fountain",
      category: "Research & Science",
      readTime: "8 min read",
      icon: <MapPin className="h-5 w-5" />,
      featured: true
    },
    {
      title: "2025 Research: Science-Backed Methods to Increase Cat Water Intake by 3x",
      description: "New University of Wisconsin study proves cats drink 38.9 vs 13.7 ml/kg/day using evidence-based methods. Latest veterinary research on the best cat water fountain.",
      href: "/blog/science-backed-methods-increase-cat-water-intake",
      category: "Research & Science",
      readTime: "11 min read",
      icon: <FlaskConical className="h-5 w-5" />,
      featured: true
    },
    {
      title: "Cat Hydration Guide: 10 Essential Tips Every Owner Must Know",
      description: "60-70% of cats are dehydrated. Learn exactly how much water cats need, signs of dehydration, and why the best cat water fountain increases intake by 50%.",
      href: "/blog/cat-hydration-tips-how-much-water",
      category: "Health & Care",
      readTime: "10 min read",
      icon: <Droplets className="h-5 w-5" />,
      featured: true
    },
    {
      title: "Why Ceramic Cat Water Fountains Are Best: 94% Less Bacteria Proven",
      description: "Lab tests prove ceramic fountains have 94% less bacteria than plastic. Discover why ceramic is the healthiest material for the best cat water fountain.",
      href: "/blog/why-ceramic-cat-water-fountains-are-best",
      category: "Buying Guide",
      readTime: "9 min read",
      icon: <Sparkles className="h-5 w-5" />,
      featured: true
    },
    {
      title: "Why Do Cats Need Water Fountains? 7 Health Benefits Explained",
      description: "Discover why vets recommend water fountains for cats. Learn 7 proven health benefits including increased hydration and kidney disease prevention.",
      href: "/blog/why-cats-need-water-fountains",
      category: "Health Benefits",
      readTime: "8 min read",
      icon: <Heart className="h-5 w-5" />,
      featured: true
    },
    {
      title: "How Often to Change Cat Fountain Filter? Complete Guide",
      description: "Learn exactly when to change your cat fountain filter. Signs of a dirty filter, replacement schedules by brand, and cost-saving tips.",
      href: "/blog/how-often-change-cat-fountain-filter",
      category: "Maintenance",
      readTime: "6 min read",
      icon: <Calendar className="h-5 w-5" />,
      featured: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cat Water Fountain Blog - Expert Tips, Reviews & Buying Guides</title>
        <meta
          name="description"
          content="Expert advice on choosing, maintaining, and getting the most from your cat water fountain. Health benefits, maintenance tips, and product comparisons."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/blog/" />
        <meta property="og:title" content="Cat Water Fountain Blog - Expert Tips & Guides" />
        <meta property="og:description" content="Everything you need to know about cat water fountains. Expert advice, reviews, and maintenance guides." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Blog" }
        ]} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Expert Guides
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Cat Water Fountain Blog
                </h1>
                <p className="text-xl text-muted-foreground">
                  Expert advice, maintenance tips, and buying guides to keep your cat healthy and hydrated.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.filter(article => article.featured).map((article, index) => (
                    <article key={index} className="bg-gradient-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <div className="text-white">{article.icon}</div>
                          </div>
                          <div>
                            <Badge variant="outline" className="border-primary text-primary text-xs">
                              {article.category}
                            </Badge>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                          <a href={article.href}>{article.title}</a>
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{article.readTime}</span>
                          <Button variant="outline" size="sm" asChild>
                            <a href={article.href}>
                              Read More
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

          {/* Categories */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Topic</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Health Benefits</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn how fountains improve cat health and prevent disease
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/blog/why-cats-need-water-fountains">View Articles →</a>
                    </Button>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Maintenance & Care</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Keep your fountain clean, quiet, and working perfectly
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-clean-and-descale-a-fountain">View Guides →</a>
                    </Button>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Droplets className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Buying Guides</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Compare materials, features, and find the perfect fountain
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/guides/how-to-choose-a-cat-water-fountain">View Guides →</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Resources */}
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
                        Our top-tested picks for every budget and need
                      </p>
                    </div>
                  </a>

                  <a href="/best/best-quiet-cat-water-fountain" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Quietest Fountains Under 40dB
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Bedroom-safe models tested in controlled environments
                      </p>
                    </div>
                  </a>

                  <a href="/best/best-stainless-steel-cat-water-fountain" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Best Stainless Steel Fountains
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Most hygienic option for health-conscious owners
                      </p>
                    </div>
                  </a>

                  <a href="/best/best-budget-cat-water-fountain" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Best Budget Fountains Under $30
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Affordable options that don't compromise on quality
                      </p>
                    </div>
                  </a>

                  <a href="/compare/catit-flower-vs-veken-95oz" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Fountain Comparisons
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Side-by-side comparisons of popular models
                      </p>
                    </div>
                  </a>

                  <a href="/faq" className="group">
                    <div className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Quick answers to common fountain questions
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

export default Blog;
