import PropType from 'prop-types';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import Menu from './Menu';
import { useState } from 'react';

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <button onClick={toggleMenu} className="menu-toggle">
        <img src={hamburger} alt="" />
      </button>

      {isOpen && (
        <div className="nav-menu container">
          <Menu />
        </div>
      )}
    </>
  );
}

NavMenu.propTypes = {
  isOpen: PropType.bool,
};

export default NavMenu;
