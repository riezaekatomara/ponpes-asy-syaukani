import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon = null,
  href = null,
  to = null,
  onClick = null,
  type = 'button',
  className = '',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-300
    focus:outline-none focus:ring-4
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const variants = {
    primary: `
      bg-primary-500 text-white
      hover:bg-primary-600 hover:shadow-medium
      focus:ring-primary-200
      active:scale-95
    `,
    secondary: `
      bg-secondary-500 text-white
      hover:bg-secondary-600 hover:shadow-medium
      focus:ring-secondary-200
      active:scale-95
    `,
    accent: `
      bg-accent-500 text-gray-900
      hover:bg-accent-600 hover:shadow-gold
      focus:ring-accent-200
      active:scale-95
    `,
    outline: `
      bg-transparent border-2 border-primary-500 text-primary-600
      hover:bg-primary-50 hover:border-primary-600
      focus:ring-primary-200
      active:scale-95
    `,
    ghost: `
      bg-transparent text-primary-600
      hover:bg-primary-50
      focus:ring-primary-200
      active:scale-95
    `,
    danger: `
      bg-red-500 text-white
      hover:bg-red-600 hover:shadow-lg
      focus:ring-red-200
      active:scale-95
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]}`;

  // Render icon component
  const IconComponent = icon;

  const content = (
    <>
      {loading && (
        <svg 
          className="animate-spin h-5 w-5" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && IconComponent && <IconComponent className="w-5 h-5" aria-hidden="true" />}
      {children}
    </>
  );

  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  // React Router link
  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'accent',
    'outline',
    'ghost',
    'danger'
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.elementType, // Changed from PropTypes.node to PropTypes.elementType
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;