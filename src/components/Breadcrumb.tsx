import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://best-cat-water-fountain.com${item.href || ""}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            {items.map((item, index) => (
              <li 
                key={index} 
                className="inline-flex items-center gap-1.5"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                )}
                {item.href ? (
                  <Link 
                    to={item.href}
                    itemProp="item"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span 
                    className="text-foreground font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;
