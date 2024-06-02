import PropType from 'prop-types';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import { IoMdClose } from 'react-icons/io';
import Menu from './Menu';
import { useState } from 'react';

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function menuClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={toggleMenu} className="menu-toggle">
        {isOpen ? (
          <IoMdClose className="close-icon" />
        ) : (
          <img src={hamburger} alt="" />
        )}
      </button>

      {isOpen && (
        <div className="nav-menu ">
          <Menu menuClose={menuClose} />
        </div>
      )}
    </>
  );
}

NavMenu.propTypes = {
  isOpen: PropType.bool,
};

export default NavMenu;
