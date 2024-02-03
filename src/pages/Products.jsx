import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      {['apple ', 'lemon ', 'kiwi ', 'orange ', 'pear '].map(product => {
        return (
          <Link key={product} to={`${product}`}>
            {product}
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
