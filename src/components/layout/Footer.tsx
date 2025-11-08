import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xl">💧</span>
              </div>
              <span className="font-bold text-foreground">Best Cat Water Fountain</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Expert reviews and buying guides for cat water fountains
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/best-cat-water-fountain" className="text-muted-foreground hover:text-primary transition-colors">Best Fountains</Link></li>
              <li><Link to="/reviews/catit-flower-fountain-review" className="text-muted-foreground hover:text-primary transition-colors">All Reviews</Link></li>
              <li><Link to="/compare/catit-flower-vs-veken-95oz" className="text-muted-foreground hover:text-primary transition-colors">Comparisons</Link></li>
              <li><Link to="/guides/how-to-choose-a-cat-water-fountain" className="text-muted-foreground hover:text-primary transition-colors">Guides</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/best/best-quiet-cat-water-fountain" className="text-muted-foreground hover:text-primary transition-colors">Quiet Fountains</Link></li>
              <li><Link to="/best/best-stainless-steel-cat-water-fountain" className="text-muted-foreground hover:text-primary transition-colors">Stainless Steel</Link></li>
              <li><Link to="/best/best-ceramic-cat-water-fountain" className="text-muted-foreground hover:text-primary transition-colors">Ceramic</Link></li>
              <li><Link to="/best/best-budget-cat-water-fountain-under-50" className="text-muted-foreground hover:text-primary transition-colors">Budget Options</Link></li>
              <li><Link to="/best/best-cat-water-fountain-for-multiple-cats" className="text-muted-foreground hover:text-primary transition-colors">Multi-Cat</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/affiliate-disclosure" className="text-muted-foreground hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Best Cat Water Fountain. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-2xl">
              As an Amazon Associate we earn from qualifying purchases. We may earn a commission from other retailers when you click through our links, at no additional cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
