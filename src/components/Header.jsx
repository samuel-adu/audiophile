/* eslint-disable react/prop-types */
import '../styles/header.css';

function Header({ children }) {
  return (
    <header className="header">
      <h2 className="heading-2 page-heading">{children}</h2>
    </header>
  );
}

export default Header;
