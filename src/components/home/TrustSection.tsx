import { CheckCircle2, Users, TestTube, Heart } from "lucide-react";

const TrustSection = () => {
  const stats = [
    {
      icon: TestTube,
      value: "50+",
      label: "Fountains Tested",
      description: "Hands-on testing in real homes",
    },
    {
      icon: Users,
      value: "200+",
      label: "Cat Owners",
      description: "Real feedback from pet parents",
    },
    {
      icon: Heart,
      value: "1000+",
      label: "Happy Cats",
      description: "Hydrated and healthy",
    },
    {
      icon: CheckCircle2,
      value: "2025",
      label: "Regular Updates",
      description: "Latest models and prices",
    },
  ];

  const methodology = [
    "Noise level testing in quiet bedroom environments",
    "Ease of cleaning and assembly evaluation",
    "Water flow and filtration effectiveness",
    "Long-term durability and maintenance costs",
    "Real cat acceptance and behavior observation",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Methodology */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Trust Our Reviews?
              </h2>
              <p className="text-lg text-muted-foreground">
                Real testing, real cats, real results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {methodology.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background/50 rounded-lg">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Transparency matters:</span> We may earn a commission when you buy through our links, but this never affects our rankings or recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
