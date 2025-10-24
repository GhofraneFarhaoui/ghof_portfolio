import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-5 px-6">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <motion.h1 
        className="text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-lavender-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Ghofrane
        </span>
      </motion.h1>
      <div className="hidden md:flex space-x-7 text-gray-600 font-medium">
        {['About', 'Journey', 'Work', 'Connect'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase() === 'journey' ? 'experience' : item.toLowerCase() === 'work' ? 'projects' : item.toLowerCase()}`}
            className="hover:text-lavender-600 transition-colors relative group"
          >
            {item}
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-lavender-500 to-pink-500 rounded-full"
              layoutId="navIndicator"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;