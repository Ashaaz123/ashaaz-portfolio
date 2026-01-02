const skills = [
  { name: "Data Structures & Algorithms", level: 75 },
  { name: "Java", level: 85 },
  { name: "Problem Solving", level: 70 },
  { name: "Cloud Computing (AWS)", level: 70 },
  { name: "DevOps Fundamentals", level: 65 },
  { name: "SQL & Databases", level: 85 },
  { name: "Python", level: 80 },
  { name: "Git & Version Control", level: 75 },
];

function Skills() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
          Skills & Expertise
        </h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
