import Skills from "./Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black relative text-white">

      {/* NAVBAR */}
      <nav className="fixed top-6 right-10 z-50 text-gray-300">
        <ul className="flex space-x-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-green-400">Home</a></li>
          <li><a href="#about" className="hover:text-green-400">About</a></li>
          <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
        </ul>
      </nav>

      {/* HERO / HOME SECTION */}
      <section
        id="home"
        className="h-[75vh] flex flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
          <span className="text-green-400 glow">Ashaaz Ahmed Khan A</span>
        </h1>

        <p className="text-gray-400 text-lg">
          Software Engineer • Cloud & DevOps Enthusiast
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 border border-green-400 text-green-400 rounded-lg
                       hover:bg-green-400 hover:text-black transition font-medium"
          >
            View Projects
          </a>

          <a
            href="/ASHAAZ_AHMED_KHAN_A_resume.pdf"
            download
            className="px-6 py-3 bg-green-400 text-black rounded-lg
                       hover:bg-green-500 transition font-medium"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <About />
      </section>

      {/* SKILLS SECTION */}
      <section id="skills">
        <Skills />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-14 px-6">
        <Projects />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-14 px-6">
        <Contact />
      </section>

      {/* FOOTER / COPYRIGHT */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
      
      </footer>

    </div>
  );
}

export default App;
