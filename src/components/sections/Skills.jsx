import { motion } from 'framer-motion';
import SkillRadial from '../ui/SkillRadial';

const Skills = () => (
  <section className="py-28 bg-gradient-to-b from-lavender-50/50 to-white px-4">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        How I Create Value
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <SkillRadial label="Product Strategy" percent={90} delay={0} />
        <SkillRadial label="Agile Leadership" percent={85} delay={0.1} />
        <SkillRadial label="Full-Stack Dev" percent={80} delay={0.2} />
        <SkillRadial label="Stakeholder Mgmt" percent={88} delay={0.3} />
        <SkillRadial label="Data-Driven Decisions" percent={82} delay={0.4} />
      </div>

      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        {["Jira", "Figma", "React", "NestJS", "PostgreSQL", "WSJF", "Scrum", "A/B Testing", "Notion", "ClickUp"].map((tool, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-lavender-200"
            whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(139, 92, 246, 0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tool}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;