/* eslint-disable react/no-unescaped-entities */
import '../styles/home.css';
import ProductHeadphones from '../components/ProductHeadphones';
import ProductSpeaker from '../components/ProductSpeaker';
import ProductEarphones from '../components/ProductEarphones';
// import Header from '../components/Header';

function Home() {
  return (
    <>
      <ProductHeadphones />
      <main className="container main-section">
        <ProductSpeaker />
        <ProductEarphones />
      </main>
    </>
  );
}

export default Home;
