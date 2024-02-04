import { useParams, Link, useLocation, Outlet } from 'react-router-dom';

const ProductsDetails = () => {
  const { productId } = useParams();

  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>Products details: {productId}</h1>
      <Link to={location.state?.from ?? '/products'}>
        Назад до сторінки колекції
      </Link>
      <ul>
        <li>
          <Link to="type">Типи продуктів</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default ProductsDetails;
