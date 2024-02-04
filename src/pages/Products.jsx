import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([
    'product-1 ',
    'product-2 ',
    'product-3 ',
    'product-4 ',
    'product-5 ',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get('productId') ?? '';

  const updateQueryString = evt => {
    const productIdValue = evt.target.value;
    if (productIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ productId: productIdValue });
  };

  const visibleProducts = products.filter(product =>
    product.includes(productId)
  );

  return (
    <div>
      <input type="text" value={productId} onChange={updateQueryString} />

      <ul>
        {visibleProducts.map(product => {
          return (
            <li key={product}>
              <Link to={`${product}`}>{product}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
