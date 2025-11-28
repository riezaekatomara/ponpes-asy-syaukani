import { useState } from 'react';
import PropTypes from 'prop-types';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

const Input = ({ 
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  icon: Icon,
  className = '',
  inputClassName = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-semibold text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon 
              className={`w-5 h-5 transition-colors ${
                error 
                  ? 'text-red-500' 
                  : isFocused 
                    ? 'text-primary-500' 
                    : 'text-gray-400'
              }`}
              aria-hidden="true"
            />
          </div>
        )}

        {/* Input Field */}
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          onFocus={() => setIsFocused(true)}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`
            w-full px-4 py-3 rounded-xl
            border-2 transition-all duration-200
            text-gray-900 placeholder:text-gray-400
            focus:outline-none
            disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-500
            ${Icon ? 'pl-12' : 'pl-4'}
            ${type === 'password' ? 'pr-12' : 'pr-4'}
            ${error 
              ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
              : 'border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'
            }
            ${inputClassName}
          `}
          {...props}
        />

        {/* Password Toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Eye className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div 
          id={`${name}-error`}
          className="flex items-start gap-2 text-sm text-red-600"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'number', 'date', 'url']),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  icon: PropTypes.elementType,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default Input;