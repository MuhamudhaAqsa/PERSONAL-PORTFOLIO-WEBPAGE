// Import CSS module styles
import styles from "./App.module.css";

// Import all the component sections of the website
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects/projects";

// Root component of the application
function App() {
  return (
    <div className={styles.App}>
      {/* Navigation bar at the top */}
      <Navbar />

      {/* Hero section - landing page intro */}
      <Hero />

      {/* About section - personal background */}
      <About />

      {/* Experience section - work history or skills */}
      <Experience />

      {/* Projects section - portfolio work */}
      <Projects />

      {/* Contact section - get in touch form or details */}
      <Contact />
    </div>
  );
}

export default App;
