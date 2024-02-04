import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { productId } = useParams();
  return <div>Галерея продукту: {productId}</div>;
};

export default Gallery;
