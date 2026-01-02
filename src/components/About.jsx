import { Cloud, Terminal, Code, Network } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-green-400 text-3xl font-bold mb-4">
          About Me
        </h2>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT: TEXT */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            I am a Computer Science Engineering student with a strong foundation
            in problem solving, data structures, and system-level thinking. I enjoy
            building scalable backend systems and cloud-focused solutions that
            emphasize performance, security, and reliability. My interests lie
            primarily in Cloud Computing and DevOps, where I explore automation,
            infrastructure fundamentals, and secure system design. Through
            academic projects and hands-on practice, I aim to translate
            theoretical knowledge into real-world engineering solutions.
          </p>

          {/* RIGHT: SKILL CARDS WITH ICONS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="border border-green-500 rounded-xl p-6 flex items-center gap-4 hover:bg-green-500/5 transition">
              <Cloud className="text-green-400" size={28} />
              <span className="text-lg">Cloud Computing</span>
            </div>

            <div className="border border-green-500 rounded-xl p-6 flex items-center gap-4 hover:bg-green-500/5 transition">
              <Terminal className="text-green-400" size={28} />
              <span className="text-lg">DevOps Basics</span>
            </div>

            <div className="border border-green-500 rounded-xl p-6 flex items-center gap-4 hover:bg-green-500/5 transition">
              <Code className="text-green-400" size={28} />
              <span className="text-lg">Full Stack Basics</span>
            </div>

            <div className="border border-green-500 rounded-xl p-6 flex items-center gap-4 hover:bg-green-500/5 transition">
              <Network className="text-green-400" size={28} />
              <span className="text-lg">Networking</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
