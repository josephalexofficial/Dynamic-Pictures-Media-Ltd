import { Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { TeamPage } from "@/pages/TeamPage";
import { EventPage } from "@/pages/EventPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { ScrollToTop } from "@/components/ScrollToTop";

export function App() {
  return (
    <div className="font-sans antialiased bg-sand text-ink min-h-svh">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events/:slug" element={<EventPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
