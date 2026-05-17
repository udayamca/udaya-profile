import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skill from "./pages/Skills";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { useState } from "react";

function App() {
  const [toggleEnabled, setToggleEnabled] = useState(true);
  return (
    <>
      <div
        className={`min-h-screen dark:bg-slate-900 font-encode ${toggleEnabled ? "dark" : ""}`}
      >
        <Navbar
          toggleEnabled={toggleEnabled}
          onToggleChange={setToggleEnabled}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/skills" element={<Skill />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
