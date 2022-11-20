import ProjectList from "./components/ProjectList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import HeroBanner from "./pages/HeroBanner";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <About />
      <Experience />
      <Skills />
      <ProjectList />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
