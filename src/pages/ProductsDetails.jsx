import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useRef } from 'react';

const ProductsDetails = () => {
  const { productId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/products');

  return (
    <>
      <h1>Products details: {productId}</h1>
      <Link to={backLinkLocationRef.current}>Назад до сторінки колекції</Link>
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
