import { motion } from 'framer-motion';

const BacklogItem = ({ delay, text, top, left }) => (
  <motion.div
    className="absolute bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm border border-lavender-200 text-sm font-medium text-gray-700 max-w-[180px]"
    style={{ top, left, zIndex: 10 }}
    initial={{ opacity: 0, y: 20, rotate: -2 }}
    animate={{ 
      opacity: [0, 1, 0.9],
      y: [20, 0, -10],
      rotate: [-2, 0, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    {text}
  </motion.div>
);

export default BacklogItem;