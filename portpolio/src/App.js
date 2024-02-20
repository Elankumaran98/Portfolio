import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import MyProjects from "./pages/myprojects/MyProjects";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import MySkills from "./pages/myskills/MySkills";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <MySkills />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
