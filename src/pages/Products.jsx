import { useSearchParams, Link } from 'react-router-dom';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get('productId');

  return (
    <div>
      <input
        type="text"
        value={productId}
        onChange={evt => setSearchParams({ productId: evt.target.value })}
      />
      <button onClick={() => setSearchParams({ c: 'hello' })}>Change sp</button>
      <ul>
        {[
          'product-1 ',
          'product-2 ',
          'product-3 ',
          'product-4 ',
          'product-5 ',
        ].map(product => {
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
