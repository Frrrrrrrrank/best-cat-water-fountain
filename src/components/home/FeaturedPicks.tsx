import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import wopetW03Image from "@/assets/wopet-w03-main.webp";
import wopetW03LImage from "@/assets/wopet-w03l-main.jpg";
import pawaiiWirelessProImage from "@/assets/pawaii-wireless-pro-white.png";
import pawaiiWirelessStandardImage from "@/assets/pawaii-wireless-standard.png";
import pawaiiProWhiteImage from "@/assets/pawaii-pro-white.jpg";

const FeaturedPicks = () => {
  const picks = [
    {
      id: 1,
      name: "WOPET W03 Wireless Ceramic Fountain",
      image: wopetW03Image,
      badge: "Editor's Choice",
      badgeColor: "bg-badge-best",
      rating: 4.9,
      bestFor: "Ultra Quiet & Wireless",
      price: "$89.99",
      features: ["< 25dB Ultra Quiet", "30-Day Battery Life", "Premium Ceramic"],
      link: "/reviews/wopet-w03-wireless-ceramic-fountain-review",
      affiliateLink: "https://wopet.com/product/wopet-ceramics-wireless-pet-water-fountain-for-dogs-cats-w03/?ref=foeyvtfh",
    },
    {
      id: 2,
      name: "PAWAii Wireless Pet Water Fountain Pro",
      image: pawaiiWirelessProImage,
      badge: "Premium Pick",
      badgeColor: "bg-badge-premium",
      rating: 4.8,
      bestFor: "Advanced Wireless Design",
      price: "$69.99",
      features: ["True Wireless Freedom", "Smart LED Indicators", "Dual Color Options"],
      link: "/reviews/pawaii-wireless-fountain-pro-review",
      affiliateLink: "https://www.pawaii.com/products/pawaii-wireless-pet-water-fountain-pro?ref=zwyvbrrf&utm_medium=affiliate&utm_source=goaffpro",
    },
    {
      id: 3,
      name: "WOPET W03L Ceramic Fountain",
      image: wopetW03LImage,
      badge: "Best Value",
      badgeColor: "bg-badge-value",
      rating: 4.7,
      bestFor: "Premium Quality on Budget",
      price: "$59.99",
      features: ["Dishwasher Safe Ceramic", "Ultra Quiet Pump", "Auto Shutoff"],
      link: "/reviews/wopet-w03l-ceramic-fountain-review",
      affiliateLink: "https://wopet.com/product/wopet-ceramic-pet-water-fountain-w03l/?ref=foeyvtfh",
    },
    {
      id: 4,
      name: "PAWAii Water Fountain Pro",
      image: pawaiiProWhiteImage,
      badge: "Pro Choice",
      badgeColor: "bg-badge-premium",
      rating: 4.6,
      bestFor: "Smart Features & Convenience",
      price: "$49.99",
      features: ["Wireless Convenience", "Easy Clean Design", "Quiet Operation"],
      link: "/reviews/pawaii-water-fountain-pro-review",
      affiliateLink: "https://www.pawaii.com/products/white-water-fountain-pro?ref=zwyvbrrf&utm_medium=affiliate&utm_source=goaffpro",
    },
    {
      id: 5,
      name: "PAWAii Wireless Pet Water Fountain",
      image: pawaiiWirelessStandardImage,
      badge: "Budget Wireless",
      badgeColor: "bg-badge-value",
      rating: 4.5,
      bestFor: "Affordable Wireless Option",
      price: "$39.99",
      features: ["Wireless Design", "Lightweight & Portable", "Easy Maintenance"],
      link: "/reviews/pawaii-wireless-fountain-review",
      affiliateLink: "https://www.pawaii.com/products/pawaii-wireless-pet-water-fountain?ref=zwyvbrrf&utm_medium=affiliate&utm_source=goaffpro",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
