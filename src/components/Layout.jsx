import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <About />
      <Footer />
    </>
  );
}

export default Layout;
