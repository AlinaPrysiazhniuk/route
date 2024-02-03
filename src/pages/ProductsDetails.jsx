import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
  const { productId } = useParams();

  return <div>Products details: {productId}</div>;
};

export default ProductsDetails;
