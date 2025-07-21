import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
