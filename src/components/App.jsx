import Type from './Type';
import Gallery from './Gallety';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Products from 'pages/Products';
import ProductsDetails from 'pages/ProductsDetails';

export const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductsDetails />}>
          <Route path="type" element={<Type />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </div>
  );
};
