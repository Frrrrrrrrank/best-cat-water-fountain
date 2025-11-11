import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BestCatWaterFountain from "./pages/BestCatWaterFountain";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import NotFound from "./pages/NotFound";

// Review Pages - WOPET Products
import WopetW03Review from "./pages/reviews/WopetW03Review";
import WopetW03LReview from "./pages/reviews/WopetW03LReview";

// Review Pages - PAWAii Products
import PawaiiWirelessProReview from "./pages/reviews/PawaiiWirelessProReview";
import PawaiiProReview from "./pages/reviews/PawaiiProReview";
import PawaiiWirelessReview from "./pages/reviews/PawaiiWirelessReview";

// Comparison Pages
import CatitVsVeken from "./pages/compare/CatitVsVeken";

// Guide Pages
import CleaningGuide from "./pages/guides/CleaningGuide";
import BuyingGuide from "./pages/guides/BuyingGuide";

// Best/Ranking Pages
import QuietFountains from "./pages/best/QuietFountains";
import StainlessSteelFountains from "./pages/best/StainlessSteelFountains";
import BudgetFountains from "./pages/best/BudgetFountains";
import CeramicFountains from "./pages/best/CeramicFountains";
import MultiCatFountains from "./pages/best/MultiCatFountains";

// Hub Pages
import Guides from "./pages/Guides";
import Reviews from "./pages/Reviews";

// Other Pages
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Blog Pages
import Blog from "./pages/Blog";
import WhyCatsNeedFountains from "./pages/blog/WhyCatsNeedFountains";
import HowOftenChangeFilter from "./pages/blog/HowOftenChangeFilter";
import PlasticVsStainlessVsCeramic from "./pages/blog/PlasticVsStainlessVsCeramic";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/best-cat-water-fountain" element={<BestCatWaterFountain />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          
          {/* Review Pages - WOPET Products */}
          <Route path="/reviews/wopet-w03-wireless-ceramic-fountain-review" element={<WopetW03Review />} />
          <Route path="/reviews/wopet-w03l-ceramic-fountain-review" element={<WopetW03LReview />} />

          {/* Review Pages - PAWAii Products */}
          <Route path="/reviews/pawaii-wireless-fountain-pro-review" element={<PawaiiWirelessProReview />} />
          <Route path="/reviews/pawaii-water-fountain-pro-review" element={<PawaiiProReview />} />
          <Route path="/reviews/pawaii-wireless-fountain-review" element={<PawaiiWirelessReview />} />

          {/* Comparison Pages */}
          <Route path="/compare/catit-flower-vs-veken-95oz" element={<CatitVsVeken />} />
          
          {/* Hub Pages */}
          <Route path="/guides" element={<Guides />} />
          <Route path="/reviews" element={<Reviews />} />

          {/* Guide Pages */}
          <Route path="/guides/how-to-clean-and-descale-a-fountain" element={<CleaningGuide />} />
          <Route path="/guides/how-to-choose-a-cat-water-fountain" element={<BuyingGuide />} />
          
          {/* Best/Ranking Pages */}
          <Route path="/best/best-quiet-cat-water-fountain" element={<QuietFountains />} />
          <Route path="/best/best-stainless-steel-cat-water-fountain" element={<StainlessSteelFountains />} />
          <Route path="/best/best-budget-cat-water-fountain" element={<BudgetFountains />} />
          <Route path="/best/best-ceramic-cat-water-fountain" element={<CeramicFountains />} />
          <Route path="/best/best-multi-cat-water-fountain" element={<MultiCatFountains />} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/why-cats-need-water-fountains" element={<WhyCatsNeedFountains />} />
          <Route path="/blog/how-often-change-cat-fountain-filter" element={<HowOftenChangeFilter />} />
          <Route path="/blog/plastic-vs-stainless-steel-vs-ceramic-cat-fountains" element={<PlasticVsStainlessVsCeramic />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Other Pages */}
          <Route path="/faq" element={<FAQ />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
