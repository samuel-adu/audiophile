/* eslint-disable react/no-unescaped-entities */
import '../styles/home.css';
import ProductHeadphones from '../components/ProductHeadphones';
import ProductSpeaker from '../components/ProductSpeaker';
import ProductEarphones from '../components/ProductEarphones';
import Menu from '../components/Menu';

function Home() {
  return (
    <>
      <header>
        <ProductHeadphones />
      </header>
      <main className="container main-section">
        <Menu />
        <ProductSpeaker />
        <ProductEarphones />
      </main>
    </>
  );
}

export default Home;
