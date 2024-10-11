import { useEffect, useState } from "react"

export default function Products(props) {
  const {handleAddToCart} = props
  // console.log(props)
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("./products.JSON")
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  // console.log(products)



  return (
   <div >
    <h1 className="text-center text-4xl m-10 text-amber-500 font-bold">Our Products</h1>
        
  <div className="grid grid-cols-3 gap-3">
  {
      products.map(product=><div className="card bg-base-100 w-96 shadow-xl">
        
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
          
          <p>{product.brand}</p>
          <p>{product.availability}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(product)} className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>)
    }
  </div>
   </div>
  )
}
