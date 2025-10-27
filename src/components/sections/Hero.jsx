import { motion } from 'framer-motion';
import BacklogItem from '../ui/BacklogItem';

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
    <BacklogItem delay={0} text="Define user stories" top="15%" left="5%" />
    <BacklogItem delay={1.2} text="Prioritize with WSJF" top="70%" left="75%" />
    <BacklogItem delay={0} text="Bridge tech & business" top="40%" left="80%" />
    <BacklogItem delay={0.8} text="Ship value, not features" top="85%" left="8%" />

    <div className="text-center max-w-3xl relative z-20">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <span className="block">Product</span>
        <span className="block bg-gradient-to-r from-lavender-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Thinker
        </span>
        <span className="block">+ Builder</span>
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Engineering student turned Product Owner. I turn complex problems into elegant digital experiences,with data, empathy, and clean code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <button
          onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-gradient-to-r from-lavender-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Let’s Build Together
        </button>
      </motion.div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-br from-lavender-50/30 via-pink-50/20 to-beige-50/40"></div>
  </section>
);

export default Hero;