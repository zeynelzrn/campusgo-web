import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
