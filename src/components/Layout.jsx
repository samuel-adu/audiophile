import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import CartModal from '../features/cart/CartModal';

function Layout() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <CartModal openCart={openCart} setOpenCart={setOpenCart} />
      <Navbar setOpenCart={setOpenCart} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
