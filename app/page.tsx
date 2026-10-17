import HomePage from "@/components/Home/homepage/page";
import WhoWeAre from "@/components/Home/whoweare/page";
import OurClients from "@/components/Home/ourclients/page";  
import Navbar from "@/components/Navbar";
import TechStackSection from "@/components/Home/techstack/page";
import Team from "@/components/Home/team/page";
import GallerySlider from "@/components/Home/galleryslider/page";

export default function Home() {
  return (
    <div>
      <header className="showcase-header home-shared-header">
        <a href="/" className="showcase-logo" aria-label="SDV Edutech Homepage">
          <img className="brand-logo" src="/logo.png" alt="SDV Edutech Logo" />
        </a>
        <Navbar />
      </header>
      <HomePage />
      <WhoWeAre />
      <OurClients />
      <TechStackSection />
      <Team />
      <GallerySlider />
    </div>
  );
}


