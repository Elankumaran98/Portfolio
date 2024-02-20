import React from "react";
import Header from "./components/Header";
import Navbar from './components/Navbar'
import About from "./pages/About";
import Experience from "./pages/Experience";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";



function App() {
  
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <About />
      <Experience />
      <MyProjects/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
