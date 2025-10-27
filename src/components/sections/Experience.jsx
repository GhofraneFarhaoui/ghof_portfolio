import { motion } from 'framer-motion';
import Card from '../ui/Card';

const Experience = () => (
  <section id="experience" className="py-28 bg-gradient-to-b from-white to-lavender-50/50 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Product Journey
      </motion.h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-lavender-300 to-pink-300 rounded-full"></div>

        {[
          {
            title: "Product Owner",
            company: "retalk",
            period: "Oct 2024 – Present",
            desc: "Managed backlog, wrote user stories, and led Agile ceremonies to deliver client-aligned features.",
            color: "from-lavender-500 to-pink-500"
          },
          {
            title: "Business Development Manager",
            company: "VPS Service Sante, Canada",
            period: "Sep 2024 – Apr 2025",
            desc: "Expanded healthcare client base by 30% through strategic market entry and stakeholder alignment.",
            color: "from-pink-500 to-rose-500"
          },
          {
            title: "Full Stack Developer Intern",
            company: "retalk",
            period: "Jul 2024 – Oct 2024",
            desc: "Built responsive UIs with React/TS and scalable APIs with NestJS & PostgreSQL.",
            color: "from-rose-500 to-orange-500"
          }
        ].map((exp, i) => (
          <motion.div
            key={i}
            className={`mb-2 flex ${i % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-center`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className={`w-10/12 md:w-5/12 ${i % 2 === 0 ? 'md:pr-16 text-right md:text-left' : 'md:pl-16 text-left md:text-right'}`}>
              <Card>
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-lavender-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                <p className="text-gray-600 mt-3">{exp.desc}</p>
              </Card>
            </div>
            <div className="w-2/12 flex justify-center z-10">
              <motion.div
                className="w-6 h-6 rounded-full shadow-lg border-4 border-white"
                style={{ 
                  background: `linear-gradient(to right, ${exp.color.split(' ')[0]}, ${exp.color.split(' ')[2]})`
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;