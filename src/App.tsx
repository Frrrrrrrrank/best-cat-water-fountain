import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
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
import TrainingGuide from "./pages/guides/TrainingGuide";
import CatWontDrinkFromFountain from "./pages/guides/CatWontDrinkFromFountain";

// Best/Ranking Pages
import QuietFountains from "./pages/best/QuietFountains";
import StainlessSteelFountains from "./pages/best/StainlessSteelFountains";
import BudgetFountains from "./pages/best/BudgetFountains";
import CeramicFountains from "./pages/best/CeramicFountains";
import MultiCatFountains from "./pages/best/MultiCatFountains";

// Hub Pages
import Guides from "./pages/Guides";
import Reviews from "./pages/Reviews";
import CategoryHub from "./pages/CategoryHub";

// Other Pages
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Blog Pages
import Blog from "./pages/Blog";
import WhyCatsNeedFountains from "./pages/blog/WhyCatsNeedFountains";
import HowOftenChangeFilter from "./pages/blog/HowOftenChangeFilter";
import PlasticVsStainlessVsCeramic from "./pages/blog/PlasticVsStainlessVsCeramic";
import WhyCeramicCatFountains from "./pages/blog/WhyCeramicCatFountains";
import CatHydrationTips from "./pages/blog/CatHydrationTips";
import ScienceBackedHydration from "./pages/blog/ScienceBackedHydration";
import CatWaterBowlPlacement from "./pages/blog/CatWaterBowlPlacement";
import CatHydrationLifespanSleep from "./pages/blog/CatHydrationLifespanSleep";
import WaterQualityCatHealth from "./pages/blog/WaterQualityCatHealth";
import CatWaterNeedsByAge from "./pages/blog/CatWaterNeedsByAge";
import CatsPreferRunningWater from "./pages/blog/CatsPreferRunningWater";
import CatDehydrationSigns from "./pages/blog/CatDehydrationSigns";
import CatWontDrinkWater from "./pages/blog/CatWontDrinkWater";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/best" element={<CategoryHub />} />

          {/* Guide Pages */}
          <Route path="/guides/how-to-clean-and-descale-a-fountain" element={<CleaningGuide />} />
          <Route path="/guides/how-to-choose-a-cat-water-fountain" element={<BuyingGuide />} />
          <Route path="/guides/how-to-train-your-cat-to-use-a-water-fountain" element={<TrainingGuide />} />
          <Route path="/guides/why-your-cat-wont-drink-from-the-fountain" element={<CatWontDrinkFromFountain />} />
          
          {/* Best/Ranking Pages */}
          <Route path="/best/best-quiet-cat-water-fountain" element={<QuietFountains />} />
          <Route path="/best/best-stainless-steel-cat-water-fountain" element={<StainlessSteelFountains />} />
          <Route path="/best/best-budget-cat-water-fountain-under-50" element={<BudgetFountains />} />
          <Route path="/best/best-ceramic-cat-water-fountain" element={<CeramicFountains />} />
          <Route path="/best/best-multi-cat-water-fountain" element={<MultiCatFountains />} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/water-quality-impact-cat-health" element={<WaterQualityCatHealth />} />
          <Route path="/blog/cat-hydration-impact-sleep-lifespan" element={<CatHydrationLifespanSleep />} />
          <Route path="/blog/where-to-place-cat-water-fountain" element={<CatWaterBowlPlacement />} />
          <Route path="/blog/science-backed-methods-increase-cat-water-intake" element={<ScienceBackedHydration />} />
          <Route path="/blog/cat-hydration-tips-how-much-water" element={<CatHydrationTips />} />
          <Route path="/blog/why-ceramic-cat-water-fountains-are-best" element={<WhyCeramicCatFountains />} />
          <Route path="/blog/why-cats-need-water-fountains" element={<WhyCatsNeedFountains />} />
          <Route path="/blog/how-often-change-cat-fountain-filter" element={<HowOftenChangeFilter />} />
          <Route path="/blog/plastic-vs-stainless-steel-vs-ceramic-cat-fountains" element={<PlasticVsStainlessVsCeramic />} />
          <Route path="/blog/how-much-water-should-cats-drink-by-age" element={<CatWaterNeedsByAge />} />
          <Route path="/blog/do-cats-prefer-running-water-science" element={<CatsPreferRunningWater />} />
          <Route path="/blog/cat-dehydration-warning-signs-prevention" element={<CatDehydrationSigns />} />
          <Route path="/blog/cat-wont-drink-enough-water-solutions" element={<CatWontDrinkWater />} />

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
