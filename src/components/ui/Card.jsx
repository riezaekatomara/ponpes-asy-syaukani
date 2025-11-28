import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '' 
}) => {
  const baseClasses = `
    rounded-2xl
    transition-all duration-300
  `;

  const variants = {
    default: `
      bg-white
      border border-gray-200
      shadow-soft
      ${hover ? 'hover:shadow-medium hover:-translate-y-1' : ''}
    `,
    shadow: `
      bg-white
      shadow-medium
      ${hover ? 'hover:shadow-large hover:-translate-y-2' : ''}
    `,
    gradient: `
      bg-gradient-to-br from-primary-50 via-white to-accent-50
      border border-primary-100
      shadow-soft
      ${hover ? 'hover:shadow-medium' : ''}
    `,
    outline: `
      bg-transparent
      border-2 border-primary-200
      ${hover ? 'hover:border-primary-400 hover:bg-primary-50' : ''}
    `,
    glass: `
      bg-white/80
      backdrop-blur-sm
      border border-white/20
      shadow-soft
      ${hover ? 'hover:bg-white/90' : ''}
    `,
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} p-6 ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'shadow',
    'gradient',
    'outline',
    'glass'
  ]),
  hover: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;