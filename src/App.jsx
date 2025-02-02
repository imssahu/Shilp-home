// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import Schedule from "./components/Schedule/Schedule";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AboutShilp from "./components/About-Shilp/About-Shilp";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Hero />
        <AboutShilp />
        <About />
        <Events />
        <Gallery />
        <Schedule />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
