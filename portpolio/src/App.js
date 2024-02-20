import React from "react";
import Header from "./components/Header";
import Navbar from './components/Navbar'
import About from "./pages/About";
import Experience from "./pages/Experience";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MySkills from "./pages/MySkills";

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <About />
      <Experience />
      <MySkills/>
      <MyProjects/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
