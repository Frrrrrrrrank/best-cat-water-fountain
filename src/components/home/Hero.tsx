import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/cute-cat-drinking.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay/Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 flex items-center justify-center min-h-[600px] md:min-h-[700px]">
        <div className="max-w-3xl text-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Best Cat Water Fountain
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Expert reviews, tested by real cat owners.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/best-cat-water-fountain">
                <Button size="lg" className="w-full sm:w-auto px-8">
                  View Top Picks
                </Button>
              </Link>
              <Link to="/guides/how-to-choose-a-cat-water-fountain">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                  Buying Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
