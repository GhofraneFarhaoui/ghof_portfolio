const Card = ({ children, className = '' }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-lavender-200 shadow-sm ${className}`}>
    {children}
  </div>
);

export default Card;