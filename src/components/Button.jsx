import PropType from 'prop-types';
import '../styles/button.css';
import classNames from 'classnames';

function Button({ children, size, variant, className, path, ...rest }) {
  const sizeClass = size && `btn--${size}`;
  const variantClass = variant && `btn--${variant}`;
  const buttonClass = classNames(className, sizeClass, variantClass);

  return (
    <button className={`btn ${buttonClass}`} {...rest} href={path}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropType.string,
  size: PropType.string,
  variant: PropType.string,
  className: PropType.string,
  path: PropType.string,
};

export default Button;
