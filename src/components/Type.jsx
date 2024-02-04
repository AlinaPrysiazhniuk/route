import { useParams } from 'react-router-dom';

const Type = () => {
  const { productId } = useParams();

  return <div>Тип продукту: {productId}</div>;
};

export default Type;
