import PropType from 'prop-types';
import '../styles/header.css';

function Header({ children }) {
  return (
    <header className="header">
      <h2 className="heading-2 page-heading">{children}</h2>
    </header>
  );
}

Header.propTypes = {
  children: PropType.string,
};

export default Header;
