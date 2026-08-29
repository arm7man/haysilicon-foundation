import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import FocusAreas from "@/components/FocusAreas";
import WhoWeServe from "@/components/WhoWeServe";
import Collaboration from "@/components/Collaboration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <FocusAreas />
        <WhoWeServe />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
