import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, CheckCircle } from "lucide-react";
import catitImage from "@/assets/catit-flower.jpg";
import vekenImage from "@/assets/veken-fountain.jpg";
import stainlessImage from "@/assets/stainless-fountain.jpg";

const Reviews = () => {
  const reviews = [
    {
      title: "Catit Flower Fountain Review",
      description: "The quietest fountain we've tested at 35dB. Perfect for bedrooms and noise-sensitive cats. Our #1 budget pick.",
      href: "/reviews/catit-flower-fountain-review",
      image: catitImage,
      rating: 4.8,
      price: "$44.99",
      pros: ["Quietest at 35dB", "Easy to clean", "Affordable"],
      featured: true,
      badge: "Best Budget"
    },
    {
      title: "Veken 95oz Fountain Review",
      description: "Large capacity fountain perfect for multi-cat homes. Transparent design lets you monitor water level easily.",
      href: "/reviews/veken-95oz-fountain-review",
      image: vekenImage,
      rating: 4.6,
      price: "$35.99",
      pros: ["Large 95oz capacity", "Multiple flow modes", "Great value"],
      featured: true,
      badge: "Multi-Cat"
    },
    {
      title: "Stainless Steel Premium Fountain Review",
      description: "Premium stainless steel construction with UV sterilization. Most hygienic option for health-conscious owners.",
      href: "/reviews/stainless-steel-premium-review",
      image: stainlessImage,
      rating: 4.9,
      price: "$54.99",
      pros: ["304 stainless steel", "UV sterilization", "Lasts 5+ years"],
      featured: true,
      badge: "Premium"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cat Water Fountain Reviews - Tested & Ranked by Experts (2025)</title>
        <meta
          name="description"
          content="Honest reviews of 50+ cat water fountains tested. See real noise levels, cleaning difficulty, and long-term performance. Updated January 2025."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/reviews/" />
        <meta property="og:title" content="Cat Water Fountain Reviews - Expert Testing" />
        <meta property="og:description" content="Real reviews from testing 50+ fountains. Noise levels, cleaning ease, and durability ratings." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Reviews" }
        ]} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    <Star className="h-3 w-3 mr-1 fill-primary" />
                    Expert Reviews
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    50+ Models Tested
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Cat Water Fountain Reviews
                </h1>
                <p className="text-xl text-muted-foreground">
                  Honest, detailed reviews from real testing. We measure noise levels, track cleaning time, and monitor long-term performance to give you the truth about each fountain.
                </p>
              </div>
            </div>
          </section>

          {/* Testing Methodology */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Testing Process</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Noise Testing</h3>
                        <p className="text-sm text-muted-foreground">
                          Calibrated decibel meter at 3ft distance, measured at days 1, 30, 60, and 90
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Cleaning Ease</h3>
                        <p className="text-sm text-muted-foreground">
                          Timed weekly cleanings to measure actual effort required
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Long-term Testing</h3>
                        <p className="text-sm text-muted-foreground">
                          3-6 month durability testing with real cats in home environments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Reviews */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Top Reviewed Fountains</h2>
                <div className="space-y-8">
                  {reviews.map((review, index) => (
                    <article key={index} className="bg-gradient-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="grid md:grid-cols-3 gap-6 p-6">
                        <div className="relative">
                          <img
                            src={review.image}
                            alt={review.title}
                            className="w-full rounded-xl"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-badge-best text-white border-0">
                              {review.badge}
                            </Badge>
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <h3 className="text-2xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                            <a href={review.href}>{review.title}</a>
                          </h3>

                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(review.rating)
                                      ? "fill-primary text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                              <span className="text-sm font-semibold text-foreground ml-1">
                                {review.rating}/5.0
                              </span>
                            </div>
                            <span className="text-lg font-bold text-primary">{review.price}</span>
                          </div>

                          <p className="text-muted-foreground mb-4">
                            {review.description}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                            <div className="flex flex-wrap gap-2">
                              {review.pros.map((pro, idx) => (
                                <Badge key={idx} variant="outline" className="border-success text-success">
                                  {pro}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button asChild>
                              <a href={review.href}>
                                Full Review
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a href="#">Check Price</a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Review Categories */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Category</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <a href="/best/best-quiet-cat-water-fountain" className="group">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Quietest Fountains
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Under 40dB - bedroom safe
                      </p>
                    </div>
                  </a>

                  <a href="/best/best-stainless-steel-cat-water-fountain" className="group">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Stainless Steel Reviews
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Most hygienic option
                      </p>
                    </div>
                  </a>

                  <a href="/best/best-ceramic-cat-water-fountain" className="group">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Ceramic Fountain Reviews
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Stylish and quiet
                      </p>
                    </div>
                  </a>

                  <a href="/best/best-budget-cat-water-fountain" className="group">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Budget Fountain Reviews
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Under $50
                      </p>
                    </div>
                  </a>

                  <a href="/best/best-multi-cat-water-fountain" className="group">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Multi-Cat Reviews
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Large capacity 95oz+
                      </p>
                    </div>
                  </a>

                  <a href="/compare/catit-flower-vs-veken-95oz" className="group">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Comparison Reviews
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Head-to-head testing
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  See All Rankings
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Browse our complete rankings with detailed comparisons and test data
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/best-cat-water-fountain">View Top Picks →</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/guides/how-to-choose-a-cat-water-fountain">Buying Guide →</a>
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

export default Reviews;
