import HomePage from "@/components/homepage/page";
import WhoWeAre from "@/components/whoweare/page";
import Navbar from "@/components/Navbar";

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
    </div>
  );
}
