/* eslint-disable react/no-unescaped-entities */
import About from '../components/About';
import ProductHeadphones from '../components/ProductHeadphones';
import ProductSpeaker from '../components/ProductSpeaker';
import '../styles/home.css';

function Home() {
  return (
    <main>
      <div className="container">
        <ProductHeadphones />
        <ProductSpeaker />
        <About />
      </div>
    </main>
  );
}

export default Home;
