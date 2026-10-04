import HeroSection from "./heroSection";
import About from "./about"
import Works from "./works";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Works />
      <Contact />
    </div>
  );
}
