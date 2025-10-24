import { useState } from 'react';
import { motion } from 'framer-motion';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 800);
  };

  return (
    <section id="connect" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 -left-10 w-72 h-72 rounded-full bg-lavender-200/20 blur-3xl"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-pink-200/20 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Let’s Shape the Future</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you’re building a product, scaling a team, or exploring collaboration — I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <a href="mailto:farhaouighofrane@gmail.com" className="text-lavender-600 hover:underline">farhaouighofrane@gmail.com</a>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">LinkedIn</h3>
                <a href="https://linkedin.com/in/GhofraneFarhaoui" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:underline">@GhofraneFarhaoui</a>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">Sousse, Tunisia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {['name', 'email', 'message'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field}</label>
                  {field === 'message' ? (
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-lavender-200 focus:ring-2 focus:ring-lavender-500 focus:border-transparent"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-lavender-200 focus:ring-2 focus:ring-lavender-500 focus:border-transparent"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-lavender-500 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitSuccess && (
                <motion.p
                  className="text-green-600 font-medium text-center mt-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  ✨ Message received! I’ll reply within 24h.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;