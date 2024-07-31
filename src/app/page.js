import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Projects from "./components/Projects";
import EarlyAccessProgram from "./components/EarlyAccessProgram";
import Releases from "./components/Releases";
import Blog from "./components/Blog";
import News from "./components/News";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Resources from "./components/Resources";
import Funding from "./components/Funding";
import NeoPod from "./components/NeoPod";
 
export const metadata = {
  title: `Neo X | Neo's EVM-based sidechain`,
  description: `Neo X is a fully EVM compatible sidechain featuring Neo's own dBFT consensus mechanism, a native bridge from Neo N3, and anti-MEV capabilities.`,
}
 

export default function Home() {
  return (
    <main className="antialiased w-full flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Projects/>
      <Funding/>
      <Resources/>
      <NeoPod/>
      <Releases/>
      <Blog/>
      <News/>
      <Contact/>
      {/* <Partners/> */}
      <Footer/>
    </main>
  );
}
