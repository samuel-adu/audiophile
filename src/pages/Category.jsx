import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../styles/category.css';
import data from '../data.json';
import { useParams } from 'react-router-dom';

export default function Category() {
  let { category } = useParams();

  return (
    <div>
      <Header>{category}</Header>
      <main className="container product-category">
        {data
          .filter((item) => item.category === category)
          .map((item) => (
            <ProductCard key={item.name} product={item} />
          ))}
      </main>
    </div>
  );
}
