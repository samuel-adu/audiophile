import data from '../data.json';

function getCategory(name) {
  const product = data.find((item) => item.slug === name);
  return product.category;
}

export { getCategory };
