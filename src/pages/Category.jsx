import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import '../styles/category.css';
import data from '../data.json';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import About from '../components/About';

export default function Category() {
  let { category } = useParams();

  return (
    <>
      <Header>{category}</Header>
      <main className="container product-category-section">
        {data
          .filter((item) => item.category === category)
          .map((item) => (
            <CategoryCard key={item.name} product={item} />
          ))}
      </main>
      <aside className="container mb-[var(--spacing-l)] md:mb-[var(--spacing-xl)]">
        <Menu />
      </aside>
      <About />
    </>
  );
}
