import { useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

const Products = () => {
  const [products] = useState([
    'product-1 ',
    'product-2 ',
    'product-3 ',
    'product-4 ',
    'product-5 ',
  ]);
  const location = useLocation();
  //setProducts();
  console.log(location);

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
              <Link to={`${product}`} state={{ from: location }}>
                {product}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
