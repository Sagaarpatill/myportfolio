import { useEffect } from "react";
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
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      scroll.destroy(); // Cleanup to prevent memory leaks
    };
  }, []);

  return (
    <div data-scroll-container className="bg-white w-screen text-black">
      <Navbar />
      <div id="home" data-scroll-section><LandingPage /></div>
      <div data-scroll-section><Marquee /></div>
      <div id="about" data-scroll-section><About /></div>
      <div id="eyes" data-scroll-section><Eyes /></div>
      <div id="projects" data-scroll-section><Projects /></div>
      <div id="socials" data-scroll-section><Socials /></div>
      <div id="contact" data-scroll-section><ContactMe /></div>
    </div>
  );
}

export default App;
