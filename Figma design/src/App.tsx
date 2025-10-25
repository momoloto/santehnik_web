import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ServiceCategory } from "./components/ServiceCategory";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { categories } from "./data/services-data";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (section: string) => {
    // Если мы на странице категории, сначала возвращаемся на главную
    if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />
      <main>
        {selectedCategory && currentCategory ? (
          <ServiceCategory
            categoryId={currentCategory.id}
            categoryName={currentCategory.name}
            categoryIcon={currentCategory.icon}
            onBack={handleBackToCategories}
          />
        ) : (
          <>
            <Hero />
            <Services onCategoryClick={handleCategoryClick} />
            <Features />
            <About />
          </>
        )}
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
