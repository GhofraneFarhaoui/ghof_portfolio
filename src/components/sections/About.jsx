import { motion } from 'framer-motion';
import Card from '../ui/Card';

const About = () => (
  <section id="about" className="py-28 px-4 relative">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">From Code to Strategy</h2>
          <p className="text-lg text-gray-600 mb-5 leading-relaxed">
            My journey began in the trenches of software engineering — writing React components, debugging NestJS APIs, and obsessing over clean architecture.
          </p>
          <p className="text-lg text-gray-600 mb-5 leading-relaxed">
            But I quickly realized my passion wasn’t just building things right — it was building the <span className="font-semibold">right things</span>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, I blend technical depth with product intuition to create solutions that users love and businesses grow.
          </p>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-lavender-100 to-pink-100 rounded-3xl p-8 shadow-lg border border-lavender-200">
            <div className="space-y-5">
              {[
                { icon: "⚙️", title: "Engineering Roots", desc: "Full-stack dev experience in React, Vue, NestJS" },
                { icon: "🎯", title: "Product Mindset", desc: "Backlog refinement, roadmap planning, KPI tracking" },
                { icon: "🤝", title: "Bridge Builder", desc: "Align engineers, designers, and stakeholders" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;