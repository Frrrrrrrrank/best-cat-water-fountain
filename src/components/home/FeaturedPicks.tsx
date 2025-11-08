import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import catitImage from "@/assets/catit-flower.jpg";
import stainlessImage from "@/assets/stainless-fountain.jpg";
import vekenImage from "@/assets/veken-fountain.jpg";

const FeaturedPicks = () => {
  
  const picks = [
    {
      id: 1,
      name: "Catit Flower Fountain",
      image: catitImage,
      badge: "Best Overall",
      badgeColor: "bg-badge-best",
      rating: 9.2,
      bestFor: "Easy Cleaning & Quiet Operation",
      price: "$29.99",
      features: ["3 Water Flow Settings", "BPA-Free Plastic", "Ultra Quiet"],
      link: "/reviews/catit-flower-fountain-review",
    },
    {
      id: 2,
      name: "Stainless Steel Premium",
      image: stainlessImage,
      badge: "Best Quality",
      badgeColor: "bg-badge-premium",
      rating: 8.9,
      bestFor: "Durability & Health",
      price: "$54.99",
      features: ["100% Stainless Steel", "Dishwasher Safe", "UV Sterilization"],
      link: "/reviews/stainless-steel-premium-review",
    },
    {
      id: 3,
      name: "Veken 95oz Fountain",
      image: vekenImage,
      badge: "Best Value",
      badgeColor: "bg-badge-value",
      rating: 8.5,
      bestFor: "Multiple Cats & Budget",
      price: "$24.99",
      features: ["Large 95oz Capacity", "LED Light", "3 Filters Included"],
      link: "/reviews/veken-95oz-fountain-review",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Editor's Top Picks for 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tested and reviewed by real cat owners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {picks.map((pick) => (
            <Link key={pick.id} to={pick.link} className="group">
              <div className="h-full bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={pick.image}
                    alt={`${pick.name} - ${pick.bestFor}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${pick.badgeColor} text-white border-0`}>
                      {pick.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-bold text-foreground">{pick.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {pick.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Best for:</span> {pick.bestFor}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {pick.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{pick.price}</span>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/best-cat-water-fountain">
            <Button size="lg" variant="outline">
              See All Recommendations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPicks;
