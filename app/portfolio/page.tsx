import Navbar from '../components/Navbar';
import PortfolioHero from './components/PortfolioHero';
import Gallery from './components/Gallery';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  return (
    <main className="relative">
      <Navbar />
      <PortfolioHero />
      <Gallery />
      <Footer />
    </main>
  );
}

