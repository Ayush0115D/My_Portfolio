import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import Certifications from './sections/Certifications';
import DownloadResume from './sections/DownloadResume';



const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Hero />
          <ShowcaseSection />
          <LogoShowcase />
          <FeatureCards />
          <Experience />
          <TechStack />
          <Certifications />
          <Contact />
          <Footer />
        </>
      } />
      {/* <Route path="/resume" element={<DownloadResume />} /> */}
    </Routes>
  </BrowserRouter>
);
export default App;