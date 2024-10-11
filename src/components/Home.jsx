import React, { useState } from 'react'
import Users from './Users'
import Products from './Products'
import Cart from './Cart'
import Header from './Header'
import Carousel from './Carousel'
import Footer from './Footer'

export default function Home() {
  const [cart, setCart] = useState([])
  const handleChangeInput = e => {
    console.log(e.target.value)
  }

  const handleAddToCart = (item) => {
    const newCart = [...cart, item]
    setCart(newCart)
    toast.success('Successfully added product to cart!')
    console.log(newCart)
  }

  return (
    <div>



      <Carousel></Carousel>
      <Products handleAddToCart={handleAddToCart}></Products>
   
      <Cart cart={cart}></Cart>

      
    </div>
  )
}
