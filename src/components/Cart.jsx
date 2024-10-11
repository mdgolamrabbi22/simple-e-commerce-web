import React from 'react'

export default function Cart(props) {
  const {cart} = props
  return (
    <div>
     
       <div className="drawer">
  <input id="cart-drawer" type="checkbox" className="drawer-toggle" />

  <div className="drawer-side">
    <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <h1 className='text-2xl font-semibold text-center'>Shopping Cart </h1>
      <h2 className='text-xl font-semibold'>Total Items: {cart.length}</h2>

      {
        cart.map(item=><ul>
          <li>{item.name}</li>
        </ul>)
      }
    </ul>
  </div>
</div>
    </div>
  )
}
