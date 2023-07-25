import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Testimony from "./components/Testimony";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Hero />
        <Services />
        <Projects />
        <Blog />
        <Team />
        <Testimony />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
