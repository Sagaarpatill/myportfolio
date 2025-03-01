import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Projects from "./Components/Projects";
import Socials from "./Components/Socials";
import ContactMe from "./Components/ContactMe";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="bg-white w-screen text-black">
      <Navbar />
      <div id="home" data-scroll-section><LandingPage /></div>
      <Marquee />
      <div id="about" data-scroll-section><About /></div>
      <Eyes />
      <div id="projects" data-scroll-section><Projects /></div>
      <div id="socials" data-scroll-section><Socials /></div>
      <div id="contact" data-scroll-section><ContactMe /></div>
    </div>
  );
}

export default App;
