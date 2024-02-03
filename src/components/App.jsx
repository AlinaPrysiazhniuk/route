import About from 'pages/About';
import Home from 'pages/Home';
import Products from 'pages/Products';
import ProductsDetails from 'pages/ProductsDetails';

import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
};
