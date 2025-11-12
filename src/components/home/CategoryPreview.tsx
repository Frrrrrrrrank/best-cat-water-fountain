import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { DollarSign, Volume2, Sparkles, Shield, ArrowRight } from "lucide-react";

const CategoryPreview = () => {
  const categories = [
    {
      title: "Budget Under $50",
      icon: DollarSign,
      iconColor: "text-success",
      bgColor: "bg-success/10",
      description: "Quality fountains without breaking the bank",
      link: "/best/best-budget-cat-water-fountain-under-50",
    },
    {
      title: "Quiet Models",
      icon: Volume2,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      description: "Bedroom-safe fountains under 40dB",
      link: "/best/best-quiet-cat-water-fountain",
    },
    {
      title: "Ceramic Design",
      icon: Sparkles,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-600/10",
      description: "Aesthetic appeal + 94% less bacteria",
      link: "/best/best-ceramic-cat-water-fountain",
    },
    {
      title: "Stainless Steel",
      icon: Shield,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600/10",
      description: "Maximum hygiene, 5+ year lifespan",
      link: "/best/best-stainless-steel-cat-water-fountain",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect fountain for your specific needs. Each category is
              backed by expert testing and real cat owner feedback.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to={category.link} className="group">
                  <Card className="h-full bg-gradient-card border-border p-6 hover:shadow-lg transition-all hover:scale-105">
                    <div className={`${category.bgColor} rounded-lg p-3 w-fit mb-4`}>
                      <Icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      View Guide
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/best">
                View All Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPreview;
