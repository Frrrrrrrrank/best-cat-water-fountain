import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, CheckCircle2, XCircle } from "lucide-react";
import catitImage from "@/assets/catit-flower.jpg";
import stainlessImage from "@/assets/stainless-fountain.jpg";
import vekenImage from "@/assets/veken-fountain.jpg";

const BestCatWaterFountain = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Catit Flower Fountain",
        "image": "https://best-cat-water-fountain.com/assets/catit-flower.jpg",
        "description": "Best overall cat water fountain with 35dB whisper-quiet operation and triple filtration",
        "offers": {
          "@type": "Offer",
          "price": "44.99",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "9.2",
          "bestRating": "10"
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Stainless Steel Premium Fountain",
        "image": "https://best-cat-water-fountain.com/assets/stainless-fountain.jpg",
        "description": "Premium 304 stainless steel fountain with UV-C sterilization",
        "offers": {
          "@type": "Offer",
          "price": "54.99",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "8.9",
          "bestRating": "10"
        }
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Veken 95oz Pet Fountain",
        "image": "https://best-cat-water-fountain.com/assets/veken-fountain.jpg",
        "description": "Best value fountain with large capacity and LED indicator",
        "offers": {
          "@type": "Offer",
          "price": "24.99",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "8.5",
          "bestRating": "10"
        }
      }
    ]
  };

  const topPicks = [
    {
      rank: 1,
      name: "Catit Flower Fountain",
      image: catitImage,
      rating: 9.2,
      badge: "Best Overall",
      badgeColor: "bg-badge-best",
      bestFor: "Easy cleaning & quiet operation",
      material: "BPA-Free Plastic",
      capacity: "100oz (3L)",
      noise: "Very Quiet",
      price: "$29.99",
      pros: [
        "Three water flow settings for picky cats",
        "Extremely easy to disassemble and clean",
        "Very quiet motor, bedroom-friendly",
        "Dishwasher safe (except motor)",
        "Affordable replacement filters",
      ],
      cons: [
        "Plastic material (not as durable as stainless)",
        "Needs cleaning every 2 weeks with multiple cats",
        "No smart features or indicators",
      ],
      affiliate: "https://www.amazon.com",
    },
    {
      rank: 2,
      name: "Stainless Steel Premium Fountain",
      image: stainlessImage,
      rating: 8.9,
      badge: "Best Quality",
      badgeColor: "bg-badge-premium",
      bestFor: "Health-conscious owners & durability",
      material: "304 Stainless Steel",
      capacity: "81oz (2.4L)",
      noise: "Whisper Quiet",
      price: "$54.99",
      pros: [
        "100% stainless steel - no plastic parts",
        "UV-C sterilization kills 99.9% bacteria",
        "Completely dishwasher safe",
        "Premium build quality, lasts years",
        "No bacterial buildup or odors",
      ],
      cons: [
        "Higher upfront cost",
        "Heavier than plastic alternatives",
        "Shows water spots if not dried properly",
      ],
      affiliate: "https://www.amazon.com",
    },
    {
      rank: 3,
      name: "Veken 95oz Pet Fountain",
      image: vekenImage,
      rating: 8.5,
      badge: "Best Value",
      badgeColor: "bg-badge-value",
      bestFor: "Budget-conscious & multiple cats",
      material: "BPA-Free Plastic",
      capacity: "95oz (2.8L)",
      noise: "Quiet",
      price: "$24.99",
      pros: [
        "Extra large capacity for multiple cats",
        "Includes 3 replacement filters",
        "LED light indicator for low water",
        "Excellent value for money",
        "Easy to refill with large opening",
      ],
      cons: [
        "Pump can be slightly louder than premium models",
        "More parts to clean",
        "Plastic quality not as premium",
      ],
      affiliate: "https://www.amazon.com",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Cat Water Fountain 2025 - Top 10 Tested & Reviewed</title>
        <meta
          name="description"
          content="The definitive guide to the best cat water fountains. We tested 50+ models. Compare quiet, stainless steel, ceramic & smart options. Updated January 2025."
        />
        <meta property="og:title" content="Best Cat Water Fountain 2025 - Expert Reviews" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://best-cat-water-fountain.com/best-cat-water-fountain/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Best Cat Water Fountains" }
        ]} />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    Updated: January 2025
                  </Badge>
                  <span className="text-sm text-muted-foreground">• 8 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Best Cat Water Fountain: Top 10 Picks for 2025
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  After testing over 50 cat water fountains, we've identified the best options for every cat and budget. From whisper-quiet models to smart fountains with UV sterilization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#top-picks" className="inline-block">
                    <Button size="lg">Jump to Top Picks</Button>
                  </a>
                  <a href="#comparison-table" className="inline-block">
                    <Button size="lg" variant="outline">Comparison Table</Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Top Picks Section */}
          <section id="top-picks" className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Top Picks at a Glance
              </h2>

              <div className="space-y-12">
                {topPicks.map((product) => (
                  <article key={product.rank} className="bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
                      {/* Image Column */}
                      <div className="relative">
                        <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                          <img
                            src={product.image}
                            alt={`${product.name} - ${product.bestFor}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge className={`${product.badgeColor} text-white border-0`}>
                            #{product.rank} {product.badge}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-bold text-foreground">{product.rating}</span>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground">
                            <span className="font-medium text-foreground">Best for:</span> {product.bestFor}
                          </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Material</p>
                            <p className="text-sm font-medium text-foreground">{product.material}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                            <p className="text-sm font-medium text-foreground">{product.capacity}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Noise Level</p>
                            <p className="text-sm font-medium text-foreground">{product.noise}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Price</p>
                            <p className="text-xl font-bold text-primary">{product.price}</p>
                          </div>
                        </div>

                        {/* Pros & Cons */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-success mb-3 flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4" />
                              Pros
                            </h4>
                            <ul className="space-y-2">
                              {product.pros.map((pro, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0 mt-1.5"></div>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-destructive mb-3 flex items-center gap-2">
                              <XCircle className="h-4 w-4" />
                              Cons
                            </h4>
                            <ul className="space-y-2">
                              {product.cons.map((con, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0 mt-1.5"></div>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                          <a href={product.affiliate} target="_blank" rel="sponsored nofollow" className="flex-1 min-w-[200px]">
                            <Button className="w-full" size="lg">
                              Check Price on Amazon
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                          <Button variant="outline" size="lg">
                            Full Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* How We Test */}
          <section id="how-we-test" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  How We Test Cat Water Fountains
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    Our testing process involves real-world evaluation across multiple criteria that matter most to cat owners and their pets.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Noise Testing", desc: "We measure decibel levels in quiet bedroom environments and during nighttime use." },
                      { title: "Cleaning Ease", desc: "Each fountain is disassembled, cleaned, and reassembled multiple times to evaluate user-friendliness." },
                      { title: "Water Flow", desc: "We test all flow settings and observe cat drinking behavior and preferences." },
                      { title: "Durability", desc: "Long-term testing for motor reliability, material quality, and maintenance requirements." },
                      { title: "Filter Performance", desc: "We evaluate filtration effectiveness, replacement cost, and availability." },
                      { title: "Cat Acceptance", desc: "Real feedback from cat owners on whether their pets actually use the fountains." },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-card border border-border rounded-lg p-6">
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
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

export default BestCatWaterFountain;
