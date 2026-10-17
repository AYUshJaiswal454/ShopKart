import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Welcome to ShopKart</h1>
      <p>
        Your one-stop shop for beauty, fragrances, furniture and fresh
        groceries. Discover quality products at great prices.
      </p>
      <Link to="/products" className="shop-btn">
        Shop Now
      </Link>
    </div>
  )
}

export default Home