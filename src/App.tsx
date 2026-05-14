import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TattooPage } from "./pages/TattooPage";
import { PiercingPage } from "./pages/PiercingPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ArtistsPage } from "./pages/ArtistsPage";
import { ArtistDetailsPage } from "./pages/ArtistDetailsPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { BookingProvider } from "./context/BookingContext";

// ScrollToTop component to handle scrolling when route changes or hash links are clicked
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <BookingProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="tattoo" element={<TattooPage />} />
            <Route path="piercing" element={<PiercingPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="artists" element={<ArtistsPage />} />
            <Route path="artists/:id" element={<ArtistDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;
