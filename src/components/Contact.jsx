import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 md:px-16 py-16 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-green-400 text-4xl font-bold mb-3">
          Contact
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          Feel free to reach out for internships, collaborations, or opportunities.
        </p>

        {/* CONTACT ITEMS */}
        <div className="flex flex-col md:flex-row justify-center gap-10 text-lg mb-16">

          {/* EMAIL */}
          <a
            href="mailto:ashaazahmed2005@gmail.com"
            className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
          >
            <Mail size={22} className="text-green-400" />
            ashaazahmed2005@gmail.com
          </a>

          {/* PHONE */}
          <a
            href="tel:+919360496129"
            className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
          >
            <Phone size={22} className="text-green-400" />
            +91 9360496129
          </a>

          <a
            href="https://www.linkedin.com/in/ashaazahmedkhan15/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>

          <a
            href="https://github.com/Ashaaz123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
          >
            <Github size={22} />
            GitHub
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-500 tracking-wide">
          © 2025 Ashaaz Ahmed Khan A. All rights reserved.
        </p>

      </div>
    </section>
  );
}
