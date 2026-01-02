import automl from "../assets/projects/automl.jpg";
import sdms from "../assets/projects/sdms.jpg";
import secure from "../assets/projects/lan-chat.jpg";
import weather from "../assets/projects/skycast.jpg";

function Projects() {
  const projects = [
    {
      title: "AutoML for Small & Imbalanced Datasets",
      img: automl,
      desc: [
        "Built ML pipelines for small and imbalanced datasets",
        "Applied SMOTE and under-sampling techniques",
        "Performed hyperparameter tuning using GridSearch",
        "Evaluated models using precision, recall, and F1-score"
      ]
    },
    {
      title: "Student Database Management System",
      img: sdms,
      desc: [
        "Developed Flask + MySQL based CRUD application",
        "Implemented joins, constraints, and indexing",
        "Enabled Excel export of database records",
        "Designed web-based student management system"
      ]
    },
    {
      title: "Secure LAN Chat & File Transfer",
      img: secure,
      desc: [
        "Built LAN-based real-time chat application",
        "Implemented AES encryption for secure messaging",
        "Used RSA for secure key exchange",
        "Enabled encrypted file transfer between users"
      ]
    },
    {
      title: "SkyCast Weather Forecast (CLI)",
      img: weather,
      desc: [
        "Developed CLI-based weather forecasting tool",
        "Integrated live weather API for real-time data",
        "Displayed temperature, humidity, and conditions",
        "Handled API errors and invalid inputs gracefully"
      ]
    }
  ];

  return (
    <section className="px-8 py-20">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-300 mb-2">
                {p.title}
              </h3>

              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                {p.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
