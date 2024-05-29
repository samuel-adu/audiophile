import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import '../styles/category.css';
import data from '../data.json';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';

export default function Category() {
  let { category } = useParams();
  // console.log(category);

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
      <aside className="container">
        <Menu />
      </aside>
    </>
  );
}
