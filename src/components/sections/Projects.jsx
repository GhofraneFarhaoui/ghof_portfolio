import { motion } from 'framer-motion';
import Card from '../ui/Card';

const Projects = () => (
  <section id="projects" className="py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Selected Work
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {[
          {
            title: "retalk Communication Suite",
            role: "Product Owner & Developer",
            desc: "End-to-end ownership of a B2B communication platform serving international clients.",
            outcomes: ["95% sprint completion rate", "40% ↑ user engagement", "Launched 3 major features"]
          },
          {
            title: "Healthcare Staffing MVP",
            role: "Product Strategy & BD",
            desc: "Defined product vision and go-to-market strategy for Canadian healthcare staffing platform.",
            outcomes: ["Validated $2M+ opportunity", "Reduced time-to-market by 3 months", "Secured 5 pilot clients"]
          }
        ].map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{proj.title}</h3>
              <p className="text-lavender-600 mb-3">{proj.role}</p>
              <p className="text-gray-600 mb-4">{proj.desc}</p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Impact</h4>
                <ul className="space-y-1">
                  {proj.outcomes.map((o, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-pink-500 mr-2">✦</span>
                      <span className="text-gray-700">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;