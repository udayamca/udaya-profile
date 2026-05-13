import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skill from "./pages/Skills";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <Routes>
          <Route path="/udaya-profile/" element={<Home />}></Route>
          <Route path="/udaya-profile/skills" element={<Skill />}></Route>
          <Route
            path="/udaya-profile/experience"
            element={<Experience />}
          ></Route>
          <Route path="/udaya-profile/about" element={<About />}></Route>
          <Route path="/udaya-profile/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
