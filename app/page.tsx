import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Projects from './components/Projects';
import EcommerceServices from './components/EcommerceServices';
import EcommerceCTA from './components/EcommerceCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <Projects />
      <EcommerceServices />
      <EcommerceCTA />
      <ContactSection />
      <Footer />
      </main>
  );
}
