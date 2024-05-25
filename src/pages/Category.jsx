import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../styles/category.css';

export default function Category() {
  return (
    <div>
      <Header>Category</Header>
      <main className="container product-category">
        <ProductCard />
      </main>
    </div>
  );
}
