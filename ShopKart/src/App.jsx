import React from 'react'
import {Routes,Route,Link,BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from "./components/ProductDetails";
import './App.css';


function About() {
  return (
    <div>

  <h2 className="about-lead">
          ShopKart is a products portal that brings beauty, fragrances,
          furniture and fresh groceries together in one place. We help you
          discover quality products, compare prices and read real customer
          reviews — all in a few clicks.
        </h2>
        </div>


  )
  
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/products">Products</Link>{" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App