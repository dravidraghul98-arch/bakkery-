import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstagramOrderSection } from './components/InstagramOrderSection';
import { MenuSection } from './components/MenuSection';
import { CustomCakeEngine } from './components/CustomCakeEngine';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationFooter } from './components/LocationFooter';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Header with clean logo & navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* 1. Hero Showcase matching exact reference banner layout */}
        <Hero />

        {/* 2. Instagram Gallery Showcase */}
        <InstagramOrderSection />

        {/* 3. Patisserie Menu Collection (Prices & Cart removed) */}
        <MenuSection />

        {/* 4. Custom Cake Consultation Engine (Estimator removed) */}
        <CustomCakeEngine />

        {/* 5. Customer Reviews & Ratings */}
        <ReviewsSection />
      </main>

      {/* 6. Location & Footer Details (Online orders removed) */}
      <LocationFooter />

    </div>
  );
}

export default App;

